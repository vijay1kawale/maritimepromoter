const express = require('express');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const router = express.Router();
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');
const { v4: uuidv4 } = require('uuid');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes/');
  },
  filename: function (req, file, cb) {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Allow only PDF, DOC, and DOCX files
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
    }
  }
});

// Validation rules for job application form
const jobApplicationValidation = [
  body('fullName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .optional()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  body('coverLetter')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Cover letter must not exceed 2000 characters')
];

// POST /api/job-application - Submit job application
router.post('/', upload.single('resume'), jobApplicationValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    // Check if resume was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Resume file is required',
        message: 'Please upload your resume (PDF, DOC, or DOCX)'
      });
    }

    const {
      fullName,
      email,
      phone,
      coverLetter
    } = req.body;

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      fullName,            // B: Full Name
      email,               // C: Email
      phone || '',         // D: Phone
      coverLetter || '',   // E: Cover Letter
      req.file.filename,   // F: Resume Filename
      req.file.originalname, // G: Original Filename
      req.file.mimetype,   // H: File Type
      req.file.size        // I: File Size
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_JOB_APPLICATIONS || 'Job Applications';
    const headers = [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Cover Letter',
      'Resume Filename',
      'Original Filename',
      'File Type',
      'File Size'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the job application
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send notification email to HR
    try {
      await emailService.sendJobApplicationNotification({
        fullName,
        email,
        phone,
        coverLetter,
        resumeFilename: req.file.originalname,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError.message);
      // Don't fail the request if email fails
    }

    // Send confirmation email to applicant
    try {
      await emailService.sendJobApplicationConfirmation({
        fullName,
        email
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully',
      data: {
        id: result.updatedRange,
        timestamp,
        fullName,
        email,
        resumeReceived: true
      }
    });

  } catch (error) {
    console.error('Job application submission error:', error);
    
    // Clean up uploaded file if there was an error
    if (req.file) {
      const fs = require('fs');
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error('Failed to delete uploaded file:', unlinkError);
      }
    }

    res.status(500).json({
      success: false,
      error: 'Failed to submit job application',
      message: 'Please try again later or contact us directly'
    });
  }
});

// GET /api/job-application - Get all job applications (admin only)
// COMMENTED OUT: This route conflicts with POST / and causes 405 errors
// router.get('/', async (req, res) => {
//   try {
//     // TODO: Add authentication middleware for admin access
//     const sheetName = process.env.SHEET_JOB_APPLICATIONS || 'Job Applications';
//     const data = await googleSheets.getSheetData(sheetName);
//     
//     res.json({
//       success: true,
//       data: data
//     });
//   } catch (error) {
//     console.error('Failed to fetch job applications:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to fetch job applications'
//     });
//   }
// });

// GET /api/job-application/:id - Get specific job application
router.get('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const sheetName = process.env.SHEET_JOB_APPLICATIONS || 'Job Applications';
    const data = await googleSheets.getSheetData(sheetName);
    
    // Find the specific application (simplified - in production, use proper ID system)
    const application = data.find(row => row[0] === id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        error: 'Job application not found'
      });
    }
    
    res.json({
      success: true,
      data: application
    });
  } catch (error) {
    console.error('Failed to fetch job application:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch job application'
    });
  }
});

// Error handling middleware for multer
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File too large',
        message: 'Resume file must be smaller than 5MB'
      });
    }
  }
  
  if (error.message.includes('Only PDF, DOC, and DOCX files are allowed')) {
    return res.status(400).json({
      success: false,
      error: 'Invalid file type',
      message: 'Only PDF, DOC, and DOCX files are allowed'
    });
  }
  
  next(error);
});

module.exports = router;

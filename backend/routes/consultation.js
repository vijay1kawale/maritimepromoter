const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

// Validation rules for consultation form
const consultationValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  body('company')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Company name must be between 2 and 100 characters'),
  body('date')
    .isISO8601()
    .withMessage('Please provide a valid date'),
  body('time')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Preferred time is required'),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Message must not exceed 1000 characters')
];

// POST /api/consultation - Submit consultation request
router.post('/', consultationValidation, async (req, res) => {
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

    const {
      name,
      email,
      phone,
      company,
      date,
      time,
      message
    } = req.body;

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      name,               // B: Name
      email,              // C: Email
      phone,              // D: Phone
      company,            // E: Company
      date,               // F: Preferred Date
      time,               // G: Preferred Time
      message || ''       // G: Message
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_CONSULTATION_REQUESTS || 'Consultation Requests';
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Company',
      'Preferred Date',
      'Preferred Time',
      'Message'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the consultation request
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send notification email
    try {
      await emailService.sendConsultationNotification({
        name,
        email,
        phone,
        company,
        date,
        time,
        message,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError.message);
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    try {
      await emailService.sendConsultationConfirmation({
        name,
        email,
        company,
        date,
        time
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: {
        id: result.updatedRange,
        timestamp,
        name,
        email,
        company
      }
    });

  } catch (error) {
    console.error('Consultation submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit consultation request',
      message: 'Please try again later or contact us directly'
    });
  }
});

// GET /api/consultation - Get all consultation requests (admin only)
// COMMENTED OUT: This route conflicts with POST / and causes 405 errors
// router.get('/', async (req, res) => {
//   try {
//     // TODO: Add authentication middleware for admin access
//     const sheetName = process.env.SHEET_CONSULTATION_REQUESTS || 'Consultation Requests';
//     const data = await googleSheets.getSheetData(sheetName);
//     
//     res.json({
//       success: true,
//       data: data
//     });
//   } catch (error) {
//     console.error('Failed to fetch consultation requests:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to fetch consultation requests'
//     });
//   }
// });

// GET /api/consultation/:id - Get specific consultation request
router.get('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const sheetName = process.env.SHEET_CONSULTATION_REQUESTS || 'Consultation Requests';
    const data = await googleSheets.getSheetData(sheetName);
    
    // Find the specific request (simplified - in production, use proper ID system)
    const request = data.find(row => row[0] === id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        error: 'Consultation request not found'
      });
    }
    
    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    console.error('Failed to fetch consultation request:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch consultation request'
    });
  }
});

module.exports = router;

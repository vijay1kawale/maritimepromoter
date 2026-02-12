const express = require('express');
const { body, validationResult } = require('express-validator');
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation rules for training registration
const trainingRegistrationValidation = [
  // Personal Information
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .matches(/^[\+]?[0-9\s\-\(\)]{7,20}$/)
    .withMessage('Please provide a valid phone number'),
  body('company')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Company name must be between 2 and 100 characters'),
  body('designation')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Designation must be between 2 and 100 characters'),
  
  // Training Details
  body('trainingId')
    .notEmpty()
    .withMessage('Training ID is required'),
  body('trainingTitle')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Training title must be between 5 and 200 characters'),
  body('trainingDuration')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Training duration is required'),
  body('trainingFormat')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Training format is required'),
  
  // Additional Information
  body('experience')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Experience level is required'),
  body('expectations')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Learning expectations must be between 10 and 500 characters'),
  body('specialRequirements')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Special requirements must not exceed 200 characters'),
  
  // Terms
  body('agreeToTerms')
    .isBoolean()
    .custom(value => {
      if (!value) {
        throw new Error('You must agree to the terms and conditions');
      }
      return true;
    }),
  body('agreeToMarketing')
    .optional()
    .isBoolean()
];

// POST /api/training/register - Register for a training
router.post('/register', trainingRegistrationValidation, async (req, res) => {
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
      firstName,
      lastName,
      email,
      phone,
      company,
      designation,
      trainingId,
      trainingTitle,
      trainingDuration,
      trainingFormat,
      experience,
      expectations,
      specialRequirements,
      agreeToTerms,
      agreeToMarketing
    } = req.body;

    // Prepare data for Google Sheets (NO payment information stored - handled by Razorpay)
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      trainingId,          // B: Training ID
      trainingTitle,       // C: Training Title
      trainingDuration,    // D: Training Duration
      trainingFormat,      // E: Training Format
      firstName,           // F: First Name
      lastName,            // G: Last Name
      email,               // H: Email
      phone,               // I: Phone
      company,             // J: Company
      designation,         // K: Designation
      experience,          // L: Experience Level
      expectations,        // M: Learning Expectations
      specialRequirements || '', // N: Special Requirements
      agreeToMarketing ? 'Yes' : 'No', // O: Marketing Consent
      'Pending',           // P: Registration Status
      'Pending'            // Q: Payment Status
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_TRAINING_REGISTRATIONS || 'TrainingRegistrations';
    const headers = [
      'Timestamp',
      'Training ID',
      'Training Title',
      'Training Duration',
      'Training Format',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Company',
      'Designation',
      'Experience Level',
      'Learning Expectations',
      'Special Requirements',
      'Marketing Consent',
      'Registration Status',
      'Payment Status'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the training registration
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send confirmation email to participant
    try {
      await emailService.sendTrainingConfirmation({
        firstName,
        lastName,
        email,
        company,
        trainingTitle,
        trainingDuration,
        trainingFormat
      });
    } catch (emailError) {
      console.error('Failed to send training confirmation email:', emailError.message);
    }

    // Send notification email to training team
    try {
      await emailService.sendTrainingNotification({
        firstName,
        lastName,
        email,
        phone,
        company,
        designation,
        trainingTitle,
        trainingDuration,
        trainingFormat,
        experience,
        expectations,
        specialRequirements,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send training notification email:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Training registration submitted successfully',
      data: {
        registrationId: result.updatedRange,
        timestamp,
        trainingTitle,
        participantName: `${firstName} ${lastName}`,
        email
      }
    });

  } catch (error) {
    console.error('Training registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit training registration',
      message: 'Please try again later or contact us directly'
    });
  }
});

module.exports = router;

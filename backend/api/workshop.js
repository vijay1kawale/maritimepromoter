const express = require('express');
const { body, validationResult } = require('express-validator');
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation rules for workshop registration
const workshopRegistrationValidation = [
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
  
  // Workshop Details
  body('workshopId')
    .notEmpty()
    .withMessage('Workshop ID is required'),
  body('workshopTitle')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Workshop title must be between 5 and 200 characters'),
  body('workshopDates')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Workshop dates are required'),
  body('workshopPrice')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Workshop price is required'),
  
  // Additional Information
  body('experience')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Experience level is required'),
  body('expectations')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Learning expectations must be between 10 and 500 characters'),
  body('dietaryRestrictions')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Dietary restrictions must not exceed 200 characters'),
  body('specialRequirements')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Special requirements must not exceed 200 characters'),
  
  // Payment Information is handled by Razorpay - no validation needed
  
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

// POST /api/workshop/register - Register for a workshop
router.post('/register', workshopRegistrationValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Workshop registration validation failed:', errors.array());
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
      workshopId,
      workshopTitle,
      workshopDates,
      workshopPrice,
      experience,
      expectations,
      dietaryRestrictions,
      specialRequirements,
      agreeToTerms,
      agreeToMarketing
    } = req.body;

    // Prepare data for Google Sheets (NO payment information stored)
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      workshopId,          // B: Workshop ID
      workshopTitle,       // C: Workshop Title
      workshopDates,       // D: Workshop Dates
      workshopPrice,       // E: Workshop Price
      firstName,           // F: First Name
      lastName,            // G: Last Name
      email,               // H: Email
      phone,               // I: Phone
      company,             // J: Company
      designation,         // K: Designation
      experience,          // L: Experience Level
      expectations,        // M: Learning Expectations
      dietaryRestrictions || '', // N: Dietary Restrictions
      specialRequirements || '', // O: Special Requirements
      'Razorpay',          // P: Payment Method
      agreeToMarketing ? 'Yes' : 'No', // Q: Marketing Consent
      'Pending',           // R: Payment Status
      'Pending'            // S: Registration Status
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_WORKSHOP_REGISTRATIONS || 'WorkshopRegistrations';
    const headers = [
      'Timestamp',
      'Workshop ID',
      'Workshop Title',
      'Workshop Dates',
      'Workshop Price',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Company',
      'Designation',
      'Experience Level',
      'Learning Expectations',
      'Dietary Restrictions',
      'Special Requirements',
      'Payment Method',
      'Marketing Consent',
      'Payment Status',
      'Registration Status'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the workshop registration
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send confirmation email to participant
    try {
      await emailService.sendWorkshopConfirmation({
        firstName,
        lastName,
        email,
        company,
        workshopTitle,
        workshopDates,
        workshopPrice
      });
    } catch (emailError) {
      console.error('Failed to send workshop confirmation email:', emailError.message);
    }

    // Send notification email to training team
    try {
      await emailService.sendWorkshopNotification({
        firstName,
        lastName,
        email,
        phone,
        company,
        designation,
        workshopTitle,
        workshopDates,
        workshopPrice,
        experience,
        expectations,
        dietaryRestrictions,
        specialRequirements,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send workshop notification email:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Workshop registration submitted successfully',
      data: {
        registrationId: result.updatedRange,
        timestamp,
        workshopTitle,
        participantName: `${firstName} ${lastName}`,
        email
      }
    });

  } catch (error) {
    console.error('Workshop registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit workshop registration',
      message: 'Please try again later or contact us directly'
    });
  }
});

module.exports = router;
const express = require('express');
const { body, validationResult } = require('express-validator');
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation rules for callback form
const callbackValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('phone')
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
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

// POST /api/callback - Submit callback request
router.post('/', callbackValidation, async (req, res) => {
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
      phone,
      time,
      message
    } = req.body;

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      name,               // B: Name
      phone,              // C: Phone
      time,               // D: Preferred Time
      message || ''       // E: Message
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_CALLBACK_REQUESTS || 'CallbackRequests';
    const headers = [
      'Timestamp',
      'Name',
      'Phone',
      'Preferred Time',
      'Message'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the callback request
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send notification email
    try {
      await emailService.sendCallbackNotification({
        name,
        phone,
        time,
        message,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Callback request submitted successfully',
      data: {
        id: result.updatedRange,
        timestamp,
        name,
        phone,
        time
      }
    });

  } catch (error) {
    console.error('Callback submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit callback request',
      message: 'Please try again later or contact us directly'
    });
  }
});

module.exports = router;
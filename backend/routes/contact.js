const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('company')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Company name must be between 2 and 100 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
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
      company,
      message
    } = req.body;

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      name,               // B: Name
      email,              // C: Email
      company || '',      // D: Company
      message             // E: Message
    ];

    // Add to Google Sheets
    const sheetName = process.env.SHEET_CONTACT_REQUESTS || 'Contact Requests';
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Company',
      'Message'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the contact request
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send notification email to team
    try {
      await emailService.sendContactNotification({
        name,
        email,
        company,
        message,
        timestamp
      });
    } catch (emailError) {
      console.error('Failed to send contact notification email:', emailError.message);
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    try {
      await emailService.sendContactConfirmation({
        name,
        email,
        company
      });
    } catch (emailError) {
      console.error('Failed to send contact confirmation email:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: result.updatedRange,
        timestamp,
        name,
        email,
        company
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form',
      message: 'Please try again later or contact us directly'
    });
  }
});

// GET /api/contact - Get all contact requests (admin only)
router.get('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware for admin access
    const sheetName = process.env.SHEET_CONTACT_REQUESTS || 'Contact Requests';
    const data = await googleSheets.getSheetData(sheetName);
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Failed to fetch contact requests:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact requests'
    });
  }
});

// GET /api/contact/:id - Get specific contact request
router.get('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const sheetName = process.env.SHEET_CONTACT_REQUESTS || 'Contact Requests';
    const data = await googleSheets.getSheetData(sheetName);
    
    // Find the specific request (simplified - in production, use proper ID system)
    const request = data.find(row => row[0] === id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        error: 'Contact request not found'
      });
    }
    
    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    console.error('Failed to fetch contact request:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact request'
    });
  }
});

module.exports = router;

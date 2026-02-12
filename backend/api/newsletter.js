const express = require('express');
const { body, validationResult } = require('express-validator');
const googleSheets = require('../services/googleSheets');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation rules for newsletter subscription
const newsletterValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address')
];

// POST /api/newsletter - Subscribe to newsletter
router.post('/', newsletterValidation, async (req, res) => {
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

    const { email } = req.body;

    // Check if email already exists
    const sheetName = process.env.SHEET_NEWSLETTER_SUBSCRIPTIONS || 'NewsletterSubscriptions';
    const existingData = await googleSheets.getSheetData(sheetName);
    
    // Skip header row if it exists
    const emails = existingData.slice(1).map(row => row[1]); // Assuming email is in column B
    
    if (emails.includes(email)) {
      return res.status(400).json({
        success: false,
        error: 'Already subscribed',
        message: 'This email is already subscribed to our newsletter'
      });
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = [
      timestamp,           // A: Timestamp
      email                // B: Email
    ];

    const headers = [
      'Timestamp',
      'Email'
    ];

    // Ensure headers exist
    await googleSheets.ensureSheetHeaders(sheetName, headers);
    
    // Add the subscription
    const result = await googleSheets.addRow(sheetName, sheetData);

    // Send welcome email
    try {
      await emailService.sendNewsletterWelcome({
        email
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        id: result.updatedRange,
        timestamp,
        email,
        status: 'Active'
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe to newsletter',
      message: 'Please try again later or contact us directly'
    });
  }
});

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', newsletterValidation, async (req, res) => {
  try {
    const { email } = req.body;

    const sheetName = process.env.SHEET_NEWSLETTER_SUBSCRIPTIONS || 'Newsletter_Subscriptions';
    const data = await googleSheets.getSheetData(sheetName);
    
    // Find the email in the sheet
    const rowIndex = data.findIndex(row => row[1] === email); // Email is in column B
    
    if (rowIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Not found',
        message: 'This email is not subscribed to our newsletter'
      });
    }

    // Update status to 'Unsubscribed' and add unsubscribe date
    const unsubscribeDate = new Date().toISOString();
    
    // Update status (column C)
    await googleSheets.updateCell(sheetName, `C${rowIndex + 1}`, 'Unsubscribed');
    
    // Update unsubscribe date (column D)
    await googleSheets.updateCell(sheetName, `D${rowIndex + 1}`, unsubscribeDate);

    // Send confirmation email
    try {
      await emailService.sendNewsletterUnsubscribe({
        email
      });
    } catch (emailError) {
      console.error('Failed to send unsubscribe confirmation:', emailError.message);
    }

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
      data: {
        email,
        status: 'Unsubscribed',
        unsubscribeDate
      }
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to unsubscribe from newsletter',
      message: 'Please try again later or contact us directly'
    });
  }
});

// GET /api/newsletter/stats - Get newsletter statistics (admin only)
router.get('/stats', async (req, res) => {
  try {
    // TODO: Add authentication middleware for admin access
    const sheetName = process.env.SHEET_NEWSLETTER_SUBSCRIPTIONS || 'Newsletter_Subscriptions';
    const data = await googleSheets.getSheetData(sheetName);
    
    // Skip header row
    const subscriptions = data.slice(1);
    
    const stats = {
      total: subscriptions.length,
      active: subscriptions.filter(row => row[2] === 'Active').length,
      unsubscribed: subscriptions.filter(row => row[2] === 'Unsubscribed').length,
      thisMonth: subscriptions.filter(row => {
        const timestamp = new Date(row[0]);
        const now = new Date();
        return timestamp.getMonth() === now.getMonth() && 
               timestamp.getFullYear() === now.getFullYear();
      }).length,
      thisYear: subscriptions.filter(row => {
        const timestamp = new Date(row[0]);
        const now = new Date();
        return timestamp.getFullYear() === now.getFullYear();
      }).length
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Failed to fetch newsletter stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch newsletter statistics'
    });
  }
});

module.exports = router;
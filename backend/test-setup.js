#!/usr/bin/env node

/**
 * Test script to verify backend setup
 * Run this after setting up environment variables
 */

require('dotenv').config();
const googleSheets = require('./services/googleSheets');
const emailService = require('./services/emailService');

async function testSetup() {
  console.log('🧪 Testing EcoVijay Global Backend Setup...\n');

  // Test 1: Environment Variables
  console.log('1️⃣ Checking Environment Variables...');
  const requiredEnvVars = [
    'GOOGLE_SHEETS_PRIVATE_KEY',
    'GOOGLE_SHEETS_CLIENT_EMAIL',
    'GOOGLE_SHEETS_PROJECT_ID',
    'GOOGLE_SHEETS_SPREADSHEET_ID',
    'SMTP_USER',
    'SMTP_PASS'
  ];

  let envVarsOk = true;
  requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      console.log(`   ❌ Missing: ${varName}`);
      envVarsOk = false;
    } else {
      console.log(`   ✅ Found: ${varName}`);
    }
  });

  if (!envVarsOk) {
    console.log('\n❌ Environment variables not properly configured!');
    console.log('Please check your .env file and ensure all required variables are set.');
    return;
  }

  console.log('\n2️⃣ Testing Google Sheets Connection...');
  try {
    const initialized = await googleSheets.initialize();
    if (initialized) {
      console.log('   ✅ Google Sheets service initialized successfully');
      
      // Test getting sheet info
      const sheetInfo = await googleSheets.getSheetInfo();
      console.log(`   ✅ Connected to spreadsheet: ${sheetInfo.title}`);
      console.log(`   ✅ Found ${sheetInfo.sheets.length} sheets`);
      
      sheetInfo.sheets.forEach(sheet => {
        console.log(`      - ${sheet.title} (${sheet.rowCount} rows, ${sheet.columnCount} columns)`);
      });
    } else {
      console.log('   ❌ Failed to initialize Google Sheets service');
    }
  } catch (error) {
    console.log(`   ❌ Google Sheets connection failed: ${error.message}`);
    console.log('   💡 Make sure you have:');
    console.log('      - Created a Google Cloud project');
    console.log('      - Enabled Google Sheets API');
    console.log('      - Created a service account');
    console.log('      - Downloaded the JSON key file');
    console.log('      - Shared your Google Sheet with the service account email');
  }

  console.log('\n3️⃣ Testing Email Service...');
  try {
    const emailTest = await emailService.testConnection();
    if (emailTest) {
      console.log('   ✅ Email service connection verified successfully');
    } else {
      console.log('   ❌ Email service connection failed');
    }
  } catch (error) {
    console.log(`   ❌ Email service test failed: ${error.message}`);
    console.log('   💡 Make sure you have:');
    console.log('      - Correct SMTP settings in .env');
    console.log('      - For Gmail: Enabled 2FA and generated App Password');
    console.log('      - For SendGrid: Generated API key');
  }

  console.log('\n4️⃣ Checking Upload Directory...');
  const fs = require('fs');
  const uploadDir = './uploads/resumes';
  
  if (!fs.existsSync(uploadDir)) {
    try {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log('   ✅ Created uploads directory');
    } catch (error) {
      console.log(`   ❌ Failed to create uploads directory: ${error.message}`);
    }
  } else {
    console.log('   ✅ Uploads directory exists');
  }

  console.log('\n5️⃣ Checking Dependencies...');
  try {
    const packageJson = require('./package.json');
    console.log(`   ✅ Package.json found with ${Object.keys(packageJson.dependencies).length} dependencies`);
    
    // Check if node_modules exists
    if (fs.existsSync('./node_modules')) {
      console.log('   ✅ Dependencies installed');
    } else {
      console.log('   ❌ Dependencies not installed. Run: npm install');
    }
  } catch (error) {
    console.log(`   ❌ Package.json error: ${error.message}`);
  }

  console.log('\n🎯 Setup Summary:');
  console.log('==================');
  
  if (envVarsOk) {
    console.log('✅ Environment variables configured');
  } else {
    console.log('❌ Environment variables need configuration');
  }

  console.log('\n🚀 Next Steps:');
  console.log('1. Install dependencies: npm install');
  console.log('2. Start the server: npm run dev');
  console.log('3. Test API endpoints with Postman or similar tool');
  console.log('4. Check Google Sheets for data');
  console.log('5. Verify email notifications');

  console.log('\n📚 For detailed setup instructions, see README.md');
  console.log('🔗 API will be available at: http://localhost:5000');
  console.log('🔗 Health check: http://localhost:5000/health');
}

// Run the test
testSetup().catch(console.error);

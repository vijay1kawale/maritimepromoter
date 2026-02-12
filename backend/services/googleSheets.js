const { google } = require('googleapis');

class GoogleSheetsService {
  constructor() {
    // Validate required environment variables
    const requiredEnvVars = [
      'GOOGLE_SHEETS_PROJECT_ID',
      'GOOGLE_SHEETS_PRIVATE_KEY',
      'GOOGLE_SHEETS_CLIENT_EMAIL',
      'GOOGLE_SHEETS_CLIENT_ID',
      'GOOGLE_SHEETS_SPREADSHEET_ID'
    ];
    
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    if (missingVars.length > 0) {
      console.error('❌ Missing required environment variables:', missingVars);
      console.warn('⚠️ Google Sheets service will be disabled due to missing configuration');
      this.isConfigured = false;
      return;
    }
    
    this.isConfigured = true;

    this.auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS || undefined,
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    this.spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  }

  // Check if service is properly configured
  isServiceConfigured() {
    return this.isConfigured === true;
  }

  // Helper function to format sheet names for Google Sheets API
  formatSheetRange(sheetName, range = 'A:Z') {
    // Simple format since we use underscore-separated names
    return `${sheetName}!${range}`;
  }

  // Create a new sheet if it doesn't exist
  async createSheet(sheetName) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, skipping createSheet');
      return false;
    }

    try {
      // First, get the spreadsheet to check if sheet exists
      const spreadsheet = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId
      });

      const existingSheets = spreadsheet.data.sheets || [];
      const sheetExists = existingSheets.some(sheet => sheet.properties.title === sheetName);

      if (sheetExists) {
        console.log(`✅ Sheet '${sheetName}' already exists`);
        return true;
      }

      // Create the new sheet
      const request = {
        spreadsheetId: this.spreadsheetId,
        resource: {
          requests: [{
            addSheet: {
              properties: {
                title: sheetName
              }
            }
          }]
        }
      };

      await this.sheets.spreadsheets.batchUpdate(request);
      console.log(`✅ Created new sheet: '${sheetName}'`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to create sheet '${sheetName}':`, error.message);
      return false;
    }
  }

  // Initialize the service
  async initialize() {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, skipping initialization');
      return false;
    }
    
    try {
      await this.auth.getClient();
      console.log('✅ Google Sheets service initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Google Sheets service:', error.message);
      return false;
    }
  }

  // Add a new row to a specific sheet
  async addRow(sheetName, data) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, skipping addRow');
      return { updatedRange: 'mock-range', updatedRows: 1 };
    }
    
    try {
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: this.formatSheetRange(sheetName),
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [data]
        }
      });

      console.log(`✅ Data added to ${sheetName} sheet successfully`);
      return {
        success: true,
        updatedRange: response.data.updates?.updatedRange,
        updatedRows: response.data.updates?.updatedRows
      };
    } catch (error) {
      console.error(`❌ Failed to add data to ${sheetName} sheet:`, error.message);
      throw new Error(`Failed to add data to Google Sheets: ${error.message}`);
    }
  }

  // Get all data from a specific sheet
  async getSheetData(sheetName) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, returning empty data');
      return [];
    }
    
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: this.formatSheetRange(sheetName),
      });

      return response.data.values || [];
    } catch (error) {
      console.error(`❌ Failed to get data from ${sheetName} sheet:`, error.message);
      throw new Error(`Failed to get data from Google Sheets: ${error.message}`);
    }
  }

  // Update a specific cell
  async updateCell(sheetName, cell, value) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, skipping updateCell');
      return;
    }
    
    try {
      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: this.formatSheetRange(sheetName, cell),
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[value]]
        }
      });

      return {
        success: true,
        updatedRange: response.data.updatedRange,
        updatedCells: response.data.updatedCells
      };
    } catch (error) {
      console.error(`❌ Failed to update cell ${cell} in ${sheetName} sheet:`, error.message);
      throw new Error(`Failed to update Google Sheets: ${error.message}`);
    }
  }

  // Check if a sheet exists and create headers if needed
  async ensureSheetHeaders(sheetName, headers) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Google Sheets service not configured, skipping ensureSheetHeaders');
      return;
    }
    
    try {
      // First, ensure the sheet exists
      await this.createSheet(sheetName);
      
      const existingData = await this.getSheetData(sheetName);
      
      if (existingData.length === 0) {
        // Sheet is empty, add headers
        await this.addRow(sheetName, headers);
        console.log(`✅ Headers added to ${sheetName} sheet`);
      } else {
        console.log(`✅ ${sheetName} sheet already has data`);
      }
      
      return true;
    } catch (error) {
      console.error(`❌ Failed to ensure headers for ${sheetName} sheet:`, error.message);
      return false;
    }
  }

  // Get sheet metadata
  async getSheetInfo() {
    try {
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
        includeGridData: false
      });

      return {
        title: response.data.properties.title,
        sheets: response.data.sheets.map(sheet => ({
          title: sheet.properties.title,
          sheetId: sheet.properties.sheetId,
          rowCount: sheet.properties.gridProperties.rowCount,
          columnCount: sheet.properties.gridProperties.columnCount
        }))
      };
    } catch (error) {
      console.error('❌ Failed to get sheet info:', error.message);
      throw new Error(`Failed to get sheet info: ${error.message}`);
    }
  }
}

module.exports = new GoogleSheetsService();

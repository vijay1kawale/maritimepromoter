# Environment Variables Setup Guide

## Required Environment Variables for Vercel Deployment

### Google Sheets Integration (Required for data storage)
```bash
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_CLIENT_ID=your-client-id
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
```

### Optional: Custom Sheet Names
```bash
SHEET_CONSULTATION_REQUESTS=ConsultationRequests
SHEET_CALLBACK_REQUESTS=CallbackRequests
SHEET_CONTACT_REQUESTS=ContactRequests
SHEET_NEWSLETTER_SUBSCRIPTIONS=NewsletterSubscriptions
SHEET_WORKSHOP_REGISTRATIONS=WorkshopRegistrations
SHEET_TRAINING_REGISTRATIONS=TrainingRegistrations
SHEET_JOB_APPLICATIONS=JobApplications
```

### Email Service (Optional - for notifications)
**Note: Email service is completely optional. The application will work without it.**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SALES_EMAIL=sales@yourcompany.com
NOTIFICATION_EMAIL=notifications@yourcompany.com
```

### Rate Limiting (Optional)
```bash
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with its value
5. Redeploy your application

## Google Sheets Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API
4. Create a Service Account
5. Download the JSON key file
6. Extract the values from the JSON file:
   - `project_id` → `GOOGLE_SHEETS_PROJECT_ID`
   - `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY`
   - `client_email` → `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `client_id` → `GOOGLE_SHEETS_CLIENT_ID`
7. Create a Google Spreadsheet and copy its ID for `GOOGLE_SHEETS_SPREADSHEET_ID`

**Note**: The application uses camelCase sheet names (like "ConsultationRequests") to avoid Google Sheets API parsing issues. Tabs will be automatically created with these names.

## Testing Without Google Sheets

The application will work without Google Sheets configuration, but:
- Form submissions won't be saved to sheets
- Data will be lost when the serverless function ends
- Email notifications will still work (if configured)

## Testing Without Email

The application will work perfectly without email configuration:
- ✅ All forms will work normally
- ✅ Data will be saved to Google Sheets (if configured)
- ❌ No confirmation emails will be sent to users
- ❌ No notification emails will be sent to your team
- ✅ Users will still get success messages on the website

# 🚀 Google Sheets Integration Setup Guide

## 📋 **Current Status**
Your Google Sheets integration is **already implemented** and working! Here's what you have:

### ✅ **Implemented Features**
- Complete Google Sheets API integration
- 7 different data collection endpoints
- Automatic sheet creation and header management
- Email notifications for all form submissions
- File upload support for job applications
- Form validation and error handling

## 🛠️ **Setup Steps**

### **Step 1: Create Google Cloud Project**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Download the JSON key file

### **Step 2: Create Google Spreadsheet**
1. Create a new Google Spreadsheet
2. Share it with your service account email (from Step 1)
3. Give "Editor" permissions
4. Copy the Spreadsheet ID from the URL

### **Step 3: Configure Environment Variables**
Create a `.env` file in the `backend` folder with:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_CLIENT_ID=your-client-id
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id

# Email Configuration (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development
```

### **Step 4: Install Dependencies**
```bash
cd backend
npm install
```

### **Step 5: Test the Setup**
```bash
cd backend
node test-setup.js
```

### **Step 6: Start the Server**
```bash
cd backend
npm run dev
```

## 📊 **Data Collection Endpoints**

Your system collects data from these forms:

| Endpoint | Form Type | Data Stored |
|----------|-----------|-------------|
| `/api/consultation` | Consultation Request | Name, Email, Phone, Company, Date, Time, Message |
| `/api/callback` | Callback Request | Name, Phone, Time, Message |
| `/api/workshop/register` | Workshop Registration | Personal Info, Workshop Details, Payment Info |
| `/api/training/register` | Training Registration | Personal Info, Training Details, Experience |
| `/api/job-application` | Job Application | Personal Info, Resume File, Cover Letter |
| `/api/newsletter` | Newsletter Subscription | Email, Subscription Status |
| `/api/contact` | Contact Form | Name, Email, Company, Message |

## 🔧 **Google Sheets Structure**

Your system will automatically create these sheets:
- **Consultation Requests** - Consultation form submissions
- **Callback Requests** - Callback form submissions  
- **Workshop Registrations** - Workshop registration data
- **Training Registrations** - Training registration data
- **Job Applications** - Job application data with resume info
- **Newsletter Subscriptions** - Email subscriptions
- **Contact Requests** - General contact form submissions

## 🚨 **Important Notes**

1. **Service Account**: Make sure to share your Google Sheet with the service account email
2. **Private Key**: The private key must include the `\n` characters for line breaks
3. **Email Setup**: For Gmail, you need to enable 2FA and create an App Password
4. **File Uploads**: Resume files are stored in `backend/uploads/resumes/`

## 🧪 **Testing**

After setup, test these endpoints:
- `GET /health` - Health check
- `POST /api/contact` - Test contact form
- `POST /api/newsletter` - Test newsletter subscription

## 🔍 **Troubleshooting**

If you encounter issues:
1. Check the `test-setup.js` output
2. Verify all environment variables are set
3. Ensure the service account has access to the spreadsheet
4. Check the server logs for detailed error messages

## 📈 **Next Steps**

Your system is ready to use! The data will automatically flow from your frontend forms to Google Sheets, and email notifications will be sent for each submission.

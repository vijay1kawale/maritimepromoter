# EcoVijay Global Backend API

A comprehensive backend API for EcoVijay Global website with Google Sheets integration, form handling, and email notifications.

## 🚀 Features

- **Form Processing**: Handle all website forms (consultation, callback, job applications, newsletter, workshop registrations)
- **Google Sheets Integration**: Store all form data in Google Sheets for easy management
- **Email Notifications**: Automated email notifications and confirmations
- **File Uploads**: Resume upload handling for job applications
- **Validation**: Comprehensive input validation and sanitization
- **Security**: Rate limiting, CORS, and security headers
- **Workshop Management**: Complete workshop registration system with payment tracking

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Cloud Platform account
- Google Sheets API enabled
- SMTP email service (Gmail, SendGrid, etc.)

## 🛠️ Installation

1. **Clone the repository and navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Google Sheets API Configuration
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----"
   GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_SHEETS_PROJECT_ID=your-project-id
   GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id

   # Google Sheets Tab Names
   SHEET_CONSULTATION_REQUESTS=Consultation Requests
   SHEET_CALLBACK_REQUESTS=Callback Requests
   SHEET_JOB_APPLICATIONS=Job Applications
   SHEET_NEWSLETTER_SUBSCRIPTIONS=Newsletter Subscriptions
   SHEET_WORKSHOP_REGISTRATIONS=Workshop Registrations

   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password

   # Notification Recipients
   NOTIFICATION_EMAIL=hr@ecovijayglobal.com
   SALES_EMAIL=sales@ecovijayglobal.com
   ```

4. **Set up Google Sheets API:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google Sheets API
   - Create a Service Account
   - Download the JSON key file
   - Share your Google Sheet with the service account email
   - Copy the spreadsheet ID from the URL

5. **Create Google Sheets structure:**
   Create a Google Sheet with the following tabs:
   - **Consultation Requests**
   - **Callback Requests**
   - **Job Applications**
   - **Newsletter Subscriptions**
   - **Workshop Registrations**

6. **Set up email service:**
   - For Gmail: Use App Password (2FA required)
   - For SendGrid: Use API key
   - Update SMTP settings in `.env`

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📚 API Endpoints

### Health Check
- `GET /health` - Server health status

### Consultation Form
- `POST /api/consultation` - Submit consultation request
- `GET /api/consultation` - Get all consultation requests (admin)
- `GET /api/consultation/:id` - Get specific consultation request

### Callback Form
- `POST /api/callback` - Submit callback request
- `GET /api/callback` - Get all callback requests (admin)

### Job Application
- `POST /api/job-application` - Submit job application with resume
- `GET /api/job-application` - Get all job applications (admin)
- `GET /api/job-application/:id` - Get specific job application

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter` - Get all subscriptions (admin)
- `GET /api/newsletter/stats` - Get newsletter statistics

### Workshop Registration
- `POST /api/workshop/register` - Register for workshop
- `POST /api/workshop/payment-callback` - Handle payment webhook
- `GET /api/workshop/registrations` - Get all registrations (admin)
- `GET /api/workshop/registrations/:workshopId` - Get workshop registrations
- `GET /api/workshop/stats` - Get workshop statistics

## 🔧 Configuration

### Google Sheets Setup
1. **Create Service Account:**
   - Go to Google Cloud Console → IAM & Admin → Service Accounts
   - Create new service account
   - Download JSON key file
   - Copy private key and client email to `.env`

2. **Share Google Sheet:**
   - Open your Google Sheet
   - Click "Share" button
   - Add service account email with "Editor" access
   - Copy spreadsheet ID from URL

### Email Setup
1. **Gmail (Recommended for development):**
   - Enable 2-Factor Authentication
   - Generate App Password
   - Use App Password in `.env`

2. **SendGrid (Recommended for production):**
   - Create SendGrid account
   - Generate API key
   - Update SMTP settings

## 📁 Project Structure

```
backend/
├── routes/                 # API route handlers
│   ├── consultation.js     # Consultation form routes
│   ├── callback.js         # Callback form routes
│   ├── jobApplication.js   # Job application routes
│   ├── newsletter.js       # Newsletter routes
│   └── workshop.js         # Workshop registration routes
├── services/               # Business logic services
│   ├── googleSheets.js     # Google Sheets integration
│   └── emailService.js     # Email service
├── uploads/                # File upload directory
├── server.js               # Main server file
├── package.json            # Dependencies
└── README.md               # This file
```

## 🔒 Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation using express-validator
- **CORS Protection**: Configurable CORS settings
- **Security Headers**: Helmet.js for security headers
- **File Upload Security**: File type and size validation

## 📧 Email Templates

The system includes professional email templates for:
- Consultation confirmations
- Callback notifications
- Job application confirmations
- Workshop registrations
- Newsletter subscriptions

## 🔄 Google Sheets Integration

All form submissions are automatically stored in Google Sheets with:
- Timestamp tracking
- IP address logging
- User agent information
- Status tracking
- Admin notes and assignments

## 🚀 Deployment

### Environment Variables
Ensure all environment variables are set in production:
- `NODE_ENV=production`
- `PORT` (if using custom port)
- All Google Sheets and email configurations

### File Uploads
- Ensure `uploads/` directory has write permissions
- Consider using cloud storage (AWS S3, Google Cloud Storage) for production

### Process Management
Use PM2 or similar process manager:
```bash
npm install -g pm2
pm2 start server.js --name "ecovijay-backend"
pm2 startup
pm2 save
```

## 🧪 Testing

Run tests:
```bash
npm test
```

## 📝 Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 5000 |
| `NODE_ENV` | Environment | No | development |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Service account private key | Yes | - |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Service account email | Yes | - |
| `GOOGLE_SHEETS_PROJECT_ID` | Google Cloud project ID | Yes | - |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Google Sheet ID | Yes | - |
| `SMTP_HOST` | SMTP server host | Yes | - |
| `SMTP_PORT` | SMTP server port | No | 587 |
| `SMTP_USER` | SMTP username | Yes | - |
| `SMTP_PASS` | SMTP password | Yes | - |
| `NOTIFICATION_EMAIL` | HR notification email | Yes | - |
| `SALES_EMAIL` | Sales team email | Yes | - |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: tech@ecovijayglobal.com
- Create an issue in the repository

## 📄 License

This project is proprietary to EcoVijay Global. All rights reserved.

---

**Built with ❤️ for EcoVijay Global**

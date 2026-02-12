# 🚀 EcoVijay Backend Deployment Guide

## 📋 Prerequisites

- [Vercel CLI](https://vercel.com/cli) installed
- [Node.js](https://nodejs.org/) 18+ installed
- Google Cloud Service Account configured
- Environment variables ready

## 🔧 Pre-Deployment Setup

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Set Environment Variables
Create a `.env` file in your backend folder with:
```env
# Google Sheets API Configuration
GOOGLE_SHEETS_PRIVATE_KEY="your-private-key"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id

# Google Sheets Tab Names
SHEET_CONSULTATION_REQUESTS=Consultation Requests
SHEET_CALLBACK_REQUESTS=Callback Requests
SHEET_JOB_APPLICATIONS=Job Applications
SHEET_NEWSLETTER_SUBSCRIPTIONS=Newsletter Subscriptions
SHEET_WORKSHOP_REGISTRATIONS=Workshop Registrations
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**: Commit and push your backend folder to GitHub
2. **Import Project**: Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. **New Project**: Click "New Project"
4. **Import Git Repository**: Select your repository
5. **Configure Project**:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
6. **Environment Variables**: Add all your `.env` variables
7. **Deploy**: Click "Deploy"

### Option 2: Deploy via CLI

1. **Navigate to backend folder**:
   ```bash
   cd backend
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Link to existing project or create new
   - Set project name
   - Confirm deployment

## ⚠️ Important Limitations & Solutions

### ❌ What Won't Work on Vercel:
- **File Uploads**: No persistent storage
- **Long-running Processes**: Serverless timeout limits
- **File System Operations**: Read-only filesystem
- **Traditional Express Server**: Serverless architecture

### ✅ What We've Adapted:
- **API Routes**: Converted to Vercel serverless functions
- **Google Sheets Integration**: Works perfectly
- **Form Processing**: All form submissions work
- **CORS**: Configured for your domain

### 🔄 File Upload Alternative:
For job applications, users will need to email resumes to `hr@ecovijayglobal.com` after form submission.

## 🌐 Post-Deployment

### 1. Update Frontend API URLs
Change all API calls from `http://localhost:5000` to your Vercel URL:
```javascript
// Before
fetch('http://localhost:5000/api/consultation', {...})

// After
fetch('https://your-backend.vercel.app/api/consultation', {...})
```

### 2. Test All Endpoints
- `/api/consultation` - Consultation form
- `/api/callback` - Callback form
- `/api/newsletter` - Newsletter subscription
- `/api/job-application` - Job application
- `/api/workshop` - Workshop registration

### 3. Verify Google Sheets Integration
Submit test forms and check your Google Sheets for new entries.

## 🔧 Troubleshooting

### Common Issues:

1. **Environment Variables Not Working**:
   - Check Vercel dashboard → Project → Settings → Environment Variables
   - Redeploy after adding variables

2. **CORS Errors**:
   - Verify CORS headers in API functions
   - Check domain configuration

3. **Google Sheets API Errors**:
   - Verify service account permissions
   - Check private key format
   - Ensure spreadsheet is shared with service account

4. **Build Failures**:
   - Check Node.js version (18+ required)
   - Verify all dependencies in package.json

## 📊 Monitoring

### Vercel Analytics:
- Function execution times
- Error rates
- Request volumes

### Google Sheets:
- Form submission counts
- Data quality
- Integration status

## 🔒 Security Notes

- ✅ Environment variables are encrypted
- ✅ CORS restricted to your domain
- ✅ No sensitive data in code
- ✅ Google Sheets API secured

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test Google Sheets API separately
4. Check CORS configuration

## 🎯 Next Steps

After successful deployment:
1. Update frontend API endpoints
2. Test all forms end-to-end
3. Set up monitoring and alerts
4. Configure custom domain (optional)
5. Set up email notifications (external service)

---

**Happy Deploying! 🚀**

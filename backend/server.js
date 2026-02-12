const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const consultationRoutes = require('./routes/consultation');
const callbackRoutes = require('./routes/callback');
const jobApplicationRoutes = require('./routes/jobApplication');
const newsletterRoutes = require('./routes/newsletter');
const workshopRoutes = require('./routes/workshop');
const contactRoutes = require('./routes/contact');
const trainingRoutes = require('./routes/training');

// Security middleware
app.use(helmet());

// Handle preflight requests
app.options('*', cors());

// CORS configuration - Updated to include new domain
const allowedOrigins = [
  'http://localhost:3000',
  'https://ecovijayglobal.com',
  'https://www.ecovijayglobal.com',
  'https://ecovijay-website-frontend.vercel.app',
  'https://ecovijay-website-frontend-git-main-sheeeeeshas-projects.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Log CORS requests for debugging
    console.log(`🌐 CORS request from origin: ${origin}`);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log(`✅ CORS allowed for: ${origin}`);
      callback(null, true);
    } else {
      console.log(`❌ CORS blocked for: ${origin}`);
      console.log(`📋 Allowed origins:`, allowedOrigins);
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  maxAge: 86400 // 24 hours
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'EcoVijay Global Backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// API routes
app.use('/api/consultation', consultationRoutes);
app.use('/api/callback', callbackRoutes);
app.use('/api/job-application', jobApplicationRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/workshop', workshopRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/training', trainingRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The requested route ${req.originalUrl} does not exist`
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  res.status(error.status || 500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 EcoVijay Global Backend API running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;

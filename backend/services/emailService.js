const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    // Check if email service is configured
    const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.warn('⚠️ Email service disabled - missing environment variables:', missingVars);
      this.isConfigured = false;
      return;
    }

    this.isConfigured = true;
    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Check if email service is properly configured
  isServiceConfigured() {
    return this.isConfigured === true;
  }

  // Send consultation notification to sales team
  async sendConsultationNotification(data) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Email service not configured, skipping consultation notification');
      return;
    }
    const {
      name,
      email,
      phone,
      company,
      date,
      time,
      message,
      timestamp
    } = data;

    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: process.env.SALES_EMAIL || process.env.NOTIFICATION_EMAIL,
      subject: `🔔 New Consultation Request - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Consultation Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <h2 style="color: #374151; margin-top: 0;">Request Details</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Date:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${new Date(date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Time:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timestamp:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${new Date(timestamp).toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            ${message ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #6b7280; margin: 0; line-height: 1.5;">${message}</p>
            </div>
            ` : ''}
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="mailto:${email}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Reply to ${name}
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This is an automated notification from EcoVijay Global website.</p>
              <p>Please respond to this lead within 24 hours.</p>
            </div>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Consultation notification email sent successfully');
      return result;
    } catch (error) {
      console.error('❌ Failed to send consultation notification email:', error);
      throw error;
    }
  }

  // Send confirmation email to user
  async sendConsultationConfirmation(data) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Email service not configured, skipping consultation confirmation');
      return;
    }
    const { name, email, company, date, time } = data;

    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Consultation Request Confirmed - EcoVijay Global`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Consultation Request Confirmed</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for choosing EcoVijay Global</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Dear <strong>${name}</strong>,
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in our sustainability consulting services. We have received your consultation request and our team will be in touch with you shortly.
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Request Summary:</h3>
              <ul style="color: #6b7280; line-height: 1.6;">
                <li><strong>Company:</strong> ${company}</li>
                <li><strong>Preferred Date:</strong> ${new Date(date).toLocaleDateString()}</li>
                <li><strong>Preferred Time:</strong> ${time}</li>
              </ul>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              <strong>What happens next?</strong>
            </p>
            <ol style="color: #374151; font-size: 16px; line-height: 1.6;">
              <li>Our team will review your request within 24 hours</li>
              <li>We'll contact you to confirm the consultation details</li>
              <li>We'll prepare a customized proposal for your needs</li>
              <li>Schedule the consultation at your preferred time</li>
            </ol>
            
            <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #065f46; margin: 0; font-weight: bold;">
                💡 Need immediate assistance?
              </p>
              <p style="color: #065f46; margin: 5px 0 0 0;">
                Call us at <strong>+91-XXXXXXXXXX</strong> or email <strong>sales@ecovijayglobal.com</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://ecovijayglobal.com" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br>The EcoVijay Global Team</p>
              <p>Driving Sustainable Business Transformation</p>
            </div>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Consultation confirmation email sent successfully');
      return result;
    } catch (error) {
      console.error('❌ Failed to send consultation confirmation email:', error);
      throw error;
    }
  }

  // Send callback notification
  async sendCallbackNotification(data) {
    if (!this.isServiceConfigured()) {
      console.warn('⚠️ Email service not configured, skipping callback notification');
      return;
    }
    const { name, phone, time, message, timestamp } = data;

    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: process.env.SALES_EMAIL || process.env.NOTIFICATION_EMAIL,
      subject: `📞 New Callback Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Callback Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <h2 style="color: #374151; margin-top: 0;">Request Details</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Time:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timestamp:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${new Date(timestamp).toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            ${message ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #6b7280; margin: 0; line-height: 1.5;">${message}</p>
            </div>
            ` : ''}
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="tel:${phone}" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Call ${name}
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This is an automated notification from EcoVijay Global website.</p>
              <p>Please call this lead within 2 hours.</p>
            </div>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Callback notification email sent successfully');
      return result;
    } catch (error) {
      console.error('❌ Failed to send callback notification email:', error);
      throw error;
    }
  }

  // Send workshop confirmation email to participant
  async sendWorkshopConfirmation(data) {
    const { firstName, lastName, email, company, workshopTitle, workshopDates, workshopPrice } = data;

    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Workshop Registration Confirmed - ${workshopTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Workshop Registration Confirmed</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for choosing EcoVijay Global</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Dear <strong>${firstName} ${lastName}</strong>,
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for registering for our workshop. We're excited to have you join us for this learning experience!
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Workshop Details:</h3>
              <ul style="color: #6b7280; line-height: 1.6;">
                <li><strong>Workshop:</strong> ${workshopTitle}</li>
                <li><strong>Dates:</strong> ${workshopDates}</li>
                <li><strong>Company:</strong> ${company}</li>
                <li><strong>Amount Paid:</strong> ${workshopPrice}</li>
              </ul>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              <strong>What happens next?</strong>
            </p>
            <ol style="color: #374151; font-size: 16px; line-height: 1.6;">
              <li>You'll receive workshop materials and pre-reading within 48 hours</li>
              <li>Join our workshop WhatsApp group (link will be shared)</li>
              <li>Complete the pre-workshop questionnaire</li>
              <li>Attend the workshop and earn your certification</li>
            </ol>
            
            <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #065f46; margin: 0; font-weight: bold;">
                💡 Need immediate assistance?
              </p>
              <p style="color: #065f46; margin: 5px 0 0 0;">
                Call us at <strong>+91-XXXXXXXXXX</strong> or email <strong>training@ecovijayglobal.com</strong>
              </p>
            </div>
            
            <div style="text-center margin-top: 20px;">
              <a href="https://ecovijayglobal.com" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br>The EcoVijay Global Training Team</p>
              <p>Empowering Sustainability Excellence</p>
            </div>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Workshop confirmation email sent successfully');
      return result;
    } catch (error) {
      console.error('❌ Failed to send workshop confirmation email:', error);
      throw error;
    }
  }

  // Send workshop notification to training team
  async sendWorkshopNotification(data) {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      designation, 
      workshopTitle, 
      workshopDates, 
      workshopPrice, 
      experience, 
      expectations, 
      dietaryRestrictions, 
      specialRequirements, 
      timestamp 
    } = data;

    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: process.env.TRAINING_EMAIL || process.env.NOTIFICATION_EMAIL,
      subject: `🎓 New Workshop Registration - ${workshopTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Workshop Registration</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global Training Team</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
            <h2 style="color: #374151; margin-top: 0;">Registration Details</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Participant:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Designation:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${designation}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Workshop:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${workshopTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Dates:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${workshopDates}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Amount:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${workshopPrice}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Experience:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${experience}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timestamp:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${new Date(timestamp).toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            ${expectations ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-top: 0;">Learning Expectations:</h3>
              <p style="color: #6b7280; margin: 0; line-height: 1.5;">${expectations}</p>
            </div>
            ` : ''}
            
            ${dietaryRestrictions ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-top: 0;">Dietary Restrictions:</h3>
              <p style="color: #6b7280; margin: 0; line-height: 1.5;">${dietaryRestrictions}</p>
            </div>
            ` : ''}
            
            ${specialRequirements ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-top: 0;">Special Requirements:</h3>
              <p style="color: #6b7280; margin: 0; line-height: 1.5;">${specialRequirements}</p>
            </div>
            ` : ''}
            
            <div style="text-center margin-top: 20px;">
              <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Contact ${firstName}
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This is an automated notification from EcoVijay Global website.</p>
              <p>Please process this registration within 24 hours.</p>
            </div>
          </div>
        </div>
      `
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Workshop notification email sent successfully');
      return result;
    } catch (error) {
      console.error('❌ Failed to send workshop notification email:', error);
      throw error;
    }
  }

  // Test email service
  async testConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ Email service connection verified successfully');
      return true;
    } catch (error) {
      console.error('❌ Email service connection failed:', error);
      return false;
    }
  }

  // Send contact notification to team
  async sendContactNotification(data) {
    const { name, email, company, message, timestamp } = data;
    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: process.env.SALES_EMAIL || process.env.NOTIFICATION_EMAIL,
      subject: `📧 New Contact Form Submission - ${company || 'No Company'}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
        </div>
        <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151; margin-top: 0;">Contact Details</h2>
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td><td style="padding: 8px 0; color: #6b7280;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #6b7280;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td><td style="padding: 8px 0; color: #6b7280;">${company || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Timestamp:</td><td style="padding: 8px 0; color: #6b7280;">${new Date(timestamp).toLocaleString()}</td></tr>
            </table>
          </div>
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #6b7280; margin: 0; line-height: 1.5;">${message}</p>
          </div>
        </div>
      </div>`
    };
    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Contact notification email sent:', result.messageId);
      return result;
    } catch (error) {
      console.error('❌ Failed to send contact notification email:', error);
      throw error;
    }
  }

  // Send contact confirmation to user
  async sendContactConfirmation(data) {
    const { name, email, company } = data;
    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting EcoVijay Global!',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Thank You!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
        </div>
        <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151; margin-top: 0;">Hello ${name}!</h2>
          <p style="color: #6b7280; line-height: 1.6;">Thank you for reaching out to EcoVijay Global. We have received your message and our team will get back to you within 24 hours.</p>
        </div>
      </div>`
    };
    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Contact confirmation email sent:', result.messageId);
      return result;
    } catch (error) {
      console.error('❌ Failed to send contact confirmation email:', error);
      throw error;
    }
  }

  // Send training confirmation to participant
  async sendTrainingConfirmation(data) {
    const { firstName, lastName, email, company, trainingTitle, trainingDuration, trainingFormat } = data;
    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Training Registration Confirmed - ${trainingTitle}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Training Registration Confirmed!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
        </div>
        <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151; margin-top: 0;">Hello ${firstName}!</h2>
          <p style="color: #6b7280; line-height: 1.6;">Thank you for registering for our training program. Your registration has been confirmed!</p>
        </div>
      </div>`
    };
    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Training confirmation email sent:', result.messageId);
      return result;
    } catch (error) {
      console.error('❌ Failed to send training confirmation email:', error);
      throw error;
    }
  }

  // Send training notification to training team
  async sendTrainingNotification(data) {
    const { firstName, lastName, email, phone, company, designation, trainingTitle, trainingDuration, trainingFormat, experience, expectations, specialRequirements, timestamp } = data;
    const mailOptions = {
      from: `"EcoVijay Global" <${process.env.SMTP_USER}>`,
      to: process.env.TRAINING_EMAIL || process.env.NOTIFICATION_EMAIL,
      subject: `🎓 New Training Registration - ${trainingTitle}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Training Registration</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">EcoVijay Global</p>
        </div>
        <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151; margin-top: 0;">Registration Details</h2>
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td><td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #6b7280;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0; color: #6b7280;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td><td style="padding: 8px 0; color: #6b7280;">${company}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Training:</td><td style="padding: 8px 0; color: #6b7280;">${trainingTitle}</td></tr>
            </table>
          </div>
        </div>
      </div>`
    };
    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Training notification email sent:', result.messageId);
      return result;
    } catch (error) {
      console.error('❌ Failed to send training notification email:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();

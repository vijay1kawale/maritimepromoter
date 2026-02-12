"use client";
import React, { useState } from "react";
import { User, Mail, Building2, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch('https://doctor-promoter-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-xl mx-auto transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-4 font-tangent text-gray-900 dark:text-white">Get Healthcare Practice Support</h2>
      
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="text-sm">{submitMessage}</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">{submitMessage}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block font-semibold mb-1 flex items-center gap-1 text-gray-900 dark:text-white" htmlFor="name">
            <User size={18} /> Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-eco-green-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-1 flex items-center gap-1 text-gray-900 dark:text-white" htmlFor="email">
            <Mail size={18} /> Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-eco-green-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-1 flex items-center gap-1 text-gray-900 dark:text-white" htmlFor="company">
          <Building2 size={18} /> Clinic/Hospital Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your Clinic or Hospital"
          value={formData.company}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-eco-green-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1 flex items-center gap-1 text-gray-900 dark:text-white" htmlFor="message">
          <MessageSquare size={18} /> How Can We Help? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your compliance needs, practice growth goals, or any healthcare challenges you're facing..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-eco-green-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 bg-eco-green-4 hover:bg-eco-green-3 text-white font-semibold rounded-lg py-3 text-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-eco-green-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Get Healthcare Support <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm; 
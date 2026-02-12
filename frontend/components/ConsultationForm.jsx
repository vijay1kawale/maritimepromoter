"use client";

import React, { useState, useRef, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  practice: "",
  specialty: "",
  date: "",
  time: "",
  message: "",
};

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) {
    errors.email = "Invalid email";
  }
  if (!fields.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{7,15}$/.test(fields.phone.replace(/\D/g, ""))) {
    errors.phone = "Invalid phone number";
  }
  if (!fields.practice.trim()) errors.practice = "Practice name is required";
  if (!fields.specialty.trim()) errors.specialty = "Medical specialty is required";
  if (!fields.date.trim()) errors.date = "Preferred date is required";
  if (!fields.time.trim()) errors.time = "Preferred time is required";
  return errors;
};

export default function ConsultationForm({ open, onClose }) {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      setFields(initialState);
      setErrors({});
      setSubmitStatus(null);
      setSubmitMessage("");
      setShowForm(false);
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    // Clear field-specific error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(fields);
    setErrors(validation);
    
    if (Object.keys(validation).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      // Prepare data for backend API
      const formData = {
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        company: fields.practice, // Map practice to company for backend
        date: fields.date,
        time: fields.time,
        message: fields.message || `Specialty: ${fields.specialty}` // Include specialty in message
      };

      const response = await fetch('https://doctor-promoter-backend.vercel.app/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your consultation request has been submitted. We\'ll connect you with our medical marketing experts shortly.');
        
        // Redirect to Calendly after successful submission
        setTimeout(() => {
          window.open('https://calendly.com/doctorpromoter', '_blank');
          setFields(initialState);
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to submit consultation request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFields(initialState);
    setErrors({});
    setSubmitStatus(null);
    setSubmitMessage("");
  };

  const handleScheduleConsultation = () => {
    setShowForm(true);
  };

  const handleRequestCallback = () => {
    // Open Calendly directly for callback
    window.open('https://calendly.com/doctorpromoter', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 focus:outline-none max-h-[90vh] overflow-y-auto"
        aria-modal="true"
        role="dialog"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        
        {!showForm ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Get Expert Medical Marketing Guidance</h2>
            
            {/* Description */}
            <p className="text-center mb-8 text-gray-600">Ready to grow your medical practice? Our experts are here to help you achieve your patient acquisition and practice growth goals.</p>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleScheduleConsultation}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </button>
              
              <button
                onClick={handleRequestCallback}
                className="w-full bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request Callback
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Free Medical Practice Consultation</h2>
            <p className="text-sm text-gray-600 mb-4">Get expert advice on growing your medical practice with digital marketing strategies.</p>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="text-sm">{submitMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="text-sm">{submitMessage}</p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Try Again
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={fields.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={fields.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={fields.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="practice"
                  placeholder="Practice Name"
                  value={fields.practice}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.practice ? 'border-red-500' : ''}`}
                />
                {errors.practice && <p className="text-red-500 text-xs mt-1">{errors.practice}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="specialty"
                  placeholder="Medical Specialty"
                  value={fields.specialty}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.specialty ? 'border-red-500' : ''}`}
                />
                {errors.specialty && <p className="text-red-500 text-xs mt-1">{errors.specialty}</p>}
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    type="date"
                    name="date"
                    placeholder="dd-mm-yyyy"
                    value={fields.date}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.date ? 'border-red-500' : ''}`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div className="flex-1">
                  <input
                    type="time"
                    name="time"
                    placeholder="--:--"
                    value={fields.time}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.time ? 'border-red-500' : ''}`}
                  />
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your practice goals and current challenges (Optional)"
                  value={fields.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none min-h-[64px] disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-semibold py-2 rounded-lg transition-colors mt-2 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Schedule Free Consultation'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";

const initialState = {
  name: "",
  phone: "",
  time: "Morning (9 AM - 12 PM)",
  message: "",
};

const timeOptions = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 4 PM)",
  "Evening (4 PM - 7 PM)",
];

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{7,15}$/.test(fields.phone.replace(/\D/g, ""))) {
    errors.phone = "Invalid phone number";
  }
  if (!fields.time.trim()) errors.time = "Preferred time is required";
  return errors;
};

export default function CallbackForm({ open, onClose }) {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      setFields(initialState);
      setErrors({});
      setSubmitStatus(null);
      setSubmitMessage("");
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
                  const response = await fetch('https://doctor-promoter-backend.vercel.app/api/callback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fields),
            });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Callback request submitted successfully! We\'ll call you at your preferred time.');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFields(initialState);
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to submit callback request. Please try again.');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 focus:outline-none"
        aria-modal="true"
        role="dialog"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Request a Callback</h2>
        
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
              placeholder="Name"
              value={fields.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={fields.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">Preferred Time</label>
            <select
              name="time"
              value={fields.time}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.time ? 'border-red-500' : ''}`}
            >
              {timeOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={fields.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-lg border px-3 py-2 bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 outline-none min-h-[64px] disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-semibold py-2 rounded-lg transition-colors mt-2 disabled:cursor-not-allowed flex items-center justify-center"
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
              'Request Callback'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

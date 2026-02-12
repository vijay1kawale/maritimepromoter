"use client";
import React, { useState } from "react";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
                  const response = await fetch('https://doctor-promoter-backend.vercel.app/api/newsletter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: email.trim() }),
            });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Successfully subscribed to our newsletter!');
        setEmail(""); // Clear the email field
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setSubmitStatus(null);
    setSubmitMessage("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Subscribe to Our Newsletter</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        Get the latest insights delivered directly to your inbox.
      </p>
      
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-eco-green-4 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-eco-green-4 text-white font-semibold rounded-xl py-2 transition-colors hover:bg-eco-green-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  );
} 
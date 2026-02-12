'use client';

import React from 'react';
import { CheckCircle, X } from 'lucide-react';

/**
 * ThankYouPopup Component
 * Displays a thank you message after successful PDF download
 */
const ThankYouPopup = ({ isOpen, onClose, filename, serviceName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Thank you message */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your checklist has been downloaded successfully.
          </p>
          
          {filename && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">File:</span> {filename}
              </p>
              {serviceName && (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Service:</span> {serviceName}
                </p>
              )}
            </div>
          )}

          <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            <p>Need help with your regulatory compliance?</p>
            <p>Contact our experts for personalized assistance.</p>
          </div>

          {/* Action button */}
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;

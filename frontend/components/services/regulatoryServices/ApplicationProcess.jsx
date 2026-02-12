"use client";
import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, Clock } from 'lucide-react';

/**
 * ApplicationProcess component displays a step-by-step process for a regulatory service.
 * Props:
 * - steps: array of { title, description, duration }
 */
const ApplicationProcess = ({ steps }) => (
  <div className="bg-white dark:bg-black rounded-xl shadow p-6 md:p-8 mb-6">
    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#139A93' }}>
      <CheckCircle className="w-5 h-5" /> Application Process
    </h2>
    <ol className="space-y-6 relative border-l-2 ml-3" style={{ borderColor: 'rgba(19, 154, 147, 0.3)' }}>
      {steps.map((step, idx) => (
        <li key={idx} className="pl-6 relative">
          <span className="absolute -left-4 top-1.5 flex items-center justify-center w-7 h-7 rounded-full font-bold text-base border-2 text-white" style={{ backgroundColor: '#139A93', borderColor: '#139A93' }}>
            {idx + 1}
          </span>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div>
              <div className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">{step.title}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{step.description}</div>
            </div>
            <div className="flex items-center text-xs mt-1 md:mt-0" style={{ color: '#139A93' }}>
              <Clock className="w-4 h-4 mr-1" />
              {step.duration}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

ApplicationProcess.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ApplicationProcess; 
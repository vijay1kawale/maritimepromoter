"use client";
import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle } from 'lucide-react';

/**
 * RequiredDocs component displays a list of required documents for a regulatory service.
 * Props:
 * - documents: array of strings
 */
const RequiredDocs = ({ documents }) => (
  <div className="bg-white dark:bg-black rounded-xl shadow p-6 md:p-8 mb-6 flex-1">
    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#139A93' }}>
      <CheckCircle className="w-5 h-5" /> Required Documents
    </h2>
    <ul className="space-y-2">
      {documents.map((doc, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded px-3 py-2 text-gray-700 dark:text-gray-200 text-sm"
        >
          <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#139A93' }} />
          <span>{doc}</span>
        </li>
      ))}
    </ul>
  </div>
);

RequiredDocs.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequiredDocs; 
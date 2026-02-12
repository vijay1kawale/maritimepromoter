"use client";
import React from 'react';
import PropTypes from 'prop-types';
import { Info } from 'lucide-react';

/**
 * ImportantNotes component displays a list of important notes for a regulatory service.
 * Props:
 * - notes: array of strings
 */
const ImportantNotes = ({ notes }) => (
  <div className="bg-white dark:bg-black rounded-xl shadow p-6 md:p-8 mb-6">
    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#139A93' }}>
      <Info className="w-5 h-5" /> Important Notes
    </h2>
    <ul className="space-y-2 list-none">
      {notes.map((note, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200 text-sm">
          <span className="mt-1 w-2 h-2 rounded-full inline-block" style={{ backgroundColor: '#139A93' }} />
          <span>{note}</span>
        </li>
      ))}
    </ul>
  </div>
);

ImportantNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImportantNotes; 
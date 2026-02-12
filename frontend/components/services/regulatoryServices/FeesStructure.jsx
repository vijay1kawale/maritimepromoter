"use client";
import React from 'react';
import PropTypes from 'prop-types';
import { Info } from 'lucide-react';
import Link from 'next/link';

/**
 * FeesStructure component displays a fee structure card for a regulatory service.
 * Props:
 * - message: string
 * - link: { label, href }
 */
const FeesStructure = ({ message, link, onViewDetails }) => (
  <div className="bg-white dark:bg-black rounded-xl shadow p-6 md:p-8 mb-6">
    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: '#139A93' }}>
      <Info className="w-5 h-5" /> Fees Structure
    </h2>
    <div className="text-gray-700 dark:text-gray-200 text-sm mb-3">
      {message}
    </div>
    {link && link.label === "View Fee Details" && onViewDetails ? (
      <button
        type="button"
        className="font-medium hover:underline text-sm"
        style={{ color: '#139A93' }}
        onClick={onViewDetails}
      >
        {link.label}
      </button>
    ) : link ? (
      <Link
        href={link.href}
        className="font-medium hover:underline text-sm"
        style={{ color: '#139A93' }}
      >
        {link.label}
      </Link>
    ) : null}
  </div>
);

FeesStructure.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

export default FeesStructure; 
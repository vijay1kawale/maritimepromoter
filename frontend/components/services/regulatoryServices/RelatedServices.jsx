"use client";
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * RelatedServices component displays a grid of related service cards.
 * Props:
 * - services: array of { title, description, link }
 */
const RelatedServices = ({ services }) => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold mb-4" style={{ color: '#139A93' }}>Related Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white dark:bg-black rounded-xl shadow p-5 flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{service.title}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</div>
          </div>
          <Link href={service.link} className="font-medium flex items-center gap-1 mt-auto hover:underline" style={{ color: '#139A93' }}>
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

RelatedServices.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RelatedServices; 
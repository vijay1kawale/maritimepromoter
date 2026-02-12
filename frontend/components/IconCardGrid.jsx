"use client";
import React, { useRef } from 'react';
import useScrollReveal from './useScrollReveal';

export default function IconCardGrid({ heading, subheading, items = [], className = '' }) {
  const itemRefs = useRef([]);

  // Initialize refs array
  if (itemRefs.current.length !== items.length) {
    itemRefs.current = Array(items.length).fill(null).map((_, i) => itemRefs.current[i] || React.createRef());
  }

  // Apply scroll reveal to each item with staggered delay
  items.forEach((_, index) => {
    useScrollReveal(itemRefs.current[index], {
      delay: 0.1 + (index * 0.1), // Stagger delay based on index
      y: 20, // Start 20px below final position
      scale: 0.95, // Start slightly smaller
    });
  });

  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto dark:text-white">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-tangent">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={itemRefs.current[idx]}
              className="bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {item.icon && (
                <div className="bg-eco-green-1/10 rounded-full p-3 mb-4">
                  <item.icon className="w-6 h-6 text-eco-green-4" />
                </div>
              )}
              <h3 className="font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

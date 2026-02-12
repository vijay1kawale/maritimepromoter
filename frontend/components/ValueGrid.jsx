"use client";
import React, { useRef } from 'react';
import useScrollReveal from './useScrollReveal';

export default function ValueGrid({ heading, subheading, items = [] }) {
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
    });
  });

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={itemRefs.current[idx]}
              className="bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {item.icon && (
                  <div className="bg-eco-green-1/10 rounded-full p-3 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-eco-green-4" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1 text-eco-green-4 font-medium mt-2 hover:underline"
                    >
                      {item.linkLabel || 'Learn More'} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";
import React from "react";

export default function CardGrid({ heading, subheading, items }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">
        {heading}
      </h2>
      {subheading && (
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          {subheading}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-black rounded-2xl shadow-lg p-8 min-h-[120px] flex flex-col justify-center transition hover:shadow-xl cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                {Icon && <Icon size={28} className="text-eco-green-4 flex-shrink-0" />}
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-0 transition-colors group-hover:text-eco-green-4 dark:group-hover:text-eco-green-1">
                  {item.title}
                </h3>
              </div>
              {item.desc && (
                <p className="text-gray-500 dark:text-gray-300 text-base">
                  {item.desc}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
} 
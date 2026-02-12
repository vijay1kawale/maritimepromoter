"use client";

import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ServicePopup({ open, onClose, onRequestCallback, content }) {
  if (!open || !content) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-2xl w-full mx-auto p-4 md:p-8 flex flex-col max-h-[90vh]">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>
        {/* Scrollable content */}
        <div className="overflow-y-auto pr-2" style={{ maxHeight: '70vh' }}>
          {/* Title & Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-900 dark:text-white">{content.title}</h2>
          <div className="text-gray-500 dark:text-gray-300 mb-4 text-xs md:text-sm">{content.subtitle}</div>
          {/* Key Features */}
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-900 dark:text-white text-sm md:text-base">Key Features</div>
            <div className="flex flex-col gap-2">
              {content.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 text-gray-800 dark:text-gray-200 text-xs md:text-sm">
                  <CheckCircle className="text-emerald-600 w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Our Process */}
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-900 dark:text-white text-sm md:text-base">Our Process</div>
            <div className="flex flex-col gap-3">
              {content.process?.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center font-bold text-emerald-700 dark:text-emerald-300 text-xs md:text-base">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{step.title}</div>
                    <div className="text-gray-500 dark:text-gray-300 text-xs md:text-sm">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits */}
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-900 dark:text-white text-sm md:text-base">Benefits</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-xs md:text-sm">
              {content.benefits?.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <span className="text-lg">&rarr;</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="text-center text-gray-500 dark:text-gray-300 mb-4 text-xs md:text-sm">
            {content.cta}
          </div>
        </div>
        <button
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-colors mt-2"
          onClick={onRequestCallback}
        >
          Request a Callback
        </button>
      </div>
    </div>
  );
}

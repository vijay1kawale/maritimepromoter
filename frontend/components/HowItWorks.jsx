'use client';

import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const HowItWorks = ({ 
  title = "How It Works", 
  steps = [], 
  className = "" 
}) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-eco-green-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eco-green-4">
              {title}
            </h2>
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on larger screens */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-eco-green-4 hidden sm:block"></div>
          
          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-4 sm:gap-6">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-eco-green-4 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Duration/Status */}
                    <div className="flex items-center gap-2 text-eco-green-4">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium text-xs sm:text-sm md:text-base">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

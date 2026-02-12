"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const timeline = [
  {
    period: "January 2023 - December 2025",
    label: "Transitional Period",
    bullets: [
      "Quarterly reporting obligations begin",
      "No financial adjustments required",
      "Data collection on embedded emissions",
    ],
  },
  {
    period: "2026 onwards",
    label: "Full Implementation",
    bullets: [
      "Importers must purchase CBAM certificates",
      "Price linked to EU ETS carbon price",
      "Full reporting and verification required",
    ],
  },
];

export default function CBAMImplementationTimeline() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">
        CBAM Implementation Timeline
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Understanding the phased implementation schedule for CBAM compliance
      </p>
      <div className="flex flex-col gap-8">
        {timeline.map((phase, idx) => (
          <div
            key={phase.label}
            className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-lg transition-colors duration-300"
          >
            <div className="flex flex-col items-start md:items-center md:w-1/3 mb-2 md:mb-0">
              <span className="inline-block bg-eco-green-4/90 text-white text-sm font-semibold rounded-full px-4 py-1 mb-2">
                {phase.period}
              </span>
              <span className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">
                {phase.label}
              </span>
            </div>
            <ul className="flex-1 space-y-3">
              {phase.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-200 text-base">
                  <CheckCircle size={20} className="text-eco-green-4 mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 
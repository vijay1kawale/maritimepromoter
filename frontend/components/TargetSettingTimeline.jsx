"use client";
import React from "react";
import { CheckCircle, BarChart2, LineChart, Target, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Assess",
    desc: "Identify and measure your impact and dependencies on nature across your value chain.",
  },
  {
    icon: BarChart2,
    title: "Interpret & Prioritize",
    desc: "Interpret the results to identify which impacts are most significant and where action is needed.",
  },
  {
    icon: Target,
    title: "Measure, Set & Disclose",
    desc: "Set specific, measurable, and time-bound targets based on scientific thresholds.",
  },
  {
    icon: RefreshCw,
    title: "Act",
    desc: "Take actions to avoid, reduce, regenerate, and transform impacts on nature.",
  },
  {
    icon: LineChart,
    title: "Track",
    desc: "Monitor progress against targets and adjust strategies as needed.",
  },
];

export default function TargetSettingTimeline({ heading = "Science-Based Target Setting Process", subheading = "A structured approach to setting credible nature-based targets" }) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">
        {heading}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        {subheading}
      </p>
      <div className="relative flex flex-col md:grid md:grid-cols-2 gap-y-8 md:gap-y-12 md:gap-x-8">
        {/* Vertical timeline line for md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-eco-green-4/30 z-0" style={{ transform: 'translateX(-50%)' }} />
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={step.title}
              className={`relative z-10 flex flex-col items-center md:flex-row ${isLeft ? 'md:justify-end' : 'md:justify-start'} md:col-span-1`}
              style={isLeft ? { gridRow: idx + 1 } : { gridRow: idx + 1, gridColumn: 2 }}
            >
              {/* Mobile: Card with number in top-center, Desktop: timeline bubble */}
              <div className="w-full max-w-md mx-auto md:mx-0">
                {/* Mobile: Numbered circle in card */}
                <div className="block md:hidden relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-4">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-eco-green-4 text-white font-bold text-lg border-4 border-white dark:border-gray-900 shadow-md">
                    {idx + 1}
                  </span>
                  <div className="flex flex-col items-center gap-3 mt-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-eco-green-4/10 dark:bg-eco-green-4/20">
                      {step.icon && React.createElement(step.icon, { size: 28, className: 'text-eco-green-4' })}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg text-center">{step.title}</span>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-center mt-3">
                    {step.desc}
                  </div>
                </div>
                {/* Desktop: timeline bubble and card */}
                <span
                  className="hidden md:flex absolute left-1/2 z-20"
                  style={{
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-eco-green-4 text-white font-bold text-lg border-4 border-white dark:border-gray-900 shadow-md">
                    {idx + 1}
                  </span>
                </span>
                <div className="hidden md:block bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-2 text-gray-700 dark:text-gray-300 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-eco-green-4/10 dark:bg-eco-green-4/20">
                      {step.icon && React.createElement(step.icon, { size: 28, className: 'text-eco-green-4' })}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{step.title}</span>
                  </div>
                  {step.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 
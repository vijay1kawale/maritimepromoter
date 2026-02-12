"use client";
import React from "react";
import { Thermometer, ArrowRightLeft, CheckCircle } from "lucide-react";

const risks = [
  {
    title: "Physical Risks",
    items: [
      "Acute risks (event-driven) like extreme weather events",
      "Chronic risks like rising sea levels and temperatures",
    ],
  },
  {
    title: "Transition Risks",
    items: [
      "Policy and legal changes like carbon pricing",
      "Technology shifts toward low-carbon solutions",
      "Market changes in supply and demand",
      "Reputational impacts from stakeholder perceptions",
    ],
  },
];

const opportunities = [
  {
    title: "Resource Efficiency",
    desc: "Reduced operating costs through efficiency improvements",
  },
  {
    title: "Energy Source",
    desc: "Lower energy costs through renewable energy adoption",
  },
  {
    title: "Products & Services",
    desc: "Development of low-emission products and services",
  },
  {
    title: "Markets",
    desc: "Access to new markets and partnerships",
  },
  {
    title: "Resilience",
    desc: "Increased business stability through adaptive capacity",
  },
];

export default function ClimateRisksOpportunities() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">
        Climate-Related Risks & Opportunities
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
        TCFD focuses on addressing both the risks and opportunities presented by climate change
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Risks */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 md:p-6 flex flex-col gap-4 md:gap-6 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="text-red-500" size={24} />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Climate-Related Risks</span>
          </div>
          {risks.map((risk, idx) => (
            <div key={risk.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 md:p-4 mb-2 transition-colors duration-300">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">{risk.title}</div>
              <ul className="space-y-2">
                {risk.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                    <CheckCircle size={20} className="text-eco-green-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Opportunities */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 md:p-6 flex flex-col gap-4 md:gap-6 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRightLeft className="text-eco-green-4" size={24} />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Climate-Related Opportunities</span>
          </div>
          {opportunities.map((op, idx) => (
            <div key={op.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 md:p-4 mb-3 transition-colors duration-300 hover:shadow-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{op.title}</div>
              <div className="text-gray-700 dark:text-gray-200 text-base">{op.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
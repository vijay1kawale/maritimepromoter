"use client";
import React from "react";
import { Info, ShieldCheck } from "lucide-react";

const sections = [
  {
    label: "Section A",
    desc: "General disclosures about the company, products, operations, and services",
  },
  {
    label: "Section B",
    desc: "Management and process disclosures including policies, governance, and stakeholder engagement",
  },
  {
    label: "Section C",
    desc: "Principle-wise performance indicators covering environmental, social, and governance metrics",
  },
];

const complianceNote =
  "BRSR is mandatory for the top 1,000 listed entities by market capitalization in India, effective from FY 2022-23, replacing the earlier Business Responsibility Report (BRR).";

const BRSRKeyComponents = () => {
  return (
    <div className="w-full max-w-lg ml-auto">
      <div className="flex items-center gap-2 mb-4">
        <Info className="text-eco-green-4" size={22} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key BRSR Components</h3>
      </div>
      <div className="flex flex-col gap-4 mb-6">
        {sections.map((section) => (
          <div key={section.label} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-5">
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{section.label}</div>
            <div className="text-gray-700 dark:text-gray-300 text-base">{section.desc}</div>
          </div>
        ))}
      </div>
      <hr className="border-gray-300 dark:border-gray-700 mb-4" />
      <div className="flex items-start gap-2 text-eco-green-4 text-base">
        <ShieldCheck size={20} className="mt-0.5" />
        <span className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-eco-green-4">Compliance Note:</span> {complianceNote}
        </span>
      </div>
    </div>
  );
};

export default BRSRKeyComponents; 
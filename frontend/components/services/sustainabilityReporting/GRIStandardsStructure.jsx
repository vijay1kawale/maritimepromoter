"use client";
import React from "react";
import { Info } from "lucide-react";

const universalStandards = [
  {
    id: "GRI 1",
    title: "Foundation",
    desc: "Sets out the purpose and principles for using the GRI Standards.",
  },
  {
    id: "GRI 2",
    title: "General Disclosures",
    desc: "Includes contextual information about an organization and its reporting practices.",
  },
  {
    id: "GRI 3",
    title: "Material Topics",
    desc: "Guides organizations in determining material topics for sustainability reporting.",
  },
];

export default function GRIStandardsStructure() {
  return (
    <section className="w-full max-w-xl ml-auto flex flex-col gap-6">
      <div className="flex items-center gap-2 mb-2">
        <Info className="text-eco-green-4" size={22} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">GRI Standards Structure</h3>
      </div>
      {/* Universal Standards */}
      <div className="bg-gray-900/80 dark:bg-gray-800/80 rounded-2xl p-5 flex flex-col gap-3">
        <div className="text-lg font-semibold text-white mb-2">Universal Standards</div>
        <div className="flex flex-col gap-3">
          {universalStandards.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center min-w-[56px]">
                <span className="bg-eco-green-4 text-white font-bold rounded-lg px-3 py-1 text-sm mb-1">{item.id}</span>
              </div>
              <div>
                <div className="font-bold text-white text-base mb-0.5">{item.title}</div>
                <div className="text-gray-300 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sector Standards */}
      <div className="bg-gray-800/80 dark:bg-gray-900/80 rounded-2xl p-5">
        <div className="font-semibold text-white mb-1">Sector Standards</div>
        <div className="text-gray-300 text-sm">
          Sector-specific standards that help organizations identify material topics based on their sector's most significant impacts.
        </div>
      </div>
      {/* Topic Standards */}
      <div className="bg-gray-800/80 dark:bg-gray-900/80 rounded-2xl p-5">
        <div className="font-semibold text-white mb-1">Topic Standards</div>
        <div className="text-gray-300 text-sm">
          Specific standards for reporting on economic, environmental, and social topics, such as GRI 302: Energy, GRI 305: Emissions, GRI 401: Employment, etc.
        </div>
      </div>
    </section>
  );
} 
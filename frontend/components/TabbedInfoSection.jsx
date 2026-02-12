"use client"

import React, { useState } from "react";
import { Building2, Globe, Award, Users, HeartHandshake, Leaf } from "lucide-react";

export default function TabbedInfoSection({ tabs }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <section className="w-full py-12 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Tabs - centered above content and image */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8 justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-2 py-2 w-full">
          {tabs.map((t, idx) => (
            <button
              key={t.label}
              onClick={() => setActive(idx)}
              className={`w-full sm:w-auto px-7 py-2 rounded-xl font-semibold text-base transition-colors text-center
                ${active === idx
                  ? "bg-white text-eco-green-4 shadow-sm dark:bg-gray-900 dark:text-eco-green-4"
                  : "bg-transparent text-gray-500 hover:text-eco-green-4 dark:text-gray-300 dark:hover:text-eco-green-4"}
              `}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
          {/* Left: Content */}
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-black dark:text-white font-tangent text-center md:text-left">{tab.heading}</h2>
            <p className="mb-4 text-black dark:text-white/80 text-center md:text-left">{tab.description}</p>
            <ul className="space-y-2 mb-2 w-full">
              {tab.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-eco-green-4 font-medium justify-center md:justify-start">
                  {f.icon && React.createElement(f.icon, { size: 20, className: "text-eco-green-4" })}
                  <span className="text-black dark:text-white/90 font-normal">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center mt-6 md:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={tab.image}
                alt={tab.heading}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sample usage:
// import { Building2, Globe, Award } from "lucide-react";
// <TabbedInfoSection
//   tabs=[
//     {
//       label: "Company",
//       heading: "Our Company",
//       description: "ECS is a leading sustainability and compliance consulting firm, helping businesses navigate complex regulatory requirements while building sustainable futures.",
//       features: [
//         { icon: Building2, text: "Established industry presence" },
//         { icon: Globe, text: "Global reach and expertise" },
//         { icon: Award, text: "Award-winning solutions" },
//       ],
//       image: "/imgs/about-company.jpg",
//     },
//     ...
//   ]
// /> 
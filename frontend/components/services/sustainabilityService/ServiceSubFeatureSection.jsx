"use client";
import React from "react";
import { Box, CheckCircle } from "lucide-react";
import Link from "next/link";

const ServiceSubFeatureSection = ({ title, subtitle, features = [], className = "", centerNumber = false, onLearnMore }) => {
  // Use 3 columns if exactly 3 or 9 features, 4 columns if 4, else 2 columns
  let gridCols = "grid-cols-1 md:grid-cols-2";
  if (features.length === 3 || features.length === 9) gridCols = "grid-cols-1 md:grid-cols-3";
  if (features.length === 4) gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`w-full max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-gray-900 transition-colors duration-300 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className={`grid ${gridCols} gap-10`}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-black rounded-2xl shadow-md p-6 flex flex-col ${centerNumber && typeof feature.number === "number" ? "items-center" : "sm:flex-row items-start"} transition-all duration-200 hover:shadow-xl hover:-translate-y-1`}
          >
            {typeof feature.number === "number" && centerNumber ? (
              <>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-eco-green-4 text-white text-2xl font-bold font-tangent mb-4">
                  {feature.number}
                </span>
                <div className="w-full text-center">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  {feature.bullets && (
                    <ul className="mb-3 space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-base text-gray-600 dark:text-gray-300">
                          <CheckCircle size={20} className="text-eco-green-4 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.desc && !feature.bullets && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-lg">{feature.desc}</p>
                  )}
                  {feature.link && onLearnMore ? (
                    <button
                      type="button"
                      className="text-eco-green-4 font-semibold text-lg flex items-center gap-1 hover:underline"
                      onClick={() => onLearnMore(idx, feature)}
                    >
                      {feature.linkLabel || "Learn More"} <span aria-hidden>→</span>
                    </button>
                  ) : feature.link ? (
                    <Link href={feature.link} className="text-eco-green-4 font-semibold text-lg flex items-center gap-1 hover:underline">
                      {feature.linkLabel || "Learn More"} <span aria-hidden>→</span>
                    </Link>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <div className="flex-shrink-0">
                  {feature.icon ? (
                    <feature.icon size={48} className="text-eco-green-4" />
                  ) : (
                    <Box size={48} className="text-eco-green-4" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  {feature.bullets && (
                    <ul className="mb-3 space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-base text-gray-600 dark:text-gray-300">
                          <CheckCircle size={20} className="text-eco-green-4 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.desc && !feature.bullets && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-lg">{feature.desc}</p>
                  )}
                  {feature.link && onLearnMore ? (
                    <button
                      type="button"
                      className="text-eco-green-4 font-semibold text-lg flex items-center gap-1 hover:underline"
                      onClick={() => onLearnMore(idx, feature)}
                    >
                      {feature.linkLabel || "Learn More"} <span aria-hidden>→</span>
                    </button>
                  ) : feature.link ? (
                    <Link href={feature.link} className="text-eco-green-4 font-semibold text-lg flex items-center gap-1 hover:underline">
                      {feature.linkLabel || "Learn More"} <span aria-hidden>→</span>
                    </Link>
                  ) : null}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSubFeatureSection; 
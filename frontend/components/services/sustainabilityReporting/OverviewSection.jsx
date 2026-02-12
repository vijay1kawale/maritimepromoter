"use client";
import React from "react";
import { FileText, Target, Globe, Calendar } from "lucide-react";

const iconMap = {
  FileText,
  Target,
  Globe,
  Calendar,
};

const OverviewSection = ({ title, items = [] }) => {
  return (
    <div className="w-full max-w-lg ml-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-eco-green-4">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item, idx) => {
          const Icon = item.icon ? iconMap[item.icon] || FileText : FileText;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 transition-colors duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-eco-green-4/10 dark:bg-eco-green-4/20">
                <Icon size={28} className="text-eco-green-4" />
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-base mb-1">
                  {item.label}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-base">
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewSection; 
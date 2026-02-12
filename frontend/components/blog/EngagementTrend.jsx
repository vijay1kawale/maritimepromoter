"use client";
import React from "react";
import { TrendingUp } from "lucide-react";

export default function EngagementTrend({ data = [], max = null }) {
  // Find max value for scaling bars
  const maxValue = max || Math.max(...data.map(d => d.value), 1);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="text-eco-green-4" size={20} />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Engagement Trends</h4>
      </div>
      <div className="flex items-end gap-4 h-40 w-full">
        {data.map((d, i) => (
          <div key={d.label} className="flex flex-col items-center w-10">
            <div
              className="w-full rounded-t bg-eco-green-4 transition-all"
              style={{ height: `${(d.value / maxValue) * 100}%`, minHeight: 4 }}
            ></div>
            <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 
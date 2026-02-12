"use client";
import React from "react";
import { Search } from "lucide-react";

const filters = [
  "All Posts",
  "Compliance",
  "Marketing",
  "Patient Care",
  "Technology",
  "AI",
  "Events",
];

export default function BlogHero({ activeFilter = 0, onFilterChange, searchValue = "", onSearchChange }) {
  return (
    <section className="w-full pt-16 pb-8 px-4 bg-gradient-to-b from-eco-green-1/20 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-tangent">Doctor Promoter Insights</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Stay informed with practical tips on clinic compliance, patient-first content, healthcare marketing, technology and AI.
        </p>
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 max-w-xl mx-auto shadow-sm">
            <Search className="w-6 h-6 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchValue}
              onChange={e => onSearchChange && onSearchChange(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter, idx) => (
              <button
                key={filter}
                onClick={() => onFilterChange && onFilterChange(idx)}
                className={`px-7 py-2 rounded-xl font-semibold text-base transition-colors
                  ${activeFilter === idx
                    ? "bg-eco-green-4 text-white"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
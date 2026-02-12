"use client";
import React from "react";
import { Tag } from "lucide-react";

export default function PopularTags({ tags = [], onTagClick, activeTag = null }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="text-eco-green-4" size={20} />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Popular Tags</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick && onTagClick(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
              ${activeTag === tag
                ? "bg-eco-green-4 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-eco-green-4/20 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-eco-green-4/30"}
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
} 
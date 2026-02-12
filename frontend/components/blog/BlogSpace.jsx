"use client";
import React from "react";

/**
 * BlogSpace is a layout component for the blog page.
 * It accepts two props:
 *  - main: ReactNode (main content, e.g. blog post grid)
 *  - sidebar: ReactNode (sidebar widgets)
 */
export default function BlogSpace({ main, sidebar }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 lg:grid-cols-3">
      {/* Main content: 2/3 width on desktop */}
      <div className="lg:col-span-2 flex flex-col gap-8">{main}</div>
      {/* Sidebar: 1/3 width on desktop */}
      <aside className="lg:col-span-1 flex flex-col gap-8">{sidebar}</aside>
    </div>
  );
} 
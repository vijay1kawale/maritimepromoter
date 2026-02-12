"use client";
import React from "react";
import Link from "next/link";

const WhatIs = ({ title, description, link }) => {
  return (
    <div className="bg-transparent">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-tangent">{title}</h2>
      {Array.isArray(description)
        ? description.map((desc, i) => (
            <p key={i} className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {desc}
            </p>
          ))
        : (
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          )}
      {link && (
        <Link href={link.href} className="text-eco-green-4 font-semibold hover:underline flex items-center gap-1 mt-2 dark:text-eco-green-4">
          {link.label} <span aria-hidden>↗</span>
        </Link>
      )}
    </div>
  );
};

export default WhatIs; 
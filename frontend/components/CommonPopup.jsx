"use client";
import React from "react";

export default function CommonPopup({
  open,
  onClose,
  title,
  description,
  primaryButton = {},
  secondaryButton = {},
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 focus:outline-none">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{description}</p>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className={`w-full flex items-center justify-center gap-2 rounded-lg font-semibold py-3 transition text-lg
              ${primaryButton.variant === 'outlined'
                ? 'border-2 border-green-500 text-green-600 dark:text-green-400 bg-transparent hover:bg-green-50 dark:hover:bg-green-950'
                : 'bg-green-500 hover:bg-green-600 text-white'}
            `}
            onClick={primaryButton.onClick}
          >
            {primaryButton.icon && <span className="mr-2">{primaryButton.icon}</span>}
            {primaryButton.label}
          </button>
          <button
            type="button"
            className={`w-full flex items-center justify-center gap-2 rounded-lg font-semibold py-3 transition text-lg
              ${secondaryButton.variant === 'outlined'
                ? 'border-2 border-green-500 text-green-600 dark:text-green-400 bg-transparent hover:bg-green-50 dark:hover:bg-green-950'
                : 'bg-green-500 hover:bg-green-600 text-white'}
            `}
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.icon && <span className="mr-2">{secondaryButton.icon}</span>}
            {secondaryButton.label}
          </button>
        </div>
      </div>
    </div>
  );
}

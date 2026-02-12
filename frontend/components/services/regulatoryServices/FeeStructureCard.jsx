import React from 'react';
import { X, Wallet } from 'lucide-react';

export default function FeeStructureCard({
  fees = [
    { label: 'Application Fee', value: '***' },
    { label: 'Processing Fee', value: '***' },
    { label: 'Inspection Fee', value: '***' },
    { label: 'Annual Fee', value: '***' },
  ],
  onClose,
  onRequestCallback,
}) {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-auto">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Wallet size={24} style={{ color: '#139A93' }} />
        <h2 className="text-lg font-semibold">Fees Structure</h2>
      </div>
      {/* Fee List */}
      <div className="flex flex-col gap-3 mb-6">
        {fees.map((fee, idx) => (
          <div
            key={fee.label}
            className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 text-gray-700 text-base"
          >
            <span>{fee.label}</span>
            <span className="font-semibold">{fee.value}</span>
          </div>
        ))}
      </div>
      {/* Message */}
      <div className="text-center text-gray-500 text-sm mb-6">
        Need more details about our fees or want to discuss custom requirements?
      </div>
      {/* Request Callback Button */}
      <button
        className="w-full text-white font-medium py-2.5 rounded-xl transition-colors"
        style={{ backgroundColor: '#139A93' }}
        onClick={onRequestCallback}
      >
        Request a Callback
      </button>
    </div>
  );
}

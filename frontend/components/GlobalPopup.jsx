"use client";

import React, { useState, useEffect } from "react";
import { X, Mail, Phone, Calendar } from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import CallbackForm from "./CallbackForm";

export default function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  useEffect(() => {
    // Check if popup was already closed
    if (sessionStorage.getItem("doctorpromoter_popup_closed")) return;

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("doctorpromoter_popup_closed", "1");
  };

  const handleConsultation = () => {
    setShowConsultation(true);
    sessionStorage.setItem("doctorpromoter_popup_closed", "1");
  };

  const handleCallback = () => {
    setShowCallback(true);
    sessionStorage.setItem("doctorpromoter_popup_closed", "1");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Popup */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="w-16 h-16 bg-eco-green-4/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-eco-green-4" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Get Expert Medical Practice Marketing Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to grow your medical practice? Our experts are here to help you achieve your marketing and patient acquisition goals.
            </p>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={handleConsultation}
                className="w-full bg-eco-green-4 text-white font-semibold py-3 px-6 rounded-xl hover:bg-eco-green-3 transition flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Schedule Consultation
              </button>
              <button
                onClick={handleCallback}
                className="w-full border border-eco-green-4 text-eco-green-4 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-eco-green-4 hover:text-white transition flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forms */}
      <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
      <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
    </>
  );
} 
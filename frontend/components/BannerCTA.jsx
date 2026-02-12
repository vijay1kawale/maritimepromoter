"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import ConsultationForm from "./ConsultationForm";
import CallbackForm from "./CallbackForm";

export default function BannerCTA({ heading, subheading, buttons = [] }) {
  const [showConsultation, setShowConsultation] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  const handleButtonClick = (idx) => {
    if (idx === 0) setShowConsultation(true);
    else if (idx === 1) setShowCallback(true);
  };

  return (
    <section className="w-full py-16 px-4 bg-eco-green-4 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.18 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-tangent">
          {heading}
        </h2>
        {subheading && (
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((btn, idx) => (
            (idx === 0 || idx === 1) ? (
              <Button
                key={idx}
                variant="cta"
                onClick={() => handleButtonClick(idx)}
              >
                {btn.label}
              </Button>
            ) : btn.href ? (
              <Link key={idx} href={btn.href} target={btn.target || "_self"} rel="noopener noreferrer">
                <Button variant="cta">{btn.label}</Button>
              </Link>
            ) : (
              <Button key={idx} variant="cta" onClick={btn.onClick}>{btn.label}</Button>
            )
          ))}
        </div>
      </div>
      <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
      <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
    </section>
  );
} 
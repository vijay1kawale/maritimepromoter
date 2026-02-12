"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calendar, Phone, Users } from "lucide-react";
import Link from "next/link";

const BUBBLE_COUNT = 36;
const SHAPES = ["circle", "rect"];
const COLORS = [
  "rgba(16,185,129,0.12)",
  "rgba(16,185,129,0.18)",
  "rgba(16,185,129,0.25)",
  "rgba(16,185,129,0.10)"
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const bubblesInit = Array.from({ length: BUBBLE_COUNT }).map(() => ({
  shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
  size: randomBetween(60, 180),
  top: randomBetween(0, 100), // percent, full height
  left: randomBetween(0, 100), // percent, full width
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  opacity: randomBetween(0.15, 0.35),
  borderRadius: randomBetween(30, 50), // for rects
}));

const HeroSection = ({ onConsultationClick, onCallbackClick }) => {
  const bubbleRefs = useRef([]);
  const containerRef = useRef(null);

  // Store the section's width/height for full-range movement
  const sectionSize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const updateSectionSize = () => {
      if (containerRef.current) {
        sectionSize.current = {
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        };
      }
    };
    updateSectionSize();
    window.addEventListener('resize', updateSectionSize);
    return () => window.removeEventListener('resize', updateSectionSize);
  }, []);

  useEffect(() => {
    // Initial large floating animation
    bubbleRefs.current.forEach((bubble, i) => {
      if (!bubble) return;
      const float = () => {
        const { width, height } = sectionSize.current;
        gsap.to(bubble, {
          x: randomBetween(-width * 0.4, width * 0.4),
          y: randomBetween(-height * 0.4, height * 0.4),
          duration: randomBetween(6, 12),
          ease: "sine.inOut",
          onComplete: float,
        });
      };
      float();
    });

    // On mouse move, burst all bubbles to new random positions across the section
    const handleMouseMove = () => {
      const { width, height } = sectionSize.current;
      bubbleRefs.current.forEach((bubble) => {
        if (!bubble) return;
        gsap.to(bubble, {
          x: randomBetween(-width * 0.45, width * 0.45),
          y: randomBetween(-height * 0.45, height * 0.45),
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            // Return to large float
            gsap.to(bubble, {
              x: randomBetween(-width * 0.4, width * 0.4),
              y: randomBetween(-height * 0.4, height * 0.4),
              duration: randomBetween(6, 12),
              ease: "sine.inOut",
            });
          },
        });
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
      style={{ isolation: "isolate" }}
    >
      {/* Bubbles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {bubblesInit.map((bubble, i) => (
          <div
            key={i}
            ref={el => (bubbleRefs.current[i] = el)}
            style={{
              position: "absolute",
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              width: bubble.size,
              height: bubble.size * (bubble.shape === "rect" ? randomBetween(0.6, 1.2) : 1),
              background: bubble.color,
              opacity: bubble.opacity,
              borderRadius: bubble.shape === "circle" ? "50%" : `${bubble.borderRadius}%`,
              transition: "background 0.3s",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-eco-green-4/10 mb-6">
          <Users className="w-12 h-12 text-eco-green-4" />
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-eco-green-4 font-tangent text-center mb-2">Doctor Platform</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-3xl">A dedicated space for doctors and clinics to access resources and services — compliance, medical content, marketing, events, technology and AI — all in one place.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 rounded-full bg-eco-green-4 text-white font-semibold text-lg shadow-lg hover:bg-eco-green-3 transition"
            onClick={onConsultationClick}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Explore Services
            <span className="ml-2">→</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 rounded-full border border-eco-green-4 text-eco-green-4 font-semibold text-lg hover:bg-eco-green-4 hover:text-white transition"
            onClick={onCallbackClick}
          >
            <Phone className="w-5 h-5 mr-2" />
            Learn More
          </button>
        </div>
        <div className="flex justify-center">
          <span className="animate-bounce text-eco-green-4 text-3xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

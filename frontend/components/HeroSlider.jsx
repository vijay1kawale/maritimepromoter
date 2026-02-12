"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Calendar, PhoneCall, ArrowLeft, ArrowRight } from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import CallbackForm from "./CallbackForm";

const slides = [
  {
    title: "Compliance, Content, Marketing — All for Doctors",
    desc: "Run a smooth, compliant practice with NABH/NABL support, medical content and measurable patient growth.",
    bg: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Grow Your Clinic with Confidence",
    desc: "SEO, Google Ads, social media, patient engagement and event outreach managed end-to-end for your clinic.",
    bg: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Modernize with Tech and AI",
    desc: "EMR/EHR, telemedicine, appointment systems and AI assistants to elevate patient experience and operations.",
    bg: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const timeoutRef = useRef();

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
      setFade(false);
    }, 400);
  };
  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
      setFade(false);
    }, 400);
  };

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timeoutRef.current = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
        setFade(false);
      }, 400);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isHovered]);

  return (
    <section
      className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${slides[current].bg}')` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Content with fade effect */}
      <div className={`relative z-10 max-w-4xl mx-auto px-4 py-16 text-center flex flex-col items-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        <div className="h-2 w-24 bg-eco-green-4 mb-6 rounded" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-tangent">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl">
          {slides[current].desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button icon={Calendar} variant="primary" onClick={() => setShowConsultation(true)}>
            Schedule a Consultation
          </Button>
          <Button icon={PhoneCall} variant="secondary" onClick={() => setShowCallback(true)}>
            Request a Callback
          </Button>
        </div>
      </div>
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ArrowLeft size={32} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition"
        onClick={next}
        aria-label="Next slide"
      >
        <ArrowRight size={32} />
      </button>
      <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
      <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
    </section>
  );
} 
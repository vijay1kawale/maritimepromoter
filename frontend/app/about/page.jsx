"use client";

import React, { useRef } from 'react';
import AboutHero from "../../components/about/AboutHero";
import IconCardGrid from "../../components/IconCardGrid";
import BannerCTA from "../../components/BannerCTA";
import TabbedInfoSection from "../../components/TabbedInfoSection";
import { Building2, Globe, Award, Users, HeartHandshake, Leaf, Lightbulb, Target, Scale, Heart, Zap, ShieldCheck } from "lucide-react";
import useScrollReveal from "@/components/useScrollReveal";

const coreValues = [
  { icon: ShieldCheck, title: "Patient Safety", desc: "Compliance-first execution to protect patients and providers" },
  { icon: Target, title: "Outcome Focus", desc: "Measurable practice growth with clear accountability" },
  { icon: Award, title: "Quality", desc: "High standards for healthcare SOPs and delivery" },
  { icon: Users, title: "Partnership", desc: "Collaborative approach with doctors and healthcare teams" },
  { icon: Lightbulb, title: "Practicality", desc: "Simple, actionable healthcare playbooks over jargon" },
  { icon: Zap, title: "Agility", desc: "Fast healthcare compliance implementation with continuous improvement" },
  { icon: Scale, title: "Ethics", desc: "Transparent healthcare communication and responsible marketing" },
  { icon: Heart, title: "Care", desc: "Empathy in every patient touchpoint and interaction" },
];

const aboutTabs = [
  {
    label: "Company",
    heading: "About Doctor Promoter",
    description: "Doctor Promoter helps doctors and clinics with compliance (NABH/NABL), medical content, digital marketing, events, technology and AI solutions — delivered with simple, practical execution.",
    features: [
      { icon: Building2, text: "Healthcare compliance expertise" },
      { icon: Globe, text: "Pan-India healthcare network" },
      { icon: Award, text: "NABH/NABL accreditation success" },
    ],
    image: "/imgs/Our_Company_Image.png",
  },
  {
    label: "Culture",
    heading: "Our Healthcare Culture",
    description: "We cultivate an environment of healthcare innovation, compliance excellence, and continuous learning, where every team member is empowered to improve patient care and practice growth.",
    features: [
      { icon: Users, text: "Healthcare-focused expertise" },
      { icon: Lightbulb, text: "Compliance-driven methodology" },
      { icon: HeartHandshake, text: "Patient-first approach" },
    ],
    image: "/imgs/Our_Culture_Image.png",
  },
  {
    label: "Impact",
    heading: "Our Healthcare Impact",
    description: "Through our collaborative efforts, we've enabled numerous healthcare providers to achieve compliance, grow their practices, and deliver better patient care across India.",
    features: [
      { icon: Leaf, text: "Healthcare compliance success" },
      { icon: Scale, text: "Practice growth and expansion" },
      { icon: Heart, text: "Improved patient outcomes" },
    ],
    image: "/imgs/Our_Impact_Image.png",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const tabsRef = useRef(null);
  const ctaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(valuesRef, { delay: 0.1 });
  useScrollReveal(tabsRef, { delay: 0.2 });
  useScrollReveal(ctaRef, { delay: 0.3 });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div ref={heroRef}><AboutHero /></div>
      <div ref={valuesRef}>
        <IconCardGrid
          heading="Our Healthcare Values"
          subheading="These core principles guide every aspect of our work at Doctor Promoter — from patient-first communication to audit-ready healthcare compliance and measurable practice growth."
          items={coreValues}
        />
      </div>
      <div ref={tabsRef}><TabbedInfoSection tabs={aboutTabs} /></div>
      <div ref={ctaRef}>
        <BannerCTA
          heading="Ready to Transform Your Healthcare Practice Together?"
          subheading="Partner with healthcare compliance experts to achieve NABH/NABL accreditation, grow your practice, and deliver exceptional patient care. Let's collaborate to build your healthcare success story."
          buttons={[
            { label: "Schedule a Consultation", href: "#", variant: "primary" },
            { label: "Request a Callback", href: "#", variant: "secondary" },
          ]}
        />
      </div>
    </main>
  );
}
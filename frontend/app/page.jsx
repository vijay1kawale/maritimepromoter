
"use client"
import React, { useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import ValueGrid from "../components/ValueGrid";
import CardGrid from "../components/CardGrid";
import IconCardGrid from "../components/IconCardGrid";
import BannerCTA from "../components/BannerCTA";
import StatsBanner from "@/components/home/StatsBanner";
import { ShieldCheck, FileText, Megaphone, GraduationCap, Users, CheckCircle, Cpu, Bot } from "lucide-react";
import HomeLearnMore from "../components/home/HomeLearnMore";
import useScrollReveal from "@/components/useScrollReveal";

const valueGridItems = [
          { icon: ShieldCheck, title: "Compliances", desc: "Licensing, documentation, and NABH/NABL accreditation — end-to-end compliance for clinics, hospitals and healthcare facilities." },
  { icon: FileText, title: "Content", desc: "Patient-friendly websites, blogs, and explainer videos that build trust and visibility." },
  { icon: Megaphone, title: "Marketing", desc: "SEO, Google Ads, social media and patient engagement to drive consistent appointments." },
  { icon: GraduationCap, title: "Event", desc: "Health camps, seminars and webinars — planned and executed end-to-end." },
];

const consultingItems = [
  { title: "New Clinic Setup", desc: "Location, design, licensing, branding and patient acquisition — launch with confidence." },
          { title: "Hospital Buy & Sell", desc: "Valuation, diligence, negotiations and smooth transitions for clinics, hospitals and healthcare facilities." },
  { title: "Revenue Growth", desc: "Increase patient inflow, optimize operations and maximize profitability sustainably." },
  { title: "Technology Solutions", desc: "Implement EMR/EHR, telemedicine, appointments and secure data workflows." },
  { title: "AI Solutions", desc: "Chatbots, diagnostics support, automation and predictive analytics for care and growth." },
];

const whyItems = [
  { icon: ShieldCheck, title: "Compliance-Ready" },
  { icon: FileText, title: "Patient-First Content" },
  { icon: Megaphone, title: "Measurable Marketing" },
  { icon: GraduationCap, title: "Event Reach" },
  { icon: Cpu, title: "Tech Modernization" },
  { icon: Bot, title: "AI Advantage" },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const learnMoreRef = useRef(null);
  const valueGridRef = useRef(null);
  const cardGridRef = useRef(null);
  const iconCardGridRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(learnMoreRef, { delay: 0.1 });
  useScrollReveal(valueGridRef, { delay: 0.2 });
  useScrollReveal(cardGridRef, { delay: 0.3 });
  useScrollReveal(iconCardGridRef, { delay: 0.4 });
  useScrollReveal(statsRef, { delay: 0.5 });
  useScrollReveal(ctaRef, { delay: 0.6 });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div ref={heroRef}><HeroSlider /></div>
      <div ref={learnMoreRef}><HomeLearnMore/></div>
      <div ref={valueGridRef}>
        <ValueGrid
          heading="Our Services for Doctors, Clinics and Hospitals"
          subheading="Keep your design — change only content and routing for healthcare."
          items={valueGridItems}
        />
      </div>
      <div ref={cardGridRef}>
        <CardGrid
          heading="Consulting Solutions"
          subheading="From new clinic setup to AI — tailored, end-to-end support."
          items={consultingItems}
        />
      </div>
      <div ref={iconCardGridRef}>
        <IconCardGrid
          heading="Why Doctors, Clinics and Hospitals Choose Us"
          subheading="Compliance, content, marketing, events, technology and AI — all in one place."
          items={whyItems}
        />
      </div>
      <div ref={statsRef}><StatsBanner /></div>
      <div ref={ctaRef}>
        <BannerCTA
          heading="Ready to Grow Your Practice Confidently?"
          subheading="Get compliance, content, marketing and technology support tailored to your clinic."
          buttons={[
            { label: "Schedule a Consultation", href: "#", variant: "primary" },
            { label: "Request a Callback", href: "#", variant: "secondary" },
          ]}
        />
      </div>
      {/* Other homepage content can go here */}
    </main>
  );
}
"use client";

import ServiceHero from '@/components/services/ServiceHero';
import React, { useRef } from 'react';
import ValueGrid from '@/components/ValueGrid';
import { Shield, Megaphone, GraduationCap, Building2, LineChart, Cpu, Bot, FileText, Calendar, Phone, Briefcase } from 'lucide-react';
import TabbedComp2 from '@/components/services/TabbedComp2';
import BannerCTA from '@/components/BannerCTA';
import useScrollReveal from '@/components/useScrollReveal';

const doctorClinicHospitalServices = [
  {
    icon: Shield,
    title: 'Compliances',
    desc: 'Licensing, NABH/NABL, SOPs and audits for clinics/hospitals',
    link: '/services/compliances',
  },
  {
    icon: FileText,
    title: 'Content',
    desc: 'Medical websites, blogs, social media and explainers',
    link: '/services/content',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    desc: 'SEO, ads, social and patient engagement for growth',
    link: '/services/marketing',
  },
  {
    icon: GraduationCap,
    title: 'Event',
    desc: 'Health camps, seminars, webinars and end-to-end execution',
    link: '/services/event',
  },
];

const consultingSolutions = [
  {
    icon: Building2,
    title: 'New Clinic Setup',
    desc: 'Location, licensing, branding and patient acquisition strategy',
    link: '/services/new-clinic-setup',
  },
  {
    icon: Briefcase,
    title: 'Hospital Buy & Sell',
    desc: 'Valuation, diligence, negotiation and smooth transitions',
    link: '/services/hospital-buy-sell',
  },
  {
    icon: LineChart,
    title: 'Revenue Growth',
    desc: 'Data-driven patient inflow and profitability improvements',
    link: '/services/revenue-growth',
  },
  {
    icon: Cpu,
    title: 'Technology Solutions',
    desc: 'Clinic systems, telemedicine, EMR and cybersecurity',
    link: '/services/technology-solutions',
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    desc: 'Chatbots, diagnostics support, automation and analytics',
    link: '/services/ai-solutions',
  },
];

const services = () => {
  const heroRef = useRef(null);
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const tabbedRef = useRef(null);
  const ctaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(grid1Ref, { delay: 0.1 });
  useScrollReveal(grid2Ref, { delay: 0.2 });
  useScrollReveal(tabbedRef, { delay: 0.3 });
  useScrollReveal(ctaRef, { delay: 0.4 });

  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300'>
      <div ref={heroRef}><ServiceHero/></div>
      <section ref={grid1Ref}>
        <ValueGrid
          heading="Our Services for Doctors and Clinics"
          subheading="Keep your design — change only content and routing for healthcare."
          items={doctorClinicHospitalServices}
        />
      </section>
      <section ref={grid2Ref} className=" py-8">
        <ValueGrid
          heading="Consulting Solutions"
          subheading="From new clinic setup to AI — tailored, end-to-end support."
          items={consultingSolutions}
        />
      </section>
      <div ref={tabbedRef}><TabbedComp2 /></div>
      <div ref={ctaRef}>
        <BannerCTA
          heading="Need Help With Your Requirements?"
          subheading="Our experts are ready to guide you through every step of the process. Let's ensure your business meets all requirements and achieves your sustainability goals."
          buttons={[
            { label: 'Schedule a Consultation', href: '#', variant: 'primary', icon: Calendar },
            { label: 'Request a Callback', href: '#', variant: 'secondary', icon: Phone },
          ]}
        />
      </div>
    </div>
  )
}

export default services;
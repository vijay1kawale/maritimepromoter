"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactOffice from "../../components/contact/ContactOffice";
import ContactFaq from "../../components/contact/ContactFaq";
import OfficesSection from "../../components/contact/OfficesSection";
import BannerCTA from "../../components/BannerCTA";

// Dynamically import MapSection with SSR disabled
const MapSection = dynamic(() => import("../../components/contact/MapSection"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[32rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 z-0 flex items-center justify-center">
      <p className="text-gray-600 dark:text-gray-300">Loading map...</p>
    </div>
  ),
});

const contactInfo = [
  {
    icon: "phone",
    title: "Phone",
    details: [
      "+91 22 1234 5678",
      "+91-976-976-9100"
    ],
    link: 'tel:+912212345678',
  },
  {
    icon: "mail",
    title: "Email",
    details: [
      "info@doctorpromoter.com",
      "support@doctorpromoter.com"
    ],
    link: 'mailto:info@doctorpromoter.com',
  },
  {
    icon: "map-pin",
    title: "Head Office",
    details: [
      "789 Business Centre, Andheri West",
      "Mumbai, Maharashtra 400058"
    ],
    link: 'https://maps.google.com',
  },
];

const officeLocations = [
  {
    city: "Mumbai",
    address: "789 Business Centre, Andheri West, Mumbai, Maharashtra 400058",
    phone: "+91 22 1234 5678",
    email: "mumbai@doctorpromoter.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    coordinates: [19.0760, 72.8777]
  },
  {
    city: "Delhi",
    address: "456 Healthcare Hub, Connaught Place, New Delhi 110001",
    phone: "+91 11 1234 5678",
    email: "delhi@doctorpromoter.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    coordinates: [28.6139, 77.2090]
  },
  {
    city: "Bangalore",
    address: "321 Medical Tech Park, Koramangala, Bangalore, Karnataka 560034",
    phone: "+91 80 1234 5678",
    email: "bangalore@doctorpromoter.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    coordinates: [12.9716, 77.5946]
  },
  {
    city: "Hyderabad",
    address: "123 Healthcare District, Banjara Hills, Hyderabad, Telangana 500034",
    phone: "+91 40 1234 5678",
    email: "hyderabad@doctorpromoter.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    coordinates: [17.3850, 78.4867]
  }
];

const faqData = [
  {
    question: "What services does Doctor Promoter offer?",
    answer: "We help doctors and clinics with compliance (NABH/NABL, licenses), medical content, digital marketing, events, technology (EMR, telemedicine) and AI solutions."
  },
  {
    question: "How long does it take to get NABH/NABL accreditation?",
    answer: "NABH accreditation typically takes 3-6 months, while NABL accreditation can take 4-8 months. We provide end-to-end support including documentation, training, and audit preparation."
  },
  {
    question: "Do you work with small clinics and individual practitioners?",
    answer: "Yes, we work with healthcare providers of all sizes - from individual practitioners to multi-specialty hospitals. We tailor our approach to meet your specific needs and budget."
  },
  {
    question: "What healthcare compliance areas do you specialize in?",
    answer: "We specialize in healthcare compliance including NABH/NABL accreditation, biomedical waste management, drug licenses, AERB registration, fire safety, and all regulatory requirements for clinics and hospitals."
  },
  {
    question: "How do you ensure patient data security in your solutions?",
    answer: "We implement healthcare-grade security measures including HIPAA compliance, end-to-end encryption, secure cloud infrastructure, and regular security audits to protect sensitive patient information."
  },
  {
    question: "What makes Doctor Promoter different from other healthcare consultants?",
    answer: "Healthcare-only focus with execution playbooks — audit-ready compliance, patient-first content, performance marketing and modern tech for predictable growth. We don't just advise, we implement."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div><ContactHero /></div>
      <div><ContactForm /></div>
      <div><ContactOffice contactInfo={contactInfo} /></div>
      <div><ContactFaq faqData={faqData} /></div>
      <div><MapSection officeLocations={officeLocations} /></div>
      <div>
        <BannerCTA
          heading="Ready to Transform Your Healthcare Practice?"
          subheading="Get in touch with our healthcare experts to discuss how we can help you achieve compliance, grow your practice, and deliver better patient care."
          buttons={[
            { label: "Schedule a Consultation", href: "#", variant: "primary" },
            { label: "Request a Callback", href: "#", variant: "secondary" },
          ]}
        />
      </div>
    </main>
  );
}
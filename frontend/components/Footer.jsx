"use client";
import React from "react";
import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { regulatoryLinks } from "./Navbar";

const footerSections = [
  [
    {
      heading: "Accreditations",
      features: [
        <span className="font-semibold">Quality Standards</span>,
        "NABH Accreditation",
        "NABL Accreditation",
        "JCI Accreditation",
        "NABH Safe-I Certification",
        "ISO 9001:2015 Certification",
        "Green Building Certification",
      ],
    },
    {
      heading: "Clinic Compliance",
      features: [
        <span className="font-semibold">Core Licenses</span>,
        "Clinic Registration",
        "Biomedical Waste Authorization",
        "Drug License",
        "AERB Registration (Radiology)",
        <span className="font-semibold mt-2">Specialized Compliance</span>,
        "PCPNDT Act Compliance",
        "Bio-Medical Waste Management Rules Compliance",
        "Narcotics and Psychotropic Substances Act Compliance",
        "Clinical Establishment Act Registration",
        "Fire Safety Regulations",
        "AERB Decommissioning",
        "Data Privacy and HIPAA Compliance",
      ],
    },
    {
      heading: "Safety & Environment",
      features: [
        <span className="font-semibold">Facility Safety</span>,
        "Fire N.O.C. (Hospital/Clinic)",
        "Trade License (Clinic)",
        "AERB Radiation Safety Audit",
        "CGWANOC",
      ],
    },
  ],
  [
    {
      heading: "Laboratory Compliance",
      features: [
        <span className="font-semibold">Lab Standards</span>,
        "Laboratory Equipment Calibration",
        "Quality Control Protocols",
        "Testing Protocol Compliance",
      ],
    },
    {
      heading: "Pharmacy Compliance",
      features: [
        <span className="font-semibold">Pharmacy Management</span>,
        "Drug Inventory Management",
        "Expiry Date Management",
        "Drug Dispensing Laws Compliance",
      ],
    },
  ],
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-12 pb-6 px-4">
      {/* Top horizontal line */}
      <div className="w-full border-t border-white/10 mb-8"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* Logo & Company Info */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                                   <img src="/imgs/android-chrome-512x512.png" alt="Doctor Promoter Logo" className="h-20 w-20" />
            
          </div>
          <p className="text-sm text-white/80 max-w-xs mx-auto md:mx-0">
            Leading healthcare providers to compliant and resilient operations through innovative solutions.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/" className="hover:text-eco-green-4 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-eco-green-4 transition">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-eco-green-4 transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-eco-green-4 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold mb-3 text-white">Contact Us</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="flex items-center gap-2 justify-center md:justify-start"><Phone size={16} /> +91 9769769100</li>
            <li className="flex items-center gap-2 justify-center md:justify-start"><Mail size={16} /> doctorpromoter@gmail.com</li>
            <li>Plot no.8, Devi Annapurna Co-Op.Society, 112-113, 1st Floor, Mafco Market Road, Sector 18, Vashi, Navi Mumbai, Maharashtra 40705</li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h4 className="font-bold mb-3 text-white">Subscribe to Our Newsletter</h4>
          <p className="text-white/80 text-sm mb-3 max-w-xs mx-auto md:mx-0">Stay updated with our latest insights and news on healthcare compliance, practice growth, and medical technology.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full justify-center md:justify-start">
            <input type="email" placeholder="Enter your email" className="rounded-full px-4 py-2 text-sm bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-eco-green-4 w-full sm:w-auto" />
            <button type="submit" className="bg-eco-green-4 hover:bg-eco-green-3 rounded-full px-4 py-2 flex items-center justify-center text-white transition w-full sm:w-auto"><Send size={18} className="mr-1" /> </button>
          </form>
        </div>
      </div>
      {/* Services & Links - 3 headers per row, each with their features */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 py-10 text-sm text-white/80">
        {footerSections.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {row.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-2">
                <h5 className="font-medium text-eco-green-4 mb-2 text-lg text-center md:text-left">{section.heading}</h5>
                <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                  {section.features.map((feature, i) => (
                    typeof feature === 'string' ? (
                      regulatoryLinks[feature] ? (
                        <Link key={i} href={regulatoryLinks[feature]} className="py-0.5 text-xs hover:text-eco-green-4 transition-colors">{feature}</Link>
                      ) : (
                        <div key={i} className="py-0.5 text-xs">{feature}</div>
                      )
                    ) : (
                      React.cloneElement(feature, { key: i, className: "font-medium text-eco-green-4 text-xs" })
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/10 mt-4 text-xs text-white/60 gap-2 text-center md:text-left">
        <div>&copy; 2025 Neubrain Solutions Pvt. Ltd. All rights reserved.</div>
        <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

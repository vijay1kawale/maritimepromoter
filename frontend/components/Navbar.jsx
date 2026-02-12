
'use client';
import React, { useState } from "react";
import {
  Briefcase,
  Target,
  FileText,
  Building2,
  ClipboardList,
  BadgeCheck,
  ArrowRight,
  Sun,
  Moon,
  Shield,
  Users,
  Lock,
  GraduationCap,
  Award,
  TrendingUp,
  Leaf,
  Scale,
  MessageCircle,
  Monitor,
  Megaphone,
  Calendar,
  Microscope,
  Pill,
  Hospital,
  TestTube,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { regulatoryLinks as sharedRegulatoryLinks } from "@/lib/regulatoryLinks";


const trainingCategories = [
  { label: "Compliance Training", icon: Shield, href: "/trainings#compliance-training" },
  { label: "Digital Marketing for Doctors", icon: MessageCircle, href: "/trainings#digital-marketing-doctors" },
  { label: "Patient Communication Skills", icon: Users, href: "/trainings#patient-communication" },
  { label: "Technology Adoption (Telemedicine, AI, EMR)", icon: Monitor, href: "/trainings#technology-adoption" },
];


// This is the core mapping that must be consistent with regulatoryContent.js and page.jsx's regulatoryServiceKeyMap
export const regulatoryLinks = sharedRegulatoryLinks;

const regulatoryStages = [
  {
    label: "Accreditations",
    icon: BadgeCheck,
    color: "text-eco-green-4",
    sections: [
      {
        heading: "Quality Standards",
        items: [
          "NABH Accreditation",
          "NABL Accreditation",
          "JCI Accreditation",
          "NABH Safe-I Certification",
          "ISO 9001:2015 Certification",
          "Green Building Certification",
        ],
      },
    ],
  },
  {
    label: "Clinic Compliance",
    icon: ClipboardList,
    color: "text-eco-green-4",
    sections: [
      {
        heading: "Core Licenses",
        items: [
          "Clinic Registration",
          "Biomedical Waste Authorization",
          "Drug License",
          "AERB Registration (Radiology)",
        ],
      },
      {
        heading: "Specialized Compliance",
        items: [
          "PCPNDT Act Compliance",
          "Bio-Medical Waste Management Rules Compliance",
          "Narcotics and Psychotropic Substances Act Compliance",
          "Clinical Establishment Act Registration",
          "Fire Safety Regulations",
          "AERB Decommissioning",
          "Data Privacy and HIPAA Compliance",
        ],
      },
    ],
  },
  {
    label: "Safety & Environment",
    icon: Building2,
    color: "text-eco-green-4",
    sections: [
      {
        heading: "Facility Safety",
        items: [
          "Fire N.O.C. (Hospital/Clinic)",
          "Trade License (Clinic)",
          "AERB Radiation Safety Audit",
          "CGWANOC",
        ],
      },
    ],
  },
  {
    label: "Laboratory Compliance",
    icon: Microscope,
    color: "text-eco-green-4",
    sections: [
      {
        heading: "Lab Standards",
        items: [
          "Laboratory Equipment Calibration",
          "Quality Control Protocols",
          "Testing Protocol Compliance",
        ],
      },
    ],
  },
  {
    label: "Pharmacy Compliance",
    icon: Pill,
    color: "text-eco-green-4",
    sections: [
      {
        heading: "Pharmacy Management",
        items: [
          "Drug Inventory Management",
          "Expiry Date Management",
          "Drug Dispensing Laws Compliance",
        ],
      },
    ],
  },
];

const regulatoryFeatured = [
  {
    title: "NABH Accreditation",
    desc: "Quality standards accreditation for healthcare facilities",
  },
  {
    title: "Clinic Registration",
    desc: "Essential health department registration for clinics",
  },
  {
    title: "Drug License",
    desc: "Drugs control board licensing for medical facilities",
  },
  {
    title: "Fire N.O.C.",
    desc: "Fire safety clearance for hospitals and clinics",
  },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [trainingsDropdownOpen, setTrainingsDropdownOpen] = useState(false);
  const [regDropdownOpen, setRegDropdownOpen] = useState(false);
  const [marketingDropdownOpen, setMarketingDropdownOpen] = useState(false);
  const [growthDropdownOpen, setGrowthDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);
  const [mobileRegOpen, setMobileRegOpen] = useState(false);
  const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false);
  const [mobileGrowthOpen, setMobileGrowthOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [whoIsItForDropdownOpen, setWhoIsItForDropdownOpen] = useState(false);
  const [mobileWhoIsItForOpen, setMobileWhoIsItForOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Custom handler for training dropdown links
  const handleTrainingClick = (href) => {
    setTrainingsDropdownOpen(false);
    
    // Check if we're already on the trainings page
    if (window.location.pathname === '/trainings') {
      // Extract the hash from the href
      const hash = href.split('#')[1];
      if (hash) {
        // Update URL hash
        window.location.hash = hash;
        
        // Trigger scroll to training section after a delay to ensure component re-renders
        setTimeout(() => {
          const trainingSection = document.querySelector('[data-training-section]');
          if (trainingSection) {
            const navbarHeight = 96; // Height of the fixed navbar
            const elementPosition = trainingSection.offsetTop - navbarHeight;
            
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 300); // Increased delay to allow component to re-render
      }
    } else {
      // Navigate to trainings page with hash
      window.location.href = href;
    }
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-24">
        {/* Logo and tagline */}
        <div className="flex items-center gap-3 min-w-[170px]">
          <Link href="/" passHref legacyBehavior>
            <div className="flex flex-col items-start justify-center cursor-pointer">
                             <img src="/imgs/android-chrome-512x512.png" alt="Doctor Promoter Logo" className="h-16 w-16" />
            </div>
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-tangent text-xs text-gray-900 dark:text-white font-medium">

          <li><Link href="/doctor-platform" legacyBehavior passHref><a className="hover:text-eco-green-1 dark:hover:text-eco-green-4 transition relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">Doctor Platform</a></Link></li>
          <li className="relative group">
            <button
              className="hover:text-eco-green-1 dark:hover:text-eco-green-4 transition flex items-center gap-1 focus:outline-none relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              onMouseEnter={() => setWhoIsItForDropdownOpen(true)}
              onMouseLeave={() => setWhoIsItForDropdownOpen(false)}
              onFocus={() => setWhoIsItForDropdownOpen(true)}
              onBlur={() => setWhoIsItForDropdownOpen(false)}
            >
              Who is it for
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {/* Who is it for Dropdown (desktop) */}
            <div
              className="absolute top-full left-0 mt-[-2] w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-4 z-50 border border-gray-200 dark:border-gray-700"
              onMouseEnter={() => setWhoIsItForDropdownOpen(true)}
              onMouseLeave={() => setWhoIsItForDropdownOpen(false)}
              style={{ visibility: whoIsItForDropdownOpen ? 'visible' : 'hidden', opacity: whoIsItForDropdownOpen ? 1 : 0 }}
            >
              <div className="px-4">
                <Link
                  href="/who-is-it-for/medical-students"
                  onClick={() => setWhoIsItForDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <GraduationCap size={18} className="text-eco-green-4" />
                  <span className="font-medium">Medical Students</span>
                </Link>
                <Link
                  href="/who-is-it-for/doctors"
                  onClick={() => setWhoIsItForDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Users size={18} className="text-eco-green-4" />
                  <span className="font-medium">Doctors</span>
                </Link>
                <Link
                  href="/who-is-it-for/clinics"
                  onClick={() => setWhoIsItForDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Building2 size={18} className="text-eco-green-4" />
                  <span className="font-medium">Clinics</span>
                </Link>
                <Link
                  href="/who-is-it-for/hospitals"
                  onClick={() => setWhoIsItForDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Hospital size={18} className="text-eco-green-4" />
                  <span className="font-medium">Hospitals</span>
                </Link>
                <Link
                  href="/who-is-it-for/labs"
                  onClick={() => setWhoIsItForDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <TestTube size={18} className="text-eco-green-4" />
                  <span className="font-medium">Labs</span>
                </Link>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button
              className="hover:text-eco-green-1 transition flex items-center gap-1 focus:outline-none relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              onMouseEnter={() => setTrainingsDropdownOpen(true)}
              onMouseLeave={() => setTrainingsDropdownOpen(false)}
              onFocus={() => setTrainingsDropdownOpen(true)}
              onBlur={() => setTrainingsDropdownOpen(false)}
            >
              Training
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {/* Trainings Dropdown (desktop) */}
            <div
              className="fixed left-0 right-0 w-full bg-white dark:bg-gray-900 rounded-b-2xl shadow-2xl py-8 z-40 border-t border-gray-100 group-hover:visible group-focus-within:visible transition-all duration-200"
              onMouseEnter={() => setTrainingsDropdownOpen(true)}
              onMouseLeave={() => setTrainingsDropdownOpen(false)}
              style={{ visibility: trainingsDropdownOpen ? 'visible' : 'hidden', opacity: trainingsDropdownOpen ? 1 : 0, top: '64px' }}
            >
              <div className="max-w-7xl mx-auto px-12">
                <div className="text-center mb-8">
                  <h4 className="text-eco-green-4 font-tangent text-2xl font-bold mb-2">Upcoming Programs</h4>
                  <p className="text-gray-600 dark:text-gray-300">Workshops, seminars, CMEs and webinars — register or sync to calendar</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Training Calendar Box - Featured */}
                  <div className="lg:col-span-1">
                    <Link href="/training_calendar" onClick={() => setTrainingsDropdownOpen(false)}>
                      <div className="group bg-gradient-to-br from-eco-green-4/10 to-eco-green-3/10 dark:from-eco-green-4/20 dark:to-eco-green-3/20 rounded-xl p-6 hover:from-eco-green-4/20 hover:to-eco-green-3/20 dark:hover:from-eco-green-4/30 dark:hover:to-eco-green-3/30 transition-all duration-300 hover:shadow-lg cursor-pointer border-2 border-eco-green-4/20 hover:border-eco-green-4/40">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-eco-green-4/20 rounded-full p-3 flex items-center justify-center group-hover:bg-eco-green-4/30 transition-colors">
                            <Calendar size={24} className="text-eco-green-4" />
                          </span>
                          <h5 className="font-bold text-gray-900 dark:text-white group-hover:text-eco-green-4 transition-colors">Training Calendar</h5>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mb-3">
                          View upcoming workshops, seminars, CMEs and webinars. Register or sync to your calendar.
                        </p>
                        <div className="flex items-center gap-2 text-eco-green-4 text-sm font-medium group-hover:text-eco-green-5 transition-colors">
                          <span>View Calendar</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Training Categories */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trainingCategories.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => handleTrainingClick(item.href)}
                      className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-eco-green-1/10 transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-eco-green-4/10 rounded-full p-3 flex items-center justify-center group-hover:bg-eco-green-4/20 transition-colors">
                          <item.icon size={20} className="text-eco-green-4" />
                        </span>
                        <h5 className="font-bold text-gray-900 dark:text-white group-hover:text-eco-green-4 transition-colors">{item.label}</h5>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        Click to view detailed information about {item.label.toLowerCase()} training programs.
                      </p>
                    </div>
                  ))}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="/trainings" className="inline-flex items-center gap-2 text-eco-green-4 font-tangent text-lg font-medium hover:underline">
                    View all training categories <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button
              className="hover:text-eco-green-1 transition flex items-center gap-1 focus:outline-none relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              Marketing
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {/* Dropdown (desktop) */}
            <div
              className="fixed left-0 right-0 w-full bg-white dark:bg-gray-900 rounded-b-2xl shadow-2xl py-8 z-40 border-t border-gray-100 group-hover:visible group-focus-within:visible transition-all duration-200"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ visibility: dropdownOpen ? 'visible' : 'hidden', opacity: dropdownOpen ? 1 : 0, top: '64px' }}
            >
              <div className="max-w-7xl mx-auto flex gap-10 px-12">
                {/* Marketing column */}
                <div className="flex-1 pr-8 border-r border-gray-200">
                  <h4 className="text-eco-green-4 font-tangent text-base font-bold mb-4">Marketing</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                    {[{label:'Digital Marketing', icon: Megaphone, href:'/services/marketing'}, {label:'Medical Content', icon: FileText, href:'/services/content'}, {label:'Event Marketing', icon: GraduationCap, href:'/services/event'}, {label:'Reputation Management', icon: Users, href:'/services/marketing'}].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-eco-green-1/10 transition"
                      >
                        <span className="bg-eco-green-1/10 rounded-full p-2 flex items-center justify-center">
                          <item.icon size={16} className="text-eco-green-4" />
                        </span>
                        <span className="text-gray-900 dark:text-white font-tangent text-xs font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Growth Solutions column */}
                <div className="flex-1 pl-8">
                  <h4 className="text-eco-green-4 font-tangent text-base font-bold mb-4">Growth Solutions</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                    {[{label:'New Clinic Setup', icon: Building2, href:'/services/new-clinic-setup'}, {label:'Hospital Buy & Sell', icon: Briefcase, href:'/services/hospital-buy-sell'}, {label:'Revenue Growth', icon: TrendingUp, href:'/services/revenue-growth'}, {label:'Technology Solutions', icon: Monitor, href:'/services/technology-solutions'}, {label:'AI Solutions', icon: MessageCircle, href:'/services/ai-solutions'}].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-eco-green-1/10 transition"
                      >
                        <span className="bg-eco-green-1/10 rounded-full p-2 flex items-center justify-center">
                          <item.icon size={16} className="text-eco-green-4" />
                        </span>
                        <span className="text-gray-900 dark:text-white font-tangent text-xs font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button
              className="hover:text-eco-green-1 transition flex items-center gap-1 focus:outline-none relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              onMouseEnter={() => setRegDropdownOpen(true)}
              onMouseLeave={() => setRegDropdownOpen(false)}
              onFocus={() => setRegDropdownOpen(true)}
              onBlur={() => setRegDropdownOpen(false)}
            >
              Regulatory Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {/* Regulatory Dropdown (desktop) */}
            <div
              className="fixed left-0 right-0 w-full bg-white dark:bg-gray-900 rounded-b-2xl shadow-2xl py-6 z-40 border-t border-gray-100 dark:border-gray-800 group-hover:visible group-focus-within:visible transition-all duration-200"
              onMouseEnter={() => setRegDropdownOpen(true)}
              onMouseLeave={() => setRegDropdownOpen(false)}
              style={{ visibility: regDropdownOpen ? 'visible' : 'hidden', opacity: regDropdownOpen ? 1 : 0, top: '64px' }}
            >
              <div className="max-w-6xl mx-auto px-6">
                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Left Column - Accreditations & Core Compliance */}
                  <div className="space-y-6">
                    {/* Accreditations */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BadgeCheck size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Accreditations</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[0].sections[0].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Core Clinic Compliance */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ClipboardList size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Core Compliance</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[1].sections[0].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Specialized Services */}
                  <div className="space-y-6">
                    {/* Specialized Compliance */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Shield size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Specialized Compliance</h3>
                      </div>
                                            <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[1].sections[1].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                                </a>
                              </Link>
                        ))}
                      </div>
                    </div>

                    {/* Safety & Environment */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Safety & Environment</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[2].sections[0].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - New Categories */}
                  <div className="space-y-6">
                    {/* Laboratory Compliance */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Microscope size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Laboratory Compliance</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[3].sections[0].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Pharmacy Compliance */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Pill size={20} className="text-eco-green-4" />
                        <h3 className="font-tangent font-bold text-eco-green-4">Pharmacy Compliance</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {regulatoryStages[4].sections[0].items.map((item) => (
                          <Link key={item} href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                            <a 
                              onClick={() => setRegDropdownOpen(false)} 
                              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-eco-green-1/10 transition-colors"
                            >
                              <span className="text-gray-900 dark:text-white text-sm font-medium">{item}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Quick Access */}
                    <div className="bg-gradient-to-r from-eco-green-1/10 to-eco-green-2/10 rounded-lg p-4 border border-eco-green-1/20">
                      <h4 className="font-tangent font-bold text-eco-green-4 text-sm mb-2">Quick Access</h4>
                      <div className="space-y-2">
                        <Link href="/regulatory/Accreditations/NABH/NABH%20Accreditation" legacyBehavior passHref>
                          <a onClick={() => setRegDropdownOpen(false)} className="text-xs text-gray-600 dark:text-gray-400 hover:text-eco-green-4 transition-colors">
                            → NABH Accreditation
                          </a>
                        </Link>
                        <Link href="/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration" legacyBehavior passHref>
                          <a onClick={() => setRegDropdownOpen(false)} className="text-xs text-gray-600 dark:text-gray-400 hover:text-eco-green-4 transition-colors">
                            → Clinic Registration
                          </a>
                        </Link>
                        <Link href="/regulatory/Clinic%20Licenses/Drugs%20Control/Drug%20License" legacyBehavior passHref>
                          <a onClick={() => setRegDropdownOpen(false)} className="text-xs text-gray-600 dark:text-gray-400 hover:text-eco-green-4 transition-colors">
                            → Drug License
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button
              className="hover:text-eco-green-1 dark:hover:text-eco-green-4 transition flex items-center gap-1 focus:outline-none relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-eco-green-4 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
              onFocus={() => setAboutDropdownOpen(true)}
              onBlur={() => setAboutDropdownOpen(false)}
            >
              About Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {/* About Us Dropdown (desktop) */}
            <div
              className="absolute top-full left-0 mt-[-2] w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-4 z-50 border border-gray-200 dark:border-gray-700"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
              style={{ visibility: aboutDropdownOpen ? 'visible' : 'hidden', opacity: aboutDropdownOpen ? 1 : 0 }}
            >
              <div className="px-4">
                <Link
                  href="/about"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Building2 size={18} className="text-eco-green-4" />
                  <span className="font-medium">About Company</span>
                </Link>
                <Link
                  href="/team"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Users size={18} className="text-eco-green-4" />
                  <span className="font-medium">Our Team</span>
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <FileText size={18} className="text-eco-green-4" />
                  <span className="font-medium">Blogs & Insights</span>
                </Link>
                <Link
                  href="/work-with-us"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <Briefcase size={18} className="text-eco-green-4" />
                  <span className="font-medium">Work with Us</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-eco-green-1/10 transition text-gray-900 dark:text-white hover:text-eco-green-4"
                >
                  <MessageCircle size={18} className="text-eco-green-4" />
                  <span className="font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        {/* Icons */}
        <div className="flex items-center gap-5 ml-2">
          {/* Theme toggle icon */}
          <button
            className="text-gray-800 dark:text-gray-100 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun size={24} />
            ) : (
              <Moon size={24} />
            )}
          </button>
          {/* Search icon */}
          <button className="text-gray-800 dark:text-gray-100 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition" aria-label="Search">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          {/* Hamburger menu for mobile */}
          <button className="md:hidden text-gray-800 dark:text-gray-100 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="24" y2="7" /><line x1="4" y1="14" x2="24" y2="14" /><line x1="4" y1="21" x2="24" y2="21" /></svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white dark:bg-gray-900 font-tangent text-lg text-gray-900 dark:text-white shadow-lg">

          <li><Link href="/doctor-platform" legacyBehavior passHref><a className="hover:text-eco-green-1 dark:hover:text-eco-green-4 transition" onClick={() => setMenuOpen(false)}>Doctor Platform</a></Link></li>
          {/* Who is it for Dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition focus:outline-none"
              onClick={() => setMobileWhoIsItForOpen((v) => !v)}
              aria-expanded={mobileWhoIsItForOpen}
            >
              <span>Who is it for</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileWhoIsItForOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileWhoIsItForOpen && (
              <div className="pl-4 pb-2">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="/who-is-it-for/medical-students" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <GraduationCap size={18} className="text-eco-green-4" />
                        Medical Students
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-is-it-for/doctors" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Users size={18} className="text-eco-green-4" />
                        Doctors
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-is-it-for/clinics" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Building2 size={18} className="text-eco-green-4" />
                        Clinics
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-is-it-for/hospitals" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Hospital size={18} className="text-eco-green-4" />
                        Hospitals
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-is-it-for/labs" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <TestTube size={18} className="text-eco-green-4" />
                        Labs
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* Trainings Dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition focus:outline-none"
              onClick={() => setMobileTrainingsOpen((v) => !v)}
              aria-expanded={mobileTrainingsOpen}
            >
              <span>Trainings</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileTrainingsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileTrainingsOpen && (
              <div className="pl-4 pb-2 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-eco-green-4/40 scrollbar-track-transparent">
                <div className="font-semibold text-eco-green-4 text-base mb-1">Training Calendar</div>
                <ul className="flex flex-col gap-1 mb-4">
                  <li>
                    <Link href="/training_calendar" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-2 px-3 text-base hover:text-eco-green-4 bg-eco-green-4/10 rounded-lg hover:bg-eco-green-4/20 transition-colors" onClick={() => setMenuOpen(false)}>
                        <Calendar size={18} className="text-eco-green-4" />
                        <div>
                          <div className="font-medium">Training Calendar</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">View upcoming workshops & events</div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="font-semibold text-eco-green-4 text-base mb-1">Training Categories</div>
                <ul className="flex flex-col gap-1">
                  {trainingCategories.map((item) => (
                    <li key={item.label}>
                      <div 
                        className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4 cursor-pointer"
                        onClick={() => {
                          handleTrainingClick(item.href);
                          setMenuOpen(false);
                        }}
                      >
                        <item.icon size={18} className="text-eco-green-4" />
                        {item.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {/* Regulatory Services Dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition focus:outline-none"
              onClick={() => setMobileRegOpen((v) => !v)}
              aria-expanded={mobileRegOpen}
            >
              <span>Regulatory Services</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileRegOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileRegOpen && (
              <div className="pl-4 pb-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-eco-green-4/40 scrollbar-track-transparent">
                {/* Accreditations */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <BadgeCheck size={18} className="text-eco-green-4" />
                    Accreditations
                  </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[0].sections[0].items.map((item) => (
                      <li key={item}>
                        <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Compliance */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <ClipboardList size={18} className="text-eco-green-4" />
                    Core Compliance
                  </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[1].sections[0].items.map((item) => (
                      <li key={item}>
                        <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized Compliance */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <Shield size={18} className="text-eco-green-4" />
                    Specialized Compliance
                  </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[1].sections[1].items.map((item) => (
                      <li key={item}>
                        <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="text-sm hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety & Environment */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <Building2 size={18} className="text-eco-green-4" />
                    Safety & Environment
                    </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[2].sections[0].items.map((item) => (
                            <li key={item}>
                              <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="text-sm hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                {/* Laboratory Compliance */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <Microscope size={18} className="text-eco-green-4" />
                    Laboratory Compliance
                  </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[3].sections[0].items.map((item) => (
                      <li key={item}>
                        <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="text-sm hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pharmacy Compliance */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 font-semibold text-eco-green-4 text-base mb-2">
                    <Pill size={18} className="text-eco-green-4" />
                    Pharmacy Compliance
                  </div>
                  <ul className="flex flex-col gap-0.5 pl-4">
                    {regulatoryStages[4].sections[0].items.map((item) => (
                      <li key={item}>
                        <Link href={regulatoryLinks[item] || '#'} legacyBehavior passHref>
                          <a className="text-sm hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* Marketing Dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition focus:outline-none"
              onClick={() => setMobileMarketingOpen((v) => !v)}
              aria-expanded={mobileMarketingOpen}
            >
              <span>Marketing</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileMarketingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileMarketingOpen && (
              <div className="pl-4 pb-2">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="/services/marketing" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Megaphone size={18} className="text-eco-green-4" />
                        Digital Marketing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/content" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <FileText size={18} className="text-eco-green-4" />
                        Medical Content
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/event" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <GraduationCap size={18} className="text-eco-green-4" />
                        Event Marketing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/marketing" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Users size={18} className="text-eco-green-4" />
                        Reputation Management
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* About Us Dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-eco-green-1 dark:hover:text-eco-green-4 transition focus:outline-none"
              onClick={() => setMobileAboutOpen((v) => !v)}
              aria-expanded={mobileAboutOpen}
            >
              <span>About Us</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 pb-2">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="/about" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Building2 size={18} className="text-eco-green-4" />
                        About Company
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Users size={18} className="text-eco-green-4" />
                        Our Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <FileText size={18} className="text-eco-green-4" />
                        Blogs & Insights
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/work-with-us" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <Briefcase size={18} className="text-eco-green-4" />
                        Work with Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior passHref>
                      <a className="flex items-center gap-2 py-1 text-base hover:text-eco-green-4" onClick={() => setMenuOpen(false)}>
                        <MessageCircle size={18} className="text-eco-green-4" />
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
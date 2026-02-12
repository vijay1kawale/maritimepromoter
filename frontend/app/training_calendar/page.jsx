'use client';
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Award, 
  Star, 
  Monitor, 
  Leaf, 
  CheckCircle,
  Search,
  Filter,
  ChevronRight,
  Clock,
  User,
  BarChart3,
  Globe,
  ArrowRight,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import BannerCTA from '../../components/BannerCTA';
import ConsultationForm from '../../components/ConsultationForm';
import WorkshopRegistrationForm from '../../components/WorkshopRegistrationForm';

const TrainingCalendar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);
  const [expandedWorkshops, setExpandedWorkshops] = useState(new Set());
  const [registrationModal, setRegistrationModal] = useState({
    open: false,
    workshop: null
  });

  // Toggle workshop expansion
  const toggleWorkshopExpansion = (workshopId) => {
    setExpandedWorkshops(prev => {
      const newSet = new Set(prev);
      if (newSet.has(workshopId)) {
        newSet.delete(workshopId);
      } else {
        newSet.add(workshopId);
      }
      return newSet;
    });
  };

  // Open registration modal
  const openRegistrationModal = (workshop) => {
    setRegistrationModal({
      open: true,
      workshop
    });
  };

  // Close registration modal
  const closeRegistrationModal = () => {
    setRegistrationModal({
      open: false,
      workshop: null
    });
  };

  // Open course landing page
  const openCourseLandingPage = (workshop) => {
    const courseUrls = {
      1: "#", // Compliance for Clinics (NABH/NABL)
      2: "#", // Digital Marketing for Doctors Bootcamp
      3: "#", // Patient Communication Skills Workshop
      4: "#", // Technology Adoption: EMR & Telemedicine
      5: "#", // AI for Clinics: Practical Use-cases
      6: "#", // Event Outreach: Health Camps & CMEs
    };
    
    const courseUrl = courseUrls[workshop.id];
    if (courseUrl && courseUrl !== '#') {
      window.open(courseUrl, '_blank');
    } else {
      alert(`Course landing page for "${workshop.title}" will be available soon!`);
    }
  };

  // Featured workshops data (current month)
  const featuredWorkshops = [
    {
      id: 1,
      title: "Compliance for Clinics (NABH/NABL Essentials)",
      description: "Practical steps to prepare for NABH/NABL: SOPs, documentation, biomedical waste, audits and renewals.",
      dates: "September 15-16, 2024",
      duration: "2 Days (Weekend)",
      time: "10:00 AM - 2:00 PM IST",
      level: "All Levels",
      price: "₹999",
      format: "Virtual (Zoom)",
      category: "Compliance",
      certified: true,
      featured: true,
      razorpayLink: "#"
    },
    {
      id: 2,
      title: "Digital Marketing for Doctors Bootcamp",
      description: "SEO, Google Ads, social media, reviews and patient journeys — build a predictable growth engine.",
      dates: "September 21-22, 2024",
      duration: "2 Days (Weekend)",
      time: "3:00 PM - 5:00 PM IST",
      level: "Beginner to Intermediate",
      price: "₹999",
      format: "Virtual (Zoom)",
      category: "Marketing",
      certified: true,
      featured: true,
      razorpayLink: "#"
    }
  ];

  // All workshops data for schedule section
  const allWorkshops = [
    ...featuredWorkshops,
    {
      id: 3,
      title: "Patient Communication Skills Workshop",
      description: "Consultation experience, empathy, consent, follow-ups and handling sensitive conversations.",
      dates: "September 28, 2024",
      duration: "1 Day",
      time: "2:00 PM - 5:00 PM IST",
      level: "All Levels",
      price: "₹799",
      format: "Virtual (Zoom)",
      category: "Patient Care",
      certified: true,
      featured: false,
      razorpayLink: "#"
    },
    {
      id: 4,
      title: "Technology Adoption: EMR & Telemedicine",
      description: "Selecting and adopting EMR/EHR, telemedicine workflows, data privacy and change management.",
      dates: "October 05, 2024",
      duration: "1 Day",
      time: "4:00 PM - 6:00 PM IST",
      level: "Beginner to Intermediate",
      price: "₹799",
      format: "Virtual (Zoom)",
      category: "Technology",
      certified: true,
      featured: false,
      razorpayLink: "#"
    },
    {
      id: 5,
      title: "AI for Clinics: Practical Use-cases",
      description: "Chatbots for patient queries, diagnostics support, marketing automation and predictive analytics.",
      dates: "October 12, 2024",
      duration: "1 Day",
      time: "11:00 AM - 1:00 PM IST",
      level: "All Levels",
      price: "₹799",
      format: "Virtual (Zoom)",
      category: "AI",
      certified: true,
      featured: false,
      razorpayLink: "#"
    },
    {
      id: 6,
      title: "Event Outreach: Health Camps & CMEs",
      description: "Plan permissions, promotions, on-ground ops and reporting for impactful outreach.",
      dates: "October 19, 2024",
      duration: "1 Day",
      time: "3:00 PM - 5:00 PM IST",
      level: "All Levels",
      price: "₹799",
      format: "Virtual (Zoom)",
      category: "Events",
      certified: true,
      featured: false,
      razorpayLink: "#"
    }
  ];

  // Filter workshops based on search and month
  useEffect(() => {
    let filtered = allWorkshops;
    
    if (searchTerm) {
      filtered = filtered.filter(workshop => 
        workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workshop.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedMonth !== 'all') {
      filtered = filtered.filter(workshop => {
        // Extract the first date from the dates string and parse it
        const firstDate = workshop.dates.split('&')[0].trim();
        const dateMatch = firstDate.match(/(\w+)\s+(\d+)-(\d+)/);
        if (dateMatch) {
          const monthName = dateMatch[1];
          const monthMap = {
            'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
            'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
          };
          return monthMap[monthName] === parseInt(selectedMonth);
        }
        return false;
      });
    }
    
    setFilteredWorkshops(filtered);
  }, [searchTerm, selectedMonth]);

  // Get month name from month number
  const getMonthName = (monthNum) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNum];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 1. Hero Component */}
      <section className="bg-gradient-to-br from-eco-green-1/20 via-white to-eco-green-2/20 dark:from-eco-green-1/10 dark:via-gray-900 dark:to-eco-green-2/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-gray-900 dark:text-white">Doctor Promoter</span>{' '}
            <span className="text-eco-green-4">Training Calendar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore upcoming trainings for doctors and clinic teams — compliance, marketing, patient communication, technology and AI. 
            Book your spot or request custom programs for your practice. Each session is practical and certification-ready.
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-5 h-5 text-eco-green-4" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Regular Sessions</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <Users className="w-5 h-5 text-eco-green-4" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-eco-green-4" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Multiple Formats</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-eco-green-4" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Certified Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Workshops by Month Section */}
      <section className="py-16 md:py-20 bg-amber-50 dark:bg-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ✩ Featured Workshops by Month ✩
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our flagship certification programs designed to advance your career in Healthcare and sustainability.
            </p>
          </div>
          
          {/* Featured Workshops Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {featuredWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-amber-200 dark:border-amber-800 relative overflow-hidden">
                {/* Featured Badge - Positioned at top right of the entire card */}
                {workshop.featured && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 shadow-lg border border-orange-400/30">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-200 animate-pulse" />
                      <span className="tracking-wide hidden sm:inline">FEATURED</span>
                      <span className="tracking-wide sm:hidden">⭐</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  {/* Left Column - Workshop Info */}
                  <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    {/* Information Tags - Mobile Optimized */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1">
                        <Monitor className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">{workshop.format}</span>
                        <span className="sm:hidden">Virtual</span>
                      </span>
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1">
                        <Leaf className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">{workshop.category}</span>
                        <span className="sm:hidden">{workshop.category}</span>
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">Certified</span>
                        <span className="sm:hidden">✓</span>
                      </span>
                    </div>
                    
                    {/* Workshop Title and Description */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight">
                        {workshop.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                    
                    {/* Workshop Details - Mobile Optimized Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{workshop.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{workshop.duration} • {workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <BarChart3 className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{workshop.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <User className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{workshop.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Pricing and Actions */}
                  <div className="lg:col-span-1 flex flex-col justify-between space-y-4 md:space-y-6">
                    {/* Pricing Section - Added top margin to avoid featured tag overlap */}
                    <div className="text-center lg:text-right pt-8 md:pt-10">
                      <div className="text-2xl md:text-3xl font-bold text-eco-green-4 mb-1">
                        {workshop.price}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        per participant
                      </div>
                    </div>
                    
                    {/* Action Buttons - Mobile Optimized */}
                    <div className="space-y-2 md:space-y-3">
                      <button 
                        onClick={() => openRegistrationModal(workshop)}
                        className="w-full bg-eco-green-4 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <span className="hidden sm:inline">Register Now</span>
                        <span className="sm:hidden">Register</span>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <button 
                        onClick={() => openCourseLandingPage(workshop)}
                        className="w-full bg-blue-600 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <span className="hidden sm:inline">View Course</span>
                        <span className="sm:hidden">Course</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <button 
                        onClick={() => toggleWorkshopExpansion(workshop.id)}
                        className="w-full bg-white text-eco-green-4 border border-eco-green-4 py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium hover:bg-eco-green-4 hover:text-white transition-colors text-sm md:text-base"
                      >
                        {expandedWorkshops.has(workshop.id) ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Course Details Section - Mobile Optimized */}
                {expandedWorkshops.has(workshop.id) && (
                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-amber-200 dark:border-amber-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {/* Target Audience */}
                      <div className="text-center p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                        <div className="bg-eco-green-4/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Target Audience</h4>
                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Doctors and clinicians</li>
                          <li>• Clinic administrators</li>
                          <li>• Marketing/ops coordinators</li>
                        </ul>
                      </div>

                      {/* Learning Objectives */}
                      <div className="text-center p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                        <div className="bg-eco-green-4/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                          <Award className="w-5 h-5 md:w-6 md:h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Learning Objectives</h4>
                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Implement clinic SOPs and documentation</li>
                          <li>• Set up compliant marketing journeys</li>
                          <li>• Adopt EMR/telemedicine securely</li>
                        </ul>
                      </div>

                      {/* Hands-on Activities */}
                      <div className="text-center p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                        <div className="bg-eco-green-4/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                          <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Hands-on Activities</h4>
                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Templates and checklists</li>
                          <li>• Role-play and scripts</li>
                          <li>• Tool walkthroughs</li>
                        </ul>
                      </div>

                      {/* Why It Matters */}
                      <div className="text-center p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl sm:col-span-2 lg:col-span-1">
                        <div className="bg-eco-green-4/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Why It Matters</h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                          Patient trust, compliance and predictable growth require practical skills and repeatable playbooks.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Training Schedule Section with Search and Filtering */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Training Schedule
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Browse our comprehensive training calendar and find the perfect program for your needs.
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search workshops by title, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            {/* Month Filter Buttons */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by Month:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedMonth('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedMonth === 'all'
                      ? 'bg-eco-green-4 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-eco-green-4/10'
                  }`}
                >
                  All Months
                </button>
                {[
                  { value: '8', label: 'September' },
                  { value: '9', label: 'October' },
                  { value: '10', label: 'November' },
                  { value: '11', label: 'December' },
                  { value: '0', label: 'January' }
                ].map((month) => (
                  <button
                    key={month.value}
                    onClick={() => setSelectedMonth(month.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedMonth === month.value
                        ? 'bg-eco-green-4 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-eco-green-4/10'
                    }`}
                  >
                    {month.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Workshops Grid */}
          <div className="grid grid-cols-1 gap-6">
            {filteredWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Workshop Info */}
                  <div className="lg:col-span-2">
                    {/* Workshop Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                          {workshop.format}
                        </span>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                          {workshop.category}
                        </span>
                      </div>
                                             {workshop.featured && (
                         <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg border border-orange-400/30">
                           <Star className="w-4 h-4 text-yellow-200 animate-pulse" />
                           <span className="tracking-wide">FEATURED</span>
                         </div>
                       )}
                    </div>
                    
                    {/* Workshop Title and Description */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {workshop.description}
                    </p>
                    
                    {/* Workshop Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.duration} • {workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <BarChart3 className="w-4 h-4" />
                        <span>{workshop.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Award className="w-4 h-4" />
                        <span>{workshop.certified ? 'Certified' : 'Non-Certified'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Pricing and Action */}
                  <div className="lg:col-span-1 flex flex-col justify-between">
                    <div className="text-center lg:text-right mb-4">
                      <div className="text-3xl font-bold text-eco-green-4">
                        {workshop.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        per participant
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <button 
                        onClick={() => openRegistrationModal(workshop)}
                        className="w-full bg-eco-green-4 text-white py-3 px-6 rounded-lg font-medium hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2"
                      >
                        Register Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => openCourseLandingPage(workshop)}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        View Course
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => toggleWorkshopExpansion(workshop.id)}
                        className="w-full bg-white text-eco-green-4 border border-eco-green-4 py-3 px-6 rounded-lg font-medium hover:bg-eco-green-4 hover:text-white transition-colors"
                      >
                        {expandedWorkshops.has(workshop.id) ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Course Details Section */}
                {expandedWorkshops.has(workshop.id) && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Target Audience */}
                      <div className="text-center">
                        <div className="bg-eco-green-4/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Users className="w-6 h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Target Audience</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Sustainability professionals</li>
                          <li>• Healthcare practitioners</li>
                          <li>• Corporate leaders</li>
                        </ul>
                      </div>

                      {/* Learning Objectives */}
                      <div className="text-center">
                        <div className="bg-eco-green-4/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Award className="w-6 h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Objectives</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Master key concepts</li>
                          <li>• Apply best practices</li>
                          <li>• Develop practical skills</li>
                        </ul>
                      </div>

                      {/* Hands-on Activities */}
                      <div className="text-center">
                        <div className="bg-eco-green-4/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <BarChart3 className="w-6 h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hands-on Activities</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Case studies</li>
                          <li>• Group exercises</li>
                          <li>• Real-world projects</li>
                        </ul>
                      </div>

                      {/* Why It Matters */}
                      <div className="text-center">
                        <div className="bg-eco-green-4/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-6 h-6 text-eco-green-4" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Why It Matters</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Stay ahead in the rapidly evolving sustainability landscape with practical knowledge and skills.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredWorkshops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No workshops found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Choose Our Healthcare Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Doctor Trainings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Practical, healthcare-focused trainings with certification-ready outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Clinic-Ready Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Templates, SOPs and tool walkthroughs you can implement the next day.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Expert Instructors
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from seasoned professionals with 10-20 years of real-world experience in Healthcare, carbon accounting, and sustainability.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Global Standards
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Training aligned with international frameworks like GRI, TCFD, ISO standards, and crucial regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner CTA Section */}
      <section className="py-20 bg-eco-green-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need a Custom Program for Your Clinic?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We design custom trainings for clinic teams across compliance, marketing, patient communication and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Request Custom Training
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Training Team
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm />

      {/* Workshop Registration Modal */}
      {registrationModal.open && registrationModal.workshop && (
        <WorkshopRegistrationForm
          workshop={registrationModal.workshop}
          open={registrationModal.open}
          onClose={closeRegistrationModal}
        />
      )}
    </div>
  );
};

export default TrainingCalendar;

"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, GraduationCap, Clock, Users, MessageCircle, Monitor, Shield, Scale, Award, Leaf, ChevronRight, CheckCircle, Cpu, Bot } from 'lucide-react';
import BannerCTA from '@/components/BannerCTA';
import ConsultationForm from '@/components/ConsultationForm';
import TrainingRegistrationForm from '@/components/TrainingRegistrationForm';

const TrainingCategories = {
  "compliance-training": {
    title: "Compliance Training",
    icon: Shield,
    description: "NABH/NABL standards, biomedical waste, documentation, SOPs and audit readiness for clinics.",
    features: [
      "NABH/NABL Essentials",
      "Clinical SOPs & Documentation",
      "Biomedical Waste Management",
      "Internal Audits & CAPA",
      "Licenses & Renewals",
      "Patient Safety & Quality",
    ],
    duration: "1-3 Days",
    format: "In-person / Virtual",
    imageText: "COMPLIANCE",
    imageSubtext: "HEALTHCARE TRAINING",
    razorpayLink: "https://rzp.io/l/compliance-training"
  },
  "digital-marketing-doctors": {
    title: "Digital Marketing for Doctors",
    icon: MessageCircle,
    description: "SEO, ads, social media and patient engagement systems tailored for healthcare.",
    features: [
      "Healthcare SEO & Local SEO",
      "Google & Social Ads Funnels",
      "Content & Reputation Management",
      "Clinics’ Analytics & Conversion",
      "CRM & Patient Journeys",
      "Compliance in Marketing",
    ],
    duration: "1-2 Days",
    format: "In-person / Virtual",
    imageText: "MARKETING",
    imageSubtext: "FOR DOCTORS",
    razorpayLink: "https://rzp.io/l/digital-marketing-doctors"
  },
  "patient-communication": {
    title: "Patient Communication Skills",
    icon: Users,
    description: "Consultation experience, empathy, consent, follow-ups and handling sensitive conversations.",
    features: [
      "Patient-centric Consultations",
      "Explaining Procedures & Risks",
      "Informed Consent & Documentation",
      "Follow-ups & Recalls",
      "Handling Feedback & Reviews",
      "Team Communication Protocols",
    ],
    duration: "1 Day",
    format: "In-person / Virtual",
    imageText: "PATIENT",
    imageSubtext: "COMMUNICATION",
    razorpayLink: "https://rzp.io/l/patient-communication"
  },
  "technology-adoption": {
    title: "Technology Adoption (Telemedicine, AI, EMR)",
    icon: Cpu,
    description: "Selecting and adopting EMR/EHR, telemedicine workflows, data privacy and AI use-cases in clinics.",
    features: [
      "EMR/EHR Selection & Setup",
      "Telemedicine Workflows",
      "Data Privacy & Security",
      "Interoperability & Integrations",
      "AI Tools & Practical Use-cases",
      "Change Management & Training",
    ],
    duration: "1-2 Days",
    format: "In-person / Virtual",
    imageText: "TECH",
    imageSubtext: "ADOPTION",
    razorpayLink: "https://rzp.io/l/technology-adoption"
  },


  



};

const TrainingsPage = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null);

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && TrainingCategories[hash]) {
        setActiveCategory(hash);
        
        // Scroll to the training section after a longer delay to ensure component re-renders
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
    };

    // Check URL hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Update URL hash without page reload
    window.history.pushState(null, null, `#${category}`);
    
    // Smooth scroll to the training information section when a category is selected
    if (category) {
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
      }, 100); // Small delay to ensure state update
    }
  };

  const currentCategory = TrainingCategories[activeCategory];

  const handleEnrollNow = () => {
    setSelectedTraining(currentCategory);
    setShowRegistrationModal(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Common for all training options */}
      <section className="bg-gradient-to-br from-eco-green-1/10 via-white to-eco-green-2/10 dark:from-eco-green-1/5 dark:via-gray-900 dark:to-eco-green-2/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-gray-900 dark:text-white">Healthcare</span>{' '}
              <span className="text-eco-green-4">Trainings</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive training programs designed to build healthcare capabilities in compliance, digital marketing, patient communication, and technology adoption. Select a training from the header menu to view details.
            </p>
            
            {/* Training Features */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full border border-eco-green-4/30 shadow-sm">
                <Clock className="w-5 h-5 text-eco-green-4" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Flexible Duration</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full border border-eco-green-4/30 shadow-sm">
                <MapPin className="w-5 h-5 text-eco-green-4" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">In-person & Virtual</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full border border-eco-green-4/30 shadow-sm">
                <GraduationCap className="w-5 h-5 text-eco-green-4" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Certified Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories Section - Dynamic content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800" data-training-section>
        <div className="max-w-7xl mx-auto px-6">
          {/* Active Category Details - Show first when a category is selected */}
          {activeCategory ? (
            <>
              {/* Back to All Trainings Overview */}
              <div className="mb-8">
                <button 
                  onClick={() => {
                    handleCategoryChange("");
                    // Scroll to top when going back to overview
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  className="flex items-center gap-2 text-eco-green-4 hover:text-eco-green-5 transition-colors font-medium"
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  Back to All Trainings Overview
                </button>
              </div>
            <div id={activeCategory} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Training Details */}
                <div>
                  {/* Header with Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-eco-green-4/10 p-4 rounded-xl">
                      <currentCategory.icon className="w-12 h-12 text-eco-green-4" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentCategory.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {currentCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Details Boxes */}
                  <div className="flex gap-4 mb-8">
                    <div className="bg-eco-green-1/20 px-6 py-4 rounded-lg flex items-center gap-3">
                      <Clock className="w-6 h-6 text-eco-green-4" />
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{currentCategory.duration}</div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-4 rounded-lg flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Format</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{currentCategory.format}</div>
                      </div>
                    </div>
                  </div>

                  {/* Training Modules */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Training Modules:</h4>
                    <div className="space-y-3">
                      {currentCategory.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-eco-green-4/20 p-1.5 rounded-full mt-1 flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-eco-green-4" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call-to-Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleEnrollNow}
                      className="bg-eco-green-4 text-white px-8 py-4 rounded-lg font-semibold hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2"
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-eco-green-4 text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-eco-green-4 hover:text-white transition-colors">
                      Download Curriculum
                    </button>
                  </div>
                </div>

                {/* Right Column - Image and Statistics */}
                <div className="space-y-8">
                  {/* Main Image */}
                  <div className="relative bg-eco-green-1/20 rounded-2xl p-8 text-center">
                    <div className="relative">
                      {/* Placeholder for training image - you can replace this with actual images */}
                      <div className="w-full h-64 bg-gradient-to-br from-eco-green-2 to-eco-green-3 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10 text-white">
                          <div className="text-6xl font-bold mb-2">{currentCategory.imageText}</div>
                          <div className="text-lg">{currentCategory.imageSubtext}</div>
                        </div>
                        {/* Circular icons around text */}
                        <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Statistics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-eco-green-4 mb-2">150+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Professionals Trained</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-eco-green-4 mb-2">95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-eco-green-4 mb-2">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Training Programs</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-eco-green-4 mb-2">5500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Training Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Training Categories - Show below the detailed training info */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Training Categories
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                  Explore other training programs we offer
                </p>
              </div>
              
              {/* Training Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {Object.entries(TrainingCategories).map(([key, category]) => (
                  <div
                    key={key}
                    className={`bg-white dark:bg-gray-700 rounded-xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      activeCategory === key
                        ? 'border-eco-green-4 shadow-lg scale-105'
                        : 'border-gray-200 dark:border-gray-600 hover:border-eco-green-4/50'
                    }`}
                    onClick={() => handleCategoryChange(key)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-eco-green-4/10 p-3 rounded-lg">
                        <category.icon className="w-8 h-8 text-eco-green-4" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {category.description}
                    </p>
                    <button 
                      onClick={() => handleCategoryChange(key)}
                      className="w-full bg-eco-green-4 text-white py-3 px-6 rounded-lg font-medium hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Overview Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Training Categories</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Training Modules</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">Flexible</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Duration Options</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">Hybrid</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Learning Formats</div>
                </div>
              </div>
            </div>
            </>
          ) : (
            /* Overview Section - Shows when no category is selected */
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Training Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Click on a category below to view detailed information about our training programs.
              </p>
              
              {/* Training Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {Object.entries(TrainingCategories).map(([key, category]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-700 rounded-xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg border-gray-200 dark:border-gray-600 hover:border-eco-green-4/50"
                    onClick={() => handleCategoryChange(key)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-eco-green-4/10 p-3 rounded-lg">
                        <category.icon className="w-8 h-8 text-eco-green-4" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {category.description}
                    </p>
                    <button 
                      onClick={() => handleCategoryChange(key)}
                      className="w-full bg-eco-green-4 text-white py-3 px-6 rounded-lg font-medium hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Overview Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Training Categories</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Training Modules</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">Flexible</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Duration Options</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-eco-green-4 mb-2">Hybrid</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Learning Formats</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Training Benefits Section - Common for all training options */}
      <section className="py-20 bg-eco-green-1/5 dark:bg-eco-green-1/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-gray-900 dark:text-white">Training</span>{' '}
              <span className="text-eco-green-4">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive learning experiences designed to drive organizational transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Certified Programs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Industry-recognized certifications that enhance professional credentials and career growth
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Expert Instructors
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from seasoned professionals with 10-20 years of real-world experience
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg">
              <div className="bg-eco-green-4 p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Flexible Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from in-person, virtual, or hybrid training formats to suit your schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section - Common for all training options */}
      <section className="py-20 bg-eco-green-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Upskill Your Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ healthcare professionals who have enhanced their skills and compliance knowledge with our training programs
          </p>
          <button className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto">
            <Calendar className="w-5 h-5" />
            Schedule Training
          </button>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ConsultationForm />
        </div>
      </section>

      {/* Training Registration Modal */}
      <TrainingRegistrationForm
        training={selectedTraining}
        open={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </div>
  );
};

export default TrainingsPage;

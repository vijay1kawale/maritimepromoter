'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { CheckCircle, Calendar, Clock, MapPin, Users, Award, Mail, Phone, ArrowRight, Download, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Content component that uses useSearchParams
const WorkshopSuccessContent = () => {
  const searchParams = useSearchParams();
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    // Get registration data from URL params or localStorage
    const workshopTitle = searchParams.get('workshop') || 'Healthcare & Sustainability Workshop';
    const participantName = searchParams.get('name') || 'Participant';
    const workshopDates = searchParams.get('dates') || 'Upcoming dates';
    const workshopPrice = searchParams.get('price') || '₹0';
    
    setRegistrationData({
      workshopTitle,
      participantName,
      workshopDates,
      workshopPrice
    });
  }, [searchParams]);

  if (!registrationData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-eco-green-4"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-green-1/20 via-white to-eco-green-2/20 dark:from-eco-green-1/10 dark:via-gray-900 dark:to-eco-green-2/10">
      {/* Success Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Registration Successful! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Thank you for registering for our workshop. We're excited to have you join us for this learning experience!
          </p>
        </div>
      </section>

      {/* Workshop Details Card */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Workshop Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Workshop</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{registrationData.workshopTitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Dates</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{registrationData.workshopDates}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Participant</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{registrationData.participantName}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">4 Days (2 Weekends)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Format</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Virtual</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-eco-green-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Amount Paid</p>
                    <p className="font-semibold text-eco-green-4 text-xl">{registrationData.workshopPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Confirmation Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You'll receive a detailed confirmation email within the next few minutes with all workshop information.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                📧 Check your inbox and spam folder
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Workshop Materials
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pre-workshop materials and reading materials will be shared within 48 hours.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                📚 Prepare for an engaging learning experience
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                WhatsApp Group
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join our workshop WhatsApp group for updates, discussions, and networking.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                💬 Link will be shared in the confirmation email
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Pre-Workshop Survey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Complete a brief questionnaire to help us tailor the workshop to your needs.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                📋 Survey link in your email
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Need Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Get quick responses to your questions
              </p>
              <a 
                href="mailto:training@doctorpromoter.com" 
                className="text-eco-green-4 hover:text-eco-green-5 font-medium"
              >
                training@doctorpromoter.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phone Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Speak directly with our team
              </p>
              <a 
                href="tel:+91-XXXXXXXXXX" 
                className="text-eco-green-4 hover:text-eco-green-5 font-medium"
              >
                +91-XXXXXXXXXX
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                WhatsApp Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Quick chat support available
              </p>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-eco-green-4 hover:text-eco-green-5 font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-eco-green-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            While you wait for your workshop materials, explore our other sustainability services and resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/blog"
              className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main page component with Suspense boundary
const WorkshopSuccessPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-eco-green-4"></div>
      </div>
    }>
      <WorkshopSuccessContent />
    </Suspense>
  );
};

export default WorkshopSuccessPage;

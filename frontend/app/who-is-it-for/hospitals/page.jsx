'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Award, 
  Shield, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  Users
} from 'lucide-react';
import { whoIsItForContent } from '@/data/whoIsItForContent';
import useScrollReveal from '@/components/useScrollReveal';

const content = whoIsItForContent.hospitals;

export default function HospitalsPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(featuresRef, { delay: 0.1 });
  useScrollReveal(servicesRef, { delay: 0.2 });
  useScrollReveal(testimonialsRef, { delay: 0.1 });
  useScrollReveal(ctaRef, { delay: 0.2 });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-eco-green-1/10 to-eco-green-2/20 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={24} className="text-eco-green-4" />
                <span className="text-eco-green-4 font-medium">Hospitals</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {content.hero.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => {
                    const consultationForm = document.querySelector('[data-consultation-form]');
                    if (consultationForm) {
                      consultationForm.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  className="bg-eco-green-4 text-white px-8 py-3 rounded-lg font-medium hover:bg-eco-green-5 transition-colors"
                >
                  {content.hero.cta.primary}
                </button>
                <button 
                  onClick={() => {
                    const callbackForm = document.querySelector('[data-callback-form]');
                    if (callbackForm) {
                      callbackForm.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  className="border-2 border-eco-green-4 text-eco-green-4 px-8 py-3 rounded-lg font-medium hover:bg-eco-green-4 hover:text-white transition-colors"
                >
                  {content.hero.cta.secondary}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-eco-green-4 to-eco-green-4 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-white">Hospitals Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-white">Accreditation Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-white">Efficiency Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-white">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enterprise-level solutions designed specifically for hospital management and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => {
              const IconComponent = {
                Building2,
                Award,
                Shield,
                TrendingUp
              }[feature.icon];
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-eco-green-1/10 dark:bg-eco-green-4/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-eco-green-1/20 dark:group-hover:bg-eco-green-4/40 transition-colors">
                    <IconComponent size={32} className="text-eco-green-4" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Detailed services designed to support your hospital from setup to operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle size={16} className="text-eco-green-4 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Hospital Administrators Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from hospital administrators who have transformed their facilities with our support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-eco-green-1/10 dark:bg-eco-green-4/20 rounded-full flex items-center justify-center mr-4">
                    <Building2 size={24} className="text-eco-green-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-gradient-to-r from-eco-green-4 to-eco-green-4 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl text-white mb-8">
            {content.cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => {
                const consultationForm = document.querySelector('[data-consultation-form]');
                if (consultationForm) {
                  consultationForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="bg-white text-eco-green-4 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {content.cta.button}
            </button>
            <button 
              onClick={() => {
                const callbackForm = document.querySelector('[data-callback-form]');
                if (callbackForm) {
                  callbackForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-eco-green-4 transition-colors"
            >
              View Accreditation Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

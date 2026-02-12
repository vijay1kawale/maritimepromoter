"use client";

import React, { useRef, useState } from 'react'
import HeroSection from '@/components/redefine-platform/HeroSection'
import TabbedInfoSection from '@/components/TabbedInfoSection'
import { Users, Globe, Shield, Handshake, Lightbulb, TrendingUp, CheckCircle, Calendar, PhoneCall } from 'lucide-react'
import useScrollReveal from '@/components/useScrollReveal'
import TargetSettingTimeline from '@/components/TargetSettingTimeline'
import ConsultationForm from '@/components/ConsultationForm'
import CallbackForm from '@/components/CallbackForm'

const tabbedInfoTabs = [
  {
    label: 'Overview',
    heading: 'Doctor Platform Overview',
    description:
      'Access tools, resources and services for compliance (NABH/NABL), content, marketing, events, technology and AI — tailored for clinics and hospitals.',
    features: [
      { icon: Users, text: 'Resource Hub: Templates, checklists and SOPs' },
      { icon: Globe, text: 'Services Access: Tailored for specialties and clinic sizes' },
      { icon: Shield, text: 'Compliance-ready: Keep your practice audit-ready' },
    ],
    image: '/imgs/Our_Company_Image.png',
  },
  {
    label: 'Community',
    heading: 'Community & Support',
    description: 'Join a network of clinicians, consultants and specialists for collaborative growth.',
    features: [
      { icon: Users, text: 'Peer Learning: Exchange knowledge and best practices' },
      { icon: Handshake, text: 'Partnerships: Build referral and outreach networks' },
      { icon: Shield, text: 'Standards & SOPs: Consistent, high-quality operations' },
    ],
    image: '/imgs/Our_Culture_Image.png',
  },
  {
    label: 'Benefits',
    heading: 'Why Use the Doctor Platform?',
    description: 'Centralize your growth, compliance and technology needs in one place.',
    features: [
      { icon: Handshake, text: 'Single Partner: Setup, compliance, marketing and growth' },
      { icon: Lightbulb, text: 'Clear Playbooks: Actionable, step-by-step guidance' },
      { icon: TrendingUp, text: 'Measurable Impact: Patient inflow, efficiency, profitability' },
    ],
    image: '/imgs/Our_Company_Image.png',
  },
]

const Page = () => {
  const heroRef = useRef(null)
  const tabbedRef = useRef(null)

  const [showConsultation, setShowConsultation] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  useScrollReveal(heroRef)
  useScrollReveal(tabbedRef, { delay: 0.1 })

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div ref={heroRef}>
        <HeroSection
          onConsultationClick={() => setShowConsultation(true)}
          onCallbackClick={() => setShowCallback(true)}
        />
      </div>
      <div ref={tabbedRef}><TabbedInfoSection tabs={tabbedInfoTabs} /></div>
      <TargetSettingTimeline heading="How It Works" subheading="Access resources, select services and track progress easily." />
      <section className="w-full py-16 px-4 relative bg-eco-green-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.18 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-tangent text-center">
            Ready to streamline your practice?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto text-center">
            Explore compliance, marketing and growth solutions designed for doctors and clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-eco-green-4 font-semibold text-lg shadow-lg hover:bg-gray-100 transition text-center"
              onClick={() => setShowConsultation(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Talk to an Expert
            </button>
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 rounded-full border border-white text-white font-semibold text-lg hover:bg-white hover:text-eco-green-4 transition text-center"
              onClick={() => setShowCallback(true)}
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Request Callback
            </button>
          </div>
        </div>
        <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
        <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
      </section>
    </main>
  )
}

export default Page



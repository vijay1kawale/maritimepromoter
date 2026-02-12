"use client";

import React, { useRef, useState } from 'react'
import HeroSection from '@/components/redefine-platform/HeroSection'
import TabbedInfoSection from '@/components/TabbedInfoSection'
import BannerCTA from '@/components/BannerCTA'
import { Users, Globe, Shield, BarChart2, LayoutDashboard, RefreshCw, CheckCircle, Database, BrainCircuit, LineChart, Target, AlertTriangle, Cloud, Zap, Layers, Calendar, PhoneCall, Handshake, Lightbulb, TrendingUp, Heart } from 'lucide-react'
import useScrollReveal from '@/components/useScrollReveal'
import TargetSettingTimeline from '@/components/TargetSettingTimeline'
import ConsultationForm from '@/components/ConsultationForm'
import CallbackForm from '@/components/CallbackForm'

const tabbedInfoTabs = [
  {
    label: 'Overview',
    heading: 'Platform Overview',
    description:
      'Doctor Promoter is a dedicated space for doctors and clinics to access resources and services across compliance, marketing, technology and growth.',
    features: [
      { icon: Users, text: 'Collaboration Spaces: Connect with like-minded individuals and organizations' },
      { icon: Globe, text: 'Diverse Community: Meet thought leaders, grassroots activists, and innovators' },
      { icon: Shield, text: 'Resource Sharing & Support: Find mentoring, knowledge, and funding opportunities' },
    ],
    image: '/imgs/Our_Company_Image.png',
  },
  {
    label: 'Community',
    heading: 'Diverse Community',
    description: 'A full spectrum of opportunities for every kind of supporter and leader to make meaningful impact.',
    features: [
      { icon: Users, text: 'Enviropreneurs: Share and scale your green innovations' },
      { icon: Globe, text: 'Corporates & Organizations: Find collaborators and social impact projects' },
      { icon: Heart, text: 'Volunteers & Youth: Join meaningful initiatives and contribute skills' },
    ],
    image: '/imgs/Our_Culture_Image.png',
  },
  {
    label: 'How It Works',
    heading: 'How It Works',
    description: 'Doctor Promoter makes it simple to pick services, access resources and track progress.',
    features: [
      { icon: Users, text: 'Create a Profile: Tell the world about your mission, needs, or skills' },
      { icon: Globe, text: 'Explore Opportunities: Discover projects and partners suited to your values' },
      { icon: Handshake, text: 'Collaborate: Start conversations and join existing initiatives' },
    ],
    image: '/imgs/Our_Impact_Image.png',
  },
  {
    label: 'Benefits',
    heading: 'Why Use Doctor Promoter?',
    description: 'A centralized partner for compliant operations, trusted content, marketing and growth.',
    features: [
      { icon: Handshake, text: 'True Collaboration: Work side-by-side with people from every sector' },
      { icon: Lightbulb, text: 'Diverse Perspectives: Get richer, more creative solutions' },
      { icon: TrendingUp, text: 'Collective Action: Multiply your impact by working together' },
    ],
    image: '/imgs/Our_Company_Image.png',
  },
]

const comprehensiveFeatures = [
  {
    icon: Users,
    iconBg: 'bg-eco-green-1/30',
    title: 'Collaboration Spaces',
    desc: 'Connect with like-minded individuals and organizations to launch, coordinate, or join impactful environmental projects.',
    features: [
      'Project Creation: Launch new environmental initiatives',
      'Team Building: Find the right partners and collaborators',
      'Resource Sharing: Share knowledge, tools, and expertise',
      'Community Support: Get feedback and guidance from peers',
    ],
  },
  {
    icon: Globe,
    iconBg: 'bg-eco-green-1/30',
    title: 'Diverse Community',
    desc: 'Meet thought leaders, grassroots activists, decision-makers, and innovators from all sectors and backgrounds.',
    features: [
      'Sector Diversity: Connect across industries and backgrounds',
      'Expertise Matching: Find mentors and specialists',
      'Networking: Build meaningful professional relationships',
      'Knowledge Exchange: Learn from diverse perspectives',
    ],
  },
  {
    icon: Heart,
    iconBg: 'bg-eco-green-1/30',
    title: 'Resource Sharing & Support',
    desc: 'Find mentoring, knowledge, funding opportunities, and volunteers for your ideas and projects.',
    features: [
      'Mentoring Programs: Connect with experienced professionals',
      'Funding Opportunities: Discover impact investment options',
      'Volunteer Network: Find passionate individuals to help',
      'Knowledge Library: Access shared resources and best practices',
    ],
  },
]

const howItWorksSteps = [
  {
    title: 'Create a Profile',
    desc: 'Tell the world about your mission, needs, or skills',
    icon: Users,
  },
  {
    title: 'Explore Opportunities',
    desc: 'Discover projects, events, and partners suited to your values and goals',
    icon: Globe,
  },
  {
    title: 'Collaborate',
    desc: 'Start conversations, join existing initiatives, or propose new ones',
    icon: Handshake,
  },
  {
    title: 'Amplify Impact',
    desc: 'Leverage a supportive network to scale solutions and drive systemic change',
    icon: TrendingUp,
  },
]

const platformCapabilities = [
  {
    icon: Users,
    title: 'Community Building',
    desc: 'Connect with environmental changemakers from all sectors',
  },
  {
    icon: Handshake,
    title: 'Partnership Facilitation',
    desc: 'Enable genuine collaborations and joint initiatives',
  },
  {
    icon: Globe,
    title: 'Resource Sharing',
    desc: 'Access and share knowledge, funding, and expertise',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Support',
    desc: 'Get feedback and support for your green innovations',
  },
  {
    icon: TrendingUp,
    title: 'Impact Scaling',
    desc: 'Scale solutions through collective action and support',
  },
  {
    icon: Heart,
    title: 'Volunteer Network',
    desc: 'Find passionate individuals to support your projects',
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
      {/* Comprehensive Features Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-tangent text-center">Platform Features</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center">Everything you need to connect, collaborate, and create environmental change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comprehensiveFeatures.map((card, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col h-full items-start md:items-start items-center border border-gray-100 dark:border-gray-800 text-center md:text-left">
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${card.iconBg}`}>{card.icon && React.createElement(card.icon, { className: 'w-7 h-7 text-eco-green-4' })}</span>
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white text-center md:text-left">{card.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300 text-center md:text-left">{card.desc}</p>
                <ul className="space-y-2 w-full">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-eco-green-4 font-medium justify-center md:justify-start">
                      <CheckCircle size={18} className="mt-0.5 text-eco-green-4" />
                      <span className="text-gray-900 dark:text-white/90 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Timeline Section */}
      <TargetSettingTimeline heading="How It Works" subheading="Our streamlined process ensures easy collaboration and meaningful impact." />
      {/* Platform Capabilities Section */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-tangent text-center">Platform Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center">Everything you need to turn your environmental passion into action.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col h-full items-center border border-gray-100 dark:border-gray-800 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-eco-green-1/20 mb-4 mx-auto">
                  {cap.icon && React.createElement(cap.icon, { className: 'w-7 h-7 text-eco-green-4' })}
                </span>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white text-center">{cap.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Banner CTA Section */}
      <section className="w-full py-16 px-4 relative bg-eco-green-4 overflow-hidden">
        {/* Grid overlay */}
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
            Ready to Move from Awareness to Action?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto text-center">
            A dedicated partner for doctors and clinics — simplify growth with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-eco-green-4 font-semibold text-lg shadow-lg hover:bg-gray-100 transition text-center"
              onClick={() => setShowConsultation(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Join the Platform
            </button>
            <button
              type="button"
              className="inline-flex items-center px-8 py-4 rounded-full border border-white text-white font-semibold text-lg hover:bg-white hover:text-eco-green-4 transition text-center"
              onClick={() => setShowCallback(true)}
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
        <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
        <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
      </section>
      {/* Other sections will go here */}
    </main>
  )
}

export default Page
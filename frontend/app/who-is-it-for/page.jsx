'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Microscope, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const targetAudiences = [
  {
    id: 'medical-students',
    title: 'Medical Students',
    icon: GraduationCap,
    description: 'Build your medical career foundation with comprehensive training and regulatory support services.',
    features: ['Clinical Training Programs', 'Study Resources', 'Mentorship Programs', 'Certification Support'],
    href: '/who-is-it-for/medical-students',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'doctors',
    title: 'Doctors',
    icon: Users,
    description: 'Advance your medical practice with comprehensive support services and growth solutions.',
    features: ['Practice Management', 'Revenue Growth', 'Compliance Support', 'Digital Marketing'],
    href: '/who-is-it-for/doctors',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'clinics',
    title: 'Clinics',
    icon: Building2,
    description: 'Comprehensive solutions for clinic setup, management, and growth.',
    features: ['Clinic Setup', 'Regulatory Compliance', 'Staff Management', 'Growth Solutions'],
    href: '/who-is-it-for/clinics',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    icon: Building2,
    description: 'Enterprise-level solutions for hospital management and growth.',
    features: ['Hospital Setup', 'Accreditation Support', 'Compliance Management', 'Strategic Growth'],
    href: '/who-is-it-for/hospitals',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'labs',
    title: 'Labs',
    icon: Microscope,
    description: 'Specialized solutions for laboratory setup, accreditation, and management.',
    features: ['Lab Setup', 'NABL Accreditation', 'Quality Management', 'Growth Solutions'],
    href: '/who-is-it-for/labs',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function WhoIsItForPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-green-1 to-eco-green-2 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Who is it for?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our comprehensive healthcare solutions are tailored to meet the unique needs of different healthcare professionals and organizations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#audiences" 
                className="bg-eco-green-4 text-white px-8 py-3 rounded-lg font-medium hover:bg-eco-green-5 transition-colors"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-eco-green-4 text-eco-green-4 px-8 py-3 rounded-lg font-medium hover:bg-eco-green-4 hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Grid */}
      <section id="audiences" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select your role or organization type to discover tailored solutions designed specifically for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience) => {
              const IconComponent = audience.icon;
              return (
                <Link
                  key={audience.id}
                  href={audience.href}
                  className="group"
                  onMouseEnter={() => setHoveredCard(audience.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-eco-green-4 transition-colors">
                      {audience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {audience.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {audience.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle size={16} className="text-eco-green-4 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center text-eco-green-4 font-medium group-hover:text-eco-green-5 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Doctor Promoter?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We understand the unique challenges faced by different healthcare professionals and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-eco-green-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Specialized Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep understanding of each healthcare sector's unique requirements and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-eco-green-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track record of success across all healthcare sectors and organization sizes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-4/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-eco-green-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized support and guidance throughout your healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-eco-green-4 to-eco-green-5 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-eco-green-1 mb-8">
            Choose your path and discover how we can help you succeed in healthcare.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-eco-green-4 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="#audiences" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-eco-green-4 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

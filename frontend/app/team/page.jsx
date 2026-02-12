'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Shield, 
  Briefcase, 
  FileText, 
  Target, 
  Lock, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Lightbulb,
  Heart
} from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Vijay Kawale",
      title: "CEO, PGDM IIM Bengaluru",
      photo: "/imgs/team-member-1.jpg", // You'll need to add actual team photos
      expertise: ["Business Strategy", "Marketing", "Compliances & Regulatory", "Sales Development"],
      bio: "With over 20 years in various roles, Mr. Vijay Kawale is a visionary leader, serial entrepreneur, and marketing strategist. He has guided 100+ organizations towards impactful business growth.",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Dr. Amit Vatkar",
      title: "Director, MBBS DCH Pediatric Neurologist",
      photo: "/imgs/team-member-2.jpg",
      expertise: ["Medical Practices", "Clinic", "Hospital", "Medical Career", "Lab & Pharmacy"],
      bio: "15+ years of experience in medical practice and training delivery with deep knowledge of running medical practice as clinic & hospital.",
      experience: "15+ years"
    },
    {
      id: 3,
      name: "Mr. Vijay Sawal",
      title: "Director - Business Development",
      photo: "/imgs/team-member-3.jpg",
      expertise: ["Technology", "Clinic Setup", "Business Buy Sell", "Global Expansion"],
      bio: "25+ years of leadership in corporate and business consulting. Strategic collaborator with international markets such as Middle East, USA, Europe etc.",
      experience: "25+ years"
    }
  ];

  const expertiseAreas = [
    {
      icon: Award,
      title: "Healthcare Business Practitioners",
      description: "Globally recognized healthcare business expertise"
    },
    {
      icon: Shield,
      title: "Compliances Lead Auditors",
      description: "International quality management system for healthcare"
    },
    {
      icon: Briefcase,
      title: "Marketing Managers & Auditors",
      description: "Comprehensive marketing efficiency and management"
    },
    {
      icon: Lock,
      title: "AI & Technology Implementors",
      description: "Information Technology management systems & AI"
    },
    {
      icon: Users,
      title: "Legal & Compliance Experts",
      description: "Regulatory compliance and legal frameworks"
    },
    {
      icon: Target,
      title: "Data Privacy & Cybersecurity Professionals",
      description: "CISA, CISSP certified security experts"
    },
    {
      icon: TrendingUp,
      title: "Six Sigma Belts",
      description: "Process improvement and quality management"
    },
    {
      icon: FileText,
      title: "Sustainability Specialists",
      description: "Climate risk and sustainability reporting"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-green-1/10 via-eco-green-2/5 to-eco-green-3/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our{' '}
              <span className="text-eco-green-4">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our strength lies in our people. A dedicated team of certified professionals with 10-25 years of experience across Marketing, Business Planning, Merger & Aquisition, compliances and technology
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green-4 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green-4 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green-4 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green-4 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving our mission towards a sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-eco-green-1 to-eco-green-4 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-eco-green-4 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">{member.title}</p>
                  <div className="inline-flex items-center gap-2 bg-eco-green-1/10 text-eco-green-4 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    {member.experience}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Collective{' '}
              <span className="text-eco-green-4">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team brings a diverse range of skills and certifications to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600">
                <div className="w-16 h-16 mx-auto mb-4 bg-eco-green-1/10 rounded-full flex items-center justify-center">
                  <expertise.icon className="w-8 h-8 text-eco-green-4" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {expertise.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {expertise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA Banner */}
      <section className="py-20 bg-eco-green-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team of Experts
          </h2>
          <p className="text-xl text-eco-green-1 mb-8 max-w-2xl mx-auto">
            Passionate about healthcare growth and quality care? Explore opportunities with Doctor Promoter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work-with-us" className="bg-white text-eco-green-4 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              View Careers
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/work-with-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-eco-green-4 transition-colors">
              Contact HR
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Inclusive Culture</h3>
              <p className="text-eco-green-1 text-sm">Diverse and welcoming environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Innovation Focus</h3>
              <p className="text-eco-green-1 text-sm">Cutting-edge sustainability solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Global Impact</h3>
              <p className="text-eco-green-1 text-sm">Make a difference worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;

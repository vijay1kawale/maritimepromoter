'use client';
import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Heart, 
  Lightbulb, 
  Award, 
  ArrowRight,
  Upload,
  Mail,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Shield
} from 'lucide-react';

const WorkWithUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.resume) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields and upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || '');
      formDataToSend.append('coverLetter', formData.coverLetter || '');
      formDataToSend.append('resume', formData.resume);

      const response = await fetch('https://doctor-promoter-backend.vercel.app/api/job-application', {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type header for FormData
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Job application submitted successfully! We will review your application and get back to you soon.');
        
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          coverLetter: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to submit job application. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
    setSubmitStatus(null);
    setSubmitMessage("");
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerate your career with opportunities to work on cutting-edge Healthcare projects and gain industry recognition."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access to professional development programs, certifications, and industry conferences."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, remote work options, and comprehensive wellness programs."
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive compensation, performance bonuses, and comprehensive benefits package."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive, inclusive, and innovative environment."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Be part of pioneering solutions in Healthcare technology and sustainability innovation."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-green-1/10 via-eco-green-2/5 to-eco-green-3/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Work <span className="text-eco-green-4">With Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our mission to drive sustainable business transformation. Be part of a team that's shaping the future of Healthcare and sustainability consulting.
            </p>
          </div>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <Users className="w-5 h-5 text-eco-green-4" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Collaborative Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <TrendingUp className="w-5 h-5 text-eco-green-4" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Career Growth</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <Globe className="w-5 h-5 text-eco-green-4" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Global Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Doctor Promoter Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-eco-green-4">Doctor Promoter</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Be part of an organization that values growth, innovation, and making a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-eco-green-1/5 to-eco-green-2/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-eco-green-1/20">
                <div className="w-16 h-16 bg-eco-green-4 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to <span className="text-eco-green-4">Join Us?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Submit your application and let's explore how you can help doctors and clinics grow with Doctor Promoter.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="text-sm">{submitMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="text-sm">{submitMessage}</p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Try Again
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about yourself, your experience, and why you'd like to join our team..."
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume (PDF or Word) *
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    disabled={isSubmitting}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className={`flex items-center gap-2 bg-eco-green-4 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-eco-green-5 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Upload className="w-5 h-5" />
                    Upload Resume
                  </label>
                  {formData.resume && (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {formData.resume.name}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-eco-green-4 text-white py-4 px-8 rounded-lg font-semibold hover:bg-eco-green-5 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Get in Touch Banner CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-eco-green-4">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Have questions about career opportunities? We'd love to hear from you.
          </p>
          
          <div className="bg-gradient-to-r from-eco-green-1/10 to-eco-green-2/10 rounded-2xl p-12 border border-eco-green-1/20">
            <div className="w-20 h-20 bg-eco-green-4 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Email Us
            </h3>
            <a 
              href="mailto:hr@doctorpromoter.com" 
              className="text-2xl font-semibold text-eco-green-4 hover:text-eco-green-5 transition-colors"
            >
              hr@doctorpromoter.com
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Send us your resume and cover letter
            </p>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-1/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-eco-green-4" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Current Openings</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Check our latest job postings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-1/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-eco-green-4" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Application Process</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Learn about our hiring process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-eco-green-1/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-eco-green-4" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Employee Benefits</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Discover what we offer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUsPage;

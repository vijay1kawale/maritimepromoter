"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Award, CreditCard, CheckCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

const TrainingRegistrationForm = ({ training, open, onClose }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    
    // Training Details
    trainingId: training?.id || "",
    trainingTitle: training?.title || "",
    trainingDuration: training?.duration || "",
    trainingFormat: training?.format || "",
    
    // Additional Information
    experience: "",
    expectations: "",
    specialRequirements: "",
    
    // Terms
    agreeToTerms: false,
    agreeToMarketing: false
  });
  
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      setFormData(prev => ({
        ...prev,
        trainingId: training?.id || "",
        trainingTitle: training?.title || "",
        trainingDuration: training?.duration || "",
        trainingFormat: training?.format || ""
      }));
      setStep(1);
      setErrors({});
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);
    }
  }, [open, training]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone is required";
        } else if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Invalid phone number";
        }
        if (!formData.company.trim()) newErrors.company = "Company is required";
        if (!formData.designation.trim()) newErrors.designation = "Designation is required";
        break;
        
      case 2:
        if (!formData.experience.trim()) newErrors.experience = "Experience level is required";
        if (!formData.expectations.trim()) newErrors.expectations = "Learning expectations are required";
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission is handled by redirectToRazorpay function
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2].map((stepNumber) => (
        <div key={stepNumber} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            stepNumber <= step 
              ? 'bg-eco-green-4 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
          }`}>
            {stepNumber < step ? <CheckCircle className="w-5 h-5" /> : stepNumber}
          </div>
          {stepNumber < 2 && (
            <div className={`w-16 h-1 mx-2 ${
              stepNumber < step ? 'bg-eco-green-4' : 'bg-gray-200 dark:bg-gray-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Personal Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your company name"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Designation *
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
              errors.designation ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Enter your designation"
          />
          {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Training Details & Expectations
      </h3>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Selected Training</h4>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-eco-green-4" />
            <span className="font-medium">{formData.trainingTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-eco-green-4" />
            <span>Duration: {formData.trainingDuration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-eco-green-4" />
            <span>Format: {formData.trainingFormat}</span>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Experience Level *
        </label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
            errors.experience ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
        >
          <option value="">Select your experience level</option>
          <option value="beginner">Beginner (0-2 years)</option>
          <option value="intermediate">Intermediate (2-5 years)</option>
          <option value="advanced">Advanced (5+ years)</option>
        </select>
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Learning Expectations *
        </label>
        <textarea
          name="expectations"
          value={formData.expectations}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent ${
            errors.expectations ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          placeholder="What do you hope to learn from this training?"
        />
        {errors.expectations && <p className="text-red-500 text-xs mt-1">{errors.expectations}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Special Requirements
        </label>
        <input
          type="text"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eco-green-4 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Any special requirements or accommodations needed?"
        />
      </div>
      
      {/* Terms and Marketing Consent */}
      <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-eco-green-4 bg-gray-100 border-gray-300 rounded focus:ring-eco-green-4 focus:ring-2"
          />
          <label className="text-sm text-gray-700 dark:text-gray-300">
            I agree to the <a href="#" className="text-eco-green-4 hover:underline">Terms and Conditions</a> and <a href="#" className="text-eco-green-4 hover:underline">Privacy Policy</a> *
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
        
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreeToMarketing"
            checked={formData.agreeToMarketing}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-eco-green-4 bg-gray-100 border-gray-300 rounded focus:ring-eco-green-4 focus:ring-2"
          />
          <label className="text-sm text-gray-700 dark:text-gray-300">
            I would like to receive updates about future trainings and healthcare insights
          </label>
        </div>
      </div>
    </div>
  );

  // Function to submit form and redirect to Razorpay payment page
  const redirectToRazorpay = async () => {
    // First validate the final step
    if (!validateStep(2)) {
      return;
    }

    try {
      // Submit form data to backend
      const response = await fetch('https://doctor-promoter-backend.vercel.app/api/training/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Store form data in localStorage for later use
        localStorage.setItem('trainingRegistrationData', JSON.stringify({
          ...formData,
          training: training,
          registrationId: result.data.registrationId
        }));
        
        // Use the actual Razorpay link from the training data
        const razorpayUrl = training?.razorpayLink || "https://rzp.io/l/default";
        
        // Redirect to Razorpay
        window.open(razorpayUrl, '_blank');
        
        // Close the modal after redirect
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        // Show error message
        setErrors({ submit: result.message || 'Failed to register for training. Please try again.' });
      }
    } catch (error) {
      console.error('Training registration error:', error);
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto"
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Training Registration
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-6 py-6">
          {renderStepIndicator()}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Submit Error Display */}
            {errors.submit && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="text-sm">{errors.submit}</p>
              </div>
            )}
            
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 1}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex items-center gap-3">
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-eco-green-4 text-white rounded-lg hover:bg-eco-green-5 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={redirectToRazorpay}
                    className="px-6 py-2 bg-eco-green-4 text-white rounded-lg hover:bg-eco-green-5 transition-colors flex items-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Payment
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainingRegistrationForm;

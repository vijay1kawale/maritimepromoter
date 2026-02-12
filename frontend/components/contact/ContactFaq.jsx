"use client";
import React from "react";

const faqs = [
  {
    question: "What is your typical response time for healthcare compliance queries?",
    answer: "We aim to respond to all healthcare compliance and practice growth inquiries within 24 hours during business days.",
  },
  {
    question: "Do you offer virtual consultations for healthcare practices?",
    answer: "Yes, we offer both virtual and in-person consultations to suit your preferences and practice schedules.",
  },
  {
    question: "How do I schedule a healthcare compliance consultation?",
    answer: "You can schedule through our online form, email, or by calling our office directly. We also offer emergency compliance support.",
  },
  {
    question: "What healthcare areas do you serve across India?",
    answer: "We serve healthcare providers across India through our network of offices and virtual solutions, specializing in compliance, marketing, and technology adoption.",
  },
];

const ContactFaq = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#101624] py-16 px-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent text-gray-900 dark:text-white">Healthcare Practice FAQs</h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Quick answers to common healthcare compliance and practice growth questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-7 flex flex-col gap-2 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-eco-green-4"
              style={{ minHeight: 140 }}
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq; 
import React from "react";
import { Leaf, CheckCircle2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-b from-eco-green-4/10 to-transparent py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-tangent text-gray-900 dark:text-white">
          Accelerating Your Healthcare Practice Growth
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          At Doctor Promoter, we help doctors and clinics grow with compliant operations, trusted content, effective marketing, and modern technology — all tailored to healthcare excellence.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="relative bg-white dark:bg-black rounded-2xl shadow-lg p-8 flex flex-col items-start min-h-[280px] overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-eco-green-1/10 dark:bg-eco-green-3/10 rounded-bl-full -z-0" />
          <div className="flex items-center gap-2 mb-2 z-10">
            <Leaf size={28} className="text-eco-green-4" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</span>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300 z-10">
            Guiding healthcare providers toward compliant and resilient operations through innovative solutions and strategic expertise, while ensuring regulatory compliance and fostering practice growth.
          </p>
          <ul className="space-y-2 z-10">
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Drive healthcare compliance excellence</li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Enable NABH/NABL accreditation</li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Foster practice growth and innovation</li>
          </ul>
        </div>
        {/* Vision Card */}
        <div className="relative bg-white dark:bg-black rounded-2xl shadow-lg p-8 flex flex-col items-start min-h-[280px] overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-eco-green-1/10 dark:bg-eco-green-3/10 rounded-bl-full -z-0" />
          <div className="flex items-center gap-2 mb-2 z-10">
            <Leaf size={28} className="text-eco-green-4" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</span>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300 z-10">
            Creating a healthcare ecosystem where providers flourish through compliant practices and sustainable growth, establishing new benchmarks for patient care excellence and healthcare innovation.
          </p>
          <ul className="space-y-2 z-10">
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Healthcare compliance leadership</li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Medical practice innovation</li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-white"><CheckCircle2 size={20} className="text-eco-green-4" /> Positive patient outcomes</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 
"use client";
import React from "react";
import { Building2 } from "lucide-react";

const offices = [
  {
    city: "Mumbai",
    image: "/imgs/mumbai.jpg",
    address: "Plot no.8, Devi Annapurna Co-Op.Society, 112-113, 1st Floor, Mafco Market Road, Sector 18, Vashi, Navi Mumbai, Maharashtra 40705",
    highlight: true,
  },
];

const ContactOffice = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-tangent">Our Healthcare Hub</h2>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Visit our Mumbai headquarters for healthcare compliance and practice growth support
      </p>
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          {offices.map((office, idx) => (
            <div
              key={office.city}
              className="rounded-2xl shadow-md bg-white dark:bg-gray-900 overflow-hidden flex flex-col border-2 border-eco-green-4 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-48 object-cover object-center rounded-t-2xl"
                />
                <span className="absolute left-0 bottom-0 px-5 py-3 text-white text-2xl font-bold font-tangent" style={{textShadow: '0 2px 8px #0008'}}>
                  {office.city}
                </span>
              </div>
              <div className="p-5 flex-1 flex items-start gap-2">
                <Building2 className="text-eco-green-4 mt-1" size={20} />
                <span className="text-gray-900 dark:text-white text-base">
                  {office.address}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOffice; 
"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function HomeLearnMore() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12 md:py-20 max-w-7xl mx-auto overflow-x-hidden">
      {/* Left: Text */}
      <div className="flex-1 w-full max-w-xl min-w-0">
        <h2 className="text-3xl md:text-4xl font-bold text-eco-green-4 mb-4 font-tangent">
          Practical Growth for Doctors and Clinics
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-base md:text-lg">
          We help you stay compliant, build patient trust with the right content, run performance marketing, and modernize operations with technology and AI — so you can focus on care.
        </p>
        <Link href="/about" passHref legacyBehavior>
          <Button className="mt-2" variant="primary">
            Learn More About Us
          </Button>
        </Link>
      </div>
      {/* Right: Image with shadow/angle */}
      <div className="flex-1 w-full flex items-center justify-center relative max-w-xl min-w-0">
        {/* Angled shadow background shifted left */}
        <div className="hidden md:block absolute -left-10 top-10 w-full h-full bg-eco-green-1/10 dark:bg-eco-green-3/30 rounded-[2.5rem] rotate-3 z-0" />
        <img
          src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Healthcare Practice Growth"
          className="relative z-10 w-full max-w-xl h-[350px] sm:h-[420px] md:h-[500px] rounded-3xl border-4 border-eco-green-4 shadow-xl object-cover"
        />
      </div>
    </section>
  );
} 
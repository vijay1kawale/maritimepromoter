"use client";
import React from "react";

export default function Button({ children, icon: Icon, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3 rounded-full font-tangent font-semibold focus:outline-none transition-colors duration-200 text-lg justify-center border-2";
  const variants = {
    primary: "bg-eco-green-4 text-white hover:bg-eco-green-3 border-eco-green-4",
    secondary: "bg-white/10 text-white border border-white/40 hover:bg-white/20 border-white/40",
    cta: "bg-transparent text-white border-white hover:bg-white hover:text-eco-green-4 border-white",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
}

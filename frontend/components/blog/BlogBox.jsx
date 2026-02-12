"use client";
import React, { useRef, useEffect } from "react";
import { Calendar, User, ThumbsUp, MessageCircle, Share2, ArrowRight } from "lucide-react";
import useScrollReveal from '../useScrollReveal';

export default function BlogBox({
  image,
  date,
  author,
  title,
  summary,
  stats = { likes: 0, comments: 0, shares: 0 },
  link = "#",
}) {
  const boxRef = useRef(null);

  useScrollReveal(boxRef, {
    y: 30,
    duration: 0.8,
    scale: 0.95,
  });

  return (
    <div
      ref={boxRef}
      className="bg-white dark:bg-black rounded-2xl shadow-md overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-2">
          <span className="flex items-center gap-1"><Calendar size={16} /> {date}</span>
          <span className="flex items-center gap-1"><User size={16} /> {author}</span>
        </div>
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white transition-colors duration-200 hover:text-eco-green-4 dark:hover:text-eco-green-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{summary}</p>
        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 text-sm mb-4">
          <span className="flex items-center gap-1 hover:text-eco-green-4 transition-colors duration-200">
            <ThumbsUp size={16} /> {stats.likes}
          </span>
          <span className="flex items-center gap-1 hover:text-eco-green-4 transition-colors duration-200">
            <MessageCircle size={16} /> {stats.comments}
          </span>
          <span className="flex items-center gap-1 hover:text-eco-green-4 transition-colors duration-200">
            <Share2 size={16} /> {stats.shares}
          </span>
        </div>
        <a
          href={link}
          className="mt-auto text-eco-green-4 font-semibold flex items-center gap-1 group"
        >
          Read More 
          <ArrowRight size={16} className="transform transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
} 
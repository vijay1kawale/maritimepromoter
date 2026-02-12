"use client";
import React from 'react';
import PropTypes from 'prop-types';

/**
 * RegulatoryHero component displays a hero/banner section for regulatory service pages.
 * Props:
 * - title: string (main heading)
 * - subtitle: string (description)
 * - backgroundImage: string (image URL, relative to /public/imgs/)
 * - bannerClassName: string (optional, for controlling width/centering)
 */
const RegulatoryHero = ({ title, subtitle, backgroundImage, bannerClassName = '' }) => {
  return (
    <section className={`mb-8 w-full ${bannerClassName}`}>
      <div
        className="rounded-2xl overflow-hidden relative h-32 md:h-40 lg:h-48 flex items-center w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 154, 147, 0.92), rgba(19, 154, 147, 0.92)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 w-full min-w-0">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg break-words">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/90 w-full max-w-full break-words">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

RegulatoryHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  bannerClassName: PropTypes.string,
};

export default RegulatoryHero; 
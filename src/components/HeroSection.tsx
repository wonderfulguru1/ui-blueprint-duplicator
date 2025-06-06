import React from 'react';
import heroBg from '@/assets/about-hero.jpg';
import TypewriterText from '@/components/TypewriterText';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <img
        src={heroBg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Modern house interior"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 sm:mb-6">
          <TypewriterText text="Affordable today. Priceless tomorrow" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" speed={50} />
        </h1>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
          At Genesia Properties, we offer more than land — we offer possibility
        </p>

        <Link 
          to="/products" 
          className="inline-flex items-center rounded-lg gap-2 sm:gap-3 bg-[#D2A136] hover:bg-[#B8912E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 lg:px-12 py-3 sm:py-4 transition-colors"
        >
          LEARN MORE
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0">
            <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Slider indicators - hidden on mobile */}
      <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
        <div className="w-6 lg:w-8 h-0.5 bg-white opacity-80"></div>
        <div className="w-6 lg:w-8 h-0.5 bg-[#D2A136]"></div>
        <div className="w-6 lg:w-8 h-0.5 bg-white opacity-80"></div>
      </div>
    </section>
  );
};

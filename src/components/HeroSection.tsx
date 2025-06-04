
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <img
        src="https://preview.colorlib.com/theme/oakberry/images/bg_1.jpg.webp"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Modern house interior"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 sm:mb-6">
          Modern House
          <br />
          Make Better Life
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
          A small river named Duden flows by their place and supplies it with the necessary
          <br className="hidden sm:block" />
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
          <br className="hidden sm:block" />
          mouth.
        </p>
        
        <button className="inline-flex items-center gap-2 sm:gap-3 bg-[#5EA51D] hover:bg-[#4a8617] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 lg:px-12 py-3 sm:py-4 transition-colors">
          LEARN MORE
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0">
            <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Slider indicators - hidden on mobile */}
      <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
        <div className="w-6 lg:w-8 h-0.5 bg-white opacity-80"></div>
        <div className="w-6 lg:w-8 h-0.5 bg-[#5EA51D]"></div>
        <div className="w-6 lg:w-8 h-0.5 bg-white opacity-80"></div>
      </div>
    </section>
  );
};

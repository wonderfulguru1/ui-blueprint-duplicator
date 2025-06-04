
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
      
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="text-6xl md:text-7xl font-normal leading-tight mb-6">
          Modern House
          <br />
          Make Better Life
        </h1>
        
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          A small river named Duden flows by their place and supplies it with the necessary
          <br />
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
          <br />
          mouth.
        </p>
        
        <button className="inline-flex items-center gap-3 bg-[#5EA51D] hover:bg-[#4a8617] text-white font-semibold text-sm tracking-wider uppercase px-12 py-4 transition-colors">
          LEARN MORE
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Property type buttons at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="bg-white text-gray-700 px-8 py-3 font-medium hover:bg-gray-50 transition-colors">
          Buy Properties
        </button>
        <button className="bg-[#5EA51D] text-white px-8 py-3 font-medium hover:bg-[#4a8617] transition-colors">
          Rent Properties
        </button>
      </div>

      {/* Slider indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <div className="w-8 h-0.5 bg-white opacity-80"></div>
        <div className="w-8 h-0.5 bg-[#5EA51D]"></div>
        <div className="w-8 h-0.5 bg-white opacity-80"></div>
      </div>
    </section>
  );
};

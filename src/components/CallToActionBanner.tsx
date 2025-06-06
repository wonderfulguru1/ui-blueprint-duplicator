import React from 'react';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ebb58b18261f1bf9b06d00e301861469d84450?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0 opacity-20"
        alt="CTA background"
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Find Best Place For Living
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Discover your perfect home with our comprehensive real estate solutions. We're here to help you every step of the way.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/2347038122917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#B8912E] hover:bg-[#9A7A26] text-black font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get in touch
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-x-24 translate-y-24"></div>
    </section>
  );
};

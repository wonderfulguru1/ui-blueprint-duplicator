import { Link } from 'lucide-react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
export const AboutUsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#e7e7e7] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-blue-100 text-[#06112a] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
                  Who we are
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#06112a] leading-tight">
                YOUR NEXT SMART MOVE
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D2A136] leading-tight">
                STARTS HERE
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                Genesia Properties is built on a simple idea: owning land in Abuja shouldn’t be complicated — it should be clear, secure, and within reach.

                We’re here to help a new generation of landowners take confident steps into real estate by offering affordable plots in high-growth areas around Abuja. Our flexible payment plans, low entry costs, and transparent process mean you don’t have to wait years to start building your future.

                Whether you’re buying for personal use, long-term investment, or future development, we’re committed to making your land ownership journey smooth and rewardin
              </p>

            </div>


            <RouterLink
              to="/about-us"
              className="inline-flex items-center rounded-lg gap-2 sm:gap-3 bg-[#D2A136] hover:bg-[#B8912E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 lg:px-12 py-3 sm:py-4 transition-colors"
            >
              Learn More About Us
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0">
                <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </RouterLink>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/about.jpg.webp"
                alt="Modern living space"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D2A136] opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500 opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

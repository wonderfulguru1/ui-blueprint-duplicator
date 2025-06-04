import React from 'react';
import { Package, Award, Home, TrendingUp } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#e7e7e7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#D2A136' }}>
            Why We stand Out!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Flexible Payment Plan */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#D2A136]/10 rounded-full flex items-center justify-center">
              <Package className="w-8 h-8" style={{ color: '#D2A136' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Flexible Payment Plan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pay for your home in the most
              <br />
              convenient way possible.
            </p>
          </div>

          {/* Quality Delivery */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#D2A136]/10 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8" style={{ color: '#D2A136' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Quality Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You receive the exact quality
              <br />
              of home you paid for
            </p>
          </div>

          {/* Top-Notch Amenities */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#D2A136]/10 rounded-full flex items-center justify-center">
              <Home className="w-8 h-8" style={{ color: '#D2A136' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Top-Notch Amenities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access to amenities that make for
              <br />
              a comfortable living experience
            </p>
          </div>

          {/* High ROI */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#D2A136]/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8" style={{ color: '#D2A136' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              High ROI
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receive up to 50% ROI when
              <br />
              you decide to resell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

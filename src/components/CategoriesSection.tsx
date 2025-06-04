
import React from 'react';
import { Search, Home, Building } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#5EA51D] uppercase tracking-wider mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Our Main Specialty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Buy a New Home */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#5EA51D]/10 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-[#5EA51D]" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Buy a New Home
            </h3>
            <p className="text-gray-600 leading-relaxed">
              when an unknown printer took galley
              <br />
              and scrambled itmakepe spear
              <br />
              survived not five centuries
            </p>
          </div>

          {/* Sell a Home */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#5EA51D]/10 rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 text-[#5EA51D]" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Sell a Home
            </h3>
            <p className="text-gray-600 leading-relaxed">
              when an unknown printer took galley
              <br />
              and scrambled itmakepe spear
              <br />
              survived not five centuries
            </p>
          </div>

          {/* Rent a Home */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#5EA51D]/10 rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-[#5EA51D]" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Rent a Home
            </h3>
            <p className="text-gray-600 leading-relaxed">
              when an unknown printer took galley
              <br />
              and scrambled itmakepe spear
              <br />
              survived not five centuries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

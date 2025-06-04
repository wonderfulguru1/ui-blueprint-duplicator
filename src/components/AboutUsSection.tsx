
import React from 'react';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/lovable-uploads/e884b640-815e-47f7-8a8f-99479cd07521.png"
              alt="Modern luxury apartment building"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              ABOUT US
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              THIS IS INARGUABLY YOUR NEXT
              <br />
              <span className="text-[#5EA51D]">BEST MOVE.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                As long as luxury homes in Lagos are concerned, you will almost never find
                better deals than we offer. For several years, we have helped over 1000
                investors own properties in prime locations around Lagos at almost
                unbelievable prices.
              </p>
              
              <p>
                We have lowered the entry price into the Lagos real estate market while
                rocking the industry with quality delivery after the other. Not just that, we
                have developed highly customisable payment plans that feature ridiculously
                low initial payments and allow you to spread your balance across 12 to 18
                months. For a savvy homebuyer like you, this is unquestionably a deal that is
                too excellent to pass up.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 mt-8">
              <div className="border-2 border-[#5EA51D] p-4 rounded">
                <div className="text-4xl lg:text-5xl font-bold text-[#5EA51D]">3000+</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">HOMES</div>
                <div className="text-xl font-bold text-gray-900">SOLD</div>
              </div>
            </div>
            
            {/* Button */}
            <button className="mt-8 bg-[#5EA51D] hover:bg-[#4a8617] text-white font-semibold px-8 py-3 rounded transition-colors">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

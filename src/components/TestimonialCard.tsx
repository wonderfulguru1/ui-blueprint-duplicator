import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  quoteIcon: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  quoteIcon
}) => {
  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
      {/* Quote Icon Background */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r "></div>
      
      {/* Quote Icon */}
      <div className="relative flex justify-center pt-6">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img
            src={quoteIcon}
            className="w-6 h-6 object-contain"
            alt="Quote"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6 pt-4">
        {/* Quote Text */}
        <blockquote className="text-gray-700 text-base leading-relaxed mb-6 text-center">
          "{quote}"
        </blockquote>

        {/* Author Section */}
        <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
          <div className="relative">
            <img
              src={author.avatar}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
              alt={author.name}
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#d2a136] rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-gray-900 text-lg font-semibold leading-tight">
              {author.name}
            </h3>
            <p className="text-[#d2a136] text-sm font-medium tracking-wide uppercase">
              {author.title}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d2a136]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
};

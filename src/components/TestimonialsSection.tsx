
import React, { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f38dee67468332e2757319cf2425d37afc391cc7?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3bf9dbdb598d16d459eedf9b06a10dc9aeadc9c?placeholderIfAbsent=true"
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f505b4cda1f9ad7e8b101b5db3b97c7733e3c1e?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00ab2c970ed936a153cc3eef96991d2f86c7ede4?placeholderIfAbsent=true"
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/2452ed056ab3928efd05f1a06cf194a7b80055a7?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cffd1a7b6a6fe2d6cec8cfc6903ad82b288e9260?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Happy Customers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Genuine Experiences from Happy Clients and Trusted Partners
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                currentSlide === index 
                  ? 'bg-green-500 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

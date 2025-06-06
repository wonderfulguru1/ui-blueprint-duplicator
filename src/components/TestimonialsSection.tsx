import React, { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "We were looking for a secure place to build our family home, and Genesia Properties delivered exactly what we needed. Their honesty, transparency, and support gave us peace of mind throughout the process. We’re excited to start building soon.",
      author: {
        name: "Yomi Olaoye",
        title: "Marketing Manager, The Paradise",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3bf9dbdb598d16d459eedf9b06a10dc9aeadc9c?placeholderIfAbsent=true"
    },
    {
      quote: "Buying land seemed overwhelming at first, but Genesia Properties made it so easy. They explained everything clearly, from site inspection to payment and title registration. Today, I proudly own my first plot of land in a fast-developing area.",
      author: {
        name: "Grace Tokunbo",
        title: "CEO Juwsols LTD",
        avatar: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=200&auto=format&fit=crop"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00ab2c970ed936a153cc3eef96991d2f86c7ede4?placeholderIfAbsent=true"
    },
    {
      quote: "I was a bit nervous buying land from a new company, but Genesia Properties proved me wrong. Their team was honest, responsive, and made sure I understood every part of the process. I now own land in a promising location — and I’m so glad I took the step!.",
      author: {
        name: "Tope A., Ibadan",
        title: "Operations Manager, SwiftComm Logistics",
        avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cffd1a7b6a6fe2d6cec8cfc6903ad82b288e9260?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-[#06112a] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#06112a] leading-tight">
            Happy Customers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Genuine Experiences from Happy Clients and Trusted Partners
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

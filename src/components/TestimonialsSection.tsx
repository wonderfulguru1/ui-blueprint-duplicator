import React, { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Far far away, behind the word mountains, far\nfrom the countries Vokalia and Consonantia,\nthere live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f38dee67468332e2757319cf2425d37afc391cc7?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3bf9dbdb598d16d459eedf9b06a10dc9aeadc9c?placeholderIfAbsent=true"
    },
    {
      quote: "Far far away, behind the word mountains, far\nfrom the countries Vokalia and Consonantia,\nthere live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f505b4cda1f9ad7e8b101b5db3b97c7733e3c1e?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00ab2c970ed936a153cc3eef96991d2f86c7ede4?placeholderIfAbsent=true"
    },
    {
      quote: "Far far away, behind the word mountains, far\nfrom the countries Vokalia and Consonantia,\nthere live the blind texts.",
      author: {
        name: "Roger Scott",
        title: "Marketing Manager",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/2452ed056ab3928efd05f1a06cf194a7b80055a7?placeholderIfAbsent=true"
      },
      quoteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cffd1a7b6a6fe2d6cec8cfc6903ad82b288e9260?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="items-center z-0 flex w-full flex-col bg-[#F7F7F7] pt-[111px] pb-28 max-md:max-w-full max-md:py-[100px]">
      <div className="max-w-[1320px] items-center flex w-[1320px] flex-col gap-6 px-3">
        <header className="max-w-[1320px] items-center flex h-[99px] w-[770px] flex-col font-bold text-center gap-[5.39px] px-3">
          <div className="text-[#5ea51d] text-[13px] font-bold leading-[23.4px]">
            Testimonial
          </div>
          <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:text-[40px]">
            Clients We Help
          </h2>
        </header>
        <div className="justify-center self-stretch flex w-full gap-[28.4px] overflow-hidden flex-wrap mt-6 pt-8 max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="justify-center flex w-7 gap-2.5 mt-6 pt-[5px] pb-2.5">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex w-[9px] shrink-0 h-[9px] rounded-[4.5px] ${
                currentSlide === index ? 'bg-[#999]' : 'bg-[#DDD]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

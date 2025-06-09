import React, { useState, useEffect, useRef } from 'react';
import heroBg1 from '@/assets/about-hero.jpg';
import heroBg2 from '@/assets/about-hero3.jpg';
import heroBg3 from '@/assets/about-hero1.jpg';
import TypewriterText from '@/components/TypewriterText';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: heroBg1,
    title: 'Affordable today. Priceless tomorrow',
    subtitle: 'At Genesia Properties, we offer more than land — we offer possibility',
    button: 'LEARN MORE',
    link: '/products',
  },
  {
    image: heroBg2,
    title: 'Build your dream with us',
    subtitle: 'Discover prime locations and unmatched value for your future.',
    button: 'OUR OFFERS',
    link: '/products',
  },
  {
    image: heroBg3,
    title: 'Secure your future, invest smart',
    subtitle: 'Join hundreds of happy landowners and start your journey today.',
    button: 'GET STARTED',
    link: '/appointment',
  },
];

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTypingDone(false);
  }, [current]);

  useEffect(() => {
    if (!typingDone) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [typingDone, current]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${current === idx ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
          alt={slide.title}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Slide Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 sm:mb-6">
          <TypewriterText
            text={slides[current].title}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            speed={50}
            onDone={() => setTypingDone(true)}
          />
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
          {slides[current].subtitle}
        </p>
        <Link 
          to={slides[current].link} 
          className="inline-flex items-center rounded-lg gap-2 sm:gap-3 bg-[#D2A136] hover:bg-[#B8912E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 lg:px-12 py-3 sm:py-4 transition-colors"
        >
          {slides[current].button}
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0">
            <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* 3-line Pagination */}
      <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 cursor-pointer select-none">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-6 lg:w-8 h-0.5 rounded transition-all duration-300 ${current === idx ? 'bg-[#D2A136]' : 'bg-white opacity-80'}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

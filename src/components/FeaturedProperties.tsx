import React from 'react';
import { PropertyCard } from './PropertyCard';

export const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      image: '/lovable-uploads/a49a0d3b-e166-428d-84eb-27f2d39c89ac.png',
      price: '₦6.25M',
      title: "Anna's Court Dei-Dei",
      location: 'By Sefacc Hotel and Suites Deidei',
      type: 'Sale' as const,
      agent: { name: 'Genesia Properties', avatar: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=200&auto=format&fit=crop' },
      timeAgo: '2 weeks ago',
      sqft: '250sqm',
      showPrice: false
    },
    {
      image: '/lovable-uploads/0a327414-8a92-4ca1-874e-56e6e8a3a5fa.png',
      price: '₦2.99M',
      title: "Anna's Court Kuje",
      location: 'Kuje Bridge after Military Checkpoint, Kuje, Abuja',
      type: 'Sale' as const,
      agent: { name: 'Genesia Properties', avatar: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=200&auto=format&fit=crop' },
      timeAgo: '2 weeks ago',
      sqft: '250sqm',
      showPrice: false
    }
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-[#06112a] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-[#06112a] text-3xl md:text-[50px] font-bold leading-tight md:leading-[70px]">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <div key={index}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

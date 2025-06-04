
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
      agent: { name: 'Genesia Properties', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
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
      agent: { name: 'Genesia Properties', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
      timeAgo: '2 weeks ago',
      sqft: '250sqm',
      showPrice: false
    }
  ];

  return (
    <section className="items-center z-0 flex w-full flex-col justify-center bg-[#F7F7F7] py-28 max-md:max-w-full max-md:py-[100px]">
      <div className="max-w-[1320px] flex w-[1320px] flex-col items-stretch pb-[60px] px-3">
        <header className="max-w-[1320px] items-center self-center z-10 flex min-h-[99px] w-[880px] flex-col font-bold text-center gap-[5.39px] px-3">
          <div className="text-black text-[13px] font-bold leading-[23.4px]">
            Our Properties
          </div>
          <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:max-w-full max-md:text-[40px]">
            Featured Properties
          </h2>
        </header>
        <div className="mt-[72px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex justify-center max-md:flex-col max-md:items-stretch">
            {properties.map((property, index) => (
              <div key={index} className="w-6/12 max-md:w-full max-md:ml-0">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

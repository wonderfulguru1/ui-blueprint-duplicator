import React from 'react';
import { PropertyCard } from './PropertyCard';

export const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6ce969b4ab4daa227f4fc6aa9052423e23abb6db?placeholderIfAbsent=true',
      price: '$300,000',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'Sale' as const,
      agent: { name: 'John Dorf', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
      timeAgo: '2 weeks ago',
      sqft: '1,878 sqft'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d512ca7cc6f42ebc2e12dd2c6b501032b34c84a?placeholderIfAbsent=true',
      price: '800,000',
      monthlyPrice: '$3,050',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'Rent' as const,
      agent: { name: 'John Dorf', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
      timeAgo: '2 weeks ago',
      sqft: '1,878 sqft'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/53e85a7dc49f3777f3befc7dc72dd6efd7cfd5eb?placeholderIfAbsent=true',
      price: '$300',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'Sale' as const,
      agent: { name: 'John Dorf', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
      timeAgo: '2 weeks ago',
      sqft: '1,878 sqft'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ae13c3547d3aaa5d56ae8fe19ae5ccbaaf6e711?placeholderIfAbsent=true',
      price: '$300',
      monthlyPrice: '/ mo',
      title: 'Sunny Loft Property',
      location: 'New York',
      type: 'Rent' as const,
      agent: { name: 'John Dorf', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7465ef98c2c2a1dd5948c27e9afa8fc540c97b81?placeholderIfAbsent=true' },
      timeAgo: '2 weeks ago',
      sqft: '1,878 sqft'
    }
  ];

  return (
    <section className="items-center z-0 flex w-full flex-col justify-center bg-[#F7F7F7] py-28 max-md:max-w-full max-md:py-[100px]">
      <div className="max-w-[1320px] flex w-[1320px] flex-col items-stretch pb-[60px] px-3">
        <header className="max-w-[1320px] items-center self-center z-10 flex min-h-[99px] w-[880px] flex-col font-bold text-center gap-[5.39px] px-3">
          <div className="text-[#5ea51d] text-[13px] font-bold leading-[23.4px]">
            Our Properties
          </div>
          <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:max-w-full max-md:text-[40px]">
            Featured Properties
          </h2>
        </header>
        <div className="mt-[72px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {properties.map((property, index) => (
              <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

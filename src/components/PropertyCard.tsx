import React from 'react';

interface PropertyCardProps {
  image: string;
  price: string;
  monthlyPrice?: string;
  title: string;
  location: string;
  type: 'Sale' | 'Rent';
  agent: {
    name: string;
    avatar: string;
  };
  timeAgo: string;
  sqft: string;
  showPrice?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  monthlyPrice,
  title,
  location,
  type,
  agent,
  timeAgo,
  sqft,
  showPrice = true
}) => {
  return (
    <article className="bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="relative aspect-[1.224] w-full">
        <img
          src={image}
          className="absolute h-full w-full object-cover"
          alt={title}
        />
        {showPrice && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {monthlyPrice ? (
              <div className="flex gap-2">
                <div className="rounded bg-[#5EA51D] relative text-base whitespace-nowrap leading-[29px] px-2">
                  <div>{price}</div>
                  <div className="bg-white/20 absolute h-px w-[75px] top-1/2 -translate-y-1/2" />
                </div>
                <div className="rounded bg-[#5EA51D] flex items-center px-2">
                  <div className="text-base leading-[29px]">{monthlyPrice}</div>
                  <div className="text-sm leading-[25px] ml-1">/ mo</div>
                </div>
              </div>
            ) : (
              <div className="rounded bg-[#5EA51D] px-2 text-base whitespace-nowrap leading-[29px]">
                {price}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src={agent.avatar}
              className="w-8 h-8 rounded-full object-cover"
              alt={agent.name}
            />
            <div className="text-sm font-semibold">
              {agent.name}
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-600">
            {timeAgo}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a5423fcdba093aa5464d91e894e4ad43b7b6360?placeholderIfAbsent=true"
              className="w-2 h-4 mr-1"
              alt="Location"
            />
            <span>{location}</span>
          </div>
          <div className="text-sm">
            {type}
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce26ea97dd726f7b768db24cccf1e25fb687e1ba?placeholderIfAbsent=true"
            className="w-6 h-6"
            alt="Bedrooms"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7afb310892d5ac9b29f973fc4065b1126e9f1ff?placeholderIfAbsent=true"
            className="w-6 h-6"
            alt="Bathrooms"
          />
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ca05ab70baab166faa7d9f7aea48e106d6e2f44?placeholderIfAbsent=true"
              className="w-4 h-4"
              alt="Area"
            />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

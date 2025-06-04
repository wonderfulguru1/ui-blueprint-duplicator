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
  sqft
}) => {
  return (
    <article className="bg-[rgba(255,255,255,0.002)] shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)] grow overflow-hidden font-semibold w-full max-md:mt-6">
      <div className="flex flex-col relative aspect-[1.224] w-full text-white">
        <img
          src={image}
          className="absolute h-full w-full object-cover inset-0"
          alt={title}
        />
        <div className="relative bg-black flex w-full gap-2 pl-[25px] pr-[61px] pt-[205px] pb-4 max-md:pt-[100px] max-md:px-5">
          {monthlyPrice ? (
            <>
              <div className="rounded bg-[#5EA51D] relative text-base whitespace-nowrap leading-[29px] pl-[7px] pr-1.5">
                <div className="z-0">{price}</div>
                <div className="bg-[rgba(255,255,255,0.20)] absolute z-0 flex min-h-px w-[75px] translate-x-[0%] -translate-y-2/4 h-px top-2/4 inset-x-0" />
              </div>
              <div className="items-center rounded bg-[#5EA51D] flex px-[7px]">
                <div className="text-base leading-[29px] self-stretch my-auto">
                  {monthlyPrice}
                </div>
                <div className="text-sm leading-[25px] self-stretch my-auto">
                  {" "}/ mo
                </div>
              </div>
            </>
          ) : (
            <div className="rounded bg-[#5EA51D] px-[7px] text-base whitespace-nowrap leading-[29px]">
              {price}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col bg-white p-[25px] max-md:px-5">
        <div className="self-stretch flex w-full items-stretch gap-5 text-sm text-black justify-between">
          <div className="flex items-stretch gap-2">
            <img
              src={agent.avatar}
              className="aspect-[1] object-contain w-[34px] shrink-0 rounded-[17px]"
              alt={agent.name}
            />
            <div className="text-sm font-semibold leading-[21px]">
              {agent.name}
            </div>
          </div>
          <div className="text-right text-sm font-semibold leading-[25.2px]">
            {timeAgo}
          </div>
        </div>
        <h3 className="text-black text-xl font-semibold leading-[30px]">
          {title}
        </h3>
        <div className="flex items-stretch gap-[18px] text-[13px] font-normal leading-[1.8] mt-1.5">
          <div className="flex items-stretch text-[#999999] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a5423fcdba093aa5464d91e894e4ad43b7b6360?placeholderIfAbsent=true"
              className="aspect-[0.54] object-contain w-[7px] shrink-0"
              alt="Location"
            />
            <div className="text-[13px] font-normal leading-[23.4px]">
              {" "}{location}{" "}
            </div>
          </div>
          <div className="text-[13px] font-normal leading-[23.4px]">
            {type}
          </div>
        </div>
        <div className="flex gap-[14.1px] text-base text-[#999999] font-normal leading-[1.8] mt-[21px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce26ea97dd726f7b768db24cccf1e25fb687e1ba?placeholderIfAbsent=true"
            className="aspect-[1.07] object-contain w-[31px] shrink-0"
            alt="Bedrooms"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7afb310892d5ac9b29f973fc4065b1126e9f1ff?placeholderIfAbsent=true"
            className="aspect-[1.03] object-contain w-[30px] shrink-0"
            alt="Bathrooms"
          />
          <div className="flex items-stretch gap-[5px] w-[95px] py-1.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ca05ab70baab166faa7d9f7aea48e106d6e2f44?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 shrink-0"
              alt="Area"
            />
            <div className="text-base font-normal leading-[28.8px]">
              {sqft}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

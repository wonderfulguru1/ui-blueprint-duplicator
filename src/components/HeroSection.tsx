import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-0 min-h-[700px] w-full max-md:max-w-full">
      <div className="flex flex-col shadow-[0px_20px_35px_-30px_rgba(0,0,0,0.26)] overflow-hidden relative z-0 min-h-[700px] w-full text-white font-normal text-center max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80aa40042263d6875f7ff908ccb52410321c6e02?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
        />
        <div className="relative bg-[rgb(3,5,19)] flex flex-col items-center justify-center px-20 py-[410px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
          <div className="flex mb-[-83px] w-[636px] max-w-full flex-col items-stretch max-md:mb-2.5">
            <h1 className="text-[70px] leading-[77px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
              Let Your Home Be
              <br />
              Unique & Stylist
            </h1>
            <p className="text-base leading-[29px] mt-12 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
              A small river named Duden flows by their place and supplies it
              with the necessary
              <br />
              regelialia. It is a paradisematic country, in which roasted
              parts of sentences fly into your
              <br />
              mouth.
            </p>
            <button className="items-center border-[#5EA51D] shadow-[0px_24px_36px_-11px_rgba(0,0,0,0.09)] bg-[#5EA51D] gap-[10px] text-[12px] font-[600] tracking-[1px] mt-[57px] px-[49px] py-[17px] border-[1px] border-solid max-md:mt-10 max-md:px-5 flex justify-center">
              <span className="self-stretch my-auto">Learn More </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4328e0be551aa1e404be465967cf345710eeff02?placeholderIfAbsent=true"
                className="aspect-[0.67] object-contain w-2 self-stretch shrink-0 my-auto"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute z-0 flex w-[30px] flex-col gap-[15px] py-[15px] right-[30px] bottom-[567px]">
        <div className="flex min-h-0.5 w-full bg-[rgba(255,255,255,0.80)]" />
        <div className="flex min-h-0.5 w-full bg-[#5EA51D] mt-[15px]" />
        <div className="flex min-h-0.5 w-full bg-[rgba(255,255,255,0.80)] mt-[15px]" />
      </div>
    </section>
  );
};

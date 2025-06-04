import React from 'react';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="flex flex-col relative z-0 min-h-[200px] w-full text-white max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ebb58b18261f1bf9b06d00e301861469d84450?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="CTA background"
      />
      <div className="relative bg-[rgb(94,165,29)] flex w-full flex-col items-center justify-center px-[70px] py-[66px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[732px] max-w-full items-stretch gap-[40px_88px] flex-wrap">
          <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <h2 className="text-[40px] font-semibold max-md:max-w-full">
              Find Best Place For Leaving
            </h2>
            <p className="text-base font-normal leading-[1.8] mt-[18px]">
              Find Best Place For Leaving
            </p>
          </div>
          <button className="border-[#000] shadow-[0px_24px_36px_-11px_rgba(0,0,0,0.09)] bg-[#000] text-[12px] font-[600] tracking-[1px] mt-[12px] px-[25px] py-[17px] border-[1px] border-solid max-md:px-5 hover:bg-gray-800 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

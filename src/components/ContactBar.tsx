import React from 'react';

export const ContactBar: React.FC = () => {
  return (
    <header className="justify-center z-0 flex w-full flex-wrap bg-[#06112A] py-6 max-md:max-w-full">
      <div className="max-w-[1320px] flex min-w-60 items-stretch gap-[39px] w-[440px] pl-3 pr-20 py-0.5 max-md:max-w-full max-md:pr-5">
        <div className="justify-center items-center border-[rgba(255,255,255,0.10)] min-h-[40px] pt-[13px] pb-[13px] px-[1px] rounded-[20px] border-[1px] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7fe70fdf93f05f85c75076cde1d51e3bce9762c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[15px] self-stretch my-auto"
            alt="Phone icon"
          />
        </div>
        <div className="flex flex-col items-stretch leading-[1.8] my-auto">
          <div className="flex items-stretch gap-1 text-[13px] font-semibold">
            <div className="text-[#5ea51d] text-[13px] font-semibold leading-[23.4px]">
              Free Call
            </div>
            <div className="text-white text-[13px] font-semibold leading-[23.4px]">
              +1 234 456 78910
            </div>
          </div>
          <div className="text-[#999999] text-xs font-medium leading-[21.6px]">
            Call Us Now 24/7 Customer Support
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] flex min-w-60 items-stretch gap-[39px] w-[440px] pl-3 pr-20 py-0.5 max-md:max-w-full max-md:pr-5">
        <div className="justify-center items-center border-[rgba(255,255,255,0.10)] min-h-[40px] pt-[13px] pb-[13px] px-[1px] rounded-[20px] border-[1px] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e39182972d6945f168213cbbf94e5ee4f5d89c7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[15px] self-stretch my-auto"
            alt="Location icon"
          />
        </div>
        <div className="flex flex-col items-stretch leading-[1.8] my-auto">
          <div className="text-white text-[13px] font-semibold leading-[23.4px]">
            Our Location
          </div>
          <div className="text-[#999999] text-xs font-medium leading-[21.6px]">
            Suite 721 New York NY 10016
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] flex min-w-60 gap-[37px] w-[440px] pl-3 pr-20 py-0.5 max-md:max-w-full max-md:pr-5">
        <div className="justify-center items-center border-[rgba(255,255,255,0.10)] min-h-[40px] pt-[13px] pb-[13px] px-[1px] rounded-[20px] border-[1px] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7622ccbe1c0eb35affd5a00a7e37f37f6187bf84?placeholderIfAbsent=true"
            className="aspect-[1.13] object-contain w-[17px] self-stretch my-auto"
            alt="Social icon"
          />
        </div>
        <div className="flex items-stretch gap-[7px]">
          <div className="flex flex-col items-stretch">
            <div className="text-[#5ea51d] text-[13px] font-semibold leading-[23.4px]">
              <span style={{color: 'rgba(94,165,29,1)'}}>Connect </span>
              <span style={{color: 'rgba(255,255,255,1)'}}>with us</span>
            </div>
            <div className="flex items-stretch gap-1.5 text-[10px] text-[#999999] font-medium whitespace-nowrap uppercase tracking-[1px] leading-[18px] mt-2.5">
              <div className="text-[10px] font-medium leading-[18px]">
                Facebook
              </div>
              <div className="text-[10px] font-medium leading-[18px]">
                Twitter
              </div>
            </div>
          </div>
          <div className="text-[10px] font-medium leading-[18px] tracking-[1px] text-[#999999] whitespace-nowrap uppercase mt-5">
            Dribbble
          </div>
        </div>
      </div>
    </header>
  );
};

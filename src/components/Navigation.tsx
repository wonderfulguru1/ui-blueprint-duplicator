import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="items-center absolute z-0 flex w-[1920px] text-white bg-[rgba(0,0,0,0.10)] px-[300px] right-0 top-[92px] max-md:max-w-full max-md:px-5">
      <div className="max-w-[1320px] justify-center items-stretch self-stretch flex min-w-60 w-full gap-[40px_100px] flex-wrap flex-1 shrink basis-[0%] my-auto px-[13px] max-md:max-w-full">
        <div className="leading-[1.1] gap-[-0.71px] py-[11px]">
          <div className="text-[28px] font-black leading-[30.8px]">
            Oakberry
          </div>
          <div className="text-[11px] font-bold leading-[12.1px]">
            Real Estate Agency
          </div>
        </div>
        <div className="flex text-[13px] font-bold whitespace-nowrap uppercase tracking-[2px] leading-[23px] justify-center flex-wrap">
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            Home
          </div>
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            About
          </div>
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            Properties
          </div>
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            Agents
          </div>
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            Blog
          </div>
          <div className="text-[13px] font-bold leading-[23.4px] max-md:px-5">
            Contact
          </div>
        </div>
        <div className="text-xs font-semibold leading-[18px]">
          Submit A Property
        </div>
      </div>
    </nav>
  );
};

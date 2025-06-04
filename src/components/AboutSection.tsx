
import React from 'react';

interface StatisticProps {
  number: string;
  suffix?: string;
  label: string;
}

const Statistic: React.FC<StatisticProps> = ({ number, suffix, label }) => (
  <div className="flex flex-col items-stretch font-semibold">
    <div className="flex items-stretch gap-1 text-black whitespace-nowrap leading-none">
      <div className="text-black text-[40px] font-semibold leading-[40px]">
        {number}
      </div>
      {suffix && (
        <div className="text-black text-3xl font-bold leading-[30px]">
          {suffix}
        </div>
      )}
    </div>
    <div className="text-[#D2A136] text-[13px] font-semibold leading-[15.6px]">
      {label}
    </div>
  </div>
);

export const AboutSection: React.FC = () => {
  const statistics = [
    { number: '50', label: 'Years of Experienced' },
    { number: '210', suffix: 'K+', label: 'Total Properties' },
    { number: '450', label: 'Qualified Realtors' },
    { number: '100', label: 'Total Branches' }
  ];

  return (
    <section className="items-stretch flex-wrap self-center z-0 flex w-[1344px] max-w-full gap-[0px_var(--font-size-24,24px)] pl-6 py-28 max-md:pl-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7029cab499847bca33968420a4a07ee754fd55b5?placeholderIfAbsent=true"
        className="aspect-[0.52] object-contain w-80 min-w-60 grow shrink"
        alt="About us"
      />
      <div className="max-w-[1344px] flex min-w-60 flex-col items-stretch grow shrink w-[816px] pt-1.5 px-6 max-md:max-w-full max-md:px-5">
        <div className="text-[#D2A136] text-[13px] font-bold leading-[23.4px]">
          About Us
        </div>
        <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5">
          Oakberry A Real Estate Company
        </h2>
        <p className="text-[#999999] text-base font-normal leading-[28.8px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
          <br />
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <div className="flex w-[769px] max-w-full gap-5 flex-wrap justify-between mt-[74px] max-md:mt-10">
          {statistics.map((stat, index) => (
            <Statistic
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37f7eb819cee8a5699b36b253239df27b207803f?placeholderIfAbsent=true"
          className="aspect-[2.12] object-contain w-full mt-14 max-md:max-w-full max-md:mt-10"
          alt="Company signature"
        />
      </div>
    </section>
  );
};

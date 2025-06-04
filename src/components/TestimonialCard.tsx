import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  quoteIcon: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  quoteIcon
}) => {
  return (
    <article className="rounded shadow-[0px_5px_12px_-9px_rgba(0,0,0,0.17)] flex min-w-60 flex-col overflow-hidden grow shrink w-[328px] bg-white pl-5 pr-[60px] pb-[30px] max-md:pr-5">
      <div className="justify-center items-center flex min-h-[45px] bg-[#5EA51D] rounded-[22.5px]">
        <img
          src={quoteIcon}
          className="aspect-[1.5] object-contain w-[15px] self-stretch my-auto"
          alt="Quote"
        />
      </div>
      <blockquote className="text-black text-base font-normal leading-[28.8px]">
        {quote}
      </blockquote>
      <div className="flex items-stretch gap-4 font-semibold leading-[1.8] ml-2.5 mt-[33px]">
        <img
          src={author.avatar}
          className="aspect-[1] object-contain w-20 shrink-0 rounded-[40px]"
          alt={author.name}
        />
        <div className="flex flex-col items-stretch my-auto">
          <div className="text-black text-[22px] font-semibold leading-[39.6px]">
            {author.name}
          </div>
          <div className="text-[#5ea51d] text-[13px] font-semibold leading-[23.4px]">
            {author.title}
          </div>
        </div>
      </div>
    </article>
  );
};

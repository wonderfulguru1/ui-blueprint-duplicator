import React from 'react';

interface AgentCardProps {
  image: string;
  name: string;
  properties: string;
  socialLinks: string[];
}

export const AgentCard: React.FC<AgentCardProps> = ({
  image,
  name,
  properties,
  socialLinks
}) => {
  return (
    <article className="bg-[rgba(94,165,29,1)] shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)] grow overflow-hidden w-full pb-[30px] rounded-sm max-md:mt-6">
      <img
        src={image}
        className="aspect-[1.02] object-contain w-full"
        alt={name}
      />
      <div className="flex w-[170px] max-w-full flex-col ml-[30px] mt-[37px] max-md:ml-2.5">
        <div className="self-stretch flex items-stretch gap-4 text-sm text-white font-semibold uppercase leading-[1.8]">
          <div className="text-sm font-semibold leading-[25.2px]">
            Listing
          </div>
          <div className="text-sm font-semibold leading-[25.2px]">
            {properties}
          </div>
        </div>
        <h3 className="text-[22px] font-semibold leading-[33px] text-white">
          <a
            href="https://preview.colorlib.com/theme/oakberry/properties.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {name}
          </a>
        </h3>
        <div className="flex gap-[4.1px] mt-[9px]">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.1)] flex min-h-[34px] items-center justify-center w-[34px] h-[34px] rounded-[17px] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer"
            >
              <img
                src={link}
                className="aspect-[0.87] object-contain w-3.5 self-stretch my-auto"
                alt="Social link"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

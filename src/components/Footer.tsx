import React from 'react';

interface FooterLinkProps {
  icon: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, text }) => (
  <div className="items-center flex h-[22px] gap-2">
    <img
      src={icon}
      className="aspect-[0.71] object-contain w-2.5 self-stretch shrink-0 my-auto"
      alt=""
    />
    <div className="text-base font-normal leading-[28.8px]">
      {text}
    </div>
  </div>
);

export const Footer: React.FC = () => {
  const offerLinks = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed1ffa32ae291d47439d7604fa1e823cfa826e29?placeholderIfAbsent=true', text: 'Properties' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a01ee748018ba53f292b6c225acd824f68e35450?placeholderIfAbsent=true', text: 'Agents' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c456fa163c76f7d0bafe6edcc1c5c09f67d837f?placeholderIfAbsent=true', text: 'Locations' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2b6fb8a61e6ec8c454919b640ffef048a5c6d5c?placeholderIfAbsent=true', text: 'Clients Support' }
  ];

  const companyLinks = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed1ffa32ae291d47439d7604fa1e823cfa826e29?placeholderIfAbsent=true', text: 'Home' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a01ee748018ba53f292b6c225acd824f68e35450?placeholderIfAbsent=true', text: 'About' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c456fa163c76f7d0bafe6edcc1c5c09f67d837f?placeholderIfAbsent=true', text: 'Blog' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2b6fb8a61e6ec8c454919b640ffef048a5c6d5c?placeholderIfAbsent=true', text: 'Contact Us' }
  ];

  const quickLinks = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed1ffa32ae291d47439d7604fa1e823cfa826e29?placeholderIfAbsent=true', text: 'Terms & Conditions' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a01ee748018ba53f292b6c225acd824f68e35450?placeholderIfAbsent=true', text: 'User\'s Guide' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c456fa163c76f7d0bafe6edcc1c5c09f67d837f?placeholderIfAbsent=true', text: 'Support Center' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2b6fb8a61e6ec8c454919b640ffef048a5c6d5c?placeholderIfAbsent=true', text: 'Press Info' }
  ];

  return (
    <footer className="z-0 flex w-full flex-col items-center bg-[#06112A] pt-28 max-md:max-w-full max-md:pt-[100px]">
      <div className="flex w-[1160px] max-w-full gap-[40px_100px] text-white">
        <div className="self-stretch min-h-[53px] leading-[1.1] gap-[-0.71px] py-[5px]">
          <div className="text-[28px] font-black leading-[30.8px]">
            Oakberry
          </div>
          <div className="text-[11px] font-bold leading-[12.1px]">
            Real Estate Agency
          </div>
        </div>
        <div className="text-xl font-bold leading-[30px]">
          Offers
        </div>
        <div className="text-xl font-bold leading-[30px]">
          Company
        </div>
        <div className="text-xl font-bold leading-[30px]">
          Quick Links
        </div>
        <div className="text-xl font-bold leading-[30px]">
          Have a Questions?
        </div>
      </div>
      <div className="flex w-[1296px] max-w-full gap-5 flex-wrap justify-between mt-[17px]">
        <div className="flex flex-col items-stretch mt-[31px]">
          <p className="text-white text-base font-normal leading-[28.8px]">
            A small river named Duden flows by their
            <br />
            place and supplies it with the necessary
            <br />
            regelialia.
          </p>
          <div className="flex gap-[14.1px] mt-[22px] pb-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2379dfe5ffb0fa24144358d1379a0c64958d91b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[20px]"
              alt="Social media"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae72363ce03894ff6d41d6b9d42b53e95ce5514?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[20px]"
              alt="Social media"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1b7d04c1ab63877289d41603dc53916227478dd?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[20px]"
              alt="Social media"
            />
          </div>
        </div>
        <div className="flex flex-col text-base text-white font-normal leading-[29px] gap-[16.8px] pt-[3px] pb-1">
          {offerLinks.map((link, index) => (
            <div key={index} className={index > 0 ? 'mt-[17px]' : ''}>
              <FooterLink icon={link.icon} text={link.text} />
            </div>
          ))}
        </div>
        <div className="flex flex-col text-base text-white font-normal leading-[29px] gap-[16.8px] pt-[3px] pb-1">
          {companyLinks.map((link, index) => (
            <div key={index} className={index > 0 ? 'mt-[17px]' : ''}>
              <FooterLink icon={link.icon} text={link.text} />
            </div>
          ))}
        </div>
        <div className="flex flex-col text-base text-white font-normal leading-[29px] gap-[16.8px] pt-[3px] pb-1">
          {quickLinks.map((link, index) => (
            <div key={index} className={index > 0 ? 'mt-[17px]' : ''}>
              <FooterLink icon={link.icon} text={link.text} />
            </div>
          ))}
        </div>
        <div className="flex flex-col text-sm text-white font-normal w-[306px] max-w-full gap-[15px] pb-[15px]">
          <div className="self-stretch flex w-full items-stretch gap-[25px] text-[15px] leading-[23px] py-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc21d9cd1ee38c127e1bd70f536e56014be6a73?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[15px] shrink-0"
              alt="Address"
            />
            <div className="text-[15px] font-normal leading-[22.5px]">
              203 Fake St. Mountain View, San
              <br />
              Francisco, California, USA
            </div>
          </div>
          <div className="flex w-[152px] max-w-full items-start gap-7 mt-[15px] py-[3px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b57c9e244232c2b1a2ba1d685e3a50f5d4ea4c?placeholderIfAbsent=true"
              className="aspect-[0.8] object-contain w-3 shrink-0"
              alt="Phone"
            />
            <div className="text-sm font-normal leading-[21px]">
              +2 392 3929 210
            </div>
          </div>
          <div className="flex w-[180px] max-w-full gap-[25px] whitespace-nowrap mt-[15px] pt-0.5 pb-[19px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5437829697af71a40327f5aa5b28e5d8a0c370?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[15px] shrink-0"
              alt="Email"
            />
            <div className="text-sm font-normal leading-[21px]">
              info@yourdomain.com
            </div>
          </div>
        </div>
      </div>
      <div className="items-center self-stretch flex text-[13px] text-white font-normal text-center leading-[23px] flex-wrap bg-[#050D21] mt-[120px] pt-[47px] pb-12 px-[728px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-[13px] font-normal leading-[23.4px]">
          Copyright ©2025 All rights reserved | This template is made with 
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/709dd008b45a6ca58edd5b1a2ff15115d4105f3e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[13px] self-stretch shrink-0 my-auto"
          alt="Heart"
        />
        <div className="text-[13px] font-normal leading-[23.4px]">
          {" "}by 
        </div>
        <div className="text-[13px] font-normal leading-[23.4px]">
          Colorlib
        </div>
      </div>
    </footer>
  );
};

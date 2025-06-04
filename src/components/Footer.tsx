
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
    <footer className="z-0 flex w-full flex-col items-center bg-[#06112A] pt-16 md:pt-20 lg:pt-28 max-md:max-w-full">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-white mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl md:text-[28px] font-black leading-tight mb-1">
              Oakberry
            </div>
            <div className="text-[11px] font-bold leading-tight">
              Real Estate Agency
            </div>
          </div>
          
          {/* Section Headers */}
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

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Description */}
          <div className="lg:col-span-1">
            <p className="text-white text-base font-normal leading-[28.8px] mb-6">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex gap-[14.1px]">
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

          {/* Offers Links */}
          <div className="flex flex-col text-base text-white font-normal leading-[29px] space-y-4">
            {offerLinks.map((link, index) => (
              <FooterLink key={index} icon={link.icon} text={link.text} />
            ))}
          </div>

          {/* Company Links */}
          <div className="flex flex-col text-base text-white font-normal leading-[29px] space-y-4">
            {companyLinks.map((link, index) => (
              <FooterLink key={index} icon={link.icon} text={link.text} />
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-base text-white font-normal leading-[29px] space-y-4">
            {quickLinks.map((link, index) => (
              <FooterLink key={index} icon={link.icon} text={link.text} />
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col text-white space-y-4">
            {/* Address */}
            <div className="flex items-start gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc21d9cd1ee38c127e1bd70f536e56014be6a73?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[15px] shrink-0 mt-1"
                alt="Address"
              />
              <div className="text-[15px] font-normal leading-[22.5px]">
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b57c9e244232c2b1a2ba1d685e3a50f5d4ea4c?placeholderIfAbsent=true"
                className="aspect-[0.8] object-contain w-3 shrink-0 mt-1"
                alt="Phone"
              />
              <div className="text-sm font-normal leading-[21px]">
                +2 392 3929 210
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5437829697af71a40327f5aa5b28e5d8a0c370?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[15px] shrink-0 mt-1"
                alt="Email"
              />
              <div className="text-sm font-normal leading-[21px]">
                info@yourdomain.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-[#050D21] mt-16 lg:mt-[120px] py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center text-white text-[13px] font-normal leading-[23.4px] space-y-2 sm:space-y-0 sm:space-x-1">
            <span>Copyright ©2025 All rights reserved | This template is made with</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/709dd008b45a6ca58edd5b1a2ff15115d4105f3e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[13px] mx-1"
              alt="Heart"
            />
            <span>by Colorlib</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

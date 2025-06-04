import React from 'react';

export const PartnersSection: React.FC = () => {
  const partnerLogos = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/8ab8945d33140c709adea41179f725bc4844e200?placeholderIfAbsent=true',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7a46bfe7ac8583930ce82ce637ebf31d664bbd32?placeholderIfAbsent=true',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd8775728d665b6d9346ad0d48995889f708f7?placeholderIfAbsent=true',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/56bbf455acc6c15a22facd649ca3057a738e1689?placeholderIfAbsent=true',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/c21b6691740e2c8ec1d09a6055335837f55711d8?placeholderIfAbsent=true',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/9cd8941e1e952ff566b24670741018e0a29994eb?placeholderIfAbsent=true'
  ];

  return (
    <section className="z-0 flex w-full justify-center flex-wrap max-md:max-w-full">
      {partnerLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          className="aspect-[1.07] object-contain w-80 min-w-60 shrink flex-1 basis-[0%]"
          alt={`Partner ${index + 1}`}
        />
      ))}
    </section>
  );
};

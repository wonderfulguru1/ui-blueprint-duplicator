import React from 'react';
import { AgentCard } from './AgentCard';

export const AgentsSection: React.FC = () => {
  const agents = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28ccd46c743620feb705573535fe19cfbbc444ed?placeholderIfAbsent=true',
      name: 'Mike Bochs',
      properties: '10 Properties',
      socialLinks: ['https://cdn.builder.io/api/v1/image/assets/TEMP/0c4cf166bb33b27150107f297c78297877665708?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff058441a154b6a612c1820fe1a1e2ee94aa27bd?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/0b32de35254f30650740902b11c885c0bed000a6?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f09a6ad507a2186577a12697df7dbf93ca60dc0?placeholderIfAbsent=true']
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dcccd80824ceb262dac1106f58d6204d3056a2fb?placeholderIfAbsent=true',
      name: 'Mike Bochs',
      properties: '10 Properties',
      socialLinks: ['https://cdn.builder.io/api/v1/image/assets/TEMP/0c4cf166bb33b27150107f297c78297877665708?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae163e296904e7a772c14100ec1612177ce42c98?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/e794212d7800cec12627ce0841ac4649b51c6b1e?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f7dceda3dbe23dc1b129ddd3b6b37557fc8d3c0a?placeholderIfAbsent=true']
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1aae91843426336b449c87b18b88dcea0d9bd3eb?placeholderIfAbsent=true',
      name: 'Jessica Moore',
      properties: '10 Properties',
      socialLinks: ['https://cdn.builder.io/api/v1/image/assets/TEMP/0c4cf166bb33b27150107f297c78297877665708?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae163e296904e7a772c14100ec1612177ce42c98?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/e794212d7800cec12627ce0841ac4649b51c6b1e?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f09a6ad507a2186577a12697df7dbf93ca60dc0?placeholderIfAbsent=true']
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cccd999fdd363ed629ab38e9f35b18956e2f1e6e?placeholderIfAbsent=true',
      name: 'Sarah Geronimo',
      properties: '10 Properties',
      socialLinks: ['https://cdn.builder.io/api/v1/image/assets/TEMP/0c4cf166bb33b27150107f297c78297877665708?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae163e296904e7a772c14100ec1612177ce42c98?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/0b32de35254f30650740902b11c885c0bed000a6?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae52fcf82a7cc2efabd4b957506df598ea00830f?placeholderIfAbsent=true']
    }
  ];

  return (
    <section className="relative z-0 flex w-full flex-col pt-28 max-md:max-w-full max-md:pt-[100px]">
      <div className="absolute z-0 flex min-h-[788px] w-[1248px] max-w-full bg-[#050D21] left-0 right-[672px] inset-y-0" />
      <div className="max-w-[1320px] self-center z-0 flex w-[1320px] flex-col items-stretch pb-10 px-3">
        <header className="max-w-[1320px] self-center z-10 h-[99px] w-[1100px] font-bold gap-[5.39px] px-3">
          <div className="text-[#5ea51d] text-[13px] font-bold leading-[23.4px]">
            Meets Our Agents
          </div>
          <h2 className="text-white text-[50px] font-bold leading-[70px] max-md:text-[40px]">
            Our Agents
          </h2>
        </header>
        <div className="mt-[72px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {agents.map((agent, index) => (
              <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <AgentCard {...agent} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface PageHeroProps {
  title: React.ReactNode;
  breadcrumb: React.ReactNode;
  backgroundImage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, breadcrumb, backgroundImage }) => {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <div className="text-sm mb-4">
          {breadcrumb}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero; 
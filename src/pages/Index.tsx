import React from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PropertySearchForm } from '@/components/PropertySearchForm';
import { CategoriesSection } from '@/components/CategoriesSection';
import { LocationsSection } from '@/components/LocationsSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { VideoSection } from '@/components/VideoSection';
import { AboutSection } from '@/components/AboutSection';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AgentsSection } from '@/components/AgentsSection';
import { BlogSection } from '@/components/BlogSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col pt-[1397px] max-md:pt-[100px]">
      <div className="text-black text-base font-normal z-10 mt-[1397px] max-md:max-w-full max-md:mt-10">
        Enter Keyword
      </div>
      <div className="items-stretch relative flex mt-[-1419px] w-full max-w-[1920px] flex-col max-md:max-w-full max-md:mt-[-200px]">
        <ContactBar />
        <Navigation />
        <main>
          <HeroSection />
          <PropertySearchForm />
          <CategoriesSection />
          <LocationsSection />
          <FeaturedProperties />
          <VideoSection />
          <AboutSection />
          <CallToActionBanner />
          <TestimonialsSection />
          <AgentsSection />
          <BlogSection />
          <PartnersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

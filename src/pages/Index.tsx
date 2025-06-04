
import React from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { LocationsSection } from '@/components/LocationsSection';
import { VideoSection } from '@/components/VideoSection';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AgentsSection } from '@/components/AgentsSection';
import { BlogSection } from '@/components/BlogSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <div className="relative">
        <HeroSection />
        <Navigation />
      </div>
      <main>
        <AboutUsSection />
        <CategoriesSection />
        <FeaturedProperties />
        <LocationsSection />
        <VideoSection />
        <CallToActionBanner />
        <TestimonialsSection />
        <AgentsSection />
        <BlogSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

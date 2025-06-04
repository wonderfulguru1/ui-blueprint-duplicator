
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
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <div className="relative">
        <HeroSection />
        <Navigation />
      </div>
      <main>
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
  );
};

export default Index;

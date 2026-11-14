import React from "react";
import { ContactBar } from "@/components/ContactBar";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { VideoSection } from "@/components/VideoSection";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="g-home flex flex-col min-h-screen">
      <div className="relative">
        <HeroSection />
        <Navigation />
      </div>
      <main className="space-y-0">
        <AboutUsSection />
        <CategoriesSection />
        <FeaturedProperties />
        <TestimonialsSection />
        <CallToActionBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

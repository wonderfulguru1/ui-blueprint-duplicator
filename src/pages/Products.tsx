import React from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import PageHero from '@/components/PageHero';
import heroBg from '@/assets/about-hero1.jpg';
import { PropertyCards } from '@/components/PropertyCards';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactBar />
            <div className="relative">
                <Navigation whiteBg={true} />
            </div>
            <div className="mt-24">
                <PageHero
                    title="Our Products"
                    breadcrumb={<><Link to="/" className="hover:text-[#D2A136] transition-colors">HOME</Link> <span className="mx-1">&#8250;</span> <span className="font-semibold">PRODUCTS</span></>}
                    backgroundImage={heroBg}
                />
            </div>
            <main className="flex-1">
                <PropertyCards />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Products; 
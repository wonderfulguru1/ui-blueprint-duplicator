import React from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import PageHero from '@/components/PageHero';
import heroBg from '@/assets/about-hero1.jpg';
import { AboutUsSection } from '@/components/AboutUsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactBar />
            <div className="relative">
                <Navigation whiteBg={true} />
            </div>
            <div className="mt-24">
                <PageHero
                    title="About Us"
                    breadcrumb={<><Link to="/" className="hover:text-[#D2A136] transition-colors">HOME</Link> <span className="mx-1">&#8250;</span> <span className="font-semibold">ABOUT US</span></>}
                    backgroundImage={heroBg}
                />
            </div>
            <main className="flex-1 pt-24">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-[#06112a] text-3xl md:text-[50px] font-bold leading-tight md:leading-[70px]">
                            ABOUT GENESIA
                        </h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D2A136] leading-tight">
                            PROPERTIES
                        </h3>
                        <p className="text-justify">
                            At <strong>Genesia Properties</strong>, we are passionate about helping people take confident steps toward land ownership in Abuja. While we are a new player in the real estate space, our team brings together deep local expertise and a strong commitment to doing things differently — with transparency, professionalism, and purpose at the core of everything we do.
                        </p>

                        <p className="text-justify">
                            We focus on offering carefully selected land in high-potential, fast-developing areas around Abuja, ideal for both residential and investment purposes. Our goal is to make land ownership accessible to more people by providing flexible payment plans, clear processes, and responsive customer support. We understand that buying land is a major decision — and we're here to make that experience simple, secure, and rewarding.
                        </p>

                        <p className="text-justify">
                            What truly sets us apart is our client-first mindset. We take time to understand your needs and provide tailored guidance every step of the way, from choosing the right location to handling documentation and allocation. We believe in building long-term relationships based on trust, value, and consistency — not just closing deals.
                        </p>

                        <p className="text-justify">
                            Whether you're looking to secure your first plot, expand your investment portfolio, or partner with a reliable real estate company in Abuja, <strong>Genesia Properties</strong> is here to walk the journey with you. With us, you're not just buying land — you're making a smart move for your future.
                        </p>

                    </div>
                    <div className="flex-1">
                        <img
                            src={heroBg}
                            alt="Genesia Properties Team"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <FeaturedProperties />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs; 
import React, { useState } from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import PageHero from '@/components/PageHero';
import heroBg from '@/assets/about-hero1.jpg';
import { PropertyCards } from '@/components/PropertyCards';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Link } from 'react-router-dom';

const Realtor: React.FC = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        licenseNumber: '',
        experience: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', form);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <ContactBar />
            <div className="relative">
                <Navigation whiteBg={true} />
            </div>
            <div className="mt-24">
                <PageHero
                    title="Become a Realtor"
                    breadcrumb={<><Link to="/" className="hover:text-[#D2A136] transition-colors">HOME</Link> <span className="mx-1">&#8250;</span> <span className="font-semibold">REALTOR</span></>}
                    backgroundImage={heroBg}
                />
            </div>
            <main className="flex-1">
                <section className="py-16 bg-[#F7F7F7]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Registration Form */}
                            <div className="bg-white rounded-lg shadow-xl p-8">
                                <h2 className="text-3xl font-bold text-[#06112a] mb-6">
                                    Realtor Registration
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                            License Number
                                        </label>
                                        <input
                                            type="text"
                                            id="licenseNumber"
                                            name="licenseNumber"
                                            value={form.licenseNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                            Years of Experience
                                        </label>
                                        <select
                                            id="experience"
                                            name="experience"
                                            value={form.experience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                            required
                                        >
                                            <option value="">Select years of experience</option>
                                            <option value="0-2">0-2 years</option>
                                            <option value="3-5">3-5 years</option>
                                            <option value="6-10">6-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Additional Information
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D2A136] focus:border-[#D2A136]"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#D2A136] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#B8912E] transition-colors"
                                    >
                                        Submit Registration
                                    </button>
                                </form>
                            </div>

                            {/* Information Section */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-[#06112a] mb-6">
                                    Join Our Network of Professional Realtors
                                </h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        Become part of Genesia Properties' trusted network of real estate professionals. We offer:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-[#D2A136] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Access to premium property listings
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-[#D2A136] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Professional marketing support
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-[#D2A136] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Competitive commission rates
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-[#D2A136] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Training and development opportunities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PropertyCards />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Realtor; 
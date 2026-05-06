import React, { useState } from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { VideoSection } from '@/components/VideoSection';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

const Appointment: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        offer: '',
        date: '',
        time: '',
        receivePropertyEmails: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col min-h-screen">
            <ContactBar />
            <div className="relative">
                <Navigation whiteBg={true} />
            </div>
            <main className="flex-1 pt-24">
                <div className="min-h-[70vh] flex flex-col lg:flex-row items-stretch bg-[#07342C] relative">
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col justify-center px-6 lg:pl-24 lg:pr-8 py-12 lg:py-16 text-white relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            THIS IS INARGUABLY<br />
                            <span className="font-extrabold">YOUR NEXT BEST<br />MOVE.</span>
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-gray-200 max-w-lg">
                            As long as luxury homes in Lagos are concerned, you will almost never find better deals than we offer.
                        </p>
                    </div>
                    {/* Right Side (Form) */}
                    <div className="flex-1 flex items-center justify-center bg-[#e9eef6] relative z-10 px-4 py-8 lg:py-0">
                        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow-xl p-6 sm:p-10">
                            <div className="mb-8 bg-[#e9eef6] -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 px-6 sm:px-10 py-6 rounded-t">
                                <h2 className="text-lg sm:text-xl font-bold text-center text-black">Fill in your details and our representative<br />will get in touch with you shortly</h2>
                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <select
                                name="offer"
                                value={form.offer}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent text-gray-700"
                                required
                            >
                                <option value="" disabled>Which offer interests you?</option>
                                <option value="Offer 1">Offer 1</option>
                                <option value="Offer 2">Offer 2</option>
                                <option value="Offer 3">Offer 3</option>
                            </select>
                            <label className="block text-xs text-gray-700 mb-2 mt-2">Select Preferred Date of Inspection</label>
                            <div className="flex flex-col sm:flex-row gap-2 mb-6">
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="w-full sm:flex-1 border border-[#2bb686] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    className="w-full sm:w-32 border border-[#2bb686] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                    required
                                />
                            </div>
                            <label className="flex items-center gap-2 text-sm text-gray-700 mb-6">
                                <input
                                    type="checkbox"
                                    name="receivePropertyEmails"
                                    checked={form.receivePropertyEmails}
                                    onChange={handleChange}
                                    className="h-4 w-4 accent-[#07342C]"
                                />
                                Would you like to receive emails for new properties?
                            </label>
                            <button
                                type="submit"
                                className="w-full bg-[#07342C] text-white font-bold py-4 rounded text-lg shadow-md hover:bg-[#05281f] transition-colors"
                            >
                                BOOK INSPECTION
                            </button>
                        </form>
                    </div>
                    {/* Slant background effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#e9eef6] -z-10" style={{ clipPath: 'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)' }}></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Appointment; 
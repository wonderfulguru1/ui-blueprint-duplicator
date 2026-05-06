import React, { useState } from 'react';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'lucide-react';
import heroBg from '@/assets/about-hero1.jpg';
const Contact: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        receivePropertyEmails: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <div className="mt-24">
                <PageHero
                    title="Contact Us"
                    breadcrumb={<><Link to="/" className="hover:text-[#D2A136] transition-colors">HOME</Link> <span className="mx-1">&#8250;</span> <span className="font-semibold">CONTACT US</span></>}
                    backgroundImage={heroBg}
                />
            </div>
            <main className="flex-1">
                <div className="min-h-[70vh] flex flex-col lg:flex-row items-stretch bg-[#07342C] relative">
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col justify-center px-6 lg:pl-24 lg:pr-8 py-12 lg:py-16 text-white relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            GET IN<br />
                            <span className="font-extrabold">TOUCH<br />WITH US</span>
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-gray-200 max-w-lg">
                            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-[#D2A136] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Phone</p>
                                    <p className="text-white">+2348065046516</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-[#D2A136] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Email</p>
                                    <p className="text-white">info@genesiaproperties.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-[#D2A136] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Address</p>
                                    <p className="text-white">Bricks n more plaza 5th Avenue Gwarimpa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side (Form) */}
                    <div className="flex-1 flex items-center justify-center bg-[#e9eef6] relative z-10 px-4 py-8 lg:py-0">
                        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow-xl p-6 sm:p-10">
                            <div className="mb-8 bg-[#e9eef6] -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 px-6 sm:px-10 py-6 rounded-t">
                                <h2 className="text-lg sm:text-xl font-bold text-center text-black">Send us a Message</h2>
                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full border border-[#2bb686] rounded px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#2bb686] bg-transparent resize-none"
                                required
                            />
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
                                SEND MESSAGE
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

export default Contact; 
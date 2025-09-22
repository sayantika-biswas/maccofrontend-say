'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized images in Next.js
import Navbar from '../Component/Navbar/page';
import Link from 'next/link';
import SeoFeatures from '../Component/SeoFeatures/page';
import HowWeWork from '../Component/HowWeWork/page';
import Banner from '../Component/Banner/page';
import Footerpage from '../Component/Footerpage/page';



const SearchEngineOptimization = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Country code to flag mapping
    const countryFlags = {
        '+1': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
        '+44': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg',
        '+91': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg',
        '+61': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
        '+81': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Japan.svg',
    };

    const handleCountryCodeChange = (code) => {
        setSelectedCountryCode(code);
        setIsDropdownOpen(false);
    };
    // Animation variants for Framer Motion
    const textSlideLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    return (
        <>
            {/* 🟢 Plain section (No motion.section) */}
            <div>
                <Navbar />
                <section>
                    <div className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
                        {/* Background SVGs */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                            <svg
                                className="absolute top-1/4 left-[6%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-400 animate-pulse"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                            </svg>
                            <svg
                                className="absolute bottom-[12.5%] right-[3%] transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-400 animate-pulse"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                            </svg>
                        </div>

                        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">

                            {/* Left Text Section with motion */}
                            <motion.div
                                className="text-center lg:text-left lg:w-1/2 mb-10 mt-10 lg:mb-0"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Search Engine Optimization Services in the India
                                </h1>
                                <p className="text-indigo-200 mb-2">
                                    Enhance your online visibility with our comprehensive, result-oriented Search Engine Optimization (SEO) services in India. We specialize in improving your Google rankings, attracting targeted organic traffic, and amplifying brand awareness through effective and ethical white-hat SEO practices.
                                </p>


                                <p className="text-indigo-200 mb-6 text-sm md:text-base">
                                    Our expert SEO team at <strong>Macco Tech</strong> crafts tailored strategies to rank your website higher on search engines. From keyword research and on-page optimization to link building and content marketing — we ensure sustainable growth and increased leads for your business.
                                </p>



                                <Link href="/contact">
                                    <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                                        LET&apos;S DISCUSS
                                    </button>
                                </Link>
                            </motion.div>

                            {/* Right Form Section with motion */}
                            <motion.div
                                className="bg-white rounded text-black p-6 md:p-8 lg:p-10 w-full max-w-md shadow-[0_4px_7px_white]"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get a Free Quote</h2>
                                <form className="space-y-5 text-sm">

                                    {/* Full Name */}
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        required
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    />

                                    {/* Email */}
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        required
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    />

                                    {/* Country Code & Mobile Number */}
                                    <div className="flex gap-3 items-center">
                                        {/* Country Code Dropdown */}
                                        <div className="relative w-1/3">
                                            <div
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="bg-white border border-gray-300 px-3 py-2.5 rounded-md cursor-pointer flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            >
                                                <div className="flex items-center gap-2">
                                                    {/* <img
                                                        src={countryFlags[selectedCountryCode]}
                                                        alt="Flag"
                                                        className="w-5 h-5"
                                                    /> */}
                                                    <Image
                                                        src={countryFlags[selectedCountryCode]}
                                                        alt="Flag"
                                                        width={20}
                                                        height={20}
                                                        className="w-5 h-5"
                                                    />

                                                    <span className="text-sm">{selectedCountryCode}</span>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 7l5 5 5-5"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Dropdown */}
                                            {isDropdownOpen && (
                                                <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                    {Object.entries(countryFlags).map(([code, flagUrl]) => (
                                                        <li
                                                            key={code}
                                                            onClick={() => handleCountryCodeChange(code)}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                                                        >

                                                            {/* <img src={flagUrl} alt={`${code} flag`} className="w-5 h-5" /> */}
                                                            <Image src={flagUrl} alt={`${code} flag`} width={20} height={20} className="w-5 h-5" />

                                                            {code}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        {/* Mobile Number */}
                                        <input
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            placeholder="Mobile Number *"
                                            required
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    {/* Message */}
                                    <textarea
                                        placeholder="Your message *"
                                        rows="4"
                                        required
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none resize-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    ></textarea>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full transition-colors"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </motion.div>

                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="container mx-auto px-4 py-12 md:py-10">
                        {/* Heading */}
                        <motion.h1
                            className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-7 text-gray-800"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            Leading SEO Service Provider - Macco Tech
                        </motion.h1>

                        {/* Content Area */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                            {/* Text Content (Left) */}
                            <motion.div
                                className="md:w-1/2 text-gray-700 space-y-6 text-lg leading-relaxed"
                                initial="hidden"
                                animate="visible"
                                variants={textSlideLeft} // Animate from left
                            >
                                <p>
                                    Macco Tech is your trusted SEO partner, offering expert SEO services including local SEO, national SEO, global SEO, e-commerce SEO, and Google Business Profile optimization. Our dedicated team focuses on driving organic growth and improving your website’s visibility across all major search engines.
                                </p>
                                <p>
                                    We follow only white-hat SEO techniques that comply fully with industry standards, ensuring sustainable results for your business. As a leading SEO agency, Macco Tech provides affordable, high-quality SEO solutions that guarantee improved rankings and increased traffic to your website.
                                </p>
                            </motion.div>

                            {/* Image (Right) */}
                            <motion.div
                                className="md:w-1/2 flex justify-center"
                                initial="hidden"
                                animate="visible"
                                variants={imageVariants}
                            >
                                <div className="relative w-full max-w-lg h-60 sm:h-60 md:h-60 lg:h-[380px] rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src="/search-engine.jpg"
                                        alt="Computer showing SEO report"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <SeoFeatures />
                <HowWeWork />
                <Banner />
                <Footerpage />

            </div>
        </>
    );
};

export default SearchEngineOptimization;

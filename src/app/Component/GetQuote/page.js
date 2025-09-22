'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '../Data/page';
import ServiceHeader from '../ServiceHeader/page';
import Image from 'next/image';
export default function GetQuote() {

    const countryFlags = {
        '+1': '/us.png',
        '+44': '/uk.png',
        '+91': '/in.png',
        '+61': '/au.png',
        '+49': '/de.png',
        '+33': '/fr.png',
        '+81': '/jp.png',
        '+86': '/cn.png'
    };
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+1',
        mobileNumber: '',
        message: ''
    });
    const [mobileNumber, setMobileNumber] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCountryCodeChange = (code) => {
        setFormData(prev => ({ ...prev, countryCode: code }));
        setIsDropdownOpen(false);
    };
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const completePhone = `${formData.countryCode}${formData.mobileNumber}`;
            const payload = {
                fullName: formData.fullName,
                email: formData.email,
                mobileNumber: completePhone,
                message: formData.message
            };

            const response = await fetch(`${API_URL}/api/getquote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Submission failed');
            }

            setSubmitStatus({ success: true, message: data.message });
            setFormData({
                fullName: '',
                email: '',
                countryCode: '+1',
                mobileNumber: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({ success: false, message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div>
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

                        {/* Left Text Section with framer motion */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
                        >
                            <ServiceHeader {...services.ios} />

                            <Link href="/contact">
                                <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                                    LET&aposS DISCUSS
                                </button>
                            </Link>
                        </motion.div>

                        {/* Right Form Section with framer motion */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="bg-white rounded text-black p-6 md:p-8 lg:p-10 w-full max-w-md shadow-[0_4px_7px_white]"
                        >
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get a Free Quote</h2>

                            {submitStatus && (
                                <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name *"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                />

                                <div className="flex gap-3 items-center">
                                    <div className="relative w-1/3">
                                        <div
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="bg-white border border-gray-300 px-3 py-2.5 rounded-md cursor-pointer flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={countryFlags[formData.countryCode]}
                                                    alt="Flag"
                                                    className="w-5 h-5"
                                                    width={20}
                                                    height={20}
                                                />
                                                <span className="text-sm">{formData.countryCode}</span>
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

                                        {isDropdownOpen && (
                                            <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                {Object.entries(countryFlags).map(([code, flagUrl]) => (
                                                    <li
                                                        key={code}
                                                        onClick={() => handleCountryCodeChange(code)}
                                                        className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <Image src={flagUrl} alt={`${code} flag`} height={30} width={30} className="w-5 h-5" />
                                                        {code}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        pattern="[0-9]{10}"
                                        placeholder="Mobile Number *"
                                        required
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Your message *"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none resize-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

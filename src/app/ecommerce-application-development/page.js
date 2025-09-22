'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar/page';
import HireUsSection from '../Component/HireUsSection/page';
import IOSFeatures from '../Component/IOSFeatures/page';
import Footerpage from '../Component/Footerpage/page';
import { useState, useEffect } from 'react';
import EcommerceFeatures from '../Component/EcommerceFeatures/page';
import ECommerceOverview from '../Component/ECommerceOverview/page';
import EcommerceServicesSection from '../Component/EcommerceServicesSection/page';
import Link from 'next/link';

function HeroSection() {

  const heroText = "Discover the latest arrivals and grab exclusive discounts on fashion, electronics, and more.";

function TypingText() {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < heroText.length) {
                setTypedText((prevText) => prevText + heroText.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }
        }, 120); // Adjust the typing speed here

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <p className="text-lg md:text-xl max-w-2xl mb-8 whitespace-pre-line">
            {typedText}
            <span className="inline-block w-1 h-5 bg-white ml-1 animate-blink"></span>
        </p>
    );
}
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section>
<div
    className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center md:items-start justify-start"
    style={{ backgroundImage: 'url(/ecom.png)', top: '85px' }}
>
    {/* Overlay */}
    <div className="absolute inset-0 opacity-50 z-0 bg-black"></div>

    {/* Hero Content */}
    <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-left lg:ml-40 text-white px-4 md:px-8 py-12 md:py-24 w-full max-w-xl"
    >
        <p className="text-xs sm:text-sm uppercase mb-2 tracking-wide text-gray-300">
            Limited Time Offer
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Trendy Styles, Timeless Deals
        </h1>

        <div className="mb-6">
            <TypingText />
        </div>
<Link href="/contact">
        <motion.button
            whileHover={{
                scale: 1.05,
                backgroundColor: '#f8fafc',
                color: '#1f2937',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow transition-all duration-300"
        >
            Get Now →
        </motion.button>
</Link>
    </motion.div>
</div>

</section>


      {/* Promotion Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 overflow-hidden">
  {/* Animated Circles */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-300 opacity-20 rounded-full animate-ping"></div>
  <div className="absolute top-20 right-[-100px] w-96 h-96 bg-blue-300 opacity-20 rounded-full animate-pulse"></div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-300 opacity-20 rounded-full animate-ping"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center z-10">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
    >
      Big Savings Across All Categories
    </motion.h2>
    <p className="mt-6 text-gray-700 text-lg md:text-xl">
      Enjoy up to 50% off on top-rated products. Shop smart, shop better, and save more with every click.
    </p>
    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300 text-lg">
      Start Shopping
    </button>
  </div>
</section>
<ECommerceOverview/>

<EcommerceFeatures/>



      {/* You can replace this with Featured Products, Collections, or Promotions */}
      <HireUsSection />
      <EcommerceServicesSection/>
      
      <Footerpage />
    </>
  );
}

export default HeroSection;

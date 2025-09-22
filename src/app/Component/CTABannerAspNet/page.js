// components/CTABanner.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="relative bg-gray-900 max-h-[80vh] py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/meetingteam.webp" // Replace with your high-quality background image
          alt="Macco Tech team collaborating"
          height={600}
          width={500}
          className="opacity-28" // Adjust opacity for overlay effect
        />
        <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply opacity-70"></div> {/* Darker indigo overlay */}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-4xl lg:text-3xl"
        >
          <span className="block">Partner with Macco Tech&asop;s Experts</span>
          <span className="block text-indigo-300 mt-2">Achieve Your Business Vision</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100 leading-relaxed"
        >
          Leverage Macco Tech&asop;s curated expertise to deliver situation-specific features that maximize your ROI and optimize performance. Our deeply experienced professionals are adept at robust architecture, automating solutions, and fine-tuning for unparalleled efficiency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)" }} // Glow effect on hover
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-indigo-800 bg-white hover:bg-gray-200 shadow-xl transition-all duration-300 ease-in-out"
          >
            Get In Touch
            <svg className="ml-2 -mr-0.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
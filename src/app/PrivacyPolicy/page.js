'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar/page';
import PrivacyPolicyContent from '../Component/PrivacyPolicyContent/page';
import Footerpage from "../Component/Footerpage/page";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <div>
        <motion.div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center overflow-hidden text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: 'url("/privacyPolicy.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <motion.h1
            className="relative z-10 text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="relative z-10 text-white text-base md:text-lg mt-4 max-w-3xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Learn how we collect, use, and protect your personal data while using our services. Your privacy matters to us.
          </motion.p>
        </motion.div>
      </div>

      {/* Content Area that takes remaining space */}
      <div className="flex-grow">
        <PrivacyPolicyContent />
      </div>

      <Footerpage />
    </div>
  );
};

export default PrivacyPolicy;

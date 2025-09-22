'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar/page';
import TermsAndConditionsContent from '../Component/TermsAndConditionsContent/page';
import Footerpage from "../Component/Footerpage/page";

const TermsAndCondition = () => {
  return (
    <div className="w-full">
      <Navbar />
      <motion.div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center overflow-hidden text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/termsAdnCondition3.jpg")' }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Heading */}
        <motion.h1
          className="relative z-10 text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Terms And Condition
        </motion.h1>

        {/* Description under heading */}
        {/* <motion.p
          className="relative z-10 text-white text-base md:text-lg mt-4 max-w-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Our terms and conditions outline the rules and regulations for using our website and services.
          By accessing this site, you agree to comply with these terms. Please read them carefully to understand your rights and responsibilities.
        </motion.p> */}
        <motion.p
          className="relative z-10 text-white text-base md:text-lg mt-4 max-w-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Our terms clearly outline the rules for using our website. By accessing it, you agree to comply with these terms.
        </motion.p>

      </motion.div>
      <TermsAndConditionsContent />
      <Footerpage />
    </div>
  );
};

export default TermsAndCondition;

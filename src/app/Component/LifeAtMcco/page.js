"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LifeAtMechlin = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-700 py-10 md:py-20" style={{ backgroundColor: '#4c1d95' }}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-9 text-center"
        >
          Life at Macco Tech
        </motion.h1>

        {/* Section with text and images */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-8">
          {/* Text content section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              Work is wherever you are!
            </h2>
            <p className="text-sm md:text-base">
              Macco believes that work will be spread in the future. So, by providing choices to our
              people, we enable them to spend more quality time with their families and friends,
              being outside and doing what they love. Work-life balance matters different things to
              different people. For some of us, it’s being in the office and working directly with
              coworkers. Others value the ability to work from home, on the road, or somewhere in
              between. We offer flexibility to meet your lifestyle and demands, regardless of your
              preferences.
            </p>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="relative rounded-md shadow-md overflow-hidden h-48">
              <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              <Image
                // src="https://mechlintech.com/wp-content/uploads/2022/07/about-us.webp"
                src='/aboutUsMaccoLife.webp'
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <h3 className="absolute bottom-2 left-2 text-white text-sm font-semibold z-20">About Us</h3>
            </div>
            <div className="relative rounded-md shadow-md overflow-hidden h-48">
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <Image
                // src="https://mechlintech.com/wp-content/uploads/2022/07/culture.webp"
                src='/cultureMaccoLife.webp'
                alt="Culture"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <h3 className="absolute bottom-2 left-2 text-white text-sm font-semibold z-20">Culture</h3>
            </div>
            <div className="relative rounded-md shadow-md overflow-hidden h-65 md:col-span-2">
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <Image
                // src="https://mechlintech.com/wp-content/uploads/2022/07/voices.webp"
                src='/voicesMaccoLife.webp'
                alt="Voices"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <h3 className="absolute bottom-2 left-2 text-white text-sm font-semibold z-20">Voices</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtMechlin;



 
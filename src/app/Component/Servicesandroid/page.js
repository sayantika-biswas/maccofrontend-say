
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from next/image

const ServicesAndroidContentEnhanced = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
         {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Expert Android Development Services
        </h1>

        {/* Background Image */}
        <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-2/3">
          <Image
            src="/servicesimage.jpg"
            alt="Modern Android Development Interface"
            width={1200} // Specify the width of the image
            height={450} // Specify the height of the image (adjust as needed)
            className="w-full h-[450px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Services Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:mt-20 absolute top-0 right-0 w-full lg:w-1/2 lg:pr-10">
          {/* Android Mobile App Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Native Android Excellence</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting high-performance, intuitive mobile applications leveraging the full power of the Android ecosystem.
            </p>
          </motion.div>

          {/* Android Tablet App Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Tablet-Optimized Solutions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Designing immersive and feature-rich applications tailored for the larger screen experience of Android tablets.
            </p>
          </motion.div>

          {/* Universal Application Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Cross-Device Expertise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Developing adaptable applications that deliver a consistent and engaging experience across a diverse range of Android devices.
            </p>
          </motion.div>

          {/* Android User Interface (UI) and User Experience (UX) */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">User-Centric Design</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating visually appealing and highly usable interfaces that prioritize seamless navigation and user satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndroidContentEnhanced;

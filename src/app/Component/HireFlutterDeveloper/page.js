'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 },
};

export default function HireFlutterDeveloper() {
  return (
    <section className="bg-[#0F1115] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Grid */}
        <motion.div
          className="grid grid-cols-2 grid-rows-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { src: '/Flutter1.jpg', alt: 'Flutter developer working on a laptop' },
            { src: '/Fluuter2.jpeg', alt: 'Person coding on a laptop' },
            { src: '/Flutter3.jpeg', alt: 'Flutter app on smartphone' },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden shadow-lg h-52 sm:h-64 md:h-72 lg:h-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ))}


          {/* Bottom Right: Flutter/iOS/Android Graphic */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-700 to-indigo-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-4 h-52 sm:h-64 md:h-72 lg:h-80"
          >
            <div className="text-white text-4xl font-bold">iOS</div>
            <div className="text-white text-4xl font-bold flex items-center">
              <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.7 18.3H9.3l-1.6-4.6H5.4L12 3l6.6 10.7h-2.3L14.7 18.3zM12 7.7L9.8 13.9H14.2L12 7.7z" />
              </svg>
              Flutter
            </div>
            <div className="text-white text-4xl font-bold">Android</div>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="lg:pl-8 mt-10 lg:mt-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hire Flutter App Developers to Build Next-Gen Mobile Applications
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            Leverage the power of Flutter to build cross-platform apps from a single codebase. Create beautiful,
            performant apps for Android, iOS, macOS, Linux, and Windows using Flutter’s Skia rendering engine.
          </motion.p>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our Flutter experts use an end-to-end development approach to deliver sleek and scalable mobile solutions. From design to deployment, we help you launch apps that look native on every device.
          </motion.p>

          <Link href="/contact">
            <motion.button
              className="bg-red-600 cursor-pointer hover:bg-red-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
            >
              Contact Now
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

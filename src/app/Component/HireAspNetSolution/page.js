'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const imageZoomIn = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: 'easeOut'
    }
  }
};

const HireAspNetSolution = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-4xl font-bold text-gray-900"
          >
            Elevate Your Vision with <span className="text-indigo-600">Macco Tech Solutions</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At Macco Tech, we specialize in crafting cutting-edge web applications that drive innovation and deliver tangible results. Our expertise in modern frameworks ensures your project is built for scale, performance, and user satisfaction.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            With over a decade of experience, Macco Tech is your trusted partner for sophisticated software development. We pride ourselves on delivering bespoke solutions that align perfectly with your business goals, fostering growth and efficiency.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-8"
          >
           
            <Link
              href="/contact"
              className="px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-base font-medium transition"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          variants={imageZoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-6 flex justify-center"
        >
          <Image
            src="/asp-net1.webp"
            alt="Macco Tech Developer Illustration"
            width={700}
            height={500}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HireAspNetSolution;

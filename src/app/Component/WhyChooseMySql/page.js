'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseMySql = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 flex justify-center relative"
          >
            {/* Circular Glow Effect */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl z-0"
              style={{ mixBlendMode: 'multiply' }}
            ></div>

            {/* Main Image */}
            <Image
              src="/mySQL3.webp"
              alt="MySQL Team Collaboration"
              width={600}
              height={450}
              className="relative z-10 object-contain max-w-full h-auto"
              priority
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            {/* <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight text-center lg:text-left">
              Why Choose a <span className="text-indigo-600">MySQL Development Company</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              A professional MySQL development company helps you manage and organize your data like a pro — secure, scalable, and efficient. Whether you're a startup or a large enterprise, MySQL solutions ensure high performance, smooth operations, and cost savings.
            </p> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight text-center lg:text-left">
              Why Partner with a <span className="text-indigo-600">MySQL Development Company</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              A specialized MySQL development company empowers businesses to manage and scale their data infrastructure with precision. From startups to enterprises, MySQL solutions ensure robust performance, enhanced security, and seamless scalability—delivering cost-effective data management that drives growth and innovation.
            </p>


            <ul className="mt-6 sm:mt-8 space-y-3 text-gray-800 text-base list-disc pl-5">
              <li><strong>Scalability:</strong> Easily handle growing data needs.</li>
              <li><strong>Security:</strong> Keep your data safe and backed up.</li>
              <li><strong>Performance:</strong> Fast transactions and responsive apps.</li>
              <li><strong>Flexibility:</strong> Works across Linux, Windows, and UNIX.</li>
              <li><strong>Open-source Power:</strong> Budget-friendly and community-supported.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMySql;

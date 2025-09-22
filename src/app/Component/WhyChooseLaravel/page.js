'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const laravelAdvantages = [
    'Robust Object-Oriented Architecture (MVC)',
    'Comprehensive & Clear Documentation',
    'Highly SEO Friendly Applications',
    'Built-in High-Security Standards',
    'Vibrant & Active Community Support',
    'Seamless Mail Services Integration',
    'Efficient Automated Testing Capabilities',
    'Optimized Local Development Environment',
];

// Animation Variants
const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const listItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
};

const WhyChooseLaravel = () => {
    return (
        <section className="bg-gradient-to-b from-red-50 to-white py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-10">
                {/* Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionHeaderVariants}
                >
                    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Why Choose <span className="text-red-600">Laravel</span>?
                    </h2>
                    <p className="text-base md:text-base text-gray-700 leading-relaxed">
                        Laravel empowers developers to craft secure, scalable, and high-performance applications with elegance and speed.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    {/* Left: Features List */}
                    <motion.div
                        className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {laravelAdvantages.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-200 border-l-4 border-red-500"
                                variants={listItemVariants}
                            >
                                <span className="text-red-500 text-xl mr-3 mt-1">✔️</span>
                                <p className="text-base text-gray-800 font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Illustration */}
                    <motion.div
                        className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative w-full max-w-sm md:max-w-md lg:w-[400px] lg:h-[400px]">
                            <Image
                                src="/laravel2.jpeg"
                                alt="Laravel Illustration"
                                height={600}
                                width={450}
                                priority
                                className="drop-shadow-xl rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseLaravel;
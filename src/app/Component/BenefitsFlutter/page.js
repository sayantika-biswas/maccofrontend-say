'use client';

import React from 'react';
import { motion } from 'framer-motion';

const benefitsData = [
    {
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.132l-3.395 3.395m0 0l-3.395-3.395m3.395 3.395V3.395m0 10.607a7 7 0 110-14 7 7 0 010 14z" />
            </svg>
        ),
        title: 'Robust Community Support',
        description: 'Flutter has a large, active developer community that keeps the framework up-to-date and innovative.',
        color: 'border-blue-500'
    },
    {
        icon: (
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 4v4m0 4v2.5M12 3a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
        ),
        title: 'Cost-Effective Development',
        description: 'Build apps for multiple platforms using a single codebase, cutting development time and cost.',
        color: 'border-green-500'
    },
    {
        icon: (
            <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Faster Development',
        description: 'Use built-in widgets and hot-reload to create MVPs and iterate quickly during development.',
        color: 'border-purple-500'
    },
    {
        icon: (
            <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Flexible UI/UX',
        description: 'Create visually rich and smooth UI that adapts well across mobile and web platforms.',
        color: 'border-orange-500'
    },
    {
        icon: (
            <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        ),
        title: 'High Compatibility',
        description: 'Compiles to native code, offering better performance and fewer platform-specific bugs.',
        color: 'border-pink-500'
    },
    {
        icon: (
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-4 1m6-10V4a2 2 0 00-2-2 2 2 0 00-2 2v2m11 0h.025A1 1 0 0116 7h-2.5m1.5-4a2 2 0 00-2-2 2 2 0 00-2 2v2M5 19.5a2.5 2.5 0 01-5 0A2.5 2.5 0 015 19.5zM19.5 21a2.5 2.5 0 005 0A2.5 2.5 0 0019.5 21zM10.5 7h.025A1 1 0 0112 8h-2.5m1.5-4a2 2 0 00-2-2 2 2 0 00-2 2v2" />
            </svg>
        ),
        title: 'Responsive Experience',
        description: 'Flutter apps deliver smooth performance and great UI across all screen sizes and devices.',
        color: 'border-yellow-500'
    },
];

const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.18,
            ease: 'easeOut',
            duration: 0.6,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const BenefitsFlutter = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6"
                        initial={{ y: -60, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Business Benefits of Flutter App Development Services
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg text-gray-700 leading-relaxed"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        Flutter empowers businesses to build stunning apps faster, with one codebase and seamless user experience across platforms.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {benefitsData.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 ${benefit.color} cursor-pointer`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.06,
                                rotateX: 5,
                                rotateY: 5,
                                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.12)",
                                transition: { duration: 0.3, ease: 'easeInOut' },
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full mb-4 shadow-md">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsFlutter;

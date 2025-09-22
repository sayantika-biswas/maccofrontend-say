'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBoxOpen,
    FaBolt,
    FaShieldAlt,
    FaUsers,
    FaFlask,
    FaCodeBranch,
} from 'react-icons/fa';

const laravelAdvantagesData = [
    {
        icon: <FaBoxOpen className="w-10 h-10 text-purple-400" />,
        title: 'Rich Libraries & Inbuilt Features',
        description: 'Laravel offers a wide range of built-in libraries and tools that make the development process smoother, faster, and more reliable.',
    },
    {
        icon: <FaBolt className="w-10 h-10 text-indigo-400" />,
        title: 'Faster Development',
        description: 'Laravel’s intuitive syntax and modular structure help developers build powerful applications in less time.',
    },
    {
        icon: <FaShieldAlt className="w-10 h-10 text-red-400" />,
        title: 'Top-Notch Security',
        description: 'With built-in protection against threats like SQL injection and cross-site scripting, Laravel ensures strong security for your applications.',
    },
    {
        icon: <FaUsers className="w-10 h-10 text-green-400" />,
        title: 'Huge Community Support',
        description: 'Laravel has a massive, active developer community, offering continuous support, updates, and open-source contributions.',
    },
    {
        icon: <FaFlask className="w-10 h-10 text-yellow-400" />,
        title: 'Powerful Testing Tools',
        description: 'Laravel comes with built-in support for unit and feature testing, making it easy to ensure application reliability.',
    },
    {
        icon: <FaCodeBranch className="w-10 h-10 text-blue-400" />,
        title: 'MVC Architecture',
        description: 'Laravel follows MVC, encouraging separation of concerns and resulting in clean, manageable, and scalable code.',
    },
];

// Framer Motion variants
const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const LaravelAdvantages = () => {
    return (
        <section className="bg-black py-7 md:py-24 text-white mb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionHeaderVariants}
                >
                    <h2 className="text-4xl md:text-4xl font-extrabold mb-4 leading-tight">
                        Why <span className="text-red-500">Laravel</span> is the Ultimate Choice for Web Development?
                    </h2>
                    <p className="text-base md:text-base text-gray-300">
                        Laravel brings speed, security, and structure together. Here&asop;s why developers and businesses love it:
                    </p>
                </motion.div>

                {/* Grid of Advantages */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {laravelAdvantagesData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-red-500 text-center flex flex-col items-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="bg-gray-800 p-4 rounded-full shadow-md mb-6" aria-hidden="true">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-base">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LaravelAdvantages;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FiZap,
    FiLayers,
    FiUsers,
    FiLink,
    FiShield,
    FiBox,
} from 'react-icons/fi';

const advantagesData = [
    {
        icon: <FiLayers className="w-12 h-12 text-gradient" />,
        title: 'Highly Scalable Applications',
        description: 'We engineer PHP web solutions designed to effortlessly handle growing user bases and address rapid surges in business operations without compromising performance.',
    },
    {
        icon: <FiLink className="w-12 h-12 text-gradient-purple" />,
        title: 'Seamless Integrations',
        description: 'Benefit from optimized website performance through effortless integration with essential third-party tools, APIs, and systems, enhancing functionality.',
    },
    {
        icon: <FiUsers className="w-12 h-12 text-gradient-orange" />,
        title: 'Expert & Dedicated Team',
        description: 'Our in-house team of highly skilled PHP developers works collaboratively, ensuring proactive communication and a dedicated approach to your project success.',
    },
    {
        icon: <FiShield className="w-12 h-12 text-gradient-red" />,
        title: 'Robust Security & Compliance',
        description: 'Security is paramount. We prioritize robust security protocols and best coding practices at every development stage to protect your application and data.',
    },
    {
        icon: <FiBox className="w-12 h-12 text-gradient-indigo" />,
        title: 'Tailored Custom Development',
        description: 'We deliver bespoke PHP solutions precisely crafted to your specifications, turning your unique ideas into fully functional and high-performing web applications.',
    },
    {
        icon: <FiZap className="w-12 h-12 text-gradient-yellow" />,
        title: 'Accelerated & Responsive',
        description: 'PHP is known for its faster processing speed and efficient server configurations, resulting in highly responsive web apps with quick loading times and smooth user experience.',
    },
];

// Variants remain same
const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const WhyChoosephp = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-20 md:py-28 overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300 rounded-full opacity-15 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionHeaderVariants}
                >
                    <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
                        Why Choose <span className="text-indigo-700">Macco Tech</span> for PHP Development?
                    </h2>
                    <p className="text-[16px] md:text-[16px] text-gray-700 max-w-[900px] mx-auto leading-relaxed">
                        At Macco Tech, we combine unparalleled expertise with innovative solutions to deliver PHP web development services that truly stand out. Here&asop;s why partnering with us is your best strategic move:
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {advantagesData.map((advantage, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-transparent hover:border-indigo-500 transition-shadow duration-500 hover:shadow-2xl cursor-pointer transform hover:-translate-y-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-5 rounded-full mb-7 shadow-lg bg-gradient-to-br from-indigo-100 to-blue-100">
                                {advantage.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {advantage.title}
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .text-gradient {
                    background: linear-gradient(135deg, #4f46e5, #3b82f6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient-purple {
                    background: linear-gradient(135deg, #7c3aed, #c084fc);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient-orange {
                    background: linear-gradient(135deg, #f97316, #fb923c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient-red {
                    background: linear-gradient(135deg, #ef4444, #f87171);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient-indigo {
                    background: linear-gradient(135deg, #6366f1, #818cf8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient-yellow {
                    background: linear-gradient(135deg, #facc15, #fde68a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </section>
    );
};

export default WhyChoosephp;

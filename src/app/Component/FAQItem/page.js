'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: 'How do native and hybrid apps differ from each other?',
        answer: ' Native apps are developed specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). They offer optimal performance and access to all device features.  Hybrid apps are built using web technologies like HTML, CSS, and JavaScript, and run inside a native container. They can be deployed across multiple platforms but might not perform as well as native apps.'
    },
    {
        question: 'What is the typical timeframe for developing a mobile app?',
        answer: 'It depends on the app’s complexity but generally ranges from a few weeks to several months.',
    },
    {
        question: 'Which platforms should we prioritize: iOS or Android?',
        answer: 'It depends on your target audience. Android has a larger global share; iOS users tend to spend more.',
    },
    {
        question: 'What is the estimated cost of developing a mobile app?',
        answer: 'The cost varies based on features, platform, and team. It can range from thousands to hundreds of thousands.',
    },
    {
        question: 'How do you guarantee the security of the mobile application?',
        answer: 'We use best practices like data encryption, secure APIs, and regular audits.',
    }
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0); // First item open by default for visual similarity

    return (
        <div className="mb-5 rounded-md bg-gray-900/70 text-white shadow-md">
            <button
                className="flex w-full justify-between items-center px-6 py-4 font-semibold text-base focus:outline-none text-gray-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
            >
                {faq.question}
                <motion.span animate={{ rotate: isOpen ? 0 : 90 }} className="text-xl text-gray-100">
                    {isOpen ? '-' : '+'}
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`faq-content-${index}`}
                        className="px-6 py-4 text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {faq.answer}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="border-b border-gray-800" />
        </div>
    );
};

const FAQSection = () => {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-full">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked Questions</h2>
                    <div>
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SeoFeatures = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2, // Stagger animation for children elements
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
    };

    const features = [
        "Get tailor-made SEO strategies focused on your business goals",
        "Boost qualified leads with a mix of SEO + content marketing",
        "Improve user experience and conversions with smart page design",
        "Stay ahead of competitors with real-time performance tracking",
        "Maximize ROI with data-driven SEO campaigns",
        "Enhance brand credibility through consistent online visibility"

    ];

    return (
        <section className="container mx-auto px-4 py-12 md:py-20">
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                initial="hidden"
                whileInView="visible" // Use whileInView for scroll-triggered animation
                viewport={{ once: true, amount: 0.3 }} // Animation triggers once when 30% of component is in view
                variants={containerVariants}
            >
                {/* Image on the left */}
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-start"
                    variants={imageVariants}
                >
                    <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-[450px]">
                        <Image
                            src="/SEO1.png" // Make sure this path is correct
                            alt="Illustration of SEO process and features"
                            layout="fill"
                            objectFit="contain" // Use 'contain' to fit the entire illustration
                            priority // Add priority if this image is above the fold
                        />
                    </div>
                </motion.div>

                {/* Text Content on the right */}
                <div className="md:w-1/2 text-gray-700">
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 md:text-left text-center"
                        variants={itemVariants} // Apply animation to the heading as well
                    >
                        Our Unique SEO Features
                    </motion.h2>

                    <ul className="space-y-4 text-lg">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start"
                                variants={itemVariants}
                                // Optional: Add a subtle delay for each list item based on index
                                custom={index}
                            >
                                <span className="font-semibold mr-2 text-blue-600">
                                    {index + 1}.
                                </span>
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default SeoFeatures;
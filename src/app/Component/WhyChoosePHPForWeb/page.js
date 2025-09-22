'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaRedoAlt, FaArrowsAltH } from 'react-icons/fa';

const phpAdvantages = [
  {
    icon: <FaCode className="text-xl text-white" />,
    title: "Open Source",
    description: "PHP is completely free to use, making it a cost-effective choice for developers and businesses alike.",
  },
  {
    icon: <FaRocket className="text-xl text-white" />,
    title: "High Performance",
    description: "Known for its speed and efficiency, PHP supports major web servers and consistently delivers fast load times.",
  },
  {
    icon: <FaRedoAlt className="text-xl text-white" />,
    title: "Reusable Components",
    description: "PHP encourages modular coding. You can reuse components across projects, speeding up the development process.",
  },
  {
    icon: <FaArrowsAltH className="text-xl text-white" />,
    title: "Great Flexibility",
    description: "PHP works seamlessly with various platforms, databases, and servers, giving developers total flexibility.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChoosePHPForWeb() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-4 md:px-10 lg:px-20 mb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image
            src="/php4.webp"
            alt="PHP Development"
            width={600}
            height={450}
            className="rounded-xl shadow-xl w-full object-contain"
          />

        </motion.div>

        {/* RIGHT TEXT SECTION */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose PHP for Web Development?
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-300 mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            PHP powers some of the world&asop;s most popular websites. Here&asop;s why it&asop;s still a top choice for web development:
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {phpAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 bg-[#1E293B] rounded-xl p-5 shadow hover:shadow-2xl transition-all"
              >
                <div className="w-32 h-10 bg-[#334155] rounded-full flex items-center justify-center">
                  {adv.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {adv.title}
                  </h4>
                  <p className="text-sm text-gray-400">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

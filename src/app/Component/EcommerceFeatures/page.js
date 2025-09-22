'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Custom E-Commerce Solutions',
    description:
      'We craft custom eCommerce platforms tailored to your brand’s identity and specific market needs, delivering a unique and engaging shopping experience.',
    icon: '🛒',
  },
  {
    title: 'User-Centric Design',
    description:
      'We build intuitive and responsive eCommerce designs that enhance user experience and promote seamless navigation across devices.',
    icon: '🎨',
  },
  {
    title: 'Secure Payment Integration',
    description:
      'Our solutions include secure and smooth payment systems, supporting various gateways to ensure a safe and convenient checkout process.',
    icon: '💳',
  },
  {
    title: 'Robust Inventory Management',
    description:
      'Track your inventory, manage orders, and streamline fulfillment effortlessly with our powerful management tools.',
    icon: '📦',
  },
  {
    title: 'SEO Optimization',
    description:
      'We implement SEO best practices to boost your site’s visibility, attract more organic traffic, and improve your ranking on search engines.',
    icon: '🚀',
  },
  {
    title: 'Ongoing Support and Maintenance',
    description:
      'Our team provides continuous updates, performance enhancements, and security fixes to keep your online store running smoothly and efficiently.',
    icon: '🛠️',
  },
];

const EcommerceFeatures = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            Key Features of Our E-Commerce Solutions
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 hover:shadow-xl transition duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative h-87 lg:h-120"
        >
          <Image
            src="/ecomm1.png"
            alt="E-Commerce Features"
            height={600}
            width={400}
            className="object-contain rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;

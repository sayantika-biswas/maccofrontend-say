'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ResultsSection = () => {
  const resultsData = [
    {
      percentage: 220,
      description: 'Improved lead conversion rates by streamlining the sales funnel and driving quality traffic.',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      imageSrc: '/sales-funnel1.svg',
    },
    {
      percentage: 150,
      description: 'Achieved significant revenue growth through strategic financial planning and performance marketing.',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      imageSrc: '/bar-graph.svg',
    },
    {
      percentage: 200,
      description: 'Enhanced overall business performance with data-driven strategies and growth-focused solutions.',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
      imageSrc: '/financial-profit.svg',
    },
    {
      percentage: 300,
      description: 'Amplified brand reach and customer engagement with targeted marketing campaigns.',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
      imageSrc: '/promotion.svg',
    },
  ];

  // Function to animate the number
  const CountUp = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < target) return prev + 3;
          clearInterval(interval);
          return target;
        });
      }, 20);
      return () => clearInterval(interval);
    }, [target]);

    return <span>{count}%</span>;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            📈 The Results
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how our strategic solutions delivered measurable growth and improved business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 ${result.bgColor}`}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4 relative">
                <Image
                  src={result.imageSrc}
                  alt="Result Icon"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className={`text-3xl font-semibold ${result.textColor}`}>
                <CountUp target={result.percentage} />
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResultsSection;

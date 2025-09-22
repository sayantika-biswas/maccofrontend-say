'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProjectChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: 'Research your competitors sales tactics and results.',
      description:
        'To stay competitive, we analyzed our competitors&apos; sales tactics and their results. Understanding their strategies helped us identify areas where we could differentiate and improve our own approach.',
    },
    {
      id: 2,
      title: 'Facebook Advertising campaigns to facilitate conversions, not just likes.',
      description:
        'Our challenge was to go beyond generating likes and focus on driving actual conversions. By optimizing our Facebook ads for engagement and targeted actions, we shifted our approach to focus on quality leads and sales.',
    },
    {
      id: 3,
      title: 'PPC campaigns reach click-happy customers with products.',
      description:
        'We faced the challenge of attracting click-happy customers through PPC campaigns. By refining our ad targeting and creating compelling product offerings, we ensured that our ads drove meaningful traffic that led to conversions.',
    },
    {
      id: 4,
      title: 'Comprehensive competitor analysis to uncover key opportunities.',
      description:
        'We conducted a detailed competitor analysis to uncover untapped opportunities. This allowed us to identify gaps in the market, enhance our offerings, and ultimately gain a competitive advantage.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container px-7 mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Project Challenges
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            In tackling this project, we encountered several challenges that required thoughtful strategies and innovative solutions.
          </p>
        </motion.div>

        {/* Challenges */}
        <div className="grid gap-10 sm:grid-cols-2">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <div className="h-12 w-12 min-w-[3rem] rounded-full bg-gradient-to-br from-orange-400 to-gray-50 text-white font-bold flex items-center justify-center text-lg shadow-md mr-4">
                  {challenge.id}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <Image
            src="/projectchallenge.jpg"
            alt="Team Working on Project"
            width={1200} // Specify appropriate width for your image
            height={400} // Specify appropriate height for your image
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default ProjectChallenges;

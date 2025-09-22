"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import motion.div to avoid SSR issues with framer-motion
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false, // Disable SSR for framer-motion
});

const InterviewProcess = () => {
  const processSteps = [
    {
      title: 'HR Interview',
      description:
        'This is the initial screening stage to assess your qualifications and experience. Be prepared to discuss your background and career goals.',
      icon: () => <span className="text-xl">👤</span>,
    },
    {
      title: 'Personal Interview',
      description:
        'In-depth discussion with the hiring manager to evaluate your technical skills and cultural fit. Be ready to share examples of your accomplishments.',
      icon: () => <span className="text-xl">👥</span>,
    },
    {
      title: 'Practical Round',
      description:
        'Demonstrate your skills through practical exercises like coding challenges, insightful presentations, or real-world case studies.',
      icon: () => <span className="text-xl">💻</span>,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    // <div className="bg-gradient-to-br from-yellow-50 to-purple-100 py-16 md:py-24"  
    // style={{ backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)' }}>
    <div className=" bg-[#FEEFEF] py-16 md:py-24"  
     >
   
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Process of Interview
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Let&apos;s walk you through our hiring process.
          </p>
        </div>

        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <MotionDiv
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                  {<Icon className="w-8 h-8 text-indigo-500" />}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </div>
  );
};

export default InterviewProcess;

'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const devOpsStages = [
  {
    name: "Planning",
    description: "Define the goals, roadmap, and timelines for DevOps adoption.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    name: "Development",
    description: "Implement infrastructure as code, automate builds, and coding standards.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8M8 8h8" />
      </svg>
    ),
  },
  {
    name: "Testing",
    description: "Automate tests to ensure quality and reliability of the software.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    name: "Integration",
    description: "Continuous integration of code changes and automated deployments.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
      </svg>
    ),
  },
  {
    name: "Deployment",
    description: "Deploy code safely with zero downtime and rollback capabilities.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M12 3v18" />
      </svg>
    ),
  },
  {
    name: "Operations",
    description: "Monitor applications and infrastructure for performance and issues.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
      </svg>
    ),
  },
  {
    name: "Feedback",
    description: "Gather feedback continuously to improve the software and processes.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7-7-7-7 7 7 7z" />
      </svg>
    ),
  },
  {
    name: "Security",
    description: "Integrate security practices in the DevOps lifecycle.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6m-3-3h6" />
      </svg>
    ),
  },
  {
    name: "Collaboration",
    description: "Foster strong communication between all teams involved.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l4-4m0 0l-4-4m4 4H8" />
      </svg>
    ),
  },
];

export default function DevOpsConsulting() {
  return (
    <section
      id="devOpsConsulting"
      className="flex flex-col items-center max-w-8xl mx-auto p-8 bg-gray-200 rounded-lg shadow-lg"
    >
      <motion.h2
        className="text-4xl font-extrabold text-blue-900 mb-6 tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        DevOps Consulting
      </motion.h2>

      <motion.div
        className="max-w-5xl text-center text-blue-800 mb-12 space-y-5 text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p>
          Our DevOps consulting services help businesses streamline their software delivery
          pipelines, improve collaboration between development and operations teams, and accelerate
          innovation.
        </p>
        <p>
          By adopting best practices in automation, continuous integration, and monitoring, we ensure
          your applications are reliable, scalable, and secure.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full px-9"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {devOpsStages.map(({ name, description, icon }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            variants={cardVariants}
          >
            {icon}
            <h3 className="mt-4 text-xl font-semibold text-blue-800">{name}</h3>
            <p className="mt-2 text-center text-gray-600 text-sm">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

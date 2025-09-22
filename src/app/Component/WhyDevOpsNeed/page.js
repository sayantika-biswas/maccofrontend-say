'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ScalableHighlyAvailableIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
);

const EnrichingTimeToValueIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const RoomForInnovationIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 17v5m-4 0h8m-11.85-8.35a7.5 7.5 0 1115 0m-15 0l-1.5 1.5M21 12l1.5 1.5m-21-3h.01M2.5 10.5h.01"></path>
  </svg>
);

const LightningFastDeliveryIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
);

const AutomateCloudSolutionsIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
  </svg>
);

const ProcessAutomationIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
  </svg>
);

const ManageEscalationsIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
  </svg>
);

const RapidFlowIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H1m18 0a2 2 0 110 4 2 2 0 010-4z"></path>
  </svg>
);

const StableEnvironmentIcon = () => (
  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.333.9 2.456 2.456a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.942 1.543-.9 3.333-2.456 2.456a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.333-.9-2.456-2.456a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.942-1.543.9-3.333 2.456-2.456a1.724 1.724 0 002.572-1.065z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const benefits = [
  {
    title: "Scalable & Highly-available Processes and Solutions",
    icon: <ScalableHighlyAvailableIcon />,
  },
  {
    title: "Enriching Time to Value",
    icon: <EnrichingTimeToValueIcon />,
  },
  {
    title: "Room for Innovation",
    icon: <RoomForInnovationIcon />,
  },
  {
    title: "Lightning-fast Product Delivery",
    icon: <LightningFastDeliveryIcon />,
  },
  {
    title: "Automate Cloud-based Solutions",
    icon: <AutomateCloudSolutionsIcon />,
  },
  {
    title: "Process Automation at each Step with Standard Tools",
    icon: <ProcessAutomationIcon />,
  },
  {
    title: "Manage Escalations from the Applicant Support Team",
    icon: <ManageEscalationsIcon />,
  },
  {
    title: "Rapid flow from the Planning Phase to Production",
    icon: <RapidFlowIcon />,
  },
  {
    title: "Stable Environment to Operate",
    icon: <StableEnvironmentIcon />,
  },
];

const WhyDevOpsNeed = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            Why Do You Need DevOps Consulting Services and Solutions?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-100 hover:shadow-red-400"
            >
              <div className="mb-4 text-red-400">{benefit.icon}</div>
    <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
    {/* Agar description chahiye to yahan add karo, jaise: */}
    {/* <p className="mt-2 text-gray-300 text-sm">Description text here</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDevOpsNeed;

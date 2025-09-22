
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../Component/Navbar/page';

const JobCard = ({ title, description, jobType, postedAgo, buttonText, buttonColor, index }) => {
  const buttonClass =
    buttonColor === 'gray'
      ? 'bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-white'
      : 'bg-indigo-600 text-white hover:bg-indigo-700';

  return (
    <>
    <Navbar/>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-md shadow-xl border border-gray-200 flex flex-col justify-between h-full py-4 transition-transform hover:scale-105"
    >
      <div className="p-6">
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mb-2">
          {jobType}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm whitespace-pre-line">{description}</p>
        <p className="text-gray-500 text-xs mt-4 italic">{postedAgo}</p>
      </div>
      <div className="p-6 mt-4">
        <Link href={`Openings/applyNow`}>
        <button
          className={`w-full text-center cursor-pointer font-semibold py-2 rounded focus:outline-none focus:shadow-outline transition duration-300 ${buttonClass}`}
        >
          {buttonText}
        </button>
        </Link>
      </div>
    </motion.div>
    </>
  );
};

const OurOpenings = () => {
  const jobOpeningsData = [
    {
      title: "Wordpress Developer",
      description: "Required Experience: 3 to 6 years\nNumber of Positions: 2\nJob Location: Jaipur, India\nJob Type: Remote",
      postedAgo: "2 days ago",
      jobType: "Remote",
      buttonText: "Apply",
      buttonColor: "gray",
    },
    {
      title: "SEO Expert",
      description: "Required Experience: 3 to 6 years\nNumber of Positions: 2\nJob Location: Jaipur, India\nJob Type: Remote",
      postedAgo: "3 days ago",
      jobType: "Remote",
      buttonText: "Apply",
      buttonColor: "gray",
    },
    {
      title: "Business Analyst",
      description: "Required Experience: 3 to 6 years\nNumber of Positions: 2\nJob Location: Jaipur, India\nJob Type: Full Time",
      postedAgo: "25 days ago",
      jobType: "Full Time",
      buttonText: "Apply",
      buttonColor: "indigo",
    },
    {
      title: "Web Designer",
      description: "Required Experience: 3 to 6 years\nNumber of Positions: 2\nJob Location: Jaipur, India\nJob Type: Full Time",
      postedAgo: "50 days ago",
      jobType: "Full Time",
      buttonText: "Apply",
      buttonColor: "gray",
    },
    {
      title: "IOS Developer",
      description: "Required Experience: 3 to 6 years\nNumber of Positions: 2\nJob Location: Jaipur, India\nJob Type: Full Time",
      postedAgo: "51 days ago",
      jobType: "Full Time",
      buttonText: "Apply",
      buttonColor: "gray",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Heading and Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Openings</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            We seek engineers at heart and mind who are self-driven, proactive, unafraid of challenges and commitment, and passionate about making an impact. Feeling like one of us? Apply to join!
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {jobOpeningsData.map((job, index) => (
            <JobCard key={index} {...job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOpenings;
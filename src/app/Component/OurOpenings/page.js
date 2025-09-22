"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';


const JobCard = ({ title, description, jobType, department, buttonColor, salaryRange, createdAt, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonClass =
    buttonColor === 'gray'
      ? 'bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-white'
      : 'bg-indigo-600 text-white hover:bg-indigo-700';

  const getDaysAgo = (dateString) => {
    if (!dateString) return '';
    const publishedDate = new Date(dateString);
    const now = new Date();
    const diffTime = now - publishedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return 'today';
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  return (
    <motion.div>
      <div
        className={`bg-white rounded-md shadow-md p-6 border border-gray-200 flex flex-col justify-between h-full transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
      >
        <div className="p-6">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded mb-2">
            {jobType}
          </span>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-1"><span className='font-bold'>Role:</span> {department}</p>
          <p className="text-gray-600 text-sm mb-1"><span className='font-bold'>Job Type:</span> {jobType}</p>
          {salaryRange && (
            <p className="text-gray-600 text-sm mb-1"><span className='font-bold'>Salary Range:</span> {salaryRange.min} - {salaryRange.max}</p>
          )}
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-gray-500 text-sm">
            Posted <span className="font-bold">{getDaysAgo(createdAt)}</span>
          </span>
          <Link href={'/'}>
            <button className="text-blue-500 hover:underline focus:outline-none cursor-pointer">
              Apply Now →
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};


const OurOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('https://api.maccotech.in/api/v1/jobs');
        const data = await res.data.data;
        // console.log('Fetched jobs:', data);
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Openings</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <Image
            src="/stock.jpg"
            alt="Welcome to the team"
            className="hidden sm:block h-16"
            width={64}
            height={64}
          />
        </div>
        <p className="text-gray-700 mb-8">
          We seek engineers at heart and mind who are self-driven, proactive, unafraid of challenges and commitment, and passionate about making an impact. Feeling like one of us? Apply to join!
        </p>

        {loading ? (
          <p className="text-gray-500">Loading job openings...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard
                key={job._id || index}
                title={job.title}
                department={job.department}
                jobType={job.jobType}
                salaryRange={job.salaryRange}
                description={job.description}
                applicationDetails={job.applicationDetails}
                index={index}
                createdAt={job.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurOpenings;

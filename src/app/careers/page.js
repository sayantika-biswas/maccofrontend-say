"use client";

import React, { useState, useEffect } from 'react';

import Navbar from '../Component/Navbar/page';
import CareerBenefits from '../Component/benefits/pages';
import WhyWorkWithUs from '../Component/WhyWorkWithUs/page';
import InterviewProcess from '../Component/InterviewProcess/page';
import OurOpenings from '../Component/OurOpenings/page';
import Footerpage from '../Component/Footerpage/page';
import LifeAtMacco from '../Component/LifeAtMcco/page';
import Banner from '../Component/Banner/page';
import { motion } from "framer-motion";

import Image from 'next/image';

function Careers() {

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
    message: '',
    termsAccepted: false
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Validate file size (10MB max)
      if (e.target.files[0].size > 10 * 1024 * 1024) {
        setError('File size should not exceed 10MB');
        return;
      }
      setResumeFile(e.target.files[0]);
      setError(null);
    }
  };
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Please fill all required fields');
      }

      if (!formData.termsAccepted) {
        throw new Error('You must accept the terms and conditions');
      }

      const formPayload = new FormData();

      // Append form data
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'termsAccepted') { // Don't send termsAccepted as form data
          formPayload.append(key, value);
        }
      });

      // Append file if exists
      if (resumeFile) {
        formPayload.append('resume', resumeFile);
      }

      const response = await fetch(`${API_URL}/applications`, {
        method: 'POST',
        body: formPayload
        // Headers are automatically set by browser for FormData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      // Success handling
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        message: '',
        termsAccepted: false
      });
      setResumeFile(null);

    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Navbar />


      <section className="relative overflow-hidden">
        <div
          className="min-h-[86vh] bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex flex-col md:flex-row items-center justify-center px-10 pt-23 py-12 gap-10"
        >
          {/* Animated Background Elements - Moved outside the left content */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg
              className="absolute top-1/4 left-1/15 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-500 animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
            <svg
              className="absolute bottom-1/8 right-1/30 transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-500 animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
          </div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left relative z-10" // Added relative and z-10
          >
            <h2 className="text-3xl md:text-3xl font-bold mb-3 leading-snug">
              The Future of Macco Tech Starts with You.
            </h2>
            <p className="text-base md:text-lg">
              We are a group of young, dynamic, and creative experts who are eager to break new ground in IT services and consulting.
            </p>
          </motion.div>

          {/* Form Card */}
          {
            !submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-[500px] w-full bg-gradient-to-br from-[#41c5fc] to-[#864adb] p-6 mt-15 rounded-md shadow-lg relative z-10"
              >
                <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
                  />

                  {/* Mobile Number with Dropdown */}
                  <div className="flex items-center gap-2">
                    <select
                      className="bg-white/20 text-white px-3 py-2.5 rounded-md outline-none"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+91" className="text-black">+91 (India)</option>
                      <option value="+1" className="text-black">+1 (USA)</option>
                      <option value="+44" className="text-black">+44 (UK)</option>
                      <option value="+61" className="text-black">+61 (Australia)</option>
                      <option value="+81" className="text-black">+81 (Japan)</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none resize-none"
                  ></textarea>

                  {/* Upload Resume */}
                  <div className="text-xs text-white mt-2">
                    Upload Your Resume *(File size should not be more than 10 MB)
                  </div>
                  <div className="flex items-center bg-white/20 text-black rounded-md overflow-hidden">
                    <label htmlFor="resume" className="bg-gray-200 px-4 py-2 cursor-pointer text-sm">
                      Choose File
                    </label>
                    <span className="px-3 text-sm truncate text-white">
                      {resumeFile ? resumeFile.name : "No file chosen"}
                    </span>
                    <input
                      id="resume"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  {resumeFile && (
                    <p className="text-xs text-white mt-1">
                      Selected: {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}

                  {/* Terms Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    <label className="text-white text-sm">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded cursor-pointer text-white font-medium ${isSubmitting ? 'bg-blue-700 opacity-80' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Submit Application'}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full max-w-md"
              >
                <svg
                  className="w-16 h-16 text-green-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h1 className="text-2xl font-semibold text-white mb-2">
                  Thank You!
                </h1>
                <p className="text-white/90 text-center mb-6">
                  Your application has been submitted successfully. We&aposll contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      countryCode: '+91',
                      message: '',
                      termsAccepted: false
                    });
                    setResumeFile(null);
                  }}
                  className="px-6 py-2 bg-blue-600 cursor-pointer z-50 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  Submit Another Application
                </button>
              </motion.div>
            )
          }
        </div>
      </section>



      {/* ----second section start--- */}
      <CareerBenefits />

      {/* ----second section end---- */}


      <WhyWorkWithUs />

      <OurOpenings />
      <LifeAtMacco />
      <InterviewProcess />
      <Banner />
      <Footerpage />
    </>
  );
}

export default Careers;




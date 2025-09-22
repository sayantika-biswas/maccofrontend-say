"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Component/Navbar/page";
import { motion } from "framer-motion";
import ReactJSServices from "../Component/ReactJSServices/page";
import GetQuote from "../Component/GetQuote/page";
import ReactAdvantages from "../Component/ReactAdvantages/page";
import WhyChooseReact from "../Component/WhyChooseReact/page";
import Footerpage from "../Component/Footerpage/page";
import { services } from "../Component/Data/page";
import ServiceHeader from "../Component/ServiceHeader/page";

const container = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ReactJsDevelopment = () => {
  const countryFlags = {
    "+1": "/us.png",
    "+44": "/uk.png",
    "+91": "/in.png",
    "+61": "/au.png",
    "+49": "/de.png",
    "+33": "/fr.png",
    "+81": "/jp.png",
    "+86": "/cn.png",
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    mobileNumber: "",
    message: "",
  });
  const [mobileNumber, setMobileNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setIsDropdownOpen(false);
  };
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const completePhone = `${formData.countryCode}${formData.mobileNumber}`;
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        mobileNumber: completePhone,
        message: formData.message,
      };

      const response = await fetch(`${API_URL}/api/getquote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitStatus({ success: true, message: data.message });
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+1",
        mobileNumber: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Navbar />
      <section>
        <div
          className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden"
          style={{ top: "85px" }}
        >
          {/* Background SVGs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <svg
              className="absolute top-1/4 left-[6%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-400 animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
            <svg
              className="absolute bottom-[12.5%] right-[3%] transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-400 animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">
            {/* Left Text Section with framer motion */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left lg:w-2/2 mb-10 lg:mb-0"
            >
              <ServiceHeader {...services.reactjs} />

              <Link href="/contact">
                <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                  LET{"'"}S DISCUSS
                </button>
              </Link>
            </motion.div>

            {/* Right Form Section with framer motion */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="bg-white rounded text-black p-6 md:p-8 lg:p-10 w-full max-w-md shadow-[0_4px_7px_white]"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get a Free Quote
              </h2>

              {submitStatus && (
                <div
                  className={`mb-4 p-3 rounded ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                />

                <div className="flex gap-3 items-center">
                  <div className="relative w-1/3">
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="bg-white border border-gray-300 px-3 py-2.5 rounded-md cursor-pointer flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={countryFlags[formData.countryCode]}
                          alt="Flag"
                          className="w-5 h-5"
                          width={20}
                          height={20}
                        />
                        <span className="text-sm">{formData.countryCode}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ml-2 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 7l5 5 5-5"
                        />
                      </svg>
                    </div>

                    {isDropdownOpen && (
                      <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {Object.entries(countryFlags).map(([code, flagUrl]) => (
                          <li
                            key={code}
                            onClick={() => handleCountryCodeChange(code)}
                            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                          >
                            <Image
                              src={flagUrl}
                              alt={`${code} flag`}
                              width={20}
                              height={20}
                            />
                            {code}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <input
                    type="tel"
                    name="mobileNumber"
                    pattern="[0-9]{10}"
                    placeholder="Mobile Number *"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message *"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none resize-none shadow-sm focus:ring-2 focus:ring-purple-500"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-50 py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center md:space-x-12">
            {/* Text Content with animation from left */}
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Building Dynamic User Interfaces with React.js
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                React.js is a powerful JavaScript library developed by Facebook
                for building user interfaces. It enables developers to create
                dynamic, high-performance web and mobile applications with a
                component-based architecture.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Designed to handle complex and large-scale applications with
                ease, React.js efficiently manages data that changes over time,
                ensuring a seamless user experience. It has become one of the
                most popular libraries in modern web development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                React.js stands out for its simplicity, speed, and scalability.
                Its combination of JavaScript’s speed and a declarative approach
                to building interfaces makes it a top choice for companies
                aiming to deliver high-quality, responsive web solutions.
              </p>
            </motion.div>

            {/* Image with animation from right */}
            <motion.div
              className="md:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-auto  overflow-hidden">
                <Image
                  src="/ReactJs1.webp"
                  alt="ReactJS Illustration"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#FEEFEF] py-16 ">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image Section with animation from left */}
              <motion.div
                className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden "
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/ReactJs1.webp"
                  alt="React JS Capabilities Illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </motion.div>

              {/* Text Content with animation from right */}
              <motion.div
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-blue-700">
                  Our React JS Capabilities
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed">
                    At Macco Tech, we leverage the power of React JS to build
                    dynamic and high-performance web applications tailored to
                    your unique business needs. Our expert team excels in:
                  </p>
                  <ul className="text-base list-disc list-inside text-gray-600 leading-relaxed">
                    <li>
                      Developing interactive user interfaces (UIs) and engaging
                      user experiences (UX).
                    </li>
                    <li>
                      Building scalable and maintainable single-page
                      applications (SPAs).
                    </li>
                    <li>
                      Creating reusable UI components for efficient development.
                    </li>
                    <li>
                      Integrating with various backend APIs and services
                      seamlessly.
                    </li>
                    <li>Optimizing applications for speed and performance.</li>
                    <li>Providing ongoing support and maintenance.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-base">
                    We stay up-to-date with the latest React JS features and
                    best practices to deliver cutting-edge solutions that drive
                    your business forward. Partner with Macco Tech to unlock the
                    full potential of React JS.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ReactJSServices />
      <ReactAdvantages />
      <WhyChooseReact />

      <Footerpage />
    </>
  );
};

export default ReactJsDevelopment;

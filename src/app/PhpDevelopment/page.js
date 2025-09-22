// components/HeroSection.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import Navbar from "../Component/Navbar/page";
import PhpBenefitsSection from "../Component/PhpBenefitsSection/page";
import WhyChoosePHPForWeb from "../Component/WhyChoosePHPForWeb/page";
import WhyChoosephp from "../Component/WhyChoosephp/page";
import Banner from "../Component/Banner/page";
import Footerpage from "../Component/Footerpage/page";

export default function PhpDevelopment() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default value can be changed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Country code to flag mapping
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

  const handleCountryCodeChange = (code) => {
    setSelectedCountryCode(code);
    setIsDropdownOpen(false);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }, // Delay image animation slightly
    },
  };

  return (
    <div>
      <Navbar />

      <section>
        <div className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
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
            {/* Left Text Section with motion */}
            <motion.div
              className="text-center lg:text-left lg:w-1/2 mb-10  mt-10 lg:mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                PHP Development Company in the India
              </h1>
              <p className="text-indigo-200 mb-2">
                Build scalable and secure web solutions tailored to your
                business needs with our expert PHP development services.
              </p>
              <p className="text-indigo-200 mb-6 text-sm md:text-base">
                At <strong>Macco Tech</strong>, we deliver high-performance PHP
                applications that ensure smooth functionality, faster load
                times, and enhanced user experiences. Our team specializes in
                custom PHP development, CMS solutions, and API integrations to
                support your digital growth.
              </p>

              <Link href="/contact">
                <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                  LET&apos;S DISCUSS
                </button>
              </Link>
            </motion.div>

            {/* Right Form Section with motion */}
            <motion.div
              className="bg-white rounded text-black p-6 md:p-8 lg:p-10 w-full max-w-md shadow-[0_4px_7px_white]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get a Free Quote
              </h2>
              {submitStatus && (
                              <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
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
                                            className="w-5 h-5"
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

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Section: Content */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                Expert <span className="text-blue-700">PHP Development</span>{" "}
                for Your Business
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                <span className="font-semibold text-blue-600">Macco Tech</span>{" "}
                delivers scalable PHP solutions tailored to your business needs.
                We build secure and fast-performing websites using the latest
                PHP technologies.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                From startups to enterprises, our flexible engagement models
                ensure high-quality development within your budget.
              </p>
            </motion.div>

            {/* Right Section: Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
            >
              <div className="relative w-full max-w-lg lg:max-w-none aspect-video overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/php1.jpg" // यहाँ पर अपनी image का URL लगाएं
                  alt="PHP Development Services"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <PhpBenefitsSection />
      <WhyChoosephp />
      <WhyChoosePHPForWeb />
      <Banner />
      <Footerpage />
    </div>
  );
}

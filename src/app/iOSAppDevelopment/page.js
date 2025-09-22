"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Component/Navbar/page";
import HireUsSection from "@/app/Component/HireUsSection/page";
import IOSFeatures from "../Component/IOSFeatures/page";
import Footerpage from "../Component/Footerpage/page";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

function HeroSection() {
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
              className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                iOS App Development Company in the USA
              </h1>
              <p className="text-indigo-200 mb-2">
                Craft feature-rich, intuitive, and innovative iOS applications
                to strengthen your brand identity.
              </p>
              <p className="text-indigo-200 mb-6 text-sm md:text-base">
                At <strong>Macco Tech</strong>, we create high-performance iOS
                apps that align with your business objectives and exceed user
                expectations. From sleek UI to powerful backend integration, we
                deliver tailored solutions that empower your brand on the App
                Store.
              </p>

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
      {/* ----second Section---- */}
      <div className="py-34 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* LEFT SIDE WITH ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6 lg:mb-0 lg:w-1/2"
            >
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Building Next-Gen iOS Apps That Define Excellence
              </h2>
              <p className="mt-4 text-base text-gray-700">
                At Macco Tech, we help businesses confidently navigate the iOS
                ecosystem by crafting impactful, high-performance mobile
                applications. Our solutions are designed to create memorable
                user experiences while aligning with your strategic goals.
              </p>
              <p className="mt-4 text-base text-gray-600">
                With a team of seasoned iOS developers, we bring your vision to
                life through intuitive interfaces, robust architecture, and
                seamless functionality. Leveraging the latest Apple
                technologies, our apps reflect innovation, reliability, and a
                strong commitment to quality—ensuring your brand makes a lasting
                impression in the digital space.
              </p>
            </motion.div>

            {/* RIGHT SIDE IMAGE WITH ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 lg:pl-8"
            >
              <Image
                src="/ios2.png" // Image path
                alt="iOS App Development" // Image alt text
                className="rounded-lg shadow-xl w-full h-[370px]" // Tailwind classes for styling
                width={500} // Specify the width (for optimization)
                height={370} // Specify the height (for optimization)
              />
            </motion.div>
          </div>
        </div>
      </div>{" "}
      {/* second section end */}
      <section>
        <div className="py-16 bg-[#FEEFEF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl font-bold text-gray-700 sm:text-3xl lg:text-3xl text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Macco Tech for iOS App Development
            </motion.h2>

            <motion.div
              className="border-b-2 border-blue-400 w-16 mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="text-gray-700 leading-relaxed text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* <p className="mb-4 text-base">
                At Macco Tech, we specialize in delivering top-tier iOS app development solutions tailored to meet your business goals. Our expertise lies in building fast, secure, and scalable iOS applications that offer seamless performance and intuitive user experiences across all Apple devices.
              </p> */}
              <p className="mb-4 text-base">
                At Macco Tech, we deliver high-performance iOS applications
                designed to align seamlessly with your business objectives. Our
                development process prioritizes speed, security, and
                scalability, ensuring your app performs flawlessly across all
                Apple devices while providing a refined and engaging user
                experience.
              </p>

              <p className="mb-4 text-base">
                With a deep understanding of the Apple ecosystem, our skilled
                development team uses the latest tools, frameworks, and best
                practices to ensure your app not only stands out in the App
                Store but also delivers real business value. From ideation to
                launch and ongoing support, we’re with you at every step.
              </p>
              <p className="text-base">
                Whether you’re a startup or an enterprise, Macco Tech offers a
                collaborative and transparent development process, focusing on
                quality, innovation, and long-term success. Partner with us to
                turn your iOS app vision into a high-impact digital product.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <HireUsSection />
      <IOSFeatures />
      <Footerpage />
    </>
  );
}

export default HeroSection;

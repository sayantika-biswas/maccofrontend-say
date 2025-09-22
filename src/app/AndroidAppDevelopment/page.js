"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Component/Navbar/page";
import {
  CodeBracketSquareIcon,
  LightBulbIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Servicesandroid from "../Component/Servicesandroid/page";
import Footerpage from "../Component/Footerpage/page";
import Contact from "../Component/Contact/page";
import Image from "next/image";
import { services } from "../Component/Data/page";
import ServiceHeader from "../Component/ServiceHeader/page";

const AndroidAppDevelopmentPage = () => {
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
    countryCode: "+91",
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
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 9 },
    visible: {
      scale: 1,
      opacity: 9,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants2 = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants2 = {
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <Navbar />

      <section>
        <div
          className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden"
          style={{ top: "85px" }}
        >
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
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
            >
              <ServiceHeader {...services.AndriodAppDevelopment} />

              <Link href="/contact">
                <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                  LET{"'"}S DISCUSS
                </button>
              </Link>
            </motion.div>

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

      <section>
        <div className="bg-white py-30 overflow-hidden">
          <div className="container mx-auto lg:pt-11 px-6 sm:px-8 lg:px-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              {/* Text Content */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* <h2 className="text-2xl font-bold text-blue-800 leading-tight sm:text-3xl">
                  Android Development, Engineered for Excellence
                </h2>
                <p className="mt-6 text-lg text-gray-700">
                  We build secure, scalable, and user-centric Android applications that align with your business goals and offer seamless mobile experiences.
                </p> */}
                <h2 className="text-2xl font-bold text-blue-800 leading-tight sm:text-3xl">
                  Android Development, Engineered for Excellence
                </h2>
                <p className="mt-6 text-lg text-gray-700">
                  We design and develop secure, scalable, and user-focused
                  Android applications that not only meet your business
                  objectives but also deliver seamless and engaging mobile
                  experiences. Our solutions are crafted to ensure performance,
                  reliability, and future-ready scalability, helping you stay
                  ahead in the competitive digital landscape.
                </p>

                <ul className="mt-8 space-y-5 text-gray-700">
                  {[
                    "Tailored Solutions",
                    "Modern Technologies",
                    "Optimized Performance",
                  ].map((title, index) => (
                    <motion.li
                      key={title}
                      className="flex items-start gap-4"
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      {index === 0 && (
                        <CodeBracketSquareIcon className="h-6 w-6 text-indigo-600 mt-1" />
                      )}
                      {index === 1 && (
                        <LightBulbIcon className="h-6 w-6 text-indigo-600 mt-1" />
                      )}
                      {index === 2 && (
                        <ChartBarSquareIcon className="h-6 w-6 text-indigo-600 mt-1" />
                      )}
                      <div>
                        <span className="block font-semibold text-base">
                          {title}
                        </span>
                        <span className="text-sm">
                          {title === "Tailored Solutions" &&
                            "Custom Android apps designed around your brand and users."}
                          {title === "Modern Technologies" &&
                            "Built with Kotlin, Jetpack, and the latest Android frameworks."}
                          {title === "Optimized Performance" &&
                            "Fast, reliable apps that scale with your business."}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                className="mt-12 lg:mt-0"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                  <Image
                    className="object-cover w-full h-full"
                    src="/androidimage.avif"
                    alt="Android Development"
                    width={300}
                    height={400}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-12">
        <div className="container lg:px-36 mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
            We Are Macco Tech
          </p>
          <h2 className="mt-3 text-1xl sm:text-2xl lg:text-3xl font-bold text-gray-700 tracking-tight">
            Leading Android App Development Company
          </h2>
          <p className="mt-4 text-base sm:text-base text-gray-700">
            Macco Tech is a globally recognized Web, Android App and Digital
            Marketing company with branches in India and Australia. Since our
            inception, we have been delivering top-notch solutions in Android
            app development, tailored to meet modern business needs. Our team
            specializes in creating high-performance Android applications with
            clean interfaces and seamless user experiences. Whether it&apos;s a
            utility app, an enterprise-grade solution, or an engaging mobile
            game, we bring your vision to life with creativity and precision. We
            are committed to quality, timely delivery, and customer satisfaction
            — values that help us build long-term client relationships and
            deliver repeat success.
          </p>
          {/* <p className="mt-4 text-base sm:text-base text-gray-600">
            At Macco Tech, Android app development is not just a service; it&apos;s our passion. We combine innovation with technical expertise to ensure your app is scalable, secure, and aligned with your business goals. Let&apos;s build something impactful together — your success is our mission.
          </p> */}
          <p className="mt-4 text-base sm:text-base text-gray-700">
            At Macco Tech, we are a globally recognized Android app development
            company committed to delivering innovative, user-centric, and
            scalable solutions. Our expertise extends across diverse domains,
            from utility apps to enterprise-grade systems and immersive mobile
            games. We focus on building high-performance Android applications
            with clean, intuitive interfaces, ensuring seamless user experiences
            that drive engagement and business growth. With a proven track
            record in Android development, we help businesses stay ahead in a
            competitive digital landscape by offering end-to-end services—from
            ideation and design to development, deployment, and ongoing support.
            Partner with us to transform your ideas into reality and achieve
            success with our reliable and tailored Android app solutions.
          </p>

          <div className="mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Servicesandroid />
      <Contact />
      <Footerpage />
    </>
  );
};

export default AndroidAppDevelopmentPage;


'use client';
import Image from 'next/image'; // Import Image component
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Component/Navbar/page';
import SoftwareTestingServices from '../Component/SoftwareTestingServices/page';
import SoftWareTestingAdvantages from '../Component/SoftWareTestingAdvantages/page';
import WhyChooseQualityAssuranceUs from '../Component/WhyChooseQualityAssuranceUs/page';
import HireTeamSectionqualityAssurance from '../Component/HireTeamSectionqualityAssurance/page';
import Banner from '../Component/Banner/page';
import Footerpage from '../Component/Footerpage/page';

const SoftwareTesting = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Country code to flag mapping
  const countryFlags = {
    '+1': '/us.png',
    '+44': '/uk.png',
    '+91': '/in.png',
    '+61': '/au.png',
    '+49': '/de.png',
    '+33': '/fr.png',
    '+81': '/jp.png',
    '+86': '/cn.png'
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

    const handleCountryCodeChange = (code) => {
        setSelectedCountryCode(code);
        setIsDropdownOpen(false);
    };
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
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
                            className="text-center lg:text-left lg:w-1/2 mb-10 mt-10 lg:mb-0"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                Software Testing Service in the India
                            </h1>
                            {/* <p className="text-indigo-200 mb-2">
                                Deliver high-quality, secure, and reliable software with confidence. Our expert testing services ensure that every aspect of your product—functionality, performance, security, and compatibility—is thoroughly validated before it reaches your users.
                            </p>

                            <p className="text-indigo-200 mb-6 text-sm md:text-base">
                                At <strong>Macco Tech</strong>, we specialize in both manual and automated testing, providing tailored solutions to match your project needs. Our dedicated QA team follows industry best practices to detect issues early, enhance user experiences, and ensure seamless performance. Whether it’s a web, mobile, or enterprise application, we help you achieve flawless software delivery with confidence and efficiency.
                            </p> */}
                            <p className="text-indigo-200 mb-2">
                                Deliver secure, high-quality software with Macco Tech. Our testing services ensure every feature—from functionality to performance—is thoroughly validated.
                            </p>

                            <p className="text-indigo-200 mb-6 text-sm md:text-base">
                                We offer manual and automated testing tailored to your needs. Our QA team follows best practices to catch issues early and ensure smooth, reliable performance across web, mobile, and enterprise apps.
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
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get a Free Quote</h2>
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
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {/* Left Side: Image */}
                        {/* <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/SoftwareTesting.png" // 🔁 Replace with your image path
                alt="Software Testing Illustration"
                layout="fill"
                objectFit="contain"
                priority
                className="rounded-lg"
              />
            </div>


          </motion.div> */}

                        <motion.div
                            className="lg:w-1/2 flex justify-center lg:justify-end"
                            variants={imageVariants}
                        >
                            <div className="relative w-full mt-7 max-w-1xl h-54 sm:h-80 md:h-96 lg:h-[400px]">
                                <Image
                                    src="/SoftWareTesting1.png"
                                    alt="Illustration of business growth or digital marketing success"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        </motion.div>



                        {/* Right Side: Text */}
                        <motion.div
                            className="w-full lg:w-1/2 text-gray-700 text-center lg:text-left"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                                Delivering Quality Through Expert Software Testing Services
                            </h2>
                            <p className="text-base md:text-base leading-relaxed">
                                Enhance your business for next-generation applications by implementing the best software testing methodologies and tools. Our innovative approach minimizes errors, reduces overall cycle time, and decreases the number of bugs in your software. Keeping client&asop;s customized requirements at the center, we offer a comprehensive set of manual and automated testing services that adhere to standard quality assurance practices. Our dedicated team of skilled QA engineers performs high-quality testing to deliver reliable, scalable, and robust software solutions.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <SoftwareTestingServices />
            <SoftWareTestingAdvantages />
            <WhyChooseQualityAssuranceUs />
            <HireTeamSectionqualityAssurance />
            <Banner />
            <Footerpage />
        </div>
    );
};

export default SoftwareTesting;
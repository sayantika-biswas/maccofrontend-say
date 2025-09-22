"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const EducationPage = () => {
  // Flag images from a public directory
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
    setSubmitMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form Data:", formData);

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        mobileNumber: "",
        message: "",
      });
      setSubmitMessage(
        "Thank you for your message! We will get back to you shortly."
      );
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin with an in-depth consultation to understand your educational goals and target audience. This phase ensures our solution aligns perfectly with your vision.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers craft intuitive, engaging interfaces that make learning a seamless experience. We prioritize accessibility and user-friendly navigation.",
    },
    {
      title: "Development & Testing",
      description:
        "Our skilled developers build robust, scalable platforms using the latest technologies. Rigorous testing ensures a bug-free, high-performance solution.",
    },
    {
      title: "Launch & Support",
      description:
        "We provide comprehensive support during and after launch. From deployment to ongoing maintenance, we ensure your platform operates smoothly 24/7.",
    },
  ];

  return (
    <>
      <Head>
        <title>Education Solutions | Macco Tech</title>
        <meta
          name="description"
          content="Revolutionize education with Macco Tech's digital learning solutions. We build e-learning platforms, student management systems, and interactive content."
        />
      </Head>

      <Navbar />

      <section className="relative pt-[85px] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 min-h-[70vh] md:min-h-[80vh] flex items-center text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                Revolutionizing Education with
                <span className="text-yellow-400"> Digital Learning</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 font-light">
                Empowering institutions with cutting-edge e-learning platforms,
                student management systems, and interactive content delivery to
                shape the future of education.
              </p>
              <Link href="/contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  LET&apos;S DISCUSS
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-xl text-gray-900 p-6 md:p-10 w-full max-w-lg shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Request a Free Quote
              </h2>
              <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-gray-300 px-4 py-3 rounded-lg placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 px-4 py-3 rounded-lg placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />

                <div className="flex gap-3 items-center">
                  <div className="relative w-1/3">
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="bg-white border border-gray-300 px-3 py-3 rounded-lg cursor-pointer flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={countryFlags[formData.countryCode]}
                          alt="Flag"
                          className="w-6 h-4 object-cover"
                          width={24}
                          height={16}
                        />
                        <span className="font-medium text-gray-700">
                          {formData.countryCode}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                        {Object.entries(countryFlags).map(([code, flagUrl]) => (
                          <li
                            key={code}
                            onClick={() => handleCountryCodeChange(code)}
                            className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 transition-colors"
                          >
                            <Image
                              src={flagUrl}
                              alt={`${code} flag`}
                              className="w-6 h-4 object-cover"
                              width={24}
                              height={16}
                            />
                            <span className="font-medium text-gray-700">
                              {code}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    pattern="[0-9]*" // More flexible for different country codes
                    placeholder="Mobile Number *"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message *"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg placeholder-gray-500 resize-none shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                ></textarea>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-300 shadow-md ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </motion.button>
              </form>
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`mt-4 text-center text-sm font-semibold ${
                    submitMessage.includes("Thank you")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      <section className="bg-white py-16 mt-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
                300+
              </h3>
              <p className="text-gray-600 text-lg">
                Educational Platforms Delivered
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-yellow-600 mb-2">
                2M+
              </h3>
              <p className="text-gray-600 text-lg">Students Empowered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-green-600 mb-2">
                95%
              </h3>
              <p className="text-gray-600 text-lg">Client Retention Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
                24/7
              </h3>
              <p className="text-gray-600 text-lg">
                Dedicated Technical Assistance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              Our Transparent Process
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Building Your Educational Solution, Step-by-Step
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is
              delivered on time, within budget, and to your complete
              satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:h-full before:w-px before:bg-gray-200 before:hidden lg:before:block">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Our Expertise
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            About Macco Tech
          </h2>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Macco Tech specializes in building innovative web and mobile
            applications that transform the learning landscape. We partner with
            educational institutions, from K-12 schools to universities and
            corporate training centers, to deliver custom solutions that are not
            just functional but truly engaging.
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Our team of experts leverages the latest technologies to create
            intuitive, scalable, and high-performance platforms, including
            Learning Management Systems (LMS), student portals, and interactive
            learning tools. With a client-centric approach and a passion for
            innovation, we are dedicated to helping our clients meet the
            evolving needs of modern learners worldwide.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footerpage />
    </>
  );
};

export default EducationPage;

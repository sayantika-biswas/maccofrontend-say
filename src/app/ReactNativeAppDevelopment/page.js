'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Component/Navbar/page';
import { motion } from "framer-motion";
import Footerpage from '../Component/Footerpage/page';
import GetQuote from '../Component/GetQuote/page'
// import LatestFromBlogSection from '../Component/LatestFromBlogSection/page';
import ReactServiceCard from '../Component/ReactServiceCard/page';
import { MdDevices, MdThumbUp, MdLink, MdExtension, MdCode } from 'react-icons/md';
import Image from 'next/image';
import { services } from '../Component/Data/page';
import ServiceHeader from '../Component/ServiceHeader/page';

function ReactNative() {
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
    fullName: '',
    email: '',
    countryCode: '+1',
    mobileNumber: '',
    message: ''
  });
  const [mobileNumber, setMobileNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryCodeChange = (code) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
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
        message: formData.message
      };

      const response = await fetch(`${API_URL}/api/getquote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitStatus({ success: true, message: data.message });
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+1',
        mobileNumber: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  const benefits = [
    {
      icon: MdDevices,
      title: 'Cross-Platform',
      description: 'There\'s just one codebase for both iOS and Android apps (and more if needed).',
    },
    {
      icon: MdThumbUp,
      title: 'Trusted by Billions of Users',
      description: 'React Native\'s open-source framework is used to empower Facebook and Instagram.',
    },
    {
      icon: MdLink,
      title: 'Third-Party Integrations',
      description: 'JavaScript strengthens React Native app development with a huge pool of third-party services.',
    },
    {
      icon: MdExtension,
      title: 'Modular Structure',
      description: 'Modules can be reused with different APIs to deliver quick solutions.',
    },
    {
      icon: MdCode,
      title: 'Open-Source',
      description: 'React Native is backed by a big developer community that delivers great tools and wide libraries.',
    },
    // You can add more benefits here if needed
  ];
  return (
    <>
      <Navbar />
      
      <section>
        <div className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden" style={{top: '85px'}}>
         
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
              <ServiceHeader {...services.reactnative} />

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
                        className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
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
                            <Image src={flagUrl} alt={`${code} flag`} width={20}
                              height={20} />
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
                  className={`bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


 


      <div className="py-24 lg:py-35 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">

            {/* Left Side: Text Content with animation */}
            <motion.div
              className="mb-8 lg:mb-0 lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-3xl mb-6">
                React-Native App Development
              </h2>
              {/* <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Macco Tech, we transform ideas into high-performance React Native
                applications that redefine user experiences. As a leading IT and mobile
                app development company in India, we specialize in crafting cross-
                platform apps that deliver seamless performance, native-like feel,
                and global scalability.
              </p> */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <span className="font-semibold">Macco Tech</span>, we empower businesses by developing high-performance React Native applications tailored for global scalability. As a premier IT solutions provider, we specialize in creating cross-platform apps that seamlessly blend native-like functionality with exceptional user experiences. Partner with us to elevate your digital presence and deliver transformative mobile solutions to your audience.
        </p>
            </motion.div>

            {/* Right Side: Image with animation */}
            <motion.div
              className="lg:w-1/2 lg:pl-10"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <Image
            src="https://viitorcloud.com/blog/wp-content/uploads/2022/06/React-Native-Framework-for-Mobile-App-Development.jpg"
            alt="React Native App Development Illustration"
            className="rounded-lg shadow-lg w-full h-auto"
          /> */}
              <Image
                src="/reactnative2.jpg"
                alt="React Native App Development Illustration"
                width={600} // Approx width
                height={400} // Approx height
                className="rounded-lg shadow-lg w-full h-auto"
              />

            </motion.div>

          </div>
        </div>
      </div>


      {/* <section className="px-4 py-12 md:px-16 bg-white"> */}
      <div className="py-16 bg-[#FEEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Left Side: Image */}
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              {/* <Image
              src="http://127.0.0.1:5500/images/react-benefit.webp" // Replace with your actual image URL
              alt="Why Choose React Native"
              className="rounded-lg shadow-lg w-full h-auto"
            /> */}
              <Image
                src="/reactnative.jpg"
                alt="Why Choose React Native"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />


            </div>

            {/* Right Side: Text Content */}
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-4xl mb-4">
                Why Choose React-Native
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">
                For Mobile App Development?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Now, you must understand why you need react native for mobile app development. From faster development time to native-like performance and enhanced user interface to platform-specific look and feel, it offers numerous benefits. This cross-platform framework has been the top choice of developers around the globe.
              </p>
              <ul className="list-disc text-base list-inside text-gray-700 leading-relaxed mb-6">
                <li>One Code, Multiple Platforms - Faster development, reduced costs</li>
                <li>Lightning-Fast Performance - Optimized for smooth</li>
                <li>Scalability & Security - Robust architecture for future expansion</li>
                <li>User-Centric Design - Intuitive and engaging UI/UX</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                The popularity of this framework also sparks the react native vs flutter debate but they both have separate fan bases among developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* </section>  */}
      <section>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                Benefits of React Native
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                React Native mobile app development services are quickly flooding the market. This is easily
                explainable by the benefits it brings to the world of development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg  p-6 flex flex-col items-center text-center "
                >
                  <div className="p-3 bg-indigo-100 rounded-full text-indigo-700 mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReactServiceCard />
      <Footerpage />
    </>

  );
}

export default ReactNative;

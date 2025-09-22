'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Image from "next/image";
import { useState } from 'react';

const HealthcarePage = () => {

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
    countryCode: '+91',
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
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
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

  return (
    <>
      <Navbar />

      <section>
        <div className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden" style={{ top: '85px' }}>

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

          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col text-center items-center justify-center relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:w-1/2 mb-10 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transforming Healthcare with 
                <span className="text-blue-300"> Digital Innovation</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Empowering healthcare providers with cutting-edge mobile applications, 
                telemedicine solutions, and patient management systems.
              </p>

              <Link href="/contact">
                <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                  LET{"'"}S DISCUSS
                </button>
              </Link>
            </motion.div>

            {/* <motion.div
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
                            <Image src={flagUrl} alt={`${code} flag`} className="w-5 h-5" width={20} height={20} />
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
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 mt-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">500+</h3>
              <p className="text-gray-600">Healthcare Apps Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">1M+</h3>
              <p className="text-gray-600">Patients Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-amber-600 mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-violet-600 mb-2">24/7</h3>
              <p className="text-gray-600">Technical Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How We Deliver Healthcare Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">Understanding your healthcare requirements, compliance needs, and existing workflows.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Design & Planning</h3>
              <p className="text-gray-600">Creating user-centered designs and technical architecture that meets healthcare standards.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Development & Testing</h3>
              <p className="text-gray-600">Agile development with continuous testing to ensure quality and compliance at every stage.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Deployment & Support</h3>
              <p className="text-gray-600">Seamless deployment with comprehensive training and ongoing technical support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-12">
        <div className="container lg:px-36 mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
            We Are Macco Tech
          </p>
          
          <p className="mt-4 text-base sm:text-base text-gray-700">
            Macco Tech is a globally recognized Digital Marketing company. Since our inception, we have been delivering top-notch solutions in web & app development, tailored to meet modern business needs.
            Our team specializes in creating high-performance healthcare applications with clean interfaces and seamless user experiences. Whether it&apos;s a utility app, an enterprise-grade solution, or an engaging mobile app, we bring your vision to life with creativity and precision. We are committed to quality, timely delivery, and customer satisfaction — values that help us build long-term client relationships and deliver repeat success.
          </p>
          <p className="mt-4 text-base sm:text-base text-gray-700">
            At Macco Tech, Our expertise extends across diverse domains, from utility apps to enterprise-grade systems and immersive mobile apps. We focus on building high-performance healthcare applications with clean, intuitive interfaces, ensuring seamless user experiences that drive engagement and business growth. With a proven track record in healthcare development, we help businesses stay ahead in a competitive digital landscape by offering end-to-end services—from ideation and design to development, deployment, and ongoing support. Partner with us to transform your ideas into reality and achieve success with our reliable and tailored healthcare app solutions.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footerpage />
    </>
  );
};

export default HealthcarePage
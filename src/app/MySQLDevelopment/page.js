'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Import } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../Component/Navbar/page';
import CTABanner from '../Component/CTABannerAspNet/page';
import CustomSolutionsAspNet from '../Component/CustomSolutionsAspNet/page';
import WhyChooseMySql from '../Component/WhyChooseMySql/page';
import BusinessSolutionBenefitsAspNet from '../Component/BusinessSolutionBenefitsAspNet/page';
import Banner from '../Component/Banner/page';
import Footerpage from '../Component/Footerpage/page';

const MySQLDevelopment = () => {
    // State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+1',
        mobileNumber: '',
        message: ''
    });

    // State for dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // State for submission status and loading
    const [submitStatus, setSubmitStatus] = useState(null); // { success: boolean, message: string }
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle country code selection
    const handleCountryCodeChange = (code) => {
        setFormData(prev => ({ ...prev, countryCode: code }));
        setIsDropdownOpen(false);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null); // Clear previous status

        try {
            const completePhone = `${formData.countryCode}${formData.mobileNumber}`;
            const payload = {
                fullName: formData.fullName,
                email: formData.email,
                mobileNumber: completePhone,
                message: formData.message
            };

            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            if (!API_URL) {
                throw new Error("API_URL is not defined in environment variables.");
            }

            const response = await fetch(`${API_URL}/api/getquote`, { // Assuming '/api/getquote' is your endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            console.log(data);



            if (!response.ok) {

                throw new Error(data.error || 'Submission failed. Please try again.');
            }


            setSubmitStatus({ success: true, message: data.message || 'Your message has been sent successfully!' });

            setFormData({
                fullName: '',
                email: '',
                countryCode: '+1',
                mobileNumber: '',
                message: ''
            });

        } catch (error) {

            setSubmitStatus({ success: false, message: error.message || 'There was an error sending your message.' });
        } finally {
            setIsSubmitting(false);
        }
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
                            className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                MySQL Development Service in the Macco tech
                            </h1>
                            <p className="text-indigo-200 mb-4">
                                At <strong>Macco Tech</strong>, we offer powerful, scalable, and high-performing MySQL development services tailored to meet your application needs. Our expert developers design well-structured databases and optimize complex queries to ensure seamless performance, even under heavy traffic.
                            </p>

                            <p className="text-indigo-200 mb-6 text-sm md:text-base">
                                Whether you need to build a brand-new application, migrate your legacy systems, or improve database efficiency, we provide end-to-end MySQL solutions. With expertise in schema design, indexing, replication, and data security, we help you unlock the full potential of relational databases in your digital ecosystem.
                            </p>
 */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                MySQL Development Services at Macco Tech
                            </h1>
                            <p className="text-indigo-200 mb-4">
                                At <strong>Macco Tech</strong>, we deliver robust, scalable, and high-performance MySQL development services tailored to your application requirements. Our skilled developers design efficient database architectures and optimize complex queries to ensure smooth and reliable performance, even under heavy load.
                            </p>
                            <p className="text-indigo-200 mb-6 text-sm md:text-base">
                                Whether you are building a new application, migrating legacy systems, or enhancing database efficiency, we offer comprehensive end-to-end MySQL solutions. Leveraging our expertise in schema design, indexing, replication, and data security, we help you maximize the power of relational databases within your digital ecosystem.
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

                                {/* Full Name */}
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name *"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                />

                                {/* Country Code & Mobile Number */}
                                <div className="flex gap-3 items-center">
                                    {/* Country Code Dropdown */}
                                    <div className="relative w-1/3">
                                        <div
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="bg-white border border-gray-300 px-3 py-2.5 rounded-md cursor-pointer flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={countryFlags[formData.countryCode]}
                                                    alt="Flag"
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5"
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

                                        {/* Dropdown */}
                                        {isDropdownOpen && (
                                            <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                {Object.entries(countryFlags).map(([code, flagUrl]) => (
                                                    <li
                                                        key={code}
                                                        onClick={() => handleCountryCodeChange(code)}
                                                        className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                                                    >

                                                        <Image src={flagUrl} alt={`${code} flag`} width={20} height={20} className="w-5 h-5" />

                                                        {code}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Mobile Number */}
                                    {/* <input
                                        type="tel"
                                        name="mobileNumber"
                                        pattern="[0-9]{10}"
                                        placeholder="Mobile Number *"
                                        required
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    /> */}
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        // pattern="[0-9]{10}"  <-- Remove this line
                                        placeholder="Mobile Number *"
                                        required
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Your message *"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none resize-none shadow-sm focus:ring-2 focus:ring-purple-500"
                                ></textarea>

                                {/* Submit Button */}
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


            <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

                        {/* Left Content Area */}
                        <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                            {/* <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl font-extrabold text-gray-900 sm:text-4xl md:text-4xl leading-tight"
                            >
                                <span className="block xl:inline">Macco Tech's</span>{' '}
                                <span className="block text-indigo-600 xl:inline">Optimized Data Solutions</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-6 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Drive innovation and support mission-critical applications with Macco Tech's advanced data management services. We ensure unmatched reliability, flexibility, and security, leveraging high-performance storage, robust encryption, and streamlined process optimizations.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mt-4 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Achieve near-zero downtime and exceptional throughput in accordance with your business demands, all while efficiently managing costs and optimizing performance. Our solutions are designed for continuous availability, ensuring maximum uptime and data integrity.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-4 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Consistently reduce your operational costs through smart automation and intelligent data tiering, potentially realizing significant cloud storage savings. We focus on securing your critical information with robust protocols and ensuring data availability across diverse environments.
                            </motion.p> */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl font-extrabold text-gray-900 sm:text-4xl md:text-4xl leading-tight"
                            >
                                <span className="block xl:inline">Macco Tech&apos;s</span>{' '}
                                <span className="block text-indigo-600 xl:inline">Optimized Data Solutions</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-6 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Empower your business with Macco Tech&apos;s cutting-edge data solutions—designed to deliver unmatched reliability, flexibility, and security. We leverage high-performance storage, advanced encryption, and seamless process optimization to drive efficiency at scale.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mt-4 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Maximize uptime, reduce operational costs, and achieve exceptional throughput—tailored to your evolving business needs. Our solutions ensure continuous availability, enabling seamless scalability and optimized performance across all environments.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-4 text-base text-gray-700 sm:text-base leading-relaxed max-w-2xl"
                            >
                                Reduce infrastructure costs with intelligent data tiering and smart automation. With a focus on robust security protocols and global accessibility, Macco Tech empowers your enterprise to safeguard critical data while accelerating innovation.
                            </motion.p>

                        </div>

                        {/* Right Image Area */}
                        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="relative w-full max-w-xl"
                            >
                                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl ring-1 ring-gray-100">
                                    <Image
                                        src="/MySql1.png"
                                        alt="Macco Tech Optimized Database Solutions Illustration"
                                        width={700}
                                        height={550}
                                        layout="responsive"
                                        objectFit="contain"
                                        priority
                                        className="rounded-xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <CTABanner />
            <WhyChooseMySql />
            <BusinessSolutionBenefitsAspNet />
            <Banner />
            <Footerpage />


        </div>
    );
};

export default MySQLDevelopment;



// // components/OptimizedDatabaseSection.jsx
// 'use client';
// import React ,{useState} from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Import } from 'lucide-react';
// import Link from 'next/link';
// import Navbar from '../Component/Navbar/page';
// import CTABanner from '../Component/CTABannerAspNet/page';
// import CustomSolutionsAspNet from '../Component/CustomSolutionsAspNet/page';
// import WhyChooseMySql from '../Component/WhyChooseMySql/page';
// import BusinessSolutionBenefitsAspNet from '../Component/BusinessSolutionBenefitsAspNet/page';
// import Banner from '../Component/Banner/page';
// import Footerpage from '../Component/Footerpage/page';

// const MySQLDevelopment = () => {
//      const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
//         const [mobileNumber, setMobileNumber] = useState('');
//         const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//         // Country code to flag mapping
//         const countryFlags = {
//             '+1': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
//             '+44': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg',
//             '+91': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg',
//             '+61': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
//             '+81': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Japan.svg',
//         };

//         const handleCountryCodeChange = (code) => {
//             setSelectedCountryCode(code);
//             setIsDropdownOpen(false);
//         };
//     return (
//         <div>
// <Navbar/>
//             <section>
//                 <div className="bg-indigo-900 min-h-[35vh] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
//                     {/* Background SVGs */}
//                     <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//                         <svg
//                             className="absolute top-1/4 left-[6%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-400 animate-pulse"
//                             viewBox="0 0 20 20"
//                         >
//                             <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
//                         </svg>
//                         <svg
//                             className="absolute bottom-[12.5%] right-[3%] transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-400 animate-pulse"
//                             viewBox="0 0 20 20"
//                         >
//                             <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
//                         </svg>
//                     </div>

//                     <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">

//                         {/* Left Text Section with motion */}
//                         <motion.div
//                             className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
//                             initial={{ x: -100, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                         >
//                             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//                                 MySQL Development Service in the Macco tech
//                             </h1>
//                             <p className="text-indigo-200 mb-4">
//                                 At <strong>Macco Tech</strong>, we offer powerful, scalable, and high-performing MySQL development services tailored to meet your application needs. Our expert developers design well-structured databases and optimize complex queries to ensure seamless performance, even under heavy traffic.
//                             </p>

//                             <p className="text-indigo-200 mb-6 text-sm md:text-base">
//                                 Whether you need to build a brand-new application, migrate your legacy systems, or improve database efficiency, we provide end-to-end MySQL solutions. With expertise in schema design, indexing, replication, and data security, we help you unlock the full potential of relational databases in your digital ecosystem.
//                             </p>


//                             <Link href="/contact">
//                                 <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
//                                     LET&apos;S DISCUSS
//                                 </button>
//                             </Link>
//                         </motion.div>

//                         {/* Right Form Section with motion */}
//                         <motion.div
//                             className="bg-white rounded text-black p-6 md:p-8 lg:p-10 w-full max-w-md shadow-[0_4px_7px_white]"
//                             initial={{ y: 100, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                         >
//                             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get a Free Quote</h2>
//                             <form className="space-y-5 text-sm">

//                                 {/* Full Name */}
//                                 <input
//                                     type="text"
//                                     placeholder="Full Name *"
//                                     required
//                                     className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
//                                 />

//                                 {/* Email */}
//                                 <input
//                                     type="email"
//                                     placeholder="Email *"
//                                     required
//                                     className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
//                                 />

//                                 {/* Country Code & Mobile Number */}
//                                 <div className="flex gap-3 items-center">
//                                     {/* Country Code Dropdown */}
//                                     <div className="relative w-1/3">
//                                         <div
//                                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                             className="bg-white border border-gray-300 px-3 py-2.5 rounded-md cursor-pointer flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                                         >
//                                             <div className="flex items-center gap-2">
//                                                 {/* <img
//                                                         src={countryFlags[selectedCountryCode]}
//                                                         alt="Flag"
//                                                         className="w-5 h-5"
//                                                     /> */}
//                                                 <Image
//                                                     src={countryFlags[selectedCountryCode]}
//                                                     alt="Flag"
//                                                     width={20}
//                                                     height={20}
//                                                     className="w-5 h-5"
//                                                 />

//                                                 <span className="text-sm">{selectedCountryCode}</span>
//                                             </div>
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
//                                                 viewBox="0 0 20 20"
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth="2"
//                                                     d="M5 7l5 5 5-5"
//                                                 />
//                                             </svg>
//                                         </div>

//                                         {/* Dropdown */}
//                                         {isDropdownOpen && (
//                                             <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                                                 {Object.entries(countryFlags).map(([code, flagUrl]) => (
//                                                     <li
//                                                         key={code}
//                                                         onClick={() => handleCountryCodeChange(code)}
//                                                         className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                                                     >

//                                                         {/* <img src={flagUrl} alt={`${code} flag`} className="w-5 h-5" /> */}
//                                                         <Image src={flagUrl} alt={`${code} flag`} width={20} height={20} className="w-5 h-5" />

//                                                         {code}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </div>

//                                     {/* Mobile Number */}
//                                     <input
//                                         type="tel"
//                                         pattern="[0-9]{10}"
//                                         placeholder="Mobile Number *"
//                                         required
//                                         value={mobileNumber}
//                                         onChange={(e) => setMobileNumber(e.target.value)}
//                                         className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none shadow-sm focus:ring-2 focus:ring-purple-500"
//                                     />
//                                 </div>

//                                 {/* Message */}
//                                 <textarea
//                                     placeholder="Your message *"
//                                     rows="4"
//                                     required
//                                     className="w-full border border-gray-300 px-4 py-2.5 rounded-md bg-white placeholder-gray-500 outline-none resize-none shadow-sm focus:ring-2 focus:ring-purple-500"
//                                 ></textarea>

//                                 {/* Submit Button */}
//                                 <button
//                                     type="submit"
//                                     className="bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full transition-colors"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         </motion.div>

//                     </div>
//                 </div>
//             </section>

// components/OptimizedDatabaseSection.jsx
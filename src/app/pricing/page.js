'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar/page';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react'; // Import icons
import Footerpage from '../Component/Footerpage/page';
import Image from 'next/image'; // Import Image component for optimization
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const PricingSection = () => {
    const [socialLinks, setSocialLinks] = useState({});
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const res = await fetch(`${API_URL}/api/social-links`);
                const result = await res.json();

                // Convert array to object
                const linksObj = result.data.reduce((acc, curr) => {
                    acc[curr.platform] = curr.url;
                    return acc;
                }, {});

                setSocialLinks(linksObj);
            } catch (err) {
                console.error("Error fetching social links", err);
            }
        };

        fetchSocialLinks();
    }, [API_URL]);

    return (
        <>
            <Navbar />

      {/* <section>
        <div className="bg-gradient-to-br from-green-100 to-teal-100 py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{top: '85px'}}>
         
          <motion.div
            className="container mx-auto text-center relative z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl lg:text-4xl mb-6">
              Custom Software Development Plans
            </h1>
            <p className="mt-4 text-lg text-gray-700 sm:leading-relaxed lg:text-1xl">
              Scalable, secure, and tailor-made solutions for startups and enterprises. Get exactly what your business needs.
            </p>
          </motion.div>

          
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg
              className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-green-500 animate-ping"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="8" />
            </svg>
            <svg
              className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-teal-500 animate-spin-slow"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
          </div>
        </div>
      </section> */}
      <section className="relative pt-20">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full min-h-[60vh] flex items-center justify-center py-16 md:py-24 lg:py-32"
          style={{
            backgroundImage: "url('/pricing1.jpg')", // Image name yeh hi rakha hai aapke original code se
          }}
        >
          {/* Black opacity overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content with Framer Motion */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6"
            >
              Custom Software Development Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Scalable, secure, and tailor-made solutions for startups and enterprises. Get exactly what your business needs.
            </motion.p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white py-24 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Text content - Slide in from left */}
              <motion.div
                className="md:text-left text-center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* <h2 className="text-xl font-semibold text-indigo-600 uppercase tracking-wider">
                  OUR PRICING
                </h2>
                <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Looking for our Services Standard Pricing?
                </h3>
                <p className="mt-3 text-lg text-gray-500 sm:max-w-xl">
                  We offer transparent, competitive pricing tailored to fit businesses of all sizes.
                  Get the best value with clear packages designed to suit your unique needs and budget.
                </p> */}
                <h2 className="text-xl font-semibold text-indigo-600 uppercase tracking-wider">
                  Our Pricing
                </h2>

                <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Tailored Pricing Plans for Every Business
                </h3>

                <p className="mt-3 text-lg text-gray-500 sm:max-w-xl">
                  Transparent, competitive, and designed for your growth — our pricing options are built to meet your unique needs. Whether you&asop;re a startup or an enterprise, we ensure the best value with flexible plans that align perfectly with your business goals.
                </p>

                <div className="mt-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Link href="/contact">
                      <button
                        type="button"
                        className="inline-flex items-center cursor-pointer justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow"
                      >
                        Talk to our Experts
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Image with slight zoom-in or static */}
              <motion.div
                className="mt-8 md:mt-0"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                <Image
                  className="w-full rounded-lg shadow-lg"
                  src="/hr-girl2.jpg"
                  alt="Pricing Illustration"
                  width={1200}
                  height={800}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FEF5F5] py-24">
        <div className="text-center container mx-auto  px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
            Flexible & Transparent Pricing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the plan that fits your business needs and budget — maximum value, no hidden costs.
          </p>
          <button className="mt-6 px-6 py-2.5 border border-pink-500 text-pink-600 rounded-full hover:bg-pink-100 transition duration-300 text-sm font-medium">
            Request A Quote →
          </button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 px-6 container mx-auto ">
          {/* Card Component */}
          {[
            {
              title: "Basic",
              price: "$400*",
              oldPrice: "$600",
              features: [
                "1 Domain, 10 Pages (including Home)",
                "SEO-Optimized HTML5",
                "Mobile-Responsive Design",
                "2 Design Concepts, 2 Revisions"
              ],
              color: "border-pink-400",
              tagColor: "text-pink-600"
            },
            {
              title: "Enhance",
              price: "$800*",
              oldPrice: "$1000",
              features: [
                "1 Domain, 15 Pages (including Home)",
                "SEO-Optimized HTML5",
                "Mobile-Responsive Design",
                "3 Design Concepts, 5 Revisions",
                "FREE: Search Engine Submission"
              ],
              color: "border-indigo-400",
              tagColor: "text-indigo-600"
            },
            {
              title: "Premium",
              price: "$1200*",
              oldPrice: "$1400",
              features: [
                "1 Domain, 50 Pages (including Home)",
                "SEO-Optimized HTML5",
                "Mobile-Responsive Design",
                "3 Design Concepts, Unlimited Revisions",
                "FREE: 1-Year Hosting",
                "FREE: Search Engine Submission"
              ],
              color: "border-emerald-400",
              tagColor: "text-emerald-600"
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${plan.color} shadow-md p-6 bg-white hover:shadow-xl transition duration-300 flex flex-col`}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{plan.title}</h3>
              <ul className="text-sm text-slate-600 space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className={feature.includes("FREE") ? `${plan.tagColor} font-medium` : ""}>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-indigo-700">{plan.price}</div>
                <div className="line-through text-sm text-gray-400">{plan.oldPrice}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-600 mt-10">
          Our pricing is highly competitive. Learn more about our&nbsp;
          <span className="text-pink-600 font-medium underline cursor-pointer hover:text-pink-700 transition duration-200">
            Website Design Services
          </span>
        </p>
      </section>

      <section>
        <div className="bg-white py-24 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight sm:text-3xl lg:text-4xl">
                Have a project in mind?<span className="text-orange-600">Let&#39;s get to chat.</span>

              </h2>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <a
                  href={socialLinks.whatsapp }
                  className="bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full px-5 py-3 text-sm inline-flex items-center gap-3"
                >
                  <FaWhatsapp size={20} />
                  Contact us today
                </a>
                
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              {/* <Image
                className="w-full rounded-lg shadow-lg"
                src="/pricing.avif"
                alt="Customer Support Illustration"
                width={600}
                height={400}
              /> */}
              <Image
                className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                src="/pricing.png"
                alt="Customer Support Illustration"
                width={500}
                height={400}
              />

            </div>
          </div>
        </div>
      </section>

      <Footerpage />
    </>
  );
};

export default PricingSection;

'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../Component/Navbar/page';
import DevelopmentProcessSection from '../Component/DevelopmentProcessSection/page';
import ProjectChallenges from '../Component/ProjectChallenges/page';
import { motion } from "framer-motion";
import ResultsSection from '../Component/ResultsSection/page';
import Footerpage from '../Component/Footerpage/page';
import OurSuccessfulProjects from '../Component/OurSuccessfulProjects/page';

function CaseStudiesSection() {
  return (
    <>
      <Navbar />
      <section className="relative pt-20">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full min-h-[60vh] flex items-center justify-center py-16 md:py-24 lg:py-32"
          style={{
            backgroundImage: "url('/caseStudy6.webp')",
          }}
        >
          {/* Black opacity overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* Content with Framer Motion */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6"
            >
              Case Studies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how our innovations and smart engineering have empowered businesses to thrive and evolve in a competitive world.
            </motion.p>
          </div>
        </div>
      </section>

      <DevelopmentProcessSection />
      <OurSuccessfulProjects />
      <ProjectChallenges />

      <section>
        <div className="bg-[#FEEFEF] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left rounded-xl p-8"
            >
              <h2 className="text-1xl font-bold text-gray-900 tracking-tight sm:text-2xl lg:text-2xl mb-4">
                <span className="text-indigo-600">Unlock</span> First Page Visibility for Explosive Growth
              </h2>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Imagine your brand dominating the top search results. Achieving first-page visibility isn&apos;t just about
                ranking; it&apos;s about capturing attention, driving qualified traffic, and converting prospects into loyal
                customers. Our strategic SEO approach ensures your message reaches the right audience at the precise moment
                they&apos;re searching for what you offer.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                {[
                  'Increased Organic Traffic',
                  'Enhanced Brand Authority',
                  'Higher Conversion Rates',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-base">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Image
                src="/casestudy.jpg"
                alt="Abstract digital marketing and SEO concept"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ResultsSection />
      <Footerpage />
    </>
  );
}

export default CaseStudiesSection;

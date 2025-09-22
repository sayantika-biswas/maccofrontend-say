'use client';
import React from 'react';
import {
  FaCheckCircle,
  FaUserTie,
  FaUsers,
  FaExpandArrowsAlt,
  FaMoneyCheckAlt,
  FaHeadset,
} from 'react-icons/fa';
import Image from 'next/image';


const highlights = [
  {
    icon: <FaCheckCircle className="text-purple-600 text-2xl" />,
    title: "700+ Applications Tested",
    description: "Proven expertise through comprehensive testing across various platforms and industries.",
  },
  {
    icon: <FaUserTie className="text-purple-600 text-2xl" />,
    title: "Experienced QA Engineers",
    description: "Our QA engineers bring years of industry experience, ensuring your software is tested by the best.",
  },
  {
    icon: <FaUsers className="text-purple-600 text-2xl" />,
    title: "Scalable QA Talent Pool",
    description: "Access a wide range of skilled QA professionals to match your project’s specific demands.",
  },
  {
    icon: <FaExpandArrowsAlt className="text-purple-600 text-2xl" />,
    title: "Flexible Team Resizing",
    description: "Easily scale your QA team up or down based on project requirements with zero hassle.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-purple-600 text-2xl" />,
    title: "Budget-Friendly QA Solutions",
    description: "Cost-effective services tailored to help you maintain control over your quality assurance budget.",
  },
  {
    icon: <FaHeadset className="text-purple-600 text-2xl" />,
    title: "Dedicated 24/7 Support",
    description: "Round-the-clock assistance to ensure your QA needs are met without delays or downtime.",
  },
];

const WhyChooseQualityAssuranceUs = () => {
  return (
    <section className="bg-black py-7">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/SoftwareTesting5.jpeg"
            alt="QA Illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            priority
          />

        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose Macco Tech for your QA needs
          </h2>
          {/* <p className="text-gray-300 mb-8 text-base leading-relaxed">
            We understand the critical role that quality assurance plays in the success of SaaS and mobile applications. Here's why partnering with us is the smart choice for elevating your product to new heights.
          </p> */}
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            At Macco Tech, we understand that quality assurance is key to SaaS and mobile app success. Partner with us to boost your product’s performance, reliability, and user experience with proven testing expertise.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-600 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-200 p-2 rounded-full">{icon}</div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQualityAssuranceUs;

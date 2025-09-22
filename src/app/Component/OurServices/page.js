"use client";
import React from "react";
import Footerpage from "../Footerpage/page";
import Image from "next/image"; // Importing the Image component

const services = [
  {
    title: "Digital Marketing Services",
    description:
      "Comprehensive strategies to enhance your online presence and drive traffic.",
    link: "DigitalMarketingService",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/development.png"
          alt="Software Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Creating intuitive and engaging mobile apps for iOS and Android.",
    link: "ReactNativeAppDevelopment",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/java2.jpg"
          alt="Mobile App Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
  {
    title: "JS FRAMEWORKS",
    description:
      "Building dynamic and interactive web applications using modern JavaScript frameworks.",
    link: "ReactJsDevelopment",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/javascrpt.jpg"
          alt="JS Frameworks Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Developing responsive and high-performing websites and web applications.",
    link: "PhpDevelopment",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/webdev.png"
          alt="Web Development Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
  {
    title: "Ecommerce solution",
    description:
      "Building and optimizing online stores for seamless shopping experiences.",
    link: "ecommerce-application-development",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/bettersoln.png"
          alt="Ecommerce Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
  {
    title: "Betting Solution",
    description:
      "Developing innovative and engaging betting and gaming platforms.",
    link: "Explore Betting Solutions",
    icon: (
      <span style={{ fontSize: "1em" }}>
        <Image
          src="/web2.webp"
          alt="Betting Icon"
          width={20}
          height={20}
          quality={75}
          style={{ verticalAlign: "middle", marginRight: "0.2em" }}
        />
      </span>
    ),
  },
];

export default function OurServices() {
  return (
    <section className="px-6 py-12 bg-white text-gray-800 pt-15">
      
      <div className="text-center mb-12">
       
        <h2 className="text-4xl font-semibold">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          
          Explore our core service areas designed to drive innovation and growth
          for your business.
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl text-blue-600">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <a
              href={service.link}
              className="text-red-500 text-sm font-medium hover:underline"
            >
              {service.title} ›
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

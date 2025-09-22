"use client";
import React from "react";

const IndustryCard = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {linkUrl && linkText && (
        <a href={linkUrl} className="text-indigo-600 hover:underline text-sm">
          {linkText}
        </a>
      )}
    </div>
  );
};

const DevelopmentServices = () => {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Solutions for patient management, telemedicine, diagnostics, and more. Ensuring compliance and security.",
      linkText: "Learn more about Healthcare solutions ›",
      linkUrl: "healthcare", // Replace with actual URL
    },
    {
      title: "Education",
      description:
        "Innovative EdTech platforms for learning management, student portals, and educational tools.",
      linkText: "Explore Education technology ›",
      linkUrl: "education", // Replace with actual URL
    }
  ];

  return (
    <div className="bg-[#FEEFEF] py-12">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Development services across multiple{" "}
          <span className="text-indigo-600">industries</span>
        </h2>
        <p className="text-gray-700 text-center mb-8">
          We&apos;ve built expert knowledge in a range of industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentServices;

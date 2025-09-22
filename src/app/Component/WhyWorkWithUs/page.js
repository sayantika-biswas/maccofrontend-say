"use client";
import React from "react";

const WhyWorkWithUs = () => {
  return (
    <section className=" py-16 px-4 md:px-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">It&apos;s worth</h2>

        <h2 className="text-3xl font-bold text-black mb-10">working with us</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md border bg-white
                       transition-all duration-300
                       hover:shadow-lg hover:border-blue-200
                       flex flex-col justify-between" // Added flex for vertical alignment
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    title: "A Unified Team",
    content:
      "At Macco Tech, we pride ourselves on our cohesive and ambitious team of over 60 talented professionals who collaborate seamlessly to bring innovative digital solutions to life.",
  },
  {
    title: "Driven by Ambition",
    content:
      "Our work environment fosters growth and learning, encouraging individuals who are eager to expand their expertise. If you're passionate about what you do and seek constant development, Macco Tech is the perfect place to cultivate your career.",
  },
  {
    title: "Collaborative Partnerships",
    content:
      "We partner with both startups and established enterprises, co-creating impactful applications and software solutions. This dynamic environment allows our team to continuously challenge themselves and refine their skills across diverse projects.",
  },
  {
    title: "Making a Real Impact",
    content:
      "At Macco Tech, we are involved from the ground up in every project, influencing product development, architecture design, and technology selection. You’ll have the opportunity to contribute your innovative ideas and make a tangible impact on each product we build.",
  },
];

export default WhyWorkWithUs;

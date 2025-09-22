'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'; // Import Image from next/image

const services = [
  {
    title: "React Native App Ideation & Consulting",
    description:
      "We work closely with you to turn your app idea into a clear strategy using React Native. Our experts help define the best approach and roadmap to meet your goals effectively.",
    iconType: "image",
    icon: "https://cdn-icons-png.flaticon.com/512/627/627375.png",
  },
  {
    title: "App Development with React Native",
    description:
      "From planning to deployment, we deliver complete React Native development solutions. Our focus is on building robust, high-performing apps suited for both startups and enterprises.",
    iconType: "emoji",
    icon: "📱",
    highlight: true,
  },
  {
    title: "React Native Migration",
    description:
      "Want to shift to React Native? We help transition your existing app seamlessly, improving performance and making it compatible across multiple platforms with minimal downtime.",
    iconType: "image",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-CdssUPUcZGchqbjO9yPI1PFGRAocCE2Og&s",
  },
  {
    title: "React Native Support & Maintenance",
    description:
      "We provide continuous support to keep your app running smoothly. Whether it’s routine updates, security patches, or adding new features — we handle it all, so your app stays reliable.",
    iconType: "emoji",
    icon: "🤖",
  },
  {
    title: "UI/UX Design",
    description:
      "Our designers create clean, attractive, and easy-to-use interfaces tailored to your audience. We ensure your app offers a smooth and enjoyable experience across all devices.",
    iconType: "image",
    icon: "https://static.vecteezy.com/system/resources/previews/026/428/267/non_2x/ux-ui-design-concept-with-character-and-text-place-man-creates-a-custom-design-for-a-mobile-application-ui-ux-design-3d-illustration-png.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ReactServiceCard = () => {
  return (
    <section className="py-16 bg-[#FEEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Scalable React Native Solutions for Startups & Enterprises
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Macco Tech helps businesses build modern, cross-platform mobile apps using React Native – fast, flexible, and efficient.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-6 border bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${service.highlight ? "border-blue-500" : "border-gray-300"}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="mb-6 text-center">
                {service.iconType === "image" ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mx-auto grayscale hover:grayscale-0 transition duration-300"
                    width={64} // Specify width
                    height={64} // Specify height
                  />
                ) : (
                  <span className="text-5xl">{service.icon}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactServiceCard;

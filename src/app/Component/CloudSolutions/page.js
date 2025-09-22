'use client';
import { motion } from 'framer-motion';
import { UploadCloud, ShieldCheck, Cpu } from "lucide-react";
import Image from 'next/image';

const solutions = [
  {
    icon: <UploadCloud className="w-10 h-10 text-blue-400" />,
    title: 'Cloud Migration & Modernization',
    description:
      'Seamlessly transition your existing infrastructure to the cloud with minimal downtime. We help modernize legacy systems for improved agility, scalability, and performance.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    title: 'Cloud Security & Compliance',
    description:
      'Protect your cloud environment with enterprise-grade security solutions. We ensure data encryption, access control, and full compliance with global standards like GDPR, HIPAA, and ISO.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-indigo-400" />,
    title: 'DevOps & Cloud Automation',
    description:
      'Accelerate development and deployment through automated CI/CD pipelines, infrastructure as code (IaC), and smart cloud operations. Boost efficiency with continuous integration and delivery.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />, // Reused icon for simplicity
    title: '24/7 Cloud Monitoring & Support',
    description:
      'Ensure your cloud services run smoothly around the clock. We provide continuous monitoring, proactive issue resolution, and expert support to keep your operations uninterrupted.',
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function CloudSolutions() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto  py-10 px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/cloud3.webp" // Replace with your actual image path
            alt="Cloud Services"
            width={480}
            height={400}
            className="rounded-3xl object-cover w-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center lg:text-left">
            Our Cloud Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="rounded-3xl border border-gray-800 p-6 shadow-md bg-gray-900 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

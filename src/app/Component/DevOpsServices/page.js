'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Assuming Next.js


const services = [
  {
    title: 'Configuration Management',
    description:
      'Manage infrastructure and software with tools like Ansible and Terraform for consistency and speed.',
  },
  {
    title: 'Continuous Integration',
    description:
      'Automate code integration and testing with Jenkins or GitHub Actions for faster releases.',
  },
  {
    title: 'Continuous Delivery',
    description:
      'Streamline reliable code updates to production using tools like Jenkins and Kubernetes.',
  },
  {
    title: 'Continuous Deployment',
    description:
      'Push code automatically to production, ensuring quick and consistent deployments.',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description:
      'Automate infrastructure setup with Terraform or CloudFormation using code-based workflows.',
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Track system health and logs using Prometheus, Grafana, and ELK for proactive insights.',
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const DevOpsServices = () => {
  return (
    <section className="py-13 px-4 md:px-10 bg-black text-white mb-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <Image
            src="/devops-service3.png"
            alt="DevOps Illustration"
            width={600}   // adjust as per your design
            height={400}  // adjust as per your design
            className="rounded-2xl object-cover"
          />
        </motion.div>


        {/* Right Services */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-4xl font-bold mb-10 text-center lg:text-left"
          >
            Our DevOps Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur p-5 rounded-xl border border-white/10 shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsServices;


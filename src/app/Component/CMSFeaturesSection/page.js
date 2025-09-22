'use client';
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom CMS Solutions",
    description:
      "Tailored CMS built from the ground up to match your business goals with robust scalability and control.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7S13.5 8 12 8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.4 15a7.92 7.92 0 01-14.8 0M7.2 4h9.6M12 3v2"
        />
      </svg>
    ),
  },
  {
    title: "User-Friendly Interface",
    description:
      "Sleek, intuitive dashboards that allow non-tech teams to manage content effortlessly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 21h13a2 2 0 002-2v-1a6 6 0 00-12 0v1a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description:
      "Optimized for every screen size to ensure a seamless experience across devices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Built-in SEO features for better visibility and higher search engine rankings.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Integration Capabilities",
    description:
      "Easily connects with your favorite tools like CRMs, analytics, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10m5-5H7" />
      </svg>
    ),
  },
  {
    title: "24/7 Support & Maintenance",
    description:
      "We keep your CMS running smoothly so you can focus on what matters most.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 8a6 6 0 00-12 0v4a6 6 0 0012 0V8z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h12" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CMSFeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-4 md:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          Key Features of Our CMS Development Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Discover how our custom CMS solutions empower your business with intuitive content management, robust scalability, and optimized performance — helping you stay ahead in the digital era.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 mb-4 rounded-full bg-indigo-600 bg-opacity-20 flex items-center justify-center animate-pulse">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

  );
}

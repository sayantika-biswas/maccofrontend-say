'use client';
import { motion } from 'framer-motion';

// --- Data ---
const benefitsData = [
  {
    id: 1,
    number: "01",
    title: "Object-Oriented Structure",
    description:
      "With OOP as its foundation, .NET allows developers to organize code into reusable objects—making development efficient, manageable, and modular.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: 2,
    number: "02",
    title: "High Scalability",
    description:
      ".NET effortlessly handles growing workloads and traffic. Its architecture supports fast responses and low resource usage—ideal for expanding businesses.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    id: 3,
    number: "03",
    title: "Cross-Platform Support",
    description:
      "Build once, run anywhere. With .NET, developers can deploy apps on Windows, macOS, and Linux—across web, mobile, and desktop environments.",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    id: 4,
    number: "04",
    title: "Seamless Interoperability",
    description:
      "Thanks to the CLR and FCL, .NET integrates smoothly with unmanaged code and multiple programming languages, ensuring flexibility and performance.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: 5,
    number: "05",
    title: "Flexible Deployment",
    description:
      ".NET Core supports lightweight, modular deployment—just copy the folder and run. Its side-by-side versioning ensures reliable rollouts.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    id: 6,
    number: "06",
    title: "Advanced Caching",
    description:
      "Built-in caching improves performance and scalability. Customize memory usage for web apps, dynamic pages, or high-load applications.",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];

// --- Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

// --- Main Component ---
export default function AspNetBenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <section className="container mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Benefits of <span className="text-blue-600">.NET Web Development</span> Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Developed by Microsoft, .NET is a robust development framework that supports multiple programming languages like C#, F#, and Visual Basic. It empowers developers to build scalable, cross-platform web and desktop applications with ease.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start space-y-4 border border-gray-100 transition-transform"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 12px 20px rgba(0, 0, 0, 0.07), 0 4px 6px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center text-3xl font-bold ${benefit.textColor}`}
                variants={numberVariants}
              >
                {benefit.number}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

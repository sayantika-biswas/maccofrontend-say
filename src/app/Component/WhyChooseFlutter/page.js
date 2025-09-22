'use client';
import { motion } from "framer-motion";
import {
  FaUsers,
  FaClipboardList,
  FaClock,
  FaTools,
  FaSmileBeam,
  FaPencilRuler,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUsers className="text-4xl text-yellow-400" />,
    title: "Dedicated Team of Experts",
    description:
      "Our dedicated team of Flutter experts ensures your project is executed with precision, delivering outstanding results that align with your business goals.",
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-400" />,
    title: "Transparent Service Delivery",
    description:
      "Throughout the Flutter mobile app development lifecycle, we provide timely updates, keeping you informed about the progress, milestones, and any challenges or modifications.",
  },
  {
    icon: <FaClock className="text-4xl text-yellow-400" />,
    title: "Quick Turnaround Time",
    description:
      "Our efficient development processes, combined with our developers’ expertise, enable us to deliver high-quality applications within agreed-upon timelines.",
  },
  {
    icon: <FaTools className="text-4xl text-yellow-400" />,
    title: "Continuous Support and Maintenance",
    description:
      "We offer continuous support and maintenance services to ensure that your Flutter application operates smoothly, stays updated, and functions optimally.",
  },
  {
    icon: <FaSmileBeam className="text-4xl text-yellow-400" />,
    title: "Customer Satisfaction",
    description:
      "Our team listens attentively to your requirements, incorporates your feedback, and works collaboratively to ensure that the final product aligns perfectly with your vision.",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-yellow-400" />,
    title: "Customized Design Expertise",
    description:
      "Our team of skilled designers brings expertise in customized design, creating tailored, immersive, and intuitive user interfaces for your Flutter mobile applications.",
  },
];

export default function WhyChooseFlutter() {
  return (
    <section className="bg-gray-900 py-16 px-4 md:px-12 lg:px-20 mb-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why Choose Us For Your Flutter Application Development Project?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 border border-gray-700"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// // 
// import { motion } from "framer-motion";
// import {
//   FaUsers,
//   FaClipboardList,
//   FaClock,
//   FaTools,
//   FaSmileBeam,
//   FaPencilRuler,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaUsers className="text-4xl text-yellow-500" />,
//     title: "Dedicated Team of Experts",
//     description:
//       "Our dedicated team of Flutter experts ensures your project is executed with precision, delivering outstanding results that align with your business goals.",
//   },
//   {
//     icon: <FaClipboardList className="text-4xl text-yellow-500" />,
//     title: "Transparent Service Delivery",
//     description:
//       "Throughout the Flutter mobile app development lifecycle, we provide timely updates, keeping you informed about the progress, milestones, and any challenges or modifications.",
//   },
//   {
//     icon: <FaClock className="text-4xl text-yellow-500" />,
//     title: "Quick Turnaround Time",
//     description:
//       "Our efficient development processes, combined with our developers’ expertise, enable us to deliver high-quality applications within agreed-upon timelines.",
//   },
//   {
//     icon: <FaTools className="text-4xl text-yellow-500" />,
//     title: "Continuous Support and Maintenance",
//     description:
//       "We offer continuous support and maintenance services to ensure that your Flutter application operates smoothly, stays updated, and functions optimally.",
//   },
//   {
//     icon: <FaSmileBeam className="text-4xl text-yellow-500" />,
//     title: "Customer Satisfaction",
//     description:
//       "Our team listens attentively to your requirements, incorporates your feedback, and works collaboratively to ensure that the final product aligns perfectly with your vision.",
//   },
//   {
//     icon: <FaPencilRuler className="text-4xl text-yellow-500" />,
//     title: "Customized Design Expertise",
//     description:
//       "Our team of skilled designers brings expertise in customized design, creating tailored, immersive, and intuitive user interfaces for your Flutter mobile applications.",
//   },
// ];

// export default function WhyChooseFlutter() {
//   return (
//     <section className="bg-white py-12 px-4 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//           Why Choose Us For Your Flutter Application Development Project?
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
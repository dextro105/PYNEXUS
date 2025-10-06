import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description: "Creating seamless mobile experiences on iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that engage and delight users.",
    icon: "🎨",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud architectures and integrations.",
    icon: "☁️",
  },
  {
    title: "LinkedIn Optimisation",
    description: "Transforming data into actionable business insights.",
    icon: "📊",
  },
];

// Unique Services Component with horizontal scroll and hover scale effect
const ServicesUnique = () => {
  return (
    <div className="overflow-x-auto py-8 px-6">
      <div className="flex space-x-8 max-w-full">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[280px] bg-gradient-to-br from-indigo-900 via-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-indigo-700 cursor-pointer flex flex-col items-center text-center text-gray-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-indigo-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-gray-300 pt-0">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-700 py-20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4 tracking-wide"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg max-w-3xl mx-auto text-indigo-300 font-light"
          >
            Comprehensive solutions to help you succeed in your tech journey
          </motion.p>
        </div>
      </motion.div>

      {/* Unique Services Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <ServicesUnique />
      </div>

      {/* How I Work Section */}
      <section className="py-20 bg-gradient-to-t from-gray-800 via-gray-900 to-black mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              How We{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text">
                Work
              </span>
            </h2>
            <p className="text-indigo-400 text-lg max-w-3xl mx-auto font-medium">
              Our professional approach ensures your project is completed with excellence and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We begin with a thorough discussion of your needs, goals, and vision for the project.',
              },
              {
                step: '02',
                title: 'Planning & Design',
                description:
                  'We create a detailed plan and design mockups for your review and approval.',
              },
              {
                step: '03',
                title: 'Development & Delivery',
                description:
                  'Quality development with regular updates, followed by thorough testing and deployment.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gradient-to-br from-indigo-900 via-gray-900 to-black rounded-3xl p-10 shadow-2xl border border-indigo-700 hover:scale-[1.03] transition-transform cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg text-white font-bold text-xl select-none">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-indigo-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

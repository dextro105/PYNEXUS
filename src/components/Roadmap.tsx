import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Roadmap to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Success</span>
          </h2>
          <p className="text-xl text-gray-600">Your journey to becoming a Python expert</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-2xl p-12"
        >
          <Clock className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
          <p className="text-gray-600 max-w-md">
            We’re currently crafting an awesome learning path just for you. Our roadmap to Python mastery will be available soon — stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;

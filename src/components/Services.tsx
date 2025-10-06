import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Canvas } from '@react-three/fiber';
import {
  Computer,
  Code2,
  Wrench,
  FileCheck,
  Github,
  FileText,
  Linkedin,
  BrainCircuit
} from 'lucide-react';

const services = [
  { icon: Computer, title: "Web Development", description: "Responsive & dynamic websites" },
  { icon: Code2, title: "App Development", description: "Cross-platform mobile & desktop apps" },
  { icon: Wrench, title: "Project Support", description: "Guidance for urgent project needs" },
  { icon: FileCheck, title: "Test Support", description: "Prep and assistance for tech assessments" },
  { icon: Github, title: "GitHub Projects", description: "Portfolio builds & code reviews" },
  { icon: FileText, title: "Resume Guidance", description: "Resume optimization for tech roles" },
  { icon: Linkedin, title: "LinkedIn Optimization", description: "Profile enhancement for visibility" },
  { icon: BrainCircuit, title: "Technical Mentorship", description: "Personalized CS & IT mentorship" },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative pt-0 pb-24 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Stars */}
      <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.15} />
        {[...Array(50)].map((_, i) => (
          <motion.mesh
            key={i}
            initial={{
              position: [
                Math.random() * 50 - 25,
                Math.random() * 30 - 15,
                -10 - Math.random() * 20
              ]
            }}
            animate={{
              position: [
                Math.random() * 50 - 25,
                Math.random() * 30 - 15,
                -10 - Math.random() * 20
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 18 + Math.random() * 12,
              yoyo: true
            }}
          >
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshStandardMaterial color="#9CA3AF" transparent opacity={0.25} />
          </motion.mesh>
        ))}
      </Canvas>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Our Services
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-400 text-lg">
            Comprehensive support for your tech journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(139, 92, 246, 0.7)' }}
                className="group cursor-pointer rounded-xl bg-gray-800 border border-gray-700 p-6 flex flex-col h-full shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-5">
                  <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-gray-400 flex-grow">{svc.description}</p>
                <div className="mt-6 text-purple-400 font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More &rarr;
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

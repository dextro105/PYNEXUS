import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/MissionVision';

const AboutPage = () => {
  return (
    <div className="pt-20 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} />
          <Stars radius={100} depth={60} count={80000} factor={10} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] flex items-center justify-center text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="px-6 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text leading-tight">
            We Are Python Nexus
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Web crafters. Design thinkers. Code innovators. Empowering the next generation of digital transformation.
          </p>
        </motion.div>
      </motion.div>

      <AboutSection />
      <MissionVision />

      <section className="py-20 bg-gray-950 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Our Design Philosophy</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            At Python Nexus, we believe design is more than aesthetics—it's about crafting intuitive, inclusive, and immersive experiences that communicate function as beautifully as form.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our approach blends human-centered design with powerful backend architecture, ensuring every interface is usable, scalable, and visually striking.
          </p>
        </div>
      </section>

    

      <section className="py-20 bg-gray-900 text-white text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether you're a startup founder, job seeker, or curious coder—we're here to build something meaningful with you.
        </p>
        <a href="#contact" className="px-6 py-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
          Connect with Us 
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

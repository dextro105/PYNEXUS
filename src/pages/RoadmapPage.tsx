import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingTorusKnot = () => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 1;
    meshRef.current.rotation.y = clock.getElapsedTime() * 1.5;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial
        color="#7f5af0"
        emissive="#7f5af0"
        emissiveIntensity={0.7}
        metalness={0.6}
        roughness={0.1}
      />
    </mesh>
  );
};

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6"
      >
        Coming Soon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-gray-300 max-w-xl mb-16"
      >
        Exciting new features are on their way. Stay tuned and check back soon!
      </motion.p>

      <div className="w-64 h-64 mx-auto mb-12">
        <Canvas>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <RotatingTorusKnot />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="text-gray-500 text-sm"
      >
        © 2025 Your Company. All rights reserved.
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, OrbitControls, Text } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

// 3D Floating Text letters
const FloatingText = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(null);
  const message = '✦ PYTHON NEXUS ✦';
  return (
    <group ref={ref} position={[0, 1, 0]}> {/* lift above origin */}
      {message.split('').map((char, i) => (
        <Text
          key={i}
          position={[i * 0.6 - (message.length * 0.6) / 2, 0, 0]}
          fontSize={1}
          color={hovered === i ? '#ffffff' : '#00ffff'}
          outlineColor="#ffffff"
          outlineWidth={hovered === i ? 0.08 : 0.03}
          outlineBlur={hovered === i ? 0.01 : 0.005}
          font="https://fonts.gstatic.com/s/orbitron/v30/yMJRMIlzdpvBhQQL_SC3X9zSNbVd.woff"
          onPointerOver={() => setHovered(i)}
          onPointerOut={() => setHovered(null)}
          anchorX="center"
          anchorY="middle"
        >
          {char}
        </Text>
      ))}
    </group>
  );
};

// Rotating starfield
const RotatingStars = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });
  return <Stars ref={ref} radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={0.4} />;
};

// Cursor trail particles
const CursorTrail = () => {
  const pointsRef = useRef();
  const geometryRef = useRef();
  const [positions] = useState(() => new Float32Array(200).fill(0));

  useEffect(() => {
    if (!geometryRef.current) {
      geometryRef.current = new THREE.BufferGeometry();
      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [positions]);

  useFrame(({ mouse }) => {
    const geo = geometryRef.current;
    if (!geo) return;
    const pos = geo.attributes.position.array;
    for (let i = pos.length - 3; i >= 3; i--) pos[i] = pos[i - 3];
    pos[0] = mouse.x * 5;
    pos[1] = mouse.y * 5;
    pos[2] = 0;
    geo.attributes.position.needsUpdate = true;
  });

  return (
    geometryRef.current && (
      <points ref={pointsRef} geometry={geometryRef.current}>
        <pointsMaterial color="#00ffff" size={0.2} sizeAttenuation transparent opacity={0.9} depthWrite={false} />
      </points>
    )
  );
};

// Hero component
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const stats = [
    { icon: Star, label: '20+ Projects', description: 'Delivered with precision' },
    { icon: Award, label: 'Multiple Awards', description: 'Industry recognition' },
    { icon: Users, label: '100+ Clients', description: 'Global partnerships' }
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Canvas Background */}
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingStars />
          <FloatingText />
          <CursorTrail />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* DOM Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <motion.h1 className="text-6xl md:text-7xl font-extrabold uppercase tracking-wide" style={{ rotate: tilt }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          Python Nexus
        </motion.h1>
        <motion.p className="mt-4 text-xl md:text-2xl font-medium" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          A powerhouse team of 6 crafting web wonders.<br />20+ projects, global acclaim, real impact.
        </motion.p>
        <motion.div className="mt-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <Link to="/about">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full text-lg font-semibold uppercase shadow-lg hover:scale-105 transition-transform">
              Meet the Wizards <ArrowRight className="inline ml-2 w-5 h-5 animate-bounce" />
            </button>
          </Link>
        </motion.div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {stats.map(({ icon: Icon, label, description }) => (
            <motion.div key={label} className="w-60 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer" whileHover={{ scale: 1.1, rotateY: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Icon className="w-8 h-8 mb-2 text-purple-300" />
              <h3 className="text-xl font-bold mb-1">{label}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

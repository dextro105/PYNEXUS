import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function MagneticCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const el = ref.current!;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const dx = e.clientX - (left + width / 2);
      const dy = e.clientY - (top + height / 2);
      const offsetX = clamp(dx / 50, -2, 2);
      const offsetY = clamp(dy / 50, -2, 2);

      animate(mouseX, offsetX, { type: 'spring', stiffness: 80, damping: 20 });
      animate(mouseY, offsetY, { type: 'spring', stiffness: 80, damping: 20 });
    };

    const onLeave = () => {
      animate(mouseX, 0, { type: 'spring', stiffness: 80, damping: 20 });
      animate(mouseY, 0, { type: 'spring', stiffness: 80, damping: 20 });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <motion.div ref={ref} style={{ x: mouseX, y: mouseY }}>{children}</motion.div>;
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ecommerce' | 'ai'>('all');
  const [search, setSearch] = useState('');
  const categories = ['all', 'web', 'mobile', 'ecommerce', 'ai'] as const;

  const filtered = useMemo(() => {
    const base = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    return base.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }, [filter, search]);

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-6 pb-6 flex flex-col">
        {/* Reduced pt from 8 or more to 6 and pb to 6 for tighter spacing */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">Projects</span>
        </h2>

        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => { setFilter(c); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c ? 'bg-indigo-600 text-white' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-full outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <MagneticCard key={proj.title}>
              <Tilt
                className="h-full"
                glareEnable
                glareMaxOpacity={0.1}
                perspective={800}
                scale={1.02}
                transitionSpeed={400}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                      <p className="text-gray-200 mb-4 flex-grow">{proj.description}</p>
                    </div>
                    <div className="px-6 py-4 bg-black/40 border-t border-white/20 rounded-b-2xl flex gap-4">
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-300 hover:text-purple-200"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}

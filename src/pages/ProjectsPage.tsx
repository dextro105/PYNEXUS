import React from 'react';
import { motion } from 'framer-motion';

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  github?: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "Sunasa",
    description: "Indian Lhenga and Saree E-commerce platform with custom design options",
    image: "https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://sunasa.in/",
    category: "Clothing and Fashion"
  },
  {
    title: "No-issue-Packaging",
    description: "US Based E-Commerce of Custom Bakery and Coffee Packaging",
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=900&auto=format&fit=crop&q=60",
    url: "https://noissue.co/",
    category: "ecommerce"
  },
  {
    title: "Legora",
    description: "AI based Lawyer and Legal Assistant with document processing",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&auto=format&fit=crop&q=60",
    url: "https://legora.com/",
    category: "ai"
  },
  {
    title: "Fyaril-Ecommerce",
    description: "E-commerce platform for buying and selling products with secure checkout",
    image: "https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?w=900&auto=format&fit=crop&q=60",
    url: "https://www.fyaril.se/en/",
    category: "ecommerce"
  },
  {
    title: "Silver Cut",
    description: "Silver Cut is a Swedish Jewelry E-commerce platform for your Pets",
    image: "https://images.unsplash.com/photo-1604306354577-68136efdf03b?q=80&w=2940&auto=format&fit=crop",
    url: "https://silvercut.se/",
    category: "ecommerce"
  },
  {
    title: "The Simply elegant",
    description: "Best Wedding and Event Planning Service",
    image: "https://static.showit.co/1600/XKr8i_f4RBmsvMAq9-GbdQ/114320/chicago_wedding_planners_00018.jpg",
    url: "https://thesimplyelegantgroup.com/",
    category: "web"
  },
  {
    title: "Rug View",
    description: "Interior design visualization tool for customizing your own space",
    image: "https://images.unsplash.com/photo-1661099548731-fc8f74fc9dd9?q=80&w=2367&auto=format&fit=crop",
    url: "https://rugview.com/",
    category: "web"
  },
  {
    title: "HR ONE",
    description: "An application for HR management using React and Node.js with analytics",
    image: "https://plus.unsplash.com/premium_photo-1661488439548-a87936c95700?q=80&w=3132&auto=format&fit=crop",
    url: "https://hrone.cloud/",
    category: "web"
  },
  {
    title: "Sinch - E-Bikes",
    description: "New Zealand Based E-bike purchase site with product customization",
    image: "https://images.unsplash.com/photo-1622079133295-c9fb229f3814?w=900&auto=format&fit=crop&q=60",
    url: "https://sinchbikes.co.nz/",
    category: "ecommerce"
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-lg py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text mb-6">
            Our Projects
          </h1>
          <p className="text-indigo-300 text-lg font-light max-w-3xl mx-auto leading-relaxed">
            Browse through a curated selection of projects showcasing innovation, robust technology, and design excellence. Every project demonstrates our commitment to delivering high-quality results.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group block"
              style={{ minHeight: '320px' }}
            >
              {/* Black skewed overlay background */}
              <div
                className={`absolute inset-0 transform ${
                  index % 2 === 0 ? '-skew-y-2 -translate-y-3' : 'skew-y-2 translate-y-3'
                } bg-black opacity-90`}
                style={{ zIndex: 0 }}
              />

              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                loading="lazy"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8 justify-center text-white">
                <h3 className="text-2xl font-extrabold mb-3 tracking-wide">{project.title}</h3>
                <p className="text-indigo-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-indigo-900 bg-opacity-70 px-3 py-1 rounded-full text-xs font-semibold tracking-wide select-none">
                    {project.category}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block ml-auto bg-indigo-700 bg-opacity-80 px-3 py-1 rounded-full text-xs font-semibold tracking-wide select-none hover:bg-indigo-600 transition"
                      onClick={e => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-indigo-500 text-sm select-none">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default ProjectsPage;

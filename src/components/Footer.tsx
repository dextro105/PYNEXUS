import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Contact", href: "/contact" }
  ];

  const featuredProjects = [
    { name: "AI Chatbot Platform", href: "/projects/ai-chatbot" },
    { name: "E-commerce Dashboard", href: "/projects/ecommerce-dashboard" },
    { name: "Real-time Analytics", href: "/projects/real-time-analytics" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Python Nexus
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating Success Stories with code and innovations. Connecting the dots between technology and creativity. Connect me on my email!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-400 mr-3" />
                <div>
                  <p>Lane 36, Dwarka sector-3 Delhi, India - 01136</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-3" />
                <a href="mailto:harshcreates6@gmail.com" className="hover:text-indigo-400 transition-colors">
                  harshcodesweb@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-3" />
                <a href="tel:+1234567890" className="hover:text-indigo-400 transition-colors">
                  +91 626040948
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Featured Projects</h3>
            <ul className="space-y-3">
              {featuredProjects.map((proj) => (
                <li key={proj.name}>
                  <Link
                    to={proj.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Python Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

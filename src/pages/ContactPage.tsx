import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, Github } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "pythonnexus@gmail.com", link: "mailto:pythonnexus@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 887754999", link: "tel:+91887754999" },
    { icon: MapPin, label: "Location", value: "Lane 36, Dwarka sector-3 Delhi, India", link: null },
    { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9AM - 6PM IST", link: null }
  ];
  
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com" },
    { icon: Github, label: "GitHub", link: "https://github.com" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl max-w-2xl mx-auto text-indigo-300"
          >
            Let's discuss how we can help with your project or learning journey!
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-semibold mb-8 text-indigo-400">
              Get In <span className="text-pink-500">Touch</span>
            </h2>

            <p className="text-lg text-indigo-300 mb-12 leading-relaxed">
              We are always interested in new projects, teaching opportunities, or connecting with fellow developers. Feel free to reach out through the channels below or use the contact form.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="bg-indigo-700 p-3 rounded-full text-indigo-300 shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-indigo-100">{item.label}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-indigo-300 hover:text-pink-500 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-indigo-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-14">
              <h3 className="text-xl font-semibold mb-5 text-indigo-300">Connect on Social Media</h3>
              <div className="flex space-x-6">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-indigo-800 hover:bg-pink-600 p-3 shadow-lg text-indigo-300 hover:text-white transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={item.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-indigo-800 rounded-lg shadow-xl p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

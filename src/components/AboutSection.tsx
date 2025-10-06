import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const AboutSection = () => {
  const teamMembers = [
    { name: "Harsh Chandra", role: "Business Analyst and Strategist" },
    { name: "Apurva Dubey", role: "UI/UX Designer" },
    { name: "Yash Singh", role: "Backend Developer" },
    { name: "Aman Singh", role: "React Developer" },
    { name: "Kushal P", role: "Database Engineer" },
  ];

  const techStack = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"] },
    { category: "Frameworks", items: ["React", "Node.js", "Django", "Flask", "Express"] },
    { category: "Tools & Platforms", items: ["Git", "AWS", "Docker", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Specialties", items: ["UI/UX Design", "Responsive Design", "RESTful APIs", "Real-Time Apps"] }
  ];

  const testimonials = [
    {
      quote: "Python Nexus transformed our ideas into a fully functional application. Their team's expertise and dedication were evident throughout the project.",
    },
    {
      quote: "Working with Python Nexus was a game-changer. They provided invaluable guidance and support, helping us navigate complex technical challenges.",
    },
    {
      quote: "We saw significant improvements in performance and user experience. We were in the middle of the project and they helped us to get it back on track.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are <strong>Python Nexus</strong> — a collective of passionate developers committed to crafting meaningful software solutions. Our passion lies in merging creativity with code, solving real-world problems, and helping others grow through tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white shadow-md rounded-xl p-6 text-center transition hover:shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">Passionate about building scalable and impactful digital solutions.</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-indigo-600">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm font-semibold text-indigo-600 mb-2">{stack.category}</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {stack.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Driven by Passion</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether it’s launching startups, building tools, or sharing knowledge — we’re here to make a difference through code, design, and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

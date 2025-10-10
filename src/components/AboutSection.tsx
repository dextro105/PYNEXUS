import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Twitter, Rocket, Target } from 'lucide-react';

const AboutSection = () => {
  const teamMembers = [
    { name: "Harsh Chandra", role: "Founder & CEO", linkedin: "#", twitter: "#" },
    { name: "Apurva Dubey", role: "Co-Founder & UI/UX Designer", linkedin: "#", twitter: "#" },
    { name: "Yash Singh", role: "Backend Developer", linkedin: "#", twitter: "#" },
    { name: "Aman Singh", role: "Frontend Developer", linkedin: "#", twitter: "#" },
    { name: "Kushal P", role: "Database Engineer", linkedin: "#", twitter: "#" },
    { name: "Join Our Team", role: "Tech Engineer", isPlaceholder: true }
  ];

  const techStack = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"], icon: "💻" },
    { category: "Frameworks", items: ["React", "Node.js", "Django", "Flask", "Express"], icon: "⚡" },
    { category: "Tools", items: ["Git", "AWS", "Docker", "MongoDB", "PostgreSQL", "Firebase"], icon: "🛠️" },
    { category: "Specialties", items: ["UI/UX Design", "Responsive Design", "RESTful APIs", "Real-Time Apps"], icon: "✨" }
  ];

  const testimonials = [
    { quote: "Python Nexus transformed our ideas into a fully functional application. Their expertise and dedication were evident throughout.", author: "Sarah Johnson", company: "Tech Startup Inc." },
    { quote: "Working with Python Nexus was a game-changer. They provided invaluable guidance navigating complex technical challenges.", author: "Michael Chen", company: "Digital Solutions Co." },
    { quote: "We saw significant improvements in performance and user experience. They helped us get back on track.", author: "Emily Rodriguez", company: "E-commerce Platform" }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We Are <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Python Nexus</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            A <strong className="text-indigo-700">Python developer community</strong> crafting innovative solutions and empowering the next generation of tech talent.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            From startup MVPs to enterprise solutions, we turn ideas into reality with clean code and beautiful design.
          </p>
        </motion.div>

        {/* Team Members - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Meet the <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Team</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow ${
                  member.isPlaceholder ? 'border border-dashed border-gray-300' : 'border border-gray-100'
                }`}
              >
                <h4 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-xs text-indigo-600 mb-2">{member.role}</p>
                
                {!member.isPlaceholder && (
                  <div className="flex gap-1">
                    <a href={member.linkedin} className="p-1 rounded bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors">
                      <Linkedin className="w-3 h-3" />
                    </a>
                    <a href={member.twitter} className="p-1 rounded bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-500 transition-colors">
                      <Twitter className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-transparent bg-clip-text">Tech Stack</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{stack.icon}</span>
                  <h4 className="text-sm font-bold text-indigo-600">{stack.category}</h4>
                </div>
                <ul className="space-y-1">
                  {stack.items.map(item => (
                    <li key={item} className="flex items-center text-xs text-gray-700">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 mr-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-6 text-white shadow-lg">
              <Rocket className="w-8 h-8 mb-2" />
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-sm text-indigo-100">
                To empower developers and enterprises through scalable, human-centered digital solutions that blend design and technology.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 p-6 text-white shadow-lg">
              <Target className="w-8 h-8 mb-2" />
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-sm text-blue-100">
                To be the nexus of innovation—where creativity, code, and community converge to shape the future of web experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            What <span className="bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text">Clients Say</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl shadow border border-indigo-100"
              >
                <p className="text-sm text-gray-700 italic mb-3">{testimonial.quote}</p>
                <div className="border-t border-indigo-200 pt-2">
                  <p className="text-xs font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-indigo-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Passion Section - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <Heart className="w-10 h-10 mx-auto mb-3 text-pink-400" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Driven by Passion</h3>
          <p className="text-sm md:text-base text-indigo-200 max-w-2xl mx-auto">
            Whether launching startups, building tools, or sharing knowledge — we make a difference through code, design, and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

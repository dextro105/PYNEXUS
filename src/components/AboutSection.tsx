import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Twitter, Code2, Sparkles, Rocket, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const teamMembers = [
    { 
      name: "Harsh Chandra", 
      role: "Founder & CEO",
      contribution: "Founded Pynexus with a vision to empower developers",
      gradient: "from-purple-500 to-indigo-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Apurva Dubey", 
      role: "Co-Founder & UI/UX Designer",
      contribution: "Crafts beautiful, intuitive user experiences",
      gradient: "from-pink-500 to-purple-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Yash Singh", 
      role: "Backend Developer",
      contribution: "Builds robust, scalable server architectures",
      gradient: "from-blue-500 to-cyan-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Aman Singh", 
      role: "Frontend Developer",
      contribution: "Creates pixel-perfect, responsive interfaces",
      gradient: "from-emerald-500 to-teal-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Kushal P", 
      role: "Database Engineer",
      contribution: "Designs efficient data structures and queries",
      gradient: "from-orange-500 to-red-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Join Our Team", 
      role: "Tech Engineer",
      contribution: "We're always looking for passionate developers",
      gradient: "from-gray-400 to-gray-600",
      isPlaceholder: true
    },
  ];

  const techStack = [
    { 
      category: "Languages", 
      items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
      icon: "💻",
      gradient: "from-blue-500 to-indigo-600"
    },
    { 
      category: "Frameworks", 
      items: ["React", "Node.js", "Django", "Flask", "Express"],
      icon: "⚡",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "AWS", "Docker", "MongoDB", "PostgreSQL", "Firebase"],
      icon: "🛠️",
      gradient: "from-emerald-500 to-cyan-600"
    },
    { 
      category: "Specialties", 
      items: ["UI/UX Design", "Responsive Design", "RESTful APIs", "Real-Time Apps"],
      icon: "✨",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      quote: "Python Nexus transformed our ideas into a fully functional application. Their team's expertise and dedication were evident throughout the project.",
      author: "Sarah Johnson",
      company: "Tech Startup Inc."
    },
    {
      quote: "Working with Python Nexus was a game-changer. They provided invaluable guidance and support, helping us navigate complex technical challenges.",
      author: "Michael Chen",
      company: "Digital Solutions Co."
    },
    {
      quote: "We saw significant improvements in performance and user experience. We were in the middle of the project and they helped us to get it back on track.",
      author: "Emily Rodriguez",
      company: "E-commerce Platform"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Are <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Python Nexus</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            A <strong className="text-indigo-700">Python developer community</strong> crafting innovative solutions and empowering the next generation of tech talent.
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            From startup MVPs to enterprise solutions, we're here to turn your ideas into reality with clean code, beautiful design, and unwavering dedication.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Meet the <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Dream Team</span>
            </h3>
            <p className="text-gray-600">The minds behind Python Nexus</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border ${
                  member.isPlaceholder ? 'border-dashed border-gray-300' : 'border-gray-100'
                }`}
              >
                {/* Compact Avatar */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                    {member.isPlaceholder ? (
                      <Users className="w-7 h-7 text-gray-400" />
                    ) : (
                      <Code2 className="w-7 h-7 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className={`text-xs font-semibold mb-3 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">
                  {member.contribution}
                </p>
                
                {/* Social Links - hide for placeholder */}
                {!member.isPlaceholder && (
                  <div className="flex gap-2">
                    <a 
                      href={member.linkedin} 
                      className="p-2 rounded-lg bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-transparent bg-clip-text">Tech Stack</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center text-3xl mb-4 shadow-md`}>
                  {stack.icon}
                </div>
                <h4 className={`text-lg font-bold mb-3 bg-gradient-to-r ${stack.gradient} text-transparent bg-clip-text`}>
                  {stack.category}
                </h4>
                <ul className="space-y-2">
                  {stack.items.map(item => (
                    <li key={item} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our <span className="bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text">Clients Say</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-indigo-100"
              >
                <div className="text-indigo-600 text-5xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-indigo-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-indigo-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Values - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Mission & Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
              <Rocket className="w-12 h-12 mb-4 relative z-10" />
              <h4 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h4>
              <p className="text-indigo-100 leading-relaxed relative z-10">
                To empower developers, startups, and enterprises through intuitive, scalable, and human-centered digital solutions that blend design and technology into impactful experiences.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 p-8 text-white shadow-2xl"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20"></div>
              <Target className="w-12 h-12 mb-4 relative z-10" />
              <h4 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h4>
              <p className="text-blue-100 leading-relaxed relative z-10">
                To be the nexus of innovation—where creativity, code, and community converge to shape the future of web experiences, one pixel and one algorithm at a time.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Passion Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-3xl shadow-2xl p-10 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Driven by Passion</h3>
            <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              Whether it's launching startups, building tools, or sharing knowledge — we're here to make a difference through code, design, and collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

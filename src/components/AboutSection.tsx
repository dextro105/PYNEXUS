import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Twitter, Code2, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const teamMembers = [
    { 
      name: "Harsh Chandra", 
      role: "Founder and CEO - Pynexus",
      gradient: "from-purple-500 to-indigo-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Apurva Dubey", 
      role: "Co-Founder and UI/UX Designer",
      gradient: "from-pink-500 to-purple-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Yash Singh", 
      role: "Backend Developer",
      gradient: "from-blue-500 to-cyan-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Aman Singh", 
      role: "Frontend Developer",
      gradient: "from-emerald-500 to-teal-600",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Kushal P", 
      role: "Database Engineer",
      gradient: "from-orange-500 to-red-600",
      linkedin: "#",
      twitter: "#"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Us</span>
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600 ml-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are <strong className="text-indigo-700">Python Nexus</strong> — a collective of passionate developers committed to crafting meaningful software solutions. Our passion lies in merging creativity with code, solving real-world problems, and helping others grow through tech.
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet the <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Dream Team</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Avatar with gradient border */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 mb-4`}>
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-gray-400" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h4>
                <p className={`text-sm font-semibold text-center mb-3 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Passionate about building scalable and impactful digital solutions.
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.linkedin} 
                    className="p-2 rounded-lg bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
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

        {/* Passion Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-200 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Driven by Passion</h3>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Whether it's launching startups, building tools, or sharing knowledge — we're here to make a difference through code, design, and collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

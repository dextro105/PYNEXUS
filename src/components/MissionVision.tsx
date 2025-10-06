import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Our Mission</h3>
            <p className="text-gray-300">
              To empower developers, startups, and enterprises through intuitive, scalable, and human-centered digital solutions that blend design and technology into impactful experiences.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h3>
            <p className="text-gray-300">
              To be the nexus of innovation—where creativity, code, and community converge to shape the future of web experiences, one pixel and one algorithm at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

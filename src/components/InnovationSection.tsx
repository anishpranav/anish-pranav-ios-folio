
import React from 'react';

export const InnovationSection = () => {
  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Innovation
          </h2>
          <p className="text-xl text-gray-400">
            Entrepreneurial ventures and breakthrough solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:transform hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-6">
              <div className="text-4xl mb-4">🏥</div>
              <div className="text-right">
                <span className="text-sm text-purple-400 font-medium">CTO</span>
                <p className="text-xs text-gray-500">2025 (Ongoing)</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Multi-Lab Healthcare Booking Platform
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Swiggy-style platform for diagnostic lab bookings in Chennai, revolutionizing healthcare accessibility and convenience.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Led mobile/web app development from concept to deployment
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built appointment logic, lab integration, real-time UI
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Coordinated with biotech team for device integrations
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Flutter", "Node.js/Django", "PostgreSQL", "AWS"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

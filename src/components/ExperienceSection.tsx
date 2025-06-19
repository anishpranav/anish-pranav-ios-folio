
import React from 'react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Holistic Health Mobile App",
      company: "MS iQA LLC, Texas",
      location: "Remote",
      duration: "Mar 2025–Present",
      role: "Mobile App Developer",
      description: [
        "Built cross-platform UI with Flutter",
        "Developed Python APIs for secure backend logic",
        "PostgreSQL for structured data storage"
      ]
    },
    {
      title: "Udrive Car Rental App",
      company: "Udrive, Chennai",
      location: "Remote",
      duration: "Jan 2025–Present",
      role: "Mobile App Developer",
      description: [
        "Designed UI/UX in Figma, frontend in Flutter",
        "Integrated location-based booking",
        "Ensured fast, intuitive user experience"
      ]
    },
    {
      title: "Pharmaceutical Data Analysis",
      company: "Strategic Research Insights, Chennai",
      location: "Onsite",
      duration: "Dec 2024–Jan 2025",
      role: "Data Analyst",
      description: [
        "Segmentation & incentive compensation analysis (Python, SAS)",
        "Delivered insights with Excel dashboards",
        "Supported strategy for call planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400">
            Building impactful solutions across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:transform hover:scale-[1.01]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-teal-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 text-sm rounded-full border border-teal-500/30">
                    {exp.duration}
                  </span>
                  <p className="text-gray-400 text-sm mt-2">{exp.role}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

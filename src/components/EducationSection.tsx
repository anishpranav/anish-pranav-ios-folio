
import React from 'react';

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "SRM Institute of Science and Technology, Chennai",
      duration: "2022–2026",
      grade: "CGPA: 7.4/10",
      coursework: ["DSA", "Computer Networks", "Software Engineering", "Product Management"],
      color: "blue"
    },
    {
      degree: "IB Diploma",
      institution: "Good Shepherd International School, Ooty",
      duration: "2020–2022",
      grade: "68%",
      coursework: ["Extended Essay", "Mathematics AA", "CS", "French B"],
      color: "purple"
    },
    {
      degree: "IGCSE",
      institution: "Good Shepherd International School, Ooty",
      duration: "2018–2020",
      grade: "81%",
      coursework: ["Cambridge Math", "Physics", "English"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
      teal: "from-teal-500/20 to-teal-600/20 border-teal-500/30"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className={`group bg-gradient-to-br ${getColorClasses(edu.color)} backdrop-blur-sm border rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.01]`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.duration}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

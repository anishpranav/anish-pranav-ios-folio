
import React from 'react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Dart", "C", "C++", "SQL", "JavaScript", "Java", "PHP"],
      color: "blue"
    },
    {
      title: "Mobile",
      skills: ["Flutter", "React Native", "Expo", "Cross-platform"],
      color: "purple"
    },
    {
      title: "Web",
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Angular.js"],
      color: "teal"
    },
    {
      title: "Backend",
      skills: ["Flask", "Django", "Node.js", "PHP", "REST APIs", "MQTT"],
      color: "green"
    },
    {
      title: "Cloud/DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub", "VS Code", "Figma"],
      color: "orange"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Database Design", "MS Excel"],
      color: "red"
    },
    {
      title: "ML/Data Science",
      skills: ["TensorFlow Lite", "BERT", "T5", "LDA", "K-Means", "CNNs", "RNNs", "Pandas", "SAS", "Tableau", "PyTorch"],
      color: "pink"
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "SDLC", "TDD"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30",
      teal: "bg-teal-500/20 text-teal-300 border-teal-500/30 hover:bg-teal-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30",
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30",
      red: "bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30",
      pink: "bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30",
      indigo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs rounded-full backdrop-blur-sm border transition-all duration-300 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

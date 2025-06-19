
import React from 'react';

export const LeadershipSection = () => {
  const categories = [
    {
      title: "Leadership",
      icon: "👑",
      items: ["Football Team Captain/Vice-Captain", "President, Quiz & Debate Club (2017–2022)"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Sports",
      icon: "🏃‍♂️",
      items: ["Athletics (400m, 800m, relays, cross-country)", "Football (Winner, Runner-up, MVP, Best Defender)"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Music & Arts",
      icon: "🎵",
      items: ["Trinity College London – Theory & Guitar (Distinction)", "Brass Band, Symphony Orchestra", "Drama Awards"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Academic/Cultural",
      icon: "🎓",
      items: ["MUN, Quizzes, Olympiads", "Language Contests"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Adventure",
      icon: "🏔️",
      items: ["Trekking, Mountaineering", "Camping"],
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Leadership, Sports & Creative Pursuits
          </h2>
          <p className="text-xl text-gray-400">
            A well-rounded approach to personal and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

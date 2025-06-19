
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AgentClip – Podcast Clipping System",
      icon: "🎧",
      role: "Lead Developer",
      duration: "2025",
      description: "AgentClip is an AI-powered tool that automatically generates short, engaging podcast clips using a multi-agent system.",
      contributions: [
        "Integrated OpenAI Whisper for transcription, Llama and GPT-4 Turbo for content analysis",
        "Automated scene detection and clip generation (LangChain, Vadoo AI)",
        "Optimized post-production workflows for accessibility"
      ],
      techStack: ["Python", "OpenAI Whisper", "LangChain", "Llama", "GPT-4 Turbo", "Vadoo AI"]
    },
    {
      title: "Vision System for Warehouse Monitoring",
      icon: "📦",
      role: "Computer Vision Developer",
      duration: "2025 (Ongoing)",
      description: "Computer vision system for tracking inventory and personnel in warehouses for safety and audits.",
      contributions: [
        "Built object detection/tracking with CNNs",
        "Automated timestamped audit reports and incident summaries",
        "Real-time video tagging and review"
      ],
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask", "PostgreSQL"]
    },
    {
      title: "APTSum – AI-Powered Timestamp-Based Summarization",
      icon: "🧠",
      role: "Researcher & Developer",
      duration: "ICTSD 2025",
      description: "Summarizes time-sensitive content from long videos/audio using semantic clustering and timestamp alignment.",
      contributions: [
        "Hybrid NLP pipeline (BERT, T5) for event extraction/summarization",
        "LDA, K-Means clustering for temporal segments",
        "Auto-generated timestamps and summaries"
      ],
      techStack: ["Python", "BERT", "T5", "LDA", "K-Means", "Pandas", "Scikit-learn"]
    },
    {
      title: "Secure Communication via Ekert91 Protocol",
      icon: "🔐",
      role: "Researcher",
      duration: "NGT Conference 2025",
      description: "Quantum-safe communication for healthcare data centers using entanglement-based key exchange and classical encryption.",
      contributions: [
        "Simulated Ekert91 QKD protocol (Qiskit)",
        "Combined QKD with AES-256",
        "Flask API for real-time encrypted communication"
      ],
      techStack: ["Qiskit", "AES-256", "Python", "Flask"]
    },
    {
      title: "GymAI – Real-Time Exercise Tracking",
      icon: "🏋️‍♂️",
      role: "Full-Stack Dev & ML Engineer",
      duration: "2024–2025",
      description: "Browser-based fitness assistant using webcam for real-time exercise detection/classification.",
      contributions: [
        "Pose detection (MediaPipe), LSTM for action recognition",
        "Rep counting, speed analysis, calorie estimation",
        "Live feedback and stats overlay"
      ],
      techStack: ["Python", "Flask", "MediaPipe", "TensorFlow/Keras", "OpenCV", "SQLite", "JS"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions spanning AI, computer vision, and quantum computing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <div className="text-right">
                  <span className="text-sm text-blue-400 font-medium">{project.role}</span>
                  <p className="text-xs text-gray-500">{project.duration}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Contributions:</h4>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    {tech}
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

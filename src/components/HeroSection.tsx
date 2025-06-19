
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            AP
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Anish Pranav
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              Software Engineer | Mobile App Developer | AI/ML Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Versatile Software Engineer with a focus on intelligent mobile platforms, end-to-end system design, and applied machine learning.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download Resume
            </button>
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a href="https://github.com/anishpranav" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group">
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com/in/anish-pranav-379186270" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group">
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="mailto:aniishpranav@gmail.com"
               className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group">
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};


import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9952825638",
      href: "tel:+919952825638"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aniishpranav@gmail.com",
      href: "mailto:aniishpranav@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/anishpranav",
      href: "https://github.com/anishpranav"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anish-pranav-379186270",
      href: "https://linkedin.com/in/anish-pranav-379186270"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:transform hover:scale-[1.02] text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    {contact.label}
                  </h3>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              );

              if (contact.href) {
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                I'm always interested in hearing about new opportunities, innovative projects, 
                and collaborations in AI, software engineering, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:aniishpranav@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/anish-pranav-379186270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400">
          © 2025 Anish Pranav. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

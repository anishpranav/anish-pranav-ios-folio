
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InnovationSection } from '@/components/InnovationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ProjectsSection />
        <InnovationSection />
        <ExperienceSection />
        <SkillsSection />
        <LeadershipSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

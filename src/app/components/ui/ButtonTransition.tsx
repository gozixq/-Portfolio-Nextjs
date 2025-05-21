import React, { useState } from 'react';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiDocker,
  SiFigma,
  SiLeaflet,
} from 'react-icons/si';

interface SkillButtonProps {
  label: string;
  icon: React.ReactNode;
  description: string;
}

const SkillButton: React.FC<SkillButtonProps> = ({ label, icon,  description }) => {
  return (
    <div className="flex items-center gap-6 w-full max-w-4xl border border-gray-400/40 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border hover:border-purple-400 duration-300 ">
      <div className="flex flex-col items-center justify-center w-24">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 via-gray-800 to-black text-white shadow-inner">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-center mt-2 text-sm font-semibold text-white">{label}</h3>
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
        </div>
        <div className="text-xs mt-1 text-gray-300">{description}</div>
      </div>
    </div>
  );
};

const SkillButtonsPage: React.FC = () => {
const [activeCategory, setActiveCategory] = useState('frontend');

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'data', label: 'IOT & Data Analysis' },
  { key: 'uiux', label: 'UI/UX Design' },
  { key: 'tools', label: 'Tools' },
  { key: 'mapping', label: 'Mapping' },
];

const skills = [
  { label: 'React', icon: <FaReact />, level: 90, description: 'React with hooks and component-based architecture.', category: 'frontend' },
  { label: 'HTML', icon: <FaHtml5 />, level: 95, description: 'Semantic HTML and accessibility best practices.', category: 'frontend' },
  { label: 'CSS', icon: <FaCss3Alt />, level: 85, description: 'Modern layout with Flexbox and Grid.', category: 'frontend' },
  { label: 'TypeScript', icon: <SiTypescript />, level: 90, description: 'Type-safe scalable frontend code.', category: 'frontend' },
  { label: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, description: 'Utility-first CSS for UI speed.', category: 'frontend' },
  { label: 'Angular', icon: <SiAngular />, level: 60, description: 'Google’s component-based frontend framework.', category: 'frontend' },
  { label: 'Next.js', icon: <SiNextdotjs />, level: 85, description: 'React framework for SSR and API routes.', category: 'frontend' },
  { label: 'Vite', icon: <SiVite />, level: 70, description: 'Lightning-fast build tool for frontend dev.', category: 'frontend' },

  { label: 'Python', icon: <FaPython />, level: 75, description: 'Backend scripting, automation, and APIs.', category: 'data' },

  { label: 'Docker', icon: <SiDocker />, level: 78, description: 'Containerization and consistent environments.', category: 'tools' },

  { label: 'Figma', icon: <SiFigma />, level: 82, description: 'Wireframing, UI mockups, and prototyping.', category: 'uiux' },

  { label: 'Git', icon: <FaGitAlt />, level: 85, description: 'Version control using Git and GitHub.', category: 'tools' },

  { label: 'Leaflet', icon: <SiLeaflet />, level: 65, description: 'Interactive mapping with Leaflet.js.', category: 'mapping' },
];


  return (
    <section className="min-h-[520px] px-4 mt-10 text-white">
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-1 sm:space-x-4 px-2 sm:px-4 py-1 sm:py-2 rounded-full w-fit text-[10px] sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-2 sm:px-4 py-1 rounded-full font-medium hover:font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-purple-400/70 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills
          .filter((skill) => skill.category === activeCategory)
          .map((skill, index) => (
            <SkillButton
              key={index}
              label={skill.label}
              icon={skill.icon}
              
              description={skill.description}
            />
          ))}
      </div>
    </section>
  );
};

export default SkillButtonsPage;

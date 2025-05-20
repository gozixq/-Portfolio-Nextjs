import React from 'react';
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaAward } from 'react-icons/fa';

const Timeline = () => {
  const events = [
    {
      year: '2564',
      title: 'Start studying in CPE',
      description: 'Began studies in Computer Engineering(CPE) at Chiang Mai University.',
      icon: <FaGraduationCap />,
    },
    {
      year: '2567 April – June',
      title: 'Trainee at Mapedia',
      description: 'Completed a training program at Mapedia, gaining hands-on experience.',
      icon: <FaBriefcase />,
    },
    {
      year: '2568',
      title: 'Project for Graduation',
      description: 'Worked on a major project required for graduation, showcasing learned skills.',
      icon: <FaProjectDiagram />,
    },
    {
      year: '2568 March',
      title: 'Graduated from CMU',
      description: 'Graduated with a degree in Computer Engineering from Chiang Mai University.',
      icon: <FaAward />,
    },
  ];

  return (
    <div className="text-white mt-10">
      <div className="relative border-l border-white pl-6">
        {events.slice().reverse().map((event, index) => (
          <div key={index} className="relative mb-10">
            <div className="absolute left-[-24px] top-1.5 transform -translate-x-1/2 w-2 h-2 bg-black border-2 border-purple-400 rounded-full z-10" />
            <div className='flex flex-col items-start text-left'>
              <p className="text-purple-400 text-sm mb-1">{event.year}</p>
              <h3 className="font-bold text-sm flex items-start gap-2">
                <span className="w-4 h-4">{event.icon}</span>
                {event.title}
              </h3>
              <p className="text-gray-300 text-xs py-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

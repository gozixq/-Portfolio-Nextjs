'use client';

import React from 'react';
import Timeline from './ui/Timeline';
import { CardSpotlight } from './ui/card-spotlight';
import Information from './ui/information';
import ButtonTransition from './ui/ButtonTransition';
const AboutMe = () => {
  return (
  <section
    id="about"
    className="min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-black text-white text-center"
  >
    <div className="max-w-5xl w-full space-y-10">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
        About Me
      </h1>

      <p className="text-gray-300 text-[15px] leading-relaxed">
        Hello! I&#39;m <span className="font-semibold text-white">Natsinee Sasanasopa</span>,
        a passionate <span className="text-purple-300">Frontend Developer</span> and
        <span className="text-pink-300"> UX/UI Designer</span> who loves creating beautiful,
        responsive, and user-friendly web experiences.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
        <CardSpotlight className="h-full w-full flex flex-col justify-between">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">Information</p>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Personal details including birthday, address, language, and education.
          </p>
          <div className="mt-4 relative z-20">
            <Information />
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-full w-full flex flex-col justify-between">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">Experience</p>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Hands-on internship and real-world project work at Mapedia and more.
          </p>
          <div className="mt-4 relative z-20">
            <Timeline />
          </div>
        </CardSpotlight>
      </div>

      {/* Skills Card */}
      <div className="w-full">
        <CardSpotlight className="h-fit w-full">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">Skills</p>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Proficient in web development, creative coding, IoT, and Deep Learning.
          </p>
          <div className="mt-4 relative z-20">
            <ButtonTransition />
          </div>
        </CardSpotlight>
      </div>
    </div>
  </section>

  );
};

export default AboutMe;

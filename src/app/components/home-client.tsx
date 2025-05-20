'use client';

import Spline from '@splinetool/react-spline';
import ButtonGradient from './ui/ButtonGradient';
import { BsStars } from "react-icons/bs";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HomeClient() {
  return (
    <section id="home">
    <div className="w-full h-screen relative">
      <Spline scene="https://prod.spline.design/JuqjAtIsp-EExI7K/scene.splinecode" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center space-y-6">
        <ButtonGradient
          text="Welcome to my portfolio"
          colorFrom="from-fuchsia-500"
          colorVia="via-rose-400"
          colorTo="to-indigo-500"
          icon={<BsStars />}
        />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
        I&#39;m Natsinee Sasanasopa
      </h1>
      <TypeAnimation
        sequence={[
          "Frontend Developer & UX/UI Designer",
        ]}
        speed={50}
        repeat={0}
        wrapper="h2"
        className="text-xl text-white"
      />
      </div>
    </div>
    </section>
  );
}

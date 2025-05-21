'use client';

import React from "react";

type ButtonGradientProps = {
  text?: string;
  colorFrom?: string;
  colorVia?: string;
  colorTo?: string;
  textSize?: string;
  iconSize?: string;
  icon?: React.ReactNode; 
};

const ButtonGradient: React.FC<ButtonGradientProps> = ({
  text = "Get Started",
  colorFrom = "from-purple-500",
  colorVia = "via-pink-400",
  colorTo = "to-blue-500",
  textSize = "text-sm",
  iconSize = "text-sm",
  icon,
}) => {
  const gradientSlide = `bg-gradient-to-r ${colorFrom} ${colorVia} ${colorTo} opacity-30`;
  const gradientGlow = `bg-gradient-to-r ${colorFrom} ${colorVia} ${colorTo}`;

  return (
    <div className="relative w-[220px] flex justify-center items-center">
      <div className="relative w-full max-w-xs h-10 opacity-90 overflow-hidden rounded-full bg-black z-10 group">
        <div
          className={`absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-fit ${gradientSlide} -skew-x-15`}
        />

        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-full inset-0.5 bg-black">
          <button
            name="text"
            className={`input font-medium h-full opacity-90 w-fit rounded-full bg-black ${textSize} flex items-center`}
          >
            {icon && <span className={`${iconSize} mr-2`}>{icon}</span>}
            {text}
          </button>
        </div>

        <div
          className={`absolute duration-1000 group-hover:animate-spin w-full h-[80px] ${gradientGlow} blur-[55px]`}
        />
      </div>
    </div>
  );
};

export default ButtonGradient;

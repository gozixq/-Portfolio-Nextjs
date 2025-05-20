import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
import React from "react";

const Information = () => {
  const info = [
    {
      icon: FaUser,
      title: "Name",
      text: "Natsinee Sasanasopa (Gigi)",
    },
    {
      icon: FaBirthdayCake,
      title: "Date of Birth",
      text: "25 May 2002",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      text: "72/1, Tambon Krabi Yai, Sri Phang Nga Road, Mueang District, Krabi Province, 81000",
    },
    {
      icon: FaLanguage,
      title: "Language",
      text: "Thai (Native), English (CEFR B1 – Intermediate communication skills)",
    },
    {
      icon: FaGraduationCap,
      title: "University Education",
      text: "Bachelor’s Degree in Computer Engineering, Faculty of Engineering, Chiangmai University",
    },
  ];

  return (
    <div className="text-white space-y-6 py-6 px-4 divide-y divide-neutral-800">
      {info.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex gap-4 text-left text-xs">
            <div className="pt-1">
              <Icon className="text-pink-400 w-3 h-3" />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">{item.title}</p>
              <p className="text-white text-xs py-2 mb-2">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Information;

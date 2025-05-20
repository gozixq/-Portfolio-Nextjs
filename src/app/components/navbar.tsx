/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@lib/scrollToSection';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false); // auto close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-black/40 backdrop-blur-md flex items-center justify-between z-50">
       
      <div className="flex items-center gap-3">
        <button onClick={() => handleNavClick('home')}>
        {/* <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-purple-400">
            <Image
              src="https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/image0.jpeg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>*/}
          <span className="text-white font-semibold text-sm sm:text-base">
            Natsinee <span className="text-purple-400">| Portfolio</span>
          </span>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-[13px] text-white">
        <button onClick={() => handleNavClick('about')} className="hover:text-purple-400 transition-colors">
          About Me
        </button>
        <button onClick={() => handleNavClick('projects')} className="hover:text-purple-400 transition-colors">
          Projects
        </button>
        <button onClick={() => handleNavClick('contact')} className="hover:text-purple-400 transition-colors">
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMenu}
          className="text-white text-lg focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-6 mt-2 w-44 bg-black/80 backdrop-blur-md border border-gray-700 rounded-lg p-4 flex flex-col gap-3 text-white text-sm shadow-xl md:hidden">
          <button onClick={() => handleNavClick('about')} className="hover:text-purple-400 text-left">
            About Me
          </button>
          <button onClick={() => handleNavClick('projects')} className="hover:text-purple-400 text-left">
            Projects
          </button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-purple-400 text-left">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

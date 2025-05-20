'use client';

import { animate } from 'framer-motion';

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;

  animate(startY, targetY, {
    duration: 0.8,
    ease: 'easeInOut',
    onUpdate(value) {
      window.scrollTo(0, value);
    },
  });
};

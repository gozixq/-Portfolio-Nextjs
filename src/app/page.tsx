'use client';

import ScrollSpy from './components/ScrollSpy';
import HomeClient from './components/home-client';
import AboutMe from './components/about-me';
import ProjectLists from './components/project-lists';
import ContactMe from './components/contact-me';
import { motion } from 'framer-motion';
const fadeInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollSpy />

      <motion.section
        id="home"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HomeClient />
      </motion.section>

      <motion.section
        id="about"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen"
      >
        <AboutMe />
      </motion.section>

      <motion.section
        id="projects"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen"
      >
        <ProjectLists />
      </motion.section>

      <motion.section
        id="contact"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen"
      >
        <ContactMe />
      </motion.section>

    </>
  );
}

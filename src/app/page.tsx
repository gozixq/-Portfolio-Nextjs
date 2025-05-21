'use client';

import ScrollSpy from './components/ScrollSpy';
import HomeClient from './components/home-client';
import AboutMe from './components/about-me';
import ProjectLists from './components/project-lists';
import ContactMe from './components/contact-me';

export default function HomePage() {
  return (
    <>
      <ScrollSpy />
        <HomeClient />
        <AboutMe />
        <ProjectLists />
        <ContactMe />
    </>
  );
}

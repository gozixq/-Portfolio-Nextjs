'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const SECTIONS = ['home', 'about', 'projects', 'contact'];

const ScrollSpy = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            router.replace(`#${id}`, { scroll: false });
          }
        }
      },
      {
        threshold: 0.3, // 60% visible ถึงจะนับว่าอยู่บนจอ
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [router, pathname]);

  return null;
};

export default ScrollSpy;

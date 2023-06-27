import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    (() => {
      window.addEventListener('scroll', () => setScrollY(window.scrollY));
    })();
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  return { scrollY, setScrollY };
};

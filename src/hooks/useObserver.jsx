import { useRef } from 'react';

export const useObserver = (callback) => {
  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  let observer = useRef(
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options)
  );

  const observe = (element) => {
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    observer.current.unobserve(element);
  };
  return { observe, unobserve };
};

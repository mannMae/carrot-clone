import { Spinner } from 'components/Elements';
import { useRef } from 'react';

export const usePullToRefresh = (refreshAction = () => {}) => {
  const ref = useRef(null);
  const loading = useRef(null);
  const touchStartY = useRef(0);
  const loadingHeight = useRef(0);
  const handleRefresh = useRef(() => {
    refreshAction();
  });

  const MAX_HEIGHT = 0;
  const handleTouchStart = (e) => {
    if (ref.current.scrollTop !== 0) return;

    touchStartY.current = e.changedTouches[0].screenY;
    const el = document.createElement('div');
    el.classList.add('loading-element');
    ref.current.prepend(el);
    loading.current = el;
  };

  const handleTouchMove = (e) => {
    if (loading.current) {
      const screenY = e.changedTouches[0].screenY;
      const height = Math.floor((screenY - touchStartY.current) * 0.3);
      if (height >= 0) {
        loading.current.style.height = `${height}px`;
        loadingHeight.current = height;
      }
    }
  };

  const handleTouchEnd = () => {
    if (loading.current && loadingHeight.current >= MAX_HEIGHT) {
      handleRefresh.current();
      loading.current.remove();
    }
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd, ref };
};

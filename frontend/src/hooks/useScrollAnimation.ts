import { useEffect } from 'react';

/**
 * Global scroll animation hook.
 * Observes ALL .fade-in-up elements on the page and adds .visible when they enter the viewport.
 * Call once at the App level so it covers all components.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, no need to keep observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all current fade-in-up elements
    const observe = () => {
      document.querySelectorAll('.fade-in-up, .fade-in').forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial pass
    observe();

    // Re-observe when route changes (MutationObserver)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

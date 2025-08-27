import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Force disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Always start project detail pages at top
    if (currentPath.startsWith('/projects/') && currentPath !== '/projects') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }
    
    // If coming back to homepage from a project, check if we have a saved position for that project
    if (currentPath === '/') {
      const referrer = document.referrer;
      if (referrer) {
        try {
          const referrerPath = new URL(referrer).pathname;
          if (referrerPath.startsWith('/projects/')) {
            const projectName = referrerPath.split('/projects/')[1];
            const savedPosition = sessionStorage.getItem(`projectScrollPosition_${projectName}`);
            if (savedPosition) {
              const scrollY = parseInt(savedPosition);
              setTimeout(() => {
                window.scrollTo(0, scrollY);
                document.documentElement.scrollTop = scrollY;
                document.body.scrollTop = scrollY;
              }, 100);
              // Clear the saved position after using it
              sessionStorage.removeItem(`projectScrollPosition_${projectName}`);
              return;
            }
          }
        } catch (e) {
          // Ignore referrer parsing errors
        }
      }
    }
    
    // For all other pages, restore saved position or go to top
    const savedPosition = scrollPositions[currentPath];
    if (savedPosition !== undefined) {
      window.scrollTo(0, savedPosition);
      document.documentElement.scrollTop = savedPosition;
      document.body.scrollTop = savedPosition;
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Save scroll position on every scroll
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollPositions[currentPath] = scrollY;
    };
    
    // Save position before leaving page
    const handleBeforeUnload = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollPositions[currentPath] = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return null;
}

export default ScrollRestoration;
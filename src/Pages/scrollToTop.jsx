import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PROJECTS_SCROLL_KEY = "projectsListScroll";

function ScrollRestoration() {
  const location = useLocation();
  const prevPath = useRef(null);

  // Decide scroll position on every navigation
  useEffect(() => {
    const curr = location.pathname;
    const prev = prevPath.current;

    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    const cameFromProjectDetail =
      prev && prev.startsWith("/projects/") && prev !== "/projects";

    if (curr === "/projects" && cameFromProjectDetail) {
      // Returning to the list from a project: keep the same spot
      const saved = parseInt(
        sessionStorage.getItem(PROJECTS_SCROLL_KEY) || "0",
        10,
      );
      // Wait a tick so the list has laid out before restoring
      const restore = () => window.scrollTo(0, saved);
      requestAnimationFrame(restore);
      setTimeout(restore, 60);
    } else {
      // Everywhere else (incl. opening a project from the list or the home
      // page) behaves like a normal site: start at the top
      window.scrollTo(0, 0);
    }

    prevPath.current = curr;
  }, [location.pathname]);

  // While on the projects list, remember the scroll position
  useEffect(() => {
    if (location.pathname !== "/projects") return;
    const onScroll = () => {
      sessionStorage.setItem(
        PROJECTS_SCROLL_KEY,
        String(window.scrollY || window.pageYOffset || 0),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return null;
}

export default ScrollRestoration;

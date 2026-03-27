import React from "react";
import { useLocation } from "react-router-dom";
import { useAnimationContext } from "./animationContext";
import "./navbar.css";

function Navbar() {
  const { isAnimationDisabled, toggleAnimation } = useAnimationContext();
  const location = useLocation();
  if (location.pathname.startsWith("/blog")) return null;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={toggleAnimation} className="toggle-animations">
          {isAnimationDisabled ? "Enable Animations" : "Disable Animations"}
        </button>
      </div>
      <div className="navbar-right"></div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound() {
  return (
    <div className="nf-container">
      <Link to="/" className="back-btn nf-back">
        ← Back
      </Link>
      <div className="nf-card">
        <div className="nf-emoji" role="img" aria-label="sunflower">
          🌻
        </div>
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">This page wandered off</h2>
        <p className="nf-message">
          We couldn't find the page you were looking for, but there's plenty of
          sunshine back home.
        </p>
        <Link to="/" className="nf-home-link">
          Take me home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

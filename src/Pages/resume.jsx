import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="resume-content">
        <h1>Resume</h1>
        <div className="resume-image-container">
          <img
            src="/Kokinda_Joey_Resume.png"
            alt="Joey Kokinda's Resume"
            className="resume-image"
          />
        </div>
        <div className="download-section">
          <p>Want a copy?</p>
          <a
            href="/Kokinda_Joey_Resume.pdf"
            download="Kokinda_Joey_Resume.pdf"
            className="download-button"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;

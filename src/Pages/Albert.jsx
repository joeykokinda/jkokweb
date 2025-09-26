import React from "react";
import "./albert.css";

function Albert() {
  return (
    <div className="albert-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image-container">
            <img src="/albert.jpg" alt="Albert Wu" className="profile-img" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Albert Wu</h1>
            <p className="profile-title">SDE Intern @ Amazon</p>
            <p className="profile-education">CS @ Purdue University</p>
            <p className="profile-location">📍 New York, NY</p>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Connections</span>
          </div>
          <div className="stat">
            <span className="stat-number">3.89</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat">
            <span className="stat-number">524</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>

        <div className="experience-section">
          <h3 className="section-title">Experience</h3>
          <div className="experience-item">
            <div className="company-logo">🚀</div>
            <div className="experience-details">
              <p className="job-title">SDE Intern</p>
              <p className="company">Amazon</p>
              <p className="duration">Mar 2025 - Present</p>
              <p className="location">Seattle, WA</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">💼</div>
            <div className="experience-details">
              <p className="job-title">IT Intern</p>
              <p className="company">SMBC Nikko Securities</p>
              <p className="duration">Jun 2024 - Aug 2024</p>
              <p className="location">New York, NY</p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Microsoft SQL Server</span>
            <span className="skill-tag">Computer Architecture</span>
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">Algorithms</span>
            <span className="skill-tag">Blockchain</span>
          </div>
        </div>

        <div className="languages-section">
          <h3 className="section-title">Languages</h3>
          <div className="language-item">
            <span className="language">English</span>
            <span className="proficiency">Native</span>
          </div>
          <div className="language-item">
            <span className="language">Chinese</span>
            <span className="proficiency">Professional</span>
          </div>
          <div className="language-item">
            <span className="language">Cantonese</span>
            <span className="proficiency">Limited</span>
          </div>
        </div>


        <div className="footer-actions">
          <a 
            href="https://www.linkedin.com/in/ajxwu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-btn primary single-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Albert;

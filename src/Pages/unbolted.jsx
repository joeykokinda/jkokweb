import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import unbolt from "../images/unbolt.png";
import unbolt2 from "../images/unbolt2.png";
import unbolt3 from "../images/unbolt3.png";
import unbolt4 from "../images/unbolt4.png";

function Unbolted() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const images = [unbolt, unbolt2, unbolt3, unbolt4];

  return (
    <>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size" />
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
          </div>
        </div>
      )}
      <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>Unbolted - On-Demand GPU Computing</h1>
        <div className="header-links">
          <a
            href="https://devpost.com/software/unbolted"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View DevPost ↗
          </a>
          <a
            href="https://github.com/brickhack-gpu"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Unbolted ${idx + 1}`} style={{ cursor: "pointer" }} onClick={() => setLightboxImage(img)} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Unbolted provides instant access to high-end GPUs for AI model
              usage and training. Built during a hackathon, it offers both a
              simple interface for novices and advanced controls for power
              users, addressing the need for flexible, on-demand GPU computing.
            </p>
          </section>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <ul>
              <li>
                <strong>Backend:</strong> Golang for efficient server
                performance
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL with Bun ORM
              </li>
              <li>
                <strong>Frontend:</strong> Vite/React.js
              </li>
              <li>
                <strong>Cloud:</strong> GCP Compute Engine
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>Instant access to high-end GPUs</li>
              <li>User-friendly interface with advanced options</li>
              <li>Pay-per-use pricing model</li>
              <li>Automated resource management</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Notes</h2>
            <p>
              Built during a 24-hour hackathon, demonstrating rapid prototyping
              and MVP development. The project showcases our team's ability to
              quickly learn and implement new technologies under time
              constraints.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
export default Unbolted;

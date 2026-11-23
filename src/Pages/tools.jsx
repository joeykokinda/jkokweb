import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import toolImage1 from "../images/tool.png";
import toolImage2 from "../images/tool2.png";
import toolImage3 from "../images/tool3.png";
import toolImage4 from "../images/tool1.png";

function ToolsWebsite() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const images = [toolImage1, toolImage2, toolImage3, toolImage4];

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
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>Tools - Website With Useful Tools</h1>
        <div className="header-links">
          <a
            href="https://tools.jkokinda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Visit Website ↗
          </a>
          <a
            href="https://github.com/joeykokinda/tool"
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
            <img src={img} alt={`Tools ${idx + 1}`} style={{ cursor: "pointer" }} onClick={() => setLightboxImage(img)} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              The tools I use all the time in one place, so I stop searching
              for a different sketchy site every time I need a QR code or a
              burner wallet. Rebuilt in 2026: everything runs in the browser,
              and the site's content security policy blocks every outbound
              request, so nothing you type can leave the tab.
            </p>
          </section>

          <section className="project-section">
            <h2>Available Tools</h2>
            <ul>
              <li>QR Code Maker - Links, text, wifi and email, with a logo in the middle, custom colors and dot styles, PNG / SVG export</li>
              <li>Wallets - New ETH, SOL and BTC wallets, or paste a seed phrase or any private key to get its addresses and keys</li>
              <li>Password Generator - Random passwords and word passphrases</li>
              <li>Crypto Units - wei / gwei / ether, lamports / SOL, sats / BTC</li>
              <li>Hash - keccak256, function selectors and sha256</li>
              <li>Encode / Decode - JSON, base64, hex, URL and JWT</li>
              <li>Timestamp - Unix time to dates and back</li>
              <li>Word Counter and Lorem Ipsum</li>
            </ul>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default ToolsWebsite;

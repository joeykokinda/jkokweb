import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import polyterm1 from "../images/polyterm/2025-10-22T15:01:20,845467989-04:00.png";
import polyterm2 from "../images/polyterm/2025-10-22T15:01:47,506425432-04:00.png";
import polyterm3 from "../images/polyterm/2025-10-22T15:01:59,154411067-04:00.png";
import polyterm4 from "../images/polyterm/2025-10-22T15:02:40,700739192-04:00.png";

function PolyTerm() {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const sshCommand = "ssh polyterm@polyterm.app";

  const images = [
    polyterm1,
    polyterm2,
    polyterm3,
    polyterm4,
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sshCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size" />
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div className="project-details-container">
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>PolyTerm - Terminal Dashboard for PolyMarket</h1>
        <div className="header-links">
          <button
            onClick={() => setShowPopup(true)}
            className="live-link"
          >
            Access via SSH ↗
          </button>
          <a
            href="https://github.com/joeykokinda/polyterm"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            style={{
              backgroundColor: "var(--cream)",
              padding: "30px",
              borderRadius: "18px",
              maxWidth: "600px",
              width: "90%",
              border: "var(--border)",
              boxShadow: "0 10px 30px rgba(31,111,176,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "var(--ink)", marginBottom: "20px", fontWeight: "700" }}>
              Access PolyTerm via SSH
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: "15px" }}>
              To access the live PolyTerm dashboard:
            </p>
            <div
              style={{
                backgroundColor: "var(--cream-2)",
                padding: "15px",
                borderRadius: "12px",
                fontFamily: "Courier New, monospace",
                color: "var(--ink)",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "var(--border)",
              }}
            >
              <span>{sshCommand}</span>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: "6px 14px",
                  backgroundColor: copied ? "var(--sun-deep)" : "var(--sun)",
                  color: "var(--ink)",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p style={{ color: "var(--ink-soft)", fontSize: "14px", marginTop: "20px" }}>
              if you don't know how to do this, gg 💀
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "var(--white)",
                color: "var(--sky-deep)",
                border: "1.5px solid var(--sky)",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--sky-light)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "var(--white)";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`PolyTerm Dashboard ${idx + 1}`}
              style={{
                objectFit: "contain",
                background: "rgba(0, 0, 0, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => setLightboxImage(img)}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>How to Access</h2>
            <p>
              PolyTerm is accessible via SSH at:
            </p>
            <div
              style={{
                backgroundColor: "var(--cream-2)",
                padding: "15px",
                borderRadius: "12px",
                fontFamily: "monospace",
                color: "var(--ink)",
                border: "var(--border)",
                marginBottom: "20px",
              }}
            >
              ssh polyterm@polyterm.app
            </div>
            <p>
              This project was a valuable learning opportunity to implement SSH-based access and server deployment. Using my private key, I can access the root of the server to push updates and manage the application, providing hands-on experience with remote server administration and secure authentication.
            </p>
          </section>

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              PolyTerm is a terminal-based dashboard for PolyMarket, a decentralized prediction market platform. Built with Go and Bubbletea, the tool provides real-time market data and insights directly in the terminal, streamlining decision-making for traders who need fast access to market information.
            </p>
            <p>
              Built for traders who prefer working in the terminal, PolyTerm delivers critical market data without the overhead of navigating through web interfaces.
            </p>
            <p>
              <strong>Open Source:</strong> Due to the nature of SSH access, this project is fully open source on <a href="https://github.com/joeykokinda/polyterm" target="_blank" rel="noopener noreferrer" style={{ color: "var(--sky-deep)", textDecoration: "underline" }}>GitHub</a>. You can review the entire codebase before connecting—transparency is important when SSHing into any application.
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Real-Time Market Data:</strong> Pulls live data from the PolyMarket API, including volume statistics, market trends, and prediction odds
              </li>
              <li>
                <strong>Customizable Dashboard:</strong> Tailor the display to track specific markets or view broader market overviews
              </li>
              <li>
                <strong>Quick Market Access:</strong> Access relevant market data instantly without navigating multiple pages
              </li>
              <li>
                <strong>Aggregated Data View:</strong> Clean, organized layout with filtering options for spotting opportunities quickly
              </li>
              <li>
                <strong>Terminal-Based Interface:</strong> Distraction-free, text-based interface designed for speed and efficiency
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <ul>
              <li>
                <strong>Built with Go:</strong> High-performance backend using Go for speed and efficiency
              </li>
              <li>
                <strong>Bubbletea TUI Framework:</strong> Beautiful terminal UI with Lipgloss styling and Bubbles components
              </li>
              <li>
                <strong>CLI-Focused Design:</strong> Built for experienced traders who prefer terminal environments
              </li>
              <li>
                <strong>PolyMarket API Integration:</strong> Direct integration with PolyMarket's Gamma API for secure data retrieval
              </li>
              <li>
                <strong>Performance Optimized:</strong> Ultra-fast, responsive interface with no delays or lag
              </li>
              <li>
                <strong>Real-Time Updates:</strong> Auto-refresh every 30 seconds to keep traders informed of market changes
              </li>
              <li>
                <strong>Keyboard Navigation:</strong> Full vim-style keyboard controls for efficient navigation
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Future Development</h2>
            <p>
              PolyTerm has several planned expansions to enhance its functionality:
            </p>
            <ul>
              <li>
                <strong>Advanced Analytics:</strong> Detailed market history, predictive analysis, and sentiment analysis to understand market evolution
              </li>
              <li>
                <strong>Position Management:</strong> View open positions, execute buy/sell orders, and monitor risk directly from the terminal
              </li>
              <li>
                <strong>Real-Time Position Updates:</strong> Track investments and adjust strategies with live position status updates
              </li>
              <li>
                <strong>Enhanced Security:</strong> Additional security measures to safeguard user data and privacy
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Use Case</h2>
            <p>
              PolyTerm bridges the gap between PolyMarket's decentralized nature and the need for real-time, actionable insights. By presenting market data in a terminal interface, it eliminates unnecessary distractions and focuses purely on the information that matters for trading decisions.
            </p>
            <p>
              The tool is designed for traders who value speed, efficiency, and direct access to data—making it an essential companion for anyone serious about prediction market trading.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default PolyTerm;


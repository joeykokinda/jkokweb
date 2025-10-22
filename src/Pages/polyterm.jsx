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
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>PolyTerm - Terminal Dashboard for PolyMarket</h1>
        <div className="header-links">
          <button
            onClick={() => setShowPopup(true)}
            className="live-link"
            style={{ cursor: "pointer" }}
          >
            Access via SSH ↗
          </button>
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
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "90%",
              border: "1px solid #fafafa",
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#ffffff", marginBottom: "20px", fontWeight: "normal", textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}>
              Access PolyTerm via SSH
            </h2>
            <p style={{ color: "#00ff00", marginBottom: "15px", fontFamily: "Courier New, monospace" }}>
              To access the live PolyTerm dashboard:
            </p>
            <div
              style={{
                backgroundColor: "#000",
                padding: "15px",
                borderRadius: "4px",
                fontFamily: "Courier New, monospace",
                color: "#00ff00",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #00ff00",
              }}
            >
              <span>{sshCommand}</span>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: "5px 10px",
                  backgroundColor: copied ? "#00ff00" : "transparent",
                  color: copied ? "#000" : "#00ff00",
                  border: copied ? "none" : "1px solid #00ff00",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "Courier New, monospace",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p style={{ color: "#00ff00", fontSize: "14px", marginTop: "20px", fontFamily: "Courier New, monospace" }}>
              if you don't know how to do this, gg 💀
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "transparent",
                color: "#00ff00",
                border: "1px solid #00ff00",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "Courier New, monospace",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#00ff00";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#00ff00";
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
              }}
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
                backgroundColor: "#000",
                padding: "15px",
                borderRadius: "4px",
                fontFamily: "monospace",
                color: "#00ff00",
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
              PolyTerm is a terminal-based dashboard for PolyMarket, a decentralized prediction market platform. The tool provides real-time market data and insights directly in the terminal, streamlining decision-making for traders who need fast access to market information.
            </p>
            <p>
              Built for traders who prefer working in the terminal, PolyTerm delivers critical market data without the overhead of navigating through web interfaces.
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
                <strong>CLI-Focused Design:</strong> Built for experienced traders who prefer terminal environments
              </li>
              <li>
                <strong>PolyMarket API Integration:</strong> Direct integration with PolyMarket's public API for secure data retrieval
              </li>
              <li>
                <strong>Performance Optimized:</strong> Ultra-fast, responsive interface with no delays or lag
              </li>
              <li>
                <strong>Real-Time Updates:</strong> Continuous data refresh to keep traders informed of market changes
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
  );
}

export default PolyTerm;


import React from "react";
import { Link } from "react-router-dom";
import "./experiences.css";

function Experiences() {
  return (
    <div className="experienceBox">
      <div className="experienceHeader">
        <span className="terminalTitle">C:\Users\Experiences&gt;</span>
        <div className="terminalControls">
          <span className="terminalControl">−</span>
          <span className="terminalControl">□</span>
          <span className="terminalControl">×</span>
        </div>
      </div>

      <div className="experienceContent">
        <h3>Turtosa (Enterprise LLM Portal)</h3>
        <span className="experience-role">
          Co-Founder | July 2025 – Present
        </span>
        <ul className="experience-list">
          <li>Co-founded a platform that connects cloud and local LLM services, offering enterprise-wide AI management with compliance and security features</li>
          <li>Developed robust user management, data sovereignty controls, and integration with multiple AI models (Claude, OpenAI, Gemini) for enterprise use</li>
          <li>Implemented monitoring, usage limits, tagging systems, and a unified API for easy deployment in air-gapped, on-prem, and SaaS environments</li>
        </ul>
      </div>

      <div className="experience-divider"></div>

      <div className="experienceContent">
        <h3>Boiler Blockchain (Purdue's Crypto Club)</h3>
        <span className="experience-role">
          Developer | Sep 2024 - Present
        </span>
        <ul className="experience-list">
          <li>Represent Boiler Blockchain at hackathons and events (most recently at EthDenver 2025)</li>
          <li>Collaborate with peers to develop innovative blockchain solutions and promote the club's presence</li>
          <li>Built and maintain the official Boiler Blockchain website (boilerblockchain.org). Helped upgrade the site by designing, creating, and integrating dynamic pages/content</li>
        </ul>
      </div>

      <div className="experience-divider"></div>

      <div className="experienceContent">
        <h3>Zerogon Consulting</h3>
        <span className="experience-role">
          Front-End Developer | Jan 2024 - Aug 2024
        </span>
        <p>
          At Zerogon Consulting, I developed and maintained responsive user
          interfaces for web applications. I worked mainly with react and durign this expirence I
          collaborated with back-end developers to deliver seamless user
          experiences.
        </p>
        <ul className="experience-list">
          <li>Leveraged custom hooks to consume REST/GraphQL endpoints</li>
          <li>Optimized UI for different sized displays</li>
          <li>Enhanced animations (using framer motion) for immersive ux</li>
          <li>Built modular React components using custom hooks</li>
        </ul>
      </div>

      <div className="experienceFooter">
        <p className="contact-text">
          I am always looking for new opportunities!{" "}
          <Link to="/contact" className="contact-link">
            Contact me here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Experiences;

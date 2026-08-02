import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./resume.css";

const skillGroups = [
  {
    label: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python", "C", "Solidity", "Rust"],
  },
  {
    label: "Web3 / Blockchain",
    items: [
      "Solana (Rust/Anchor)",
      "Hedera HCS",
      "EVM",
      "Foundry",
      "ERC-8183",
      "ERC-7715",
      "Chainlink CRE",
      "Smart Contracts",
      "DeFi",
    ],
  },
  {
    label: "AI / Agents",
    items: [
      "AI agent design",
      "Agent-to-agent automation",
      "Claude",
      "GPT",
      "Computer vision",
      "LLM tooling",
    ],
  },
  {
    label: "Full Stack / Infra",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Tailscale",
      "Cloudflare",
      "Self-hosted infra (DappNode, BTC/XMR nodes)",
    ],
  },
];

function Resume() {
  return (
    <div className="resume-page">
      <Helmet>
        <title>Resume | Joey Kokinda</title>
        <meta
          name="description"
          content="Joey Kokinda's resume and skills: Go, TypeScript, Solana, Hedera HCS, Foundry, AI agents, and full-stack development."
        />
        <link rel="canonical" href="https://jkok.dev/resume" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="resume-content">
        <h1>Resume</h1>
        <div className="resume-image-container">
          <img
            src="/resume_screenshot.png"
            alt="Joey Kokinda's Resume"
            className="resume-image"
          />
        </div>
        <div className="download-section">
          <p>Want a copy?</p>
          <a
            href="/jkokinda_resume.pdf"
            download="Kokinda_Joey_Resume.pdf"
            className="download-button"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="resume-skills">
          <h2>Skills &amp; Stack</h2>
          {skillGroups.map((group) => (
            <div key={group.label} className="resume-skill-group">
              <span className="resume-skill-label">{group.label}:</span>{" "}
              <span className="resume-skill-items">
                {group.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;

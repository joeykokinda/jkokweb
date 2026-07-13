import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/lainpfp.jpg";
import "./home.css";

const pageLinks = [
  { type: "internal", to: "/projects", label: "projects" },
  { type: "internal", to: "/experience", label: "experience" },
  { type: "internal", to: "/resume", label: "resume" },
  { type: "internal", to: "/blog", label: "blog" },
  { type: "internal", to: "/contact", label: "contact" },
];

const socialLinks = [
  { href: "https://github.com/joeykokinda", label: "github" },
  { href: "https://x.com/sp3ked", label: "x" },
  { href: "https://www.linkedin.com/in/jkokinda/", label: "linkedin" },
];

function LinkRow({ items }) {
  return (
    <p className="link-row">
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <span className="link-sep">.</span>}
          {item.type === "internal" ? (
            <Link to={item.to} className="text-link">
              {item.label}
            </Link>
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </p>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Joey Kokinda - AI Developer & Student at Purdue University</title>
        <meta
          name="description"
          content="Joey Kokinda is an AI student at Purdue University specializing in computer vision, blockchain development, and full-stack applications. Explore my projects, experience, and writing."
        />
        <link rel="canonical" href="https://jkok.dev/" />
        <meta property="og:url" content="https://jkok.dev/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Helmet>

      <main className="home-card glass">
        <div className="home-head">
          <img src={profilePic} alt="Joey Kokinda" className="home-avatar" />
          <div className="home-head-text">
            <h1>Joey Kokinda</h1>
            <p className="home-sub">
              student studying ai at{" "}
              <a
                href="https://www.admissions.purdue.edu/majors/a-to-z/artificial-intelligence-science.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                purdue university
              </a>
            </p>
            <p className="home-sub home-setup-link">
              <Link to="/setup" className="text-link">
                see my current setup →
              </Link>
            </p>
          </div>
        </div>

        <hr className="home-divider" />

        <div className="home-tldr-block">
          <p className="home-about">
            Hey im Joey, today I am focused on{" "}
            <span className="grad-text">ai agents and automation</span>, always
            building with the best tech out right now.
          </p>
        </div>

        <p className="home-about-more">
          I have experience across crypto infrastructure, AI agents, full stack
          development, and embedded hardware. That means self hosted BTC and XMR
          nodes (
          <a
            href="https://pyras.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            pyras.org
          </a>
          ), agent tooling and automation (
          <a
            href="https://creou.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            creou.app
          </a>
          ,{" "}
          <a
            href="https://omenswap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            omenswap.com
          </a>
          ), various hardware projects (
          <Link to="/projects/phonefarm" className="text-link">
            phone farm
          </Link>
          ,{" "}
          <Link to="/projects/raspi" className="text-link">
            raspi
          </Link>
          ), and building applications across all stacks (
          <a
            href="https://turtosa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            turtosa.com
          </a>
          ,{" "}
          <a
            href="https://staklabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            staklabs.ai
          </a>
          ,{" "}
          <Link to="/projects" className="text-link">
            etc
          </Link>
          ). Most recently I placed 3rd in the AI agent bounty at the Hello Apex
          Hedera hackathon with{" "}
          <Link to="/projects/veridex" className="text-link">
            Veridex
          </Link>
          , and won 1st place in the Polymarket bounty at the Midwest Blockchain
          Conference with{" "}
          <Link to="/projects/jaeger" className="text-link">
            Jaeger
          </Link>
          .
        </p>

        <hr className="home-divider" />

        <div className="home-recent">
          <span className="home-links-label">RECENT</span>
          <div className="home-recent-body">
            <p className="home-recent-role">
              Intern &middot;{" "}
              <a
                href="https://10x.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                10x
              </a>{" "}
              <span className="home-recent-dates">(May&ndash;Jul 2026)</span>
            </p>
            <p className="home-recent-desc">
              Built an AI ads pipeline for bulk ad creation per avatar, auto
              generating TikTok &amp; Instagram slideshows and videos.
            </p>
          </div>
        </div>

        <hr className="home-divider" />

        <div className="home-links">
          <span className="home-links-label">PAGES</span>
          <LinkRow items={pageLinks} />
        </div>

        <div className="home-links">
          <span className="home-links-label">LINKS</span>
          <LinkRow items={socialLinks} />
        </div>
      </main>
    </div>
  );
}

export default HomePage;

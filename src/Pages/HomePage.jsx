import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/lainpfp.jpg";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { to: "/projects", label: "Projects", desc: "Everything I've built" },
  {
    to: "/experience",
    label: "Experience & Education",
    desc: "Where I've worked and studied",
  },
  { to: "/resume", label: "Resume", desc: "The full rundown" },
  { to: "/blog", label: "Blog", desc: "Notes and writeups" },
  { to: "/contact", label: "Contact", desc: "Get in touch" },
];

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

      <main className="home-card">
        <div className="home-intro">
          <img src={profilePic} alt="Joey Kokinda" className="home-avatar" />
          <div className="home-intro-text">
            <h1>Joey Kokinda</h1>
            <p className="home-tagline">
              Student studying AI at{" "}
              <a
                href="https://www.admissions.purdue.edu/majors/a-to-z/artificial-intelligence-science.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purdue University
              </a>
            </p>

            <div className="home-socials">
              <a
                href="https://github.com/joeykokinda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://x.com/sp3ked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/jkokinda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <p className="home-about">
          Hey, I'm Joey and I'm studying AI at Purdue University. I have
          experience developing AI-powered applications across web, mobile, and
          embedded systems. My passion lies in AI, computer vision, and
          robotics — I love building things that push the boundaries of what's
          possible.
        </p>

        <nav className="home-nav">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="home-nav-card">
              <span className="home-nav-label">{link.label}</span>
              <span className="home-nav-desc">{link.desc}</span>
              <span className="home-nav-arrow">→</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}

export default HomePage;

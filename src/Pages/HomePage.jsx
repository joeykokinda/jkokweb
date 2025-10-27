import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/pfp.png";
import { useAnimationContext } from "./animationContext";
import Experiences from "./experiences";
import Projects from "./projects";
import Education from "./education";
import GitHub from "./github";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./footer";
import { IconSphere } from "../components/IconSphere";
import { Canvas } from "@react-three/fiber";

function HomePage() {
  const { isAnimationDisabled } = useAnimationContext();

  return (
    <div className="home-page">
      <Helmet>
        <title>Joey Kokinda - AI Developer & Student at Purdue University</title>
        <meta name="description" content="Joey Kokinda is an AI student at Purdue University specializing in computer vision, blockchain development, and full-stack applications. View my portfolio of projects including Scout, Docu, PolyTerm, and more." />
        <link rel="canonical" href="https://jkok.dev/" />
        <meta property="og:url" content="https://jkok.dev/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Helmet>
      <div
        className={`animated-sections ${isAnimationDisabled ? "animations-disabled" : ""
          }`}
      >
        {/* Intro Section */}
        <section className="intro-section">
          <div className="content-wrapper">
            <div className="text-content">
              <h1>Joey Kokinda</h1>
              <p>
                Student studying AI at{" "}
                <a
                  href="https://www.admissions.purdue.edu/majors/a-to-z/artificial-intelligence-science.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Purdue University
                </a>
              </p>

              <div className="social-links">
                <a
                  href="https://github.com/joeykokinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://x.com/sp3ked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jkokinda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <Link to="/resume" className="social-link resume">
                  Resume
                </Link>
                <Link to="/contact" className="social-link resume">
                  Contact
                </Link>
              </div>
            </div>

            <div className="profile-section">
              <div className="sphere-container">
                <Canvas camera={{ position: [0, 0, 3] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <IconSphere />
                </Canvas>
              </div>
              <img src={profilePic} alt="Profile" className="profile-image" />
            </div>
          </div>
        </section>

        <div className="aboutBox">
          <div className="terminalHeader">
            <span className="terminalTitle">C:\Users\About&gt;</span>
            <div className="terminalControls">
              <span className="terminalControl">−</span>
              <span className="terminalControl">□</span>
              <span className="terminalControl">×</span>
            </div>
          </div>
          <div className="terminalContent">
            <p>
              <span className="first-line">
                Hey, im joey and im studying ai at purdue university.
              </span>{" "}
              I have experience{" "}
              <span className="whiteText">
                developing AI-powered applications across web, mobile, and
                embedded systems.
              </span>{" "}
              My passion lies in AI, computer vision, and robotics – I love
              building things that push the boundaries of whats possible.
            </p>
          </div>
        </div>

        {/* Experiences */}
        <section id="experiences" className="skills-section section">
          <h2> - Experiences - </h2>
          <Experiences />
        </section>

        {/* Projects */}
        <section id="projects" className="section full-width">
          <h2 className="projects-title"> - Projects - </h2>
          <Projects />
        </section>

        {/* Education */}
        <section id="education" className="skills-section section">
          <h2> - Education - </h2>
          <Education />
        </section>

        {/* GitHub */}
        <section id="github" className="skills-section section">
          <h2> - GitHub - </h2>
          <GitHub />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

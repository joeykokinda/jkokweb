import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Experiences from "./experiences";
import Education from "./education";
import Footer from "./footer";
import "./experienceEducation.css";

function ExperienceEducation() {
  return (
    <div className="exp-edu-page">
      <Helmet>
        <title>Experience & Education | Joey Kokinda</title>
        <meta
          name="description"
          content="Joey Kokinda's professional experience and education — Turtosa, Boiler Blockchain, Zerogon Consulting, Purdue University, and RIT."
        />
        <link rel="canonical" href="https://jkok.dev/experience" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="exp-edu-topbar">
        <Link to="/" className="back-btn">
          ← Back
        </Link>
      </div>

      <div className="exp-edu-content">
        <h1 className="exp-edu-title">Experience &amp; Education</h1>

        <section className="exp-edu-section">
          <h2 className="exp-edu-heading">Experience</h2>
          <Experiences />
        </section>

        <section className="exp-edu-section">
          <h2 className="exp-edu-heading">Education</h2>
          <Education />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ExperienceEducation;

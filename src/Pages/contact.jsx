import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Feel free to reach out using the details below or on any of my social
          platforms.
        </p>

        <div className="contact-rows">
          <div className="contact-row">
            <span className="contact-label">EMAIL</span>
            <a href="mailto:jkokinda9@gmail.com" className="text-link">
              jkokinda9 (at) gmail (dot) com
            </a>
          </div>

          <div className="contact-row">
            <span className="contact-label">PHONE</span>
            <a href="tel:+16107011998" className="text-link">
              6one0-7zero1-19nine8
            </a>
          </div>

          <div className="contact-row">
            <span className="contact-label">SOCIAL</span>
            <p className="link-row">
              <a
                href="https://github.com/joeykokinda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                github
              </a>
              <span className="link-sep">.</span>
              <a
                href="https://x.com/sp3ked"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                x
              </a>
              <span className="link-sep">.</span>
              <a
                href="https://www.linkedin.com/in/jkokinda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

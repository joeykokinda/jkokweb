import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faDownload } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/pfp.png";
import "./contactpage.css";

function ContactPageSimple() {
    const generateVCard = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Joey Kokinda
N:Kokinda;Joey;;;
ORG:Purdue University
TITLE:AI Student & Developer
EMAIL:jkokinda9@gmail.com
TEL:+16107019998
URL:https://jkokweb.vercel.app
NOTE:AI Student at Purdue University. Experience in AI-powered applications across web, mobile, and embedded systems. Passion for AI, computer vision, and robotics.
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Joey_Kokinda.vcf';
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="contactpage-wrapper">
            <div className="contactpage-container">
                <div className="contact-card">
                    <div className="contact-header">
                        <div className="contact-profile-section">
                            <img src={profilePic} alt="Joey Kokinda" className="contact-profile-img" />
                        </div>
                        <div className="contact-profile-info">
                            <h1 className="contactpage-title">Joey Kokinda</h1>
                            <p className="contact-role">AI Student & Developer</p>
                            <p className="contact-university">Purdue University</p>
                        </div>
                    </div>

                    <div className="contact-about">
                        <p className="contact-bio">
                            Studying AI at Purdue University with experience developing AI powered 
                            applications across web, mobile, and embedded systems. My passion lies 
                            in web3, AI, 3D printing, and robotics. I love building things that push 
                            the boundaries of what's possible.
                        </p>
                    </div>

                    <div className="contact-actions">
                        <button 
                            onClick={generateVCard}
                            className="action-button primary"
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            Add Contact
                        </button>
                        <Link to="/" className="action-button secondary">
                            Learn More
                        </Link>
                    </div>

                    <div className="contactpage-details">
                        <div className="contactpage-item phone-item">
                            <FontAwesomeIcon icon={faPhone} className="contactpage-icon phone-icon" />
                            <div className="contactpage-info">
                                <a href="tel:+16107019998" className="contactpage-link phone-link">
                                    610-701-9998
                                </a>
                                <span className="contactpage-label">Phone</span>
                            </div>
                        </div>

                        <div className="contactpage-item email-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contactpage-icon email-icon" />
                            <div className="contactpage-info">
                                <a href="mailto:jkokinda9@gmail.com" className="contactpage-link email-link">
                                    jkokinda9@gmail.com
                                </a>
                                <span className="contactpage-label">Email</span>
                            </div>
                        </div>
                    </div>

                    <div className="contactpage-social">
                        <div className="contactpage-social-links">
                            <a
                                href="https://github.com/joeykokinda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://x.com/sp3ked"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="Twitter/X"
                            >
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jkokinda/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPageSimple; 
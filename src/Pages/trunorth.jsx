import React from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import trunorth1 from "../images/TruNorth/Screenshot 2025-10-22 at 14-37-51 HVAC Contractor Chester County PA - Heating & Air Conditioning Tru North Heating and Air Inc.png";
import trunorth2 from "../images/TruNorth/Screenshot 2025-10-22 at 14-38-20 HVAC Contractor Chester County PA - Heating & Air Conditioning Tru North Heating and Air Inc.png";
import trunorth3 from "../images/TruNorth/Screenshot 2025-10-22 at 14-36-44 Heating Installation Chester County PA Furnace & Boiler Replacement Tru North Heating and Air Inc.png";
import trunorth4 from "../images/TruNorth/Screenshot 2025-10-22 at 14-37-33 Get a Free HVAC Proposal Tru North HVAC Estimate Tru North Heating and Air Inc.png";

function TruNorth() {
  const images = [
    trunorth2,
    trunorth1,
    trunorth3,
    trunorth4,
  ];

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>TruNorth HVAC - Website Development</h1>
        <div className="header-links">
          <a
            href="https://trunorthhvac.com"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Visit Website ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`TruNorth HVAC Website ${idx + 1}`}
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
            <h2>Overview</h2>
            <p>
              TruNorth HVAC is a unique website development project that breaks away from traditional corporate HVAC aesthetics. The project aimed to create an authentic online presence that emphasizes community involvement and real people, rather than relying on generic stock footage and overused blue/orange color schemes.
            </p>
            <p>
              The website serves as an effective sales tool while reflecting TruNorth's core values of sustainability and transparency, providing visitors with a genuine connection to the business and its mission.
            </p>
            <p>
              <strong>Project Timeline:</strong> Summer 2025
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Artistic & Engaging Design:</strong> Clean, visually appealing layout that highlights the human aspect of the business with prominent calls-to-action throughout
              </li>
              <li>
                <strong>Interactive Product Pages:</strong> Immersive shopping experience with detailed descriptions and real-world applications that showcase TruNorth's services and products
              </li>
              <li>
                <strong>Secret Deals Section:</strong> Hidden feature providing exclusive offers to returning customers and subscribers, fostering loyalty and community engagement
              </li>
              <li>
                <strong>SEO Optimization:</strong> Content carefully optimized for relevant search queries while maintaining design integrity and site visibility
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Intuitive navigation and responsive design ensuring seamless experience across all devices
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <ul>
              <li>
                <strong>Frontend Framework:</strong> React
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS
              </li>
              <li>
                <strong>Responsive Design:</strong> Mobile-first approach
              </li>
              <li>
                <strong>SEO:</strong> On-page optimization and content strategy
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Design Philosophy</h2>
            <p>
              The TruNorth HVAC website deliberately avoids traditional corporate aesthetics found in typical HVAC company websites. Instead of stock images and predictable color schemes, the design focuses on:
            </p>
            <ul>
              <li>Authentic imagery featuring real team members and actual projects</li>
              <li>A fresh, modern color palette that stands out in the industry</li>
              <li>Community-focused messaging that emphasizes relationships over transactions</li>
              <li>Sustainable practices and transparent business operations</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Owner Collaboration</h2>
            <p>
              Working closely with Ray, the owner of TruNorth HVAC, was integral to the project's success. Ray's insights into the brand's mission and values guided key design decisions, ensuring the final product authentically represented TruNorth's dedication to quality and customer care.
            </p>
            <p>
              The stakeholders continue to work with Ray on refining and optimizing the SEO strategy to ensure TruNorth maintains top search rankings while preserving the unique design and user experience that sets the website apart.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TruNorth;


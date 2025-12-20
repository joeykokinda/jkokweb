import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import exoform1 from "../images/Exoform/Screenshot 2025-10-22 at 14-49-22 Exoform - Digitally Crafted 3D Printed Sculptures.png";
import exoform2 from "../images/Exoform/Screenshot 2025-10-22 at 14-49-43 Exoform - Digitally Crafted 3D Printed Sculptures.png";
import exoform3 from "../images/Exoform/Screenshot 2025-10-22 at 14-49-52 All Products - 3D Printed Sculptures Exoform.png";
import exoform4 from "../images/Exoform/Screenshot 2025-10-22 at 14-50-09 The Scar - $89.00 Exoform.png";

function Exoform() {
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const images = [
    exoform1,
    exoform4,
    exoform3,
    exoform2,
  ];

  return (
    <>
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size" />
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>Exoform - 3D Printing Shop</h1>
        <div className="header-links">
          <a
            href="https://exoform.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Visit Shop ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`Exoform Shop ${idx + 1}`}
              style={{
                objectFit: "contain",
                background: "rgba(0, 0, 0, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => setLightboxImage(img)}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Exoform is my personal e-commerce platform for selling 3D printed items. The shop focuses on quality prints with a clean, straightforward approach—no fluff, just well-designed products that I print and ship myself.
            </p>
            <p>
              The goal was to build an online storefront that lets the products speak for themselves, with a focus on fast performance, clean design, and a smooth checkout experience.
            </p>
          </section>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <ul>
              <li>
                <strong>Frontend:</strong> Next.js for server-side rendering and optimized performance
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS for responsive, modern design
              </li>
              <li>
                <strong>Payment Processing:</strong> Stripe integration for secure checkout
              </li>
              <li>
                <strong>Backend:</strong> Custom API routes in Next.js for product management and order processing
              </li>
              <li>
                <strong>Deployment:</strong> Vercel for fast load times and continuous deployment
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Rotating Image Carousel:</strong> 360-degree product views allowing customers to see items from every angle. This was one of the more complex features to implement, requiring optimization for smooth rotation and fast loading
              </li>
              <li>
                <strong>Product Variants:</strong> Options for different finishes or sizes where applicable
              </li>
              <li>
                <strong>Stripe Integration:</strong> Secure payment processing with webhook handling for order fulfillment
              </li>
              <li>
                <strong>Optimized Performance:</strong> Fast page loads even with high-quality product images
              </li>
              <li>
                <strong>Responsive Design:</strong> Works seamlessly across desktop and mobile devices
              </li>
              <li>
                <strong>SEO Optimized:</strong> Proper meta tags and structured data for search visibility
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Custom Backend Logic</h2>
            <p>
              Rather than using a traditional CMS, the shop runs on custom Next.js API routes that handle:
            </p>
            <ul>
              <li>Product catalog management</li>
              <li>Stripe payment intent creation</li>
              <li>Order processing and tracking</li>
              <li>Webhook handling for payment confirmation</li>
              <li>Real-time inventory updates</li>
            </ul>
            <p>
              This approach provides full control over the shopping experience while keeping the codebase clean and maintainable.
            </p>
          </section>

          <section className="project-section">
            <h2>Design Approach</h2>
            <p>
              The design philosophy is simple: clean, functional, and focused on the products. The interface stays out of the way, letting customers browse and purchase without unnecessary distractions. High-quality product photography combined with the 360-degree carousel gives customers confidence in what they're buying.
            </p>
          </section>

          <section className="project-section">
            <h2>Technical Challenges</h2>
            <p>
              The rotating image carousel was the most technically demanding feature. It required careful optimization to ensure smooth transitions and fast loading times, especially for high-resolution product images. The solution involved preloading images, optimizing file sizes, and implementing efficient rendering logic.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default Exoform;


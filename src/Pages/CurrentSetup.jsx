import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import setup1 from "../images/Setup/setup-phonefarm.png";

function CurrentSetup() {
  const [lightboxImage, setLightboxImage] = useState(null);

  // Drop more photos into src/images/Setup and add them here
  const images = [setup1];

  return (
    <>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
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
        <Helmet>
          <title>Current Setup | Joey Kokinda</title>
          <meta
            name="description"
            content="Joey Kokinda's current setup: a self-hosted homelab running Ethereum node infrastructure, self-hosted BTC/XMR/ETH nodes, an Android phone farm driven by a Raspberry Pi, all tied together over a Tailscale tailnet mesh."
          />
          <link rel="canonical" href="https://jkok.dev/setup" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Link to="/" className="back-btn">
          ← Back
        </Link>

        <div className="project-header">
          <h1>Current Setup</h1>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`Setup ${idx + 1}`}
                style={{
                  objectFit: "contain",
                  background: "rgba(0, 0, 0, 0.8)",
                  cursor: "pointer",
                }}
                onClick={() => setLightboxImage(src)}
              />
            </div>
          ))}
        </div>

        <div className="project-content">
          <div className="projectDetailsText">
            <section className="project-section">
              <h2>Overview</h2>
              <p>
                Most of what I build runs on hardware I own and keep online
                myself. My setup is a small self-hosted homelab: a main
                workstation for development, always-on machines running node
                infrastructure and an Android phone farm, and a Tailscale tailnet
                that stitches all of it into one private network I can reach from
                anywhere.
              </p>
            </section>

            <section className="project-section">
              <h2>Workstation</h2>
              <p>
                My daily driver runs CachyOS with Hyprland and the fish shell,
                Neovim as my editor. It is where everything gets written and
                tested before it goes out to the always-on machines. Go is my
                primary language, alongside C, TypeScript, and Python.
              </p>
            </section>

            <section className="project-section">
              <h2>Node Infrastructure</h2>
              <p>
                A DappNode custom build runs 35+ containerized services as a true
                IRL Docker host — a full Ethereum node with 24.9M+ blocks synced,
                zero rate limits, and Pocket Network relay mining for passive
                revenue. Alongside it I run self-hosted Bitcoin and Monero full
                nodes, so the crypto apps I build talk to my own infrastructure
                instead of a third-party RPC.
              </p>
            </section>

            <section className="project-section">
              <h2>Phone Farm + Raspberry Pi</h2>
              <p>
                A rack of 6+ Android phones is driven over wireless ADB by a
                Raspberry Pi that stays powered 24/7. The Pi runs the{" "}
                <Link to="/projects/phonefarm" className="text-link">
                  PhoneFarm
                </Link>{" "}
                dashboard as a service, keeps the ADB connections alive, restarts
                stalled devices on its own, and fires scheduled macros
                server-side — so the fleet keeps running with every laptop closed.
              </p>
            </section>

            <section className="project-section">
              <h2>The Tailnet</h2>
              <p>
                Everything joins one Tailscale (WireGuard) tailnet — a private
                mesh where the Raspberry Pi, the node box, my workstation, my
                laptop, and my phone can all reach each other directly. Nothing is
                exposed to the public internet; I hit any machine over its tailnet
                address from anywhere in the world and it behaves as if I were on
                the same wifi. TLS is terminated over the tailnet so secure-context
                tools like the phone farm's in-browser video decoder work
                remotely, with zero port forwarding.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentSetup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import "./CurrentSetup.css";

import laptop from "../images/Setup/laptop.png";
import gpuRig from "../images/Setup/gpu-rig.png";
import server from "../images/Setup/server.png";
import pc4090 from "../images/Setup/pc-4090.png";
import pc3070ti from "../images/Setup/pc-3070ti.png";
import dockerHomenode from "../images/Setup/docker-homenode.jpeg";
import macmini from "../images/Setup/macmini.png";
import phonefarm from "../images/Setup/phonefarm.png";
import printerCentauri from "../images/Setup/printer-centauri.png";
import printerA1mini1 from "../images/Setup/printer-a1mini-1.png";
import printerA1mini2 from "../images/Setup/printer-a1mini-2.png";
import printerA1_1 from "../images/Setup/printer-a1-1.png";
import printerA1_2 from "../images/Setup/printer-a1-2.png";

function CurrentSetup() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const groups = [
    {
      title: "Workstations",
      sub: "The machines I actually work on day to day.",
      devices: [
        {
          name: "Main Laptop",
          img: laptop,
          specs: ["CachyOS + Hyprland", "64 GB RAM", "24-core CPU"],
        },
        {
          name: "Workstation #1",
          img: pc4090,
          specs: ["EndeavourOS", "RTX 4090", "Full desktop build", "Dual monitors"],
        },
        {
          name: "Workstation #2",
          img: pc3070ti,
          specs: ["Windows", "RTX 3070 Ti", "Full desktop build"],
        },
        {
          name: "Mac Mini",
          img: macmini,
          specs: ["macOS", "Xcode toolchain", "App Store builds"],
          note: "Dedicated to App Store development and iOS builds.",
        },
      ],
    },
    {
      title: "Compute & AI",
      sub: "Heavy iron for local models and anything that needs real cores.",
      devices: [
        {
          name: "GPU Rig",
          img: gpuRig,
          specs: ["2× RTX 3090", "RTX 2080 (offline)", "GTX 1080 (offline)"],
          note: "Runs localized agents on a Qwen 3.6 27B uncensored model, fully self-hosted.",
        },
        {
          name: "Server",
          img: server,
          specs: [
            "384 GB RAM",
            "2× Intel Xeon CPUs",
            "28 cores each (56 total)",
          ],
          note: "The heavy-lifting box for anything that needs real cores and memory.",
        },
      ],
    },
    {
      title: "Backend & Nodes",
      sub: "Always-on machines running node infrastructure and backend services.",
      devices: [
        {
          name: "IRL Docker Home Node",
          img: dockerHomenode,
          specs: [
            "DappNode home node",
            "Self-hosted Monero (XMR) node",
            "Self-hosted Bitcoin (BTC) node",
          ],
          note: (
            <>
              A true IRL Docker host running my dApp home node so crypto apps
              talk to my own infrastructure instead of third-party RPC. Powers{" "}
              <Link to="/projects/pyras" className="text-link">
                Pyras
              </Link>
              .
            </>
          ),
        },
        {
          name: "Linux Backend Servers",
          img: dockerHomenode,
          specs: ["2× Dell SFF", "Linux", "Always-on"],
          note: "Small dedicated Linux boxes hosting lightweight backend services.",
        },
      ],
    },
    {
      title: "3D Printers",
      sub: (
        <>
          The print farm behind{" "}
          <Link to="/projects/exoform" className="text-link">
            Exoform
          </Link>{" "}
          — one enclosed Elegoo Centauri Carbon plus four Bambu Lab machines.
        </>
      ),
      devices: [
        {
          name: "Elegoo Centauri Carbon",
          img: printerCentauri,
          specs: ["256×256×256 mm", "Carbon-fiber capable", "Enclosed chamber"],
        },
        {
          name: "Bambu Lab A1 Mini",
          img: printerA1mini1,
          specs: ["AMS multicolor", "Compact bed", "Fast prototyping"],
        },
        {
          name: "Bambu Lab A1 Mini",
          img: printerA1mini2,
          specs: ["AMS multicolor", "Compact bed", "Fast prototyping"],
        },
        {
          name: "Bambu Lab A1",
          img: printerA1_1,
          specs: ["256×256 mm bed", "AMS multicolor", "High throughput"],
        },
        {
          name: "Bambu Lab A1",
          img: printerA1_2,
          specs: ["256×256 mm bed", "AMS multicolor", "High throughput"],
        },
      ],
    },
    {
      title: "Phone Farm",
      sub: "A rack of 6+ Android phones driven over wireless ADB by an always-on Raspberry Pi.",
      devices: [
        {
          name: "Android Phone Farm",
          img: phonefarm,
          specs: [
            "6+ Android devices",
            "Wireless ADB fleet",
            "Raspberry Pi controller, 24/7",
          ],
          note: (
            <>
              Runs the{" "}
              <Link to="/projects/phonefarm" className="text-link">
                PhoneFarm
              </Link>{" "}
              dashboard as a service — keeps ADB alive, restarts stalled devices,
              and fires scheduled macros server-side.
            </>
          ),
        },
      ],
    },
  ];

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
            content="Joey Kokinda's current setup: a self-hosted homelab — workstations, a GPU rig running local Qwen agents, a 56-core server, self-hosted BTC/XMR nodes on a DappNode home node, a Mac mini, an Android phone farm, and a fleet of Bambu Lab and Elegoo 3D printers."
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

        <p className="setup-intro">
          Me and my brother's local setup — a self-hosted homelab of
          workstations, always-on node machines, an Android phone farm, and a
          wall of 3D printers, all stitched into one private Tailscale tailnet we
          can reach from anywhere.
        </p>

        {groups.map((group, gi) => (
          <section className="setup-section" key={gi}>
            <h2 className="setup-section-title">{group.title}</h2>
            {group.sub && <p className="setup-section-sub">{group.sub}</p>}
            <div className="device-grid">
              {group.devices.map((d, idx) => (
                <div key={idx} className="device-card">
                  <div
                    className="device-card-media"
                    onClick={() => setLightboxImage(d.img)}
                  >
                    <img src={d.img} alt={d.name} />
                  </div>
                  <div className="device-card-body">
                    <h3 className="device-card-name">{d.name}</h3>
                    <ul className="device-specs">
                      {d.specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                    {d.note && <p className="device-note">{d.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="project-content">
          <div className="projectDetailsText">
            <section className="project-section">
              <h2>The Tailnet</h2>
              <p>
                Everything joins one Tailscale (WireGuard) tailnet — a private
                mesh where the Raspberry Pi, the node boxes, our workstations, and
                our phones all reach each other directly. Nothing is exposed to
                the public internet; we hit any machine over its tailnet address
                from anywhere and it behaves as if we were on the same wifi, with
                zero port forwarding.
              </p>
            </section>
          </div>
        </div>

        <p className="setup-contact">
          Contact me at{" "}
          <a href="mailto:j@kokinda.com" className="text-link">
            j@kokinda.com
          </a>
        </p>
      </div>
    </>
  );
}

export default CurrentSetup;

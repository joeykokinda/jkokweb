import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import omenswapHome from "../images/OmenSwap/home.png";
import omenswapTerminal from "../images/OmenSwap/terminal.png";
import omenswapDocs from "../images/OmenSwap/docs.png";
import omenswapPools from "../images/OmenSwap/pools.png";
import omenswapOg from "../images/OmenSwap/og.png";

function Omenswap() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    omenswapHome,
    omenswapTerminal,
    omenswapDocs,
    omenswapPools,
    omenswapOg,
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
        <Helmet>
          <title>OmenSwap - Non-Custodial Crypto Swaps for Agents | Joey Kokinda</title>
          <meta
            name="description"
            content="OmenSwap is a non-custodial crypto swap service for AI agents and humans. No accounts, no KYC, no custody. Send from your own wallet to a one-time deposit address and OmenSwap pays out your destination. Native MCP server, SSH TUI, no-JS mirror, and a plain HTTP API."
          />
          <link rel="canonical" href="https://jkok.dev/projects/omenswap" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>OmenSwap - Non-Custodial Swaps for Agents and Humans</h1>
          <div className="header-links">
            <a
              href="https://omenswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Site ↗
            </a>
            <a
              href="https://omenswap.com/docs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Docs ↗
            </a>
            <a
              href="https://mcp.omenswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              MCP Server ↗
            </a>
            <a
              href="https://ssr.omenswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              No-JS Mirror ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`OmenSwap Screenshot ${idx + 1}`}
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
                OmenSwap is non-custodial crypto swapping for AI agents and humans. No accounts, no KYC, no custody. You send the input asset from your own wallet to a one-time deposit address; OmenSwap detects the deposit on-chain and pays the output to your destination address. Nothing is custodied beyond the moments between deposit and payout.
              </p>
              <p>
                It swaps ETH, BTC, XMR, USDC, USDT, SOL and Polygon assets across Ethereum, Bitcoin, Monero, Solana, Tron and Polygon. Floating rate (re-priced at deposit, lower fee, 24h window) or fixed rate (payout locked at creation). Optional refund address per swap, plus a Monero reserve proof and on-chain vault addresses for proof of reserves.
              </p>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>
              <p>
                The whole thing is one deposit-address flow, no bridges and no wrapped tokens:
              </p>
              <ul>
                <li>
                  <strong>Discover markets:</strong> read <code>GET /pairs</code> and <code>GET /tokens</code> for live rates, min/max amounts, and reserves — never hardcoded.
                </li>
                <li>
                  <strong>Create the order:</strong> <code>POST /swaps</code> returns a unique one-time deposit address (deterministic CREATE2 on EVM chains), the exact input amount, and an expiry.
                </li>
                <li>
                  <strong>Send the deposit:</strong> you sign and broadcast the exact amount from your own wallet, on the input asset's chain, before it expires. OmenSwap never holds your keys.
                </li>
                <li>
                  <strong>Poll for status:</strong> the swap moves <code>pending → awaiting_confirmation → deposited → completed</code>, and OmenSwap pays out your destination after the required confirmations.
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Interfaces</h2>
              <p>
                One Go backend, five ways in. The React web app, a fully server-rendered no-JS mirror (Tor Browser "Safest" mode and no-JavaScript visitors get auto-directed there), an SSH TUI you reach with <code>ssh tui.omenswap.com</code>, a native MCP server for agents, and the plain HTTP API underneath all of it. Clearnet sites advertise Tor onion services via the Onion-Location header.
              </p>
            </section>

            <section className="project-section">
              <h2>For AI Agents (MCP)</h2>
              <p>
                Agents call typed tools instead of scraping HTTP. Point any MCP client (Claude Code, Cursor, custom) at one URL:
              </p>
              <div style={{ overflowX: "auto" }}>
                <pre style={{ fontSize: "13px", fontFamily: "Courier New, monospace", color: "var(--ink)", background: "var(--cream-2)", padding: "12px", borderRadius: "12px", border: "var(--border)" }}>
{`{
  "mcpServers": {
    "omenswap": { "url": "https://mcp.omenswap.com" }
  }
}`}
                </pre>
              </div>
              <p>
                Tools: <code>get_info</code>, <code>list_tokens</code>, <code>list_pairs</code>, <code>get_quote</code>, <code>create_swap</code>, <code>get_swap_status</code>. Resources expose the workflow guide and OpenAPI spec, plus a parameterized <code>swap_flow</code> prompt. The MCP is a thin, unprivileged client of the public API: it holds no keys, can't sign or move funds, and exposes no admin or reserve access. The agent signs the deposit from its own wallet and re-verifies address, amounts, and status before sending. Machine-readable discovery files (<code>/llms.txt</code>, <code>/AGENTS.md</code>, <code>/api.md</code>, <code>/api/v1/openapi.json</code>) are served at the domain root.
              </p>
            </section>

            <section className="project-section">
              <h2>Stack</h2>
              <p>
                Go backend (swaps, payouts, chain monitors, pricing, HTTP API, TUI infra) with Foundry contracts for the CREATE2 deposit factory. React + Vite frontend, a Node server-rendered no-JS mirror, an SSH TUI, and a standalone MCP server. Per-IP rate limiting, idempotency keys, and optional per-key auth for higher limits.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Omenswap;

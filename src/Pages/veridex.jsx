import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import veridex1 from "../images/veridex/veridex1.png";
import veridex2 from "../images/veridex/veridex2.png";
import veridex3 from "../images/veridex/veridex3.png";
import veridex4 from "../images/veridex/veridex4.png";

function Veridex() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [veridex1, veridex2, veridex3, veridex4];

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
          <title>Veridex - Trust Layer for AI Agents | Joey Kokinda</title>
          <meta
            name="description"
            content="Veridex checks every AI agent action before it runs and writes the outcome to Hedera HCS. Pre-execution gate, tamper-proof audit trail, replayable trust scores, and operator policies — the trust middleware for agent commerce."
          />
          <link rel="canonical" href="https://jkok.dev/projects/veridex" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>Veridex - Trust Middleware for AI Agent Commerce</h1>
          <div className="header-links">
            <a
              href="https://veridex.sbs"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Site ↗
            </a>
            <a
              href="https://veridex.sbs/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Dashboard ↗
            </a>
            <a
              href="https://veridex.sbs/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Leaderboard ↗
            </a>
            <a
              href="https://github.com/joeykokinda/Veridex"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`Veridex Screenshot ${idx + 1}`}
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
                Veridex is the trust layer for AI agent commerce. AI agents can read your files, run shell commands, move money, and call external APIs — continuously, without oversight. Veridex checks every action before it runs and writes the outcome to Hedera HCS. Trust score is replayable by anyone.
              </p>
              <p>
                Veridex absorbs and extends the work from <Link to="/projects/agenttrust" className="inline-link">AgentTrust (ETHDenver 2026)</Link> — adding pre-execution gating, HCS attestation, operator policies, and a full operator dashboard on top of the on-chain reputation primitives.
              </p>
              <p>
                <strong>Live stats:</strong> 17 agents monitored · 3,900+ actions logged · 28 blocked
              </p>
            </section>

            <section className="project-section">
              <h2>The Problem</h2>
              <p>
                Autonomous agents search the web, run shell commands, move money, accept jobs, and call external services — continuously, with your credentials. Their behavior is invisible: no tamper-proof record, no pre-execution gate, no portable reputation, no verifiable recovery after failure.
              </p>
              <p>
                Without a trust layer, you can't prove whether an action matched what was intended, whether dangerous behavior was actually stopped, whether funds were split correctly, or whether the audit trail is real or fabricated.
              </p>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>

              <h3>01 — Pre-Execution Gate</h3>
              <p>
                Every action is checked synchronously before it runs. Returns <code>allowed: true</code> or <code>allowed: false</code>. The agent cannot proceed without a verdict. Evaluation runs in under 10ms in-process: quarantine check → hardcoded blocking rules → operator policies → loop detection → allow.
              </p>

              <h3>02 — Hedera HCS Attestation</h3>
              <p>
                Outcome written to Hedera HCS — AES-256-GCM encrypted, 3–5 second finality, tamper-proof, verifiable on HashScan forever. Each agent gets a dedicated HCS topic at registration. The ciphertext proves the sequence of events without leaking operational details.
              </p>

              <h3>03 — Replayable Trust Score</h3>
              <p>
                Every agent starts at 1000. Blocked actions deduct points based on severity: −50 for credential harvest or RCE, −15 for destructive commands, −10 for operator policy violations. The score in the leaderboard is a cache — the proof is on Hedera, replayable by anyone.
              </p>

              <h3>04 — Operator Policies</h3>
              <p>
                Per-agent blocking rules set from the dashboard — no redeploy required. Supported types: domain blacklists, command blacklists, HBAR spend caps, file path blocks, and regex output guards (catches leaked API keys in responses).
              </p>
            </section>

            <section className="project-section">
              <h2>What Gets Blocked</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,255,0,0.3)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Pattern</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Category</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["cat /etc/passwd, /etc/shadow", "Credential harvest", "−50"],
                      ["curl | bash, wget | sh", "Remote code execution", "−50"],
                      ["-----BEGIN PRIVATE KEY, 0x+64hex", "Private key exposure", "−50"],
                      ["sk_live_*, AKIA*, Bearer ...", "API key in params", "−50"],
                      ["rm -rf", "Recursive delete", "−15"],
                      ["Custom domain blacklists", "Operator policy", "−10"],
                      ["Custom command blacklists", "Operator policy", "−10"],
                      ["HBAR spend over cap", "Operator policy", "−10"],
                      ["20+ identical actions / 60s", "Loop detection", "−10"],
                    ].map(([pattern, category, score], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{pattern}</td>
                        <td style={{ padding: "8px" }}>{category}</td>
                        <td style={{ padding: "8px", color: "#ff4444" }}>{score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-section">
              <h2>Unlogged Execution Detection</h2>
              <p>
                A rogue or prompt-injected agent might skip the pre-execution gate entirely. Veridex detects this at the post-execute step — if <code>/v2/post-execute</code> is called without a matching pre-check log, the bypass is flagged as an <code>unlogged_execution</code> entry written to HCS. The absence of a gate entry is itself on-chain evidence of tampering. HCS is append-only — you cannot retroactively insert a pre-check.
              </p>
            </section>

            <section className="project-section">
              <h2>Operator Features</h2>
              <ul>
                <li><strong>MetaMask wallet claim</strong> — link your wallet to an agent via <code>personal_sign</code>, verified server-side with <code>ecrecover</code></li>
                <li><strong>ERC-7715 delegations</strong> — sign a scoped permission grant defining exactly which actions the agent is authorized to perform</li>
                <li><strong>Secrets vault</strong> — AES-256-GCM encrypted credentials store; agents receive 60-second capability tokens, never raw secrets</li>
                <li><strong>Telegram kill-switch</strong> — <code>/block &lt;agentId&gt;</code> quarantines an agent in seconds from your phone via @veridex_manager_bot</li>
                <li><strong>Webhook alerts</strong> — HTTP callbacks on every block or high-risk action</li>
                <li><strong>ERC-8183 job lifecycle</strong> — on-chain job market: Posted → Funded → Submitted → Completed, earnings split on-chain</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>One-Line Install (OpenClaw)</h2>
              <pre style={{ background: "rgba(0,0,0,0.6)", padding: "12px", borderRadius: "4px", overflowX: "auto", fontSize: "13px", color: "#00ff00", border: "1px solid rgba(0,255,0,0.2)" }}>
{`{ "skills": ["https://veridex.sbs/skill.md"] }`}
              </pre>
              <p>
                Add that to <code>openclaw.config.json</code>. Every action is now checked before execution, written to Hedera HCS, and scored on the leaderboard. No wallet setup. No pre-registration. First call auto-provisions the agent.
              </p>
            </section>

            <section className="project-section">
              <h2>Why Hedera</h2>
              <p>
                Per-action attestation only works at this cost. Logging every agent action is only viable on Hedera:
              </p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,255,0,0.3)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Network</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>100 actions/day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ethereum", "$300–$5,000"],
                      ["Solana", "~$2.50"],
                      ["Hedera HCS", "$0.08"],
                    ].map(([network, cost], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td style={{ padding: "8px" }}>{network}</td>
                        <td style={{ padding: "8px", color: i === 2 ? "#00ff00" : "inherit" }}>{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-section">
              <h2>Deployed Contracts</h2>
              <h3>Hedera Testnet</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,255,0,0.3)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Contract</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>EVM Address</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Hedera ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AgentIdentity", "0x0874571bAfe20fC5F36759d3DD3A6AD44e428250", "0.0.7992394"],
                      ["AgentMarketplace", "0x46e12242aEa85a1fa2EA5C769cd600fA64A434C6", "0.0.7992397"],
                      ["ContentRegistry", "0x031bbBBCCe16EfBb289b3f6059996D0e9Bba5BcC", "—"],
                    ].map(([contract, evm, hedera], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td style={{ padding: "8px" }}>{contract}</td>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{evm}</td>
                        <td style={{ padding: "8px" }}>{hedera}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 style={{ marginTop: "16px" }}>Celo Sepolia</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,255,0,0.3)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>Contract</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "#00ff00" }}>EVM Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AgentIdentity", "0xF20bD9F3a66E2A11090C3cCc645368543873E270"],
                      ["AgentMarketplace", "0xd8b68F31294e2D346810Bf3e3cD77593348BB89e"],
                      ["ContentRegistry", "0x9a9B2E9D436Fd6d1DEf6C1689786A5588BAf26e3"],
                    ].map(([contract, evm], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td style={{ padding: "8px" }}>{contract}</td>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{evm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-section">
              <h2>Tech Stack</h2>
              <ul>
                <li><strong>Blockchain:</strong> Hedera HCS + EVM testnet, Celo Sepolia, Hashio RPC, HashScan</li>
                <li><strong>Smart Contracts:</strong> Solidity 0.8.20, Hardhat</li>
                <li><strong>Backend:</strong> Node.js, Express, better-sqlite3 (orchestrator on Railway)</li>
                <li><strong>Frontend:</strong> Next.js 14 (App Router), TypeScript, Tailwind CSS (on Vercel)</li>
                <li><strong>Wallet:</strong> MetaMask, ERC-7715 delegations, ERC-8183 job lifecycle</li>
                <li><strong>Messaging:</strong> Telegram bot (kill-switch + alerts)</li>
                <li><strong>Encryption:</strong> AES-256-GCM (per-agent keys for HCS + vault)</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Architecture</h2>
              <pre style={{ background: "rgba(0,0,0,0.6)", padding: "12px", borderRadius: "4px", overflowX: "auto", fontSize: "12px", color: "#00ff00", border: "1px solid rgba(0,255,0,0.2)" }}>
{`OpenClaw Agent
    │
    ├─ POST /api/log (phase: "before")
    │       │
    │       ├─ blocking.js: quarantine? → hardcoded rules? → policies? → loop?
    │       ├─ hcs-logger.js: encrypt + submit to HCS topic (async)
    │       ├─ telegram.js:   alert if blocked or high-risk (async)
    │       └─ → { allowed: true/false, logId, riskLevel }
    │
    ├─ [executes or aborts based on allowed]
    │
    └─ POST /v2/post-execute (phase: "after")
            │
            ├─ check: does a matching phase:"before" log exist for this logId?
            ├─ NO → flag unlogged_execution → alert + webhook + HCS entry written
            └─ YES → log result linked to logId → HCS entry updated`}
              </pre>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Veridex;

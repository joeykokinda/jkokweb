import React, { useEffect, useState, useMemo } from "react";
import "./projects.css";
import { Link, useNavigate } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";
import docuImage from "../images/docu1.png";
import metaImage from "../images/meta.png";
import mlh1 from "../images/mlh1.png";
import cosmosImage from "../images/cosmosLogo.png";
import blockImage from "../images/block1.png";
import tripImage from "../images/trip.jpg";
import promptr1 from "../images/promptr1.png";
import trunorthImage from "../images/TruNorth/Screenshot 2025-10-22 at 14-38-20 HVAC Contractor Chester County PA - Heating & Air Conditioning Tru North Heating and Air Inc.png";
import exoformImage from "../images/Exoform/Screenshot 2025-10-22 at 14-49-22 Exoform - Digitally Crafted 3D Printed Sculptures.png";
import polytermImage from "../images/polyterm/2025-10-22T15:01:20,845467989-04:00.png";
import youvestImage from "../images/YouVest/youvest1.png";

function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [showSSHPopup, setShowSSHPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const sshCommand = "ssh polyterm@polyterm.app";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sshCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filterCategories = useMemo(
    () => ({
      all: [],
      hardware: ["raspi", "bike"],
      software: ["promptr", "docu", "scout", "tools", "cosmos", "locallens", "unbolted", "block", "trip", "trunorth", "exoform", "polyterm", "youvest"],
      web3: ["youvest", "cosmos", "polyterm"],
      hackathon: ["unbolted", "locallens", "cosmos", "trip", "youvest"],
      active: ["promptr", "docu", "scout", "tools", "cosmos", "block", "trunorth", "exoform", "polyterm", "youvest"],
      inactive: ["unbolted", "raspi", "bike", "locallens"],
      oneTime: ["meta", "raspi", "bike", "locallens", "unbolted", "trip", "youvest"],
    }),
    [],
  );

  const projectsList = useMemo(
    () => [
      {
        id: "youvest",
        title: "YouVest - Decentralized Creator Investment Platform",
        image: youvestImage,
        status: "live",
        year: "2025",
        liveUrl: "https://www.youvest.lol/",
        description:
          "Decentralized platform built on Solana enabling fans to invest in content creators via blockchain. Built solo in one week for Colosseum's Cypherpunk Hackathon 2025. Features creator tokenization, bonding curve pricing, and instant liquidity using Rust/Anchor smart contracts.",
        link: "/projects/youvest",
        tags: ["Solana", "Smart Contracts", "Next.js", "Blockchain", "DeFi"],
        hackathon: true,
      },
      {
        id: "polyterm",
        title: "PolyTerm - Terminal Dashboard for PolyMarket",
        image: polytermImage,
        status: "live",
        year: "2025",
        description:
          "Terminal-based dashboard for PolyMarket that delivers real-time prediction market data directly in the terminal. Features customizable views, live market data via PolyMarket API, and a distraction-free interface built for traders who need fast access to market insights.",
        link: "/projects/polyterm",
        tags: ["CLI", "API Integration", "Real-Time Data", "Trading Tools"],
      },
      {
        id: "exoform",
        title: "Exoform - 3D Printing Shop",
        image: exoformImage,
        status: "live",
        year: "2025",
        liveUrl: "https://exoform.shop",
        description:
          "Personal e-commerce platform for selling 3D printed items with a clean, straightforward approach. Built with Next.js and Tailwind CSS, featuring a 360-degree rotating image carousel, Stripe payment integration, and custom API routes for product and order management.",
        link: "/projects/exoform",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "E-commerce"],
      },
      {
        id: "trunorth",
        title: "TruNorth HVAC - Website Development",
        image: trunorthImage,
        status: "live",
        year: "2025",
        liveUrl: "https://trunorthhvac.com",
        description:
          "A unique HVAC company website that breaks away from traditional corporate aesthetics. Built with React and Tailwind CSS, the site emphasizes community involvement, real people, and sustainability while featuring interactive product pages and a hidden secret deals section for loyal customers.",
        link: "/projects/trunorth",
        tags: ["React", "Tailwind CSS", "Web Design", "SEO"],
      },
      {
        id: "promptr",
        title: "Promptr - AI Prompt Management",
        image: promptr1,
        status: "live",
        year: "2025",
        liveUrl: "https://chromewebstore.google.com/detail/promptr/onkoaammdlfaebbncpbjofmcjkilgpbp",
        description: 
          "A Chrome extension for managing and injecting AI prompts across multiple LLM platforms (ChatGPT, Claude, Grok, etc). Features include prompt library management, one-click injection, and cross-platform support with a focus on streamlined workflows.",
        link: "/projects/promptr",
        tags: ["Chrome Extension"],
      },
      {
        id: "trip",
        title: "Trippian - AI Travel Assistant",
        image: tripImage,
        year: "2025",
        description:
          "Built a sophisticated multi-agent AI system where autonomous agents collaborate to handle travel planning. Each specialized agent (Calendar, Flights, Hotels, Travel Assistant) maintains its own memory and reasoning while sharing a unified ItineraryState, demonstrating advanced agent-to-agent communication and autonomous decision making.",
        link: "/projects/trip",
        tags: ["AI Agents", "Python", "Flask", "React Native"],
        hackathon: true,
      },
      {
        id: "block",
        title: "Boiler Blockchain - Web Development",
        image: blockImage,
        status: "live",
        year: "2025",
        liveUrl: "https://www.boilerblockchain.org/",
        description:
          "Boiler Blockchain is Purdue University's premier blockchain and Web3 organization. I contributed to the development of their website, which serves as a hub for blockchain education, community building, and showcasing their events and initiatives on campus.",
        link: "/projects/block",
        tags: ["React", "Tailwind CSS", "Node.js", "Web3"],
      },
      {
        id: "cosmos",
        title: "CosmosPool - DeFi Liquidity Protocol",
        image: cosmosImage,
        status: "live",
        year: "2025",
        liveUrl: "https://www.cosmospool.xyz/",
        description:
          "CosmosPool is a decentralized liquidity provision system built on Unichain that simplifies DeFi participation. It enables users to deposit single-sided assets (e.g. WETH or USDC) into concentrated liquidity pools, automating the matching process with complementary deposits for optimal liquidity provision.",
        link: "/projects/cosmos",
        tags: ["DeFi", "Smart Contracts", "Uniswap", "Blockchain"],
        hackathon: true,
      },
      {
        id: "docu",
        title: "Docu - Document Scanner & AI Analyzer",
        image: docuImage,
        type: "mobile-app",
        status: "live",
        year: "2025",
        liveUrl:
          "https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone",
        description:
          "Docu is an AI-powered document scanning and analysis tool that enables users to easily digitize, organize, and summarize their documents. The app can extract critical information, create searchable text, and generate concise summaries for quick insights.",
        link: "/projects/docu",
        tags: ["React Native", "Computer Vision"],
      },
      {
        id: "locallens",
        title: "LocalLens",
        image: mlh1,
        status: "completed",
        year: "2025",
        completionDate: "Winter 2025",
        description:
          "LocalLens is a hands-free, real-time campus tour system designed for Meta Glasses. It uses location-based audio narration to provide users with contextual insights about their surroundings without the need to look at a screen. By leveraging geofencing, live streaming, and text-to-speech technology, LocalLens enables an immersive exploration experience—whether on a college campus or any tour-like setting.",
        link: "/projects/locallens",
        tags: ["React Native", "Express JS", "Selenium"],
        hackathon: true,
      },
      {
        id: "meta",
        title: "LiveAnswer - For Meta Glasses",
        image: metaImage,
        status: "completed",
        year: "2025",
        completionDate: "Winter 2025",
        description:
          "Utilizing the livestream feature of Meta Glasses, I developed a system that streams real-time video to ChatGPT, which then analyzes the content and generates a response. The response is posted as a comment on the stream, allowing you to hear the answer directly through your earpiece.",
        link: "/projects/meta",
        tags: ["Selenium", "Python", "Computer Vision"],
      },
      {
        id: "scout",
        title: "Scout - Shopping and Selling App",
        image: scoutLogo,
        type: "mobile-app",
        status: "live",
        year: "2024",
        liveUrl:
          "https://apps.apple.com/us/app/scout-shop-sell-with-camera/id6502788045?platform=iphone",
        description:
          'Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes "google scan" to recognize items and compare prices across 100+ retailers.',
        link: "/projects/scout",
        tags: ["React Native", "Web Scraping", "Computer Vision"],
      },
      {
        id: "tools",
        title: "Tools - Website With Useful Tools",
        image: toolsImage,
        status: "live",
        year: "2024",
        liveUrl: "https://kokinda.dev/",
        description:
          "This website consolidates various essential tools for developers (me), such things as allowing users to access a QR code generator, password generator, unit converter, and more without searching for individual tools every time.",
        link: "/projects/tools",
        tags: ["React"],
      },
      {
        id: "unbolted",
        title: "Unbolted - On-Demand GPU Computing",
        image: unboltedImage,
        status: "inactive",
        year: "2024",
        description:
          "Unbolted (a hackathon project) simplifies the GPU rental process, making it easy for new users to spin up high-performance GPUs for AI workloads while offering advanced controls for experienced users.",
        link: "/projects/unbolted",
        tags: ["React", "API Integration", "Stripe Payments", "Kubernetes"],
        hackathon: true,
      },
      {
        id: "bike",
        title: "Electric Bike - Conversion Project",
        image: bikeimage,
        status: "completed",
        year: "2024",
        completionDate: "Summer 2024",
        description:
          "Custom electric bike conversion featuring a Flipsky motor, multistage belt drive system, and swappable Ryobi battery. Designed to solve campus transportation with a focus on efficiency and easy maintenance.",
        link: "/projects/bike",
        tags: ["Mechanical Engineering", "Electrical Engineering", "CAD"],
      },
      {
        id: "raspi",
        title: "Raspi - Smart Glasses",
        image: raspberryPiGlasses,
        status: "completed",
        year: "2023",
        completionDate: "Winter 2023",
        description:
          "Custom-built smart glasses using a Raspberry Pi that use computer vision to identify objects in real-time. Features a compact OLED display, camera module, and 3D-printed housing for a fully wearable experience.",
        link: "/projects/raspi",
        tags: ["Raspberry Pi", "Python", "Computer Vision"],
      },
    ],
    [],
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectsList);
    } else {
      const selectedIds = filterCategories[activeFilter] || [];
      setFilteredProjects(
        projectsList.filter((project) => selectedIds.includes(project.id)),
      );
    }
  }, [activeFilter, filterCategories, projectsList]);

  const handleProjectClick = (link) => {
    // Save current scroll position for this specific project
    const projectName = link.split('/projects/')[1];
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sessionStorage.setItem(`projectScrollPosition_${projectName}`, scrollY.toString());
    
    navigate(link);
  };

  const visibleProjects = useMemo(() => {
    const limit = isMobile ? 3 : 9;
    return showAll ? filteredProjects : filteredProjects.slice(0, limit);
  }, [filteredProjects, showAll, isMobile]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      const projectsSection = document.querySelector(".projects-terminal");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {showSSHPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowSSHPopup(false)}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "90%",
              border: "1px solid #fafafa",
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#ffffff", marginBottom: "20px", fontWeight: "normal", textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}>
              Access PolyTerm via SSH
            </h2>
            <p style={{ color: "#00ff00", marginBottom: "15px", fontFamily: "Courier New, monospace" }}>
              To access the live PolyTerm dashboard:
            </p>
            <div
              style={{
                backgroundColor: "#000",
                padding: "15px",
                borderRadius: "4px",
                fontFamily: "Courier New, monospace",
                color: "#00ff00",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #00ff00",
              }}
            >
              <span>{sshCommand}</span>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: "5px 10px",
                  backgroundColor: copied ? "#00ff00" : "transparent",
                  color: copied ? "#000" : "#00ff00",
                  border: copied ? "none" : "1px solid #00ff00",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "Courier New, monospace",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p style={{ color: "#00ff00", fontSize: "14px", marginTop: "20px", fontFamily: "Courier New, monospace" }}>
              if you don't know how to do this, gg 💀
            </p>
            <button
              onClick={() => setShowSSHPopup(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "transparent",
                color: "#00ff00",
                border: "1px solid #00ff00",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "Courier New, monospace",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#00ff00";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#00ff00";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="projects-terminal">
        <div className="terminal-header">
          <div className="terminal-title">C:\Users\Projects></div>
          <div className="terminal-controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="terminal-content">
          <div className="project-filters">
            <span className="filter-label">Sort by: </span>
            <button
              className={`filter-btn ${activeFilter === "hardware" ? "active" : ""}`}
              onClick={() => setActiveFilter("hardware")}
            >
              Hardware
            </button>
            <button
              className={`filter-btn ${activeFilter === "software" ? "active" : ""}`}
              onClick={() => setActiveFilter("software")}
            >
              Software
            </button>
            <button
              className={`filter-btn ${activeFilter === "web3" ? "active" : ""}`}
              onClick={() => setActiveFilter("web3")}
            >
              Web3
            </button>
            <button
              className={`filter-btn ${activeFilter === "hackathon" ? "active" : ""}`}
              onClick={() => setActiveFilter("hackathon")}
            >
              Hackathon
            </button>
            {!showMoreFilters && (
              <span
                onClick={() => setShowMoreFilters(true)}
                className="filter-link"
              >
                Show More
              </span>
            )}
            {showMoreFilters && (
              <>
                <button
                  className={`filter-btn ${activeFilter === "active" ? "active" : ""}`}
                  onClick={() => setActiveFilter("active")}
                >
                  Active
                </button>
                <button
                  className={`filter-btn ${activeFilter === "inactive" ? "active" : ""}`}
                  onClick={() => setActiveFilter("inactive")}
                >
                  Inactive
                </button>
                <button
                  className={`filter-btn ${activeFilter === "oneTime" ? "active" : ""}`}
                  onClick={() => setActiveFilter("oneTime")}
                >
                  One Time Completion
                </button>
                <span
                  onClick={() => setShowMoreFilters(false)}
                  className="filter-link"
                >
                  Show Less
                </span>
              </>
            )}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                data-type={project.type}
                data-id={project.id}
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="project-year-tag">
                  <span className="year-badge"></span>
                  {project.year}
                </div>
                <div className="project-status">
                  {project.status === "live" && (
                    project.id === "polyterm" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSSHPopup(true);
                        }}
                        className="status-dot live"
                      >
                        Live ↗
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="status-dot live"
                      >
                        Live ↗
                      </a>
                    )
                  )}
                  {project.status === "inactive" && (
                    <span className="status-dot inactive">Inactive</span>
                  )}
                  {project.status === "completed" && (
                    <span className="status-dot completed">
                      Completed {project.completionDate}
                    </span>
                  )}
                  {project.status === "in-progress" && (
                    <span className="status-dot in-progress">In Progress</span>
                  )}
                  {project.hackathon && (
                    <span className="status-dot hackathon">Hackathon</span>
                  )}
                </div>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="project-tags">
                      {project.tags?.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <Link to={project.link} className="see-more">
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {(() => {
            const threshold = isMobile ? 3 : 9;
            if (filteredProjects.length > threshold) {
              return (
                <div className="see-all-container">
                  <button
                    className="see-all-btn"
                    onClick={toggleShowAll}
                  >
                    {showAll ? "See Less ↑" : "See All ↓"}
                  </button>
                </div>
              );
            }
            return null;
          })()}
        </div>
      </div>
    </>
  );
}

export default Projects;

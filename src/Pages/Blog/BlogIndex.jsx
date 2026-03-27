import React from "react";
import { Link } from "react-router-dom";
import AsciiBackground from "./AsciiBackground";
import { posts } from "./posts";
import "./BlogIndex.css";

function BlogIndex() {
  return (
    <div className="bi-page">
      <AsciiBackground />

      <nav className="bi-nav">
        <Link to="/" className="bi-nav-link">← home</Link>
      </nav>

      <main className="bi-main">
        <div className="bi-container">
          <h1 className="bi-heading">Blog</h1>

          <div className="bi-list">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bi-item">
                <time className="bi-date">{post.date}</time>
                <span className="bi-title">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogIndex;

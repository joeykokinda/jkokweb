import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import AsciiBackground from "./AsciiBackground";
import { getPost } from "./posts";
import "./BlogPost.css";

function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="bp-page">
      <AsciiBackground />

      <nav className="bp-nav">
        <Link to="/blog" className="bp-nav-link">← blog</Link>
      </nav>

      <main className="bp-main">
        <article className="bp-article">
          <time className="bp-date">{post.date}</time>
          <h1 className="bp-title">{post.title}</h1>
          <div className="bp-content">{post.content}</div>
        </article>
      </main>
    </div>
  );
}

export default BlogPost;

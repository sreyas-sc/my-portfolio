// src/pages/ProjectsPage.jsx
import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/profile";

export default function ProjectsPage() {
  return (
    <div className="pp-root">
      <style>{`
        .pp-root { max-width: 780px; margin: 0 auto; padding: 32px 24px 64px; color: var(--text); font-family: 'Inter', sans-serif; }
        .pp-root h1 { font-family: 'JetBrains Mono', monospace; font-size: 22px; margin: 0 0 28px; }
        .pp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
        .pp-card { display: block; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 18px; text-decoration: none; color: inherit; transition: border-color 0.2s ease, transform 0.2s ease; }
        .pp-card:hover { border-color: var(--accent-pro); transform: translateY(-2px); }
        .pp-card-top { display: flex; justify-content: space-between; align-items: center; }
        .pp-card-name { font-family: 'JetBrains Mono', monospace; font-weight: 600; font-size: 15px; }
        .pp-card-tag { display: inline-block; margin: 8px 0; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--accent-pro); background: var(--accent-pro-tint); padding: 2px 7px; border-radius: 4px; }
        .pp-card-desc { margin: 0; font-size: 13px; color: var(--text-muted); line-height: 1.55; }
      `}</style>
      <h1>All projects</h1>
      <div className="pp-grid">
        {PROJECTS.map((p) => (
          <a href={p.link} className="pp-card" key={p.name}>
            <div className="pp-card-top">
              <span className="pp-card-name">{p.name}</span>
              <ExternalLink size={14} strokeWidth={2} />
            </div>
            <span className="pp-card-tag">{p.tag}</span>
            <p className="pp-card-desc">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
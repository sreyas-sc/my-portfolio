// src/pages/ProjectsPage.jsx
import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/profile";

export default function ProjectsPage() {
  return (
    <div className="pp-root">
      <style>{`
        .pp-root {
          max-width: 1080px;
          margin: 0 auto;
          padding: 32px 24px 64px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
        }

        .pp-root h1 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 22px;
          margin: 0 0 28px;
        }

        .pp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .pp-card {
          display: block;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 18px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .pp-card:hover {
          border-color: var(--accent-pro);
          transform: translateY(-2px);
        }

        .pp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pp-card-name {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 15px;
        }

        .pp-card-tag {
          display: inline-block;
          margin: 8px 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--accent-pro);
          background: var(--accent-pro-tint);
          padding: 2px 7px;
          border-radius: 4px;
        }

        .pp-card-desc {
          margin: 0;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .pp-github {
          margin-top: 64px;
        }

        .pp-github-images {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }

        .pp-github-images img {
          width: 100%;
          max-width: 900px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--surface);
        }

        @media (max-width: 768px) {
          .pp-root {
            padding: 24px 18px 48px;
          }

          .pp-root h1 {
            font-size: 20px;
          }

          .pp-github-images img {
            max-width: 100%;
          }
        }
      `}</style>

      <h1>Projects</h1>

      <div className="pp-grid">
        {PROJECTS.map((p) => (
          <a
            href={p.link}
            className="pp-card"
            key={p.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pp-card-top">
              <span className="pp-card-name">{p.name}</span>
              <ExternalLink size={14} strokeWidth={2} />
            </div>

            <span className="pp-card-tag">{p.tag}</span>

            <p className="pp-card-desc">{p.desc}</p>
          </a>
        ))}
      </div>

      {/* GitHub Activity */}
      <div className="pp-github">
        <h1>GitHub Activity</h1>

        <div className="pp-github-images">
          <img
            src="https://ghchart.rshah.org/sreyas-sc"
            alt="GitHub Contribution Graph"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sreyas-sc&theme=transparent&hide_border=true&stroke=0&background=FFFFFF00&ring=0f9c08&fire=0f9c08&currStreakNum=0f9c08&currStreakLabel=0f9c08&sideNums=0f9c08&sideLabels=0f9c08"
            alt="GitHub Streak"
          />
        </div>
      </div>
    </div>
  );
}
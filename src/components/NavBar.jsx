// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../context/ThemeToggle";

const LINKS = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

export default function NavBar() {
  return (
    <nav className="nav">
      <style>{`
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1080px;
          margin: 0 auto;
          padding: 20px 24px 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
        }
        .nav-links { display: flex; gap: 4px; }
        .nav a {
          color: var(--text-muted);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav a:hover {
          color: var(--text);
        }
        .nav a.active {
          color: var(--accent-pro);
          background: var(--accent-pro-tint);
        }
      `}</style>
      <div className="nav-links">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
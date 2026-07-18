// src/components/Footer.jsx
import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../data/profile";

export default function Footer() {
  return (
    <footer className="pf-footer">
      <style>{`
        .pf-footer {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          max-width: 780px;
          margin: 56px auto 0;
          padding: 20px 24px 32px;
          border-top: 1px solid var(--border);
        }
        .pf-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13px;
          font-family: 'JetBrains Mono', monospace;
          transition: color 0.2s ease;
        }
        .pf-link:hover { color: var(--text); }
      `}</style>
      <a href={CONTACT.github} className="pf-link">
        <FaGithub size={16} /> github
      </a>
      <a href={CONTACT.linkedin} className="pf-link">
        <FaLinkedin size={16} /> linkedin
      </a>
      <a href={`mailto:${CONTACT.email}`} className="pf-link">
        <Mail size={16} /> {CONTACT.email}
      </a>
    </footer>
  );
}
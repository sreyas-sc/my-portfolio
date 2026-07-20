// src/pages/ContactPage.jsx
import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../data/profile";

export default function ContactPage() {
  return (
    <div className="cp-root">
      <style>{`
        .cp-root { max-width: 1080px; margin: 0 auto; padding: 32px 24px 64px; color: var(--text); font-family: 'Inter', sans-serif; }
        .cp-root h1 { font-family: 'JetBrains Mono', monospace; font-size: 22px; margin: 0 0 12px; }
        .cp-root p { color: var(--text-muted); font-size: 15px; margin: 0 0 28px; max-width: 440px; line-height: 1.6; }
        .cp-list { display: flex; flex-direction: column; gap: 10px; }
        .cp-row { display: flex; align-items: center; gap: 10px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; text-decoration: none; color: var(--text); font-family: 'JetBrains Mono', monospace; font-size: 13.5px; transition: border-color 0.2s ease; }
        .cp-row:hover { border-color: var(--accent-pro); }
      `}</style>
      <h1>Get in touch</h1>
      <p>Happy to talk about roles, projects, or the occasional sourdough failure.</p>
      <div className="cp-list">
        <a className="cp-row" href={`mailto:${CONTACT.email}`}>
          <Mail size={16} /> {CONTACT.email}
        </a>
        <a className="cp-row" href={CONTACT.github}>
          <FaGithub size={16} /> github.com/yourhandle
        </a>
        <a className="cp-row" href={CONTACT.linkedin}>
          <FaLinkedin size={16} /> linkedin.com/in/yourhandle
        </a>
      </div>
    </div>
  );
}
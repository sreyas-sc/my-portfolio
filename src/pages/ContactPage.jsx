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
          <FaGithub size={16} /> github.com/sreyas-sc
        </a>
        <a className="cp-row" href={CONTACT.linkedin}>
          <FaLinkedin size={16} /> linkedin.com/in/sreyas-s-27857a205
        </a>
        <a className="cp-row" href={CONTACT.instagram}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> instagram.com/sreyas.s_
        </a>
        <a className="cp-row" href={CONTACT.whatsapp}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2h-1l-1 1v-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1l1-1v1a2 2 0 0 1 2 2v1z"></path><path d="M17.5 11.5a5.5 5.5 0 1 0-11.001-.001A5.5 5.5 0 0 0 17.5 11.5z"></path><path d="M12 7v4l3 3"></path></svg> +91 81119 04512
        </a>
        <a className="cp-row" href="https://drive.google.com/file/d/1lARc3xCKV6UGEHzfWhtJXXXToUEp8-Fq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2h-1l-1 1v-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1l1-1v1a2 2 0 0 1 2 2v1z"></path><path d="M17.5 11.5a5.5 5.5 0 1 0-11.001-.001A5.5 5.5 0 0 0 17.5 11.5z"></path><path d="M12 7v4l3 3"></path></svg> Download Resume
        </a>
      </div>
    </div>
  );
}
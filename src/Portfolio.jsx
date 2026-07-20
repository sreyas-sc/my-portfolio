import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Camera,
  Mountain,
  BookOpen,
  Music,
  ChefHat,
  Gamepad2,
  Terminal,
} from "lucide-react";

/* ---------------------------------------------------------
   CONTENT — swap these out with your own details
--------------------------------------------------------- */

const PROFILE = {
  name: "Sreyas S",
  role: "Software Engineer",
  location: "Alappuzha, India",
  blurb:
    "I build fast, reliable web systems. Backend-leaning, but I don't flinch at a CSS grid.",
};

const EXPERIENCE = [
  {
    company: "Williams Lea",
    role: "Software Engineer",
    start: "2024-12-01",
    period: "Dec 2024 — Present",
    desc: "Lead a 4-person team rebuilding the payments pipeline. Cut p99 latency by 63% and moved the fleet to event-driven infra.",
  },
  {
    company: "Fernbank",
    role: "Software Engineer",
    start: "2023-01-01",
    period: "2021 — 2023",
    desc: "Owned the internal tooling platform used by 200+ engineers. Shipped a self-serve deploy dashboard adopted org-wide.",
  },
  {
    company: "Ridgeline Systems",
    role: "Backend Engineer, Intern → Full-time",
    start: "2023-01-01",
    period: "2019 — 2021",
    desc: "Built the first version of the notifications service, still running in production today.",
  },
];

const PROJECTS = [
  {
    name: "waypoint",
    tag: "distributed systems",
    desc: "A lightweight job scheduler with at-least-once delivery guarantees, written in Go.",
    link: "#",
  },
  {
    name: "shelfspace",
    tag: "full-stack",
    desc: "Self-hosted media library with a React front end and a Rust indexing engine.",
    link: "#",
  },
  {
    name: "tinygrad-notes",
    tag: "ml infra",
    desc: "Annotated walkthrough of a minimal autograd engine, built while learning ML internals.",
    link: "#",
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "Go",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
];

const HOBBIES = [
  {
    icon: Camera,
    title: "Wanderlust photography",
    desc: "Mostly a Pentax K1000 and whatever expired film I can find.",
  },
  {
    icon: Mountain,
    title: "Bouldering",
    desc: "V4-ish on a good day. Bad knees, worse footwork.",
  },
  {
    icon: ChefHat,
    title: "Cooking",
    desc: "Currently deep in a sourdough phase. Ask me about hydration ratios.",
  },
  {
    icon: Music,
    title: "Making beats",
    desc: "Ableton on weekends. Nothing released, everything half-finished.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    desc: "Sci-fi and systems books, in roughly equal measure.",
  },
  {
    icon: Gamepad2,
    title: "Chess",
    desc: "~1400 rapid. Still fall for the same three openings.",
  },
];

const NOW = [
  { label: "reading", value: "The Left Hand of Darkness" },
  { label: "listening", value: "a lot of instrumental jazz" },
  { label: "building", value: "a wood shelf, badly" },
];

/* ---------------------------------------------------------
   COMPONENT
--------------------------------------------------------- */

export default function Portfolio() {
  const [mode, setMode] = useState("professional");
  const isPro = mode === "professional";

  return (
    <div className="pf-root">
      <style>{CSS}</style>

      <div className="pf-glow" aria-hidden="true" />

      <header className="pf-header">
        <div className="pf-identity">
          <h1>{PROFILE.name}</h1>
          <p className="pf-role">{PROFILE.role}</p>
          <p className="pf-location">
            <MapPin size={13} strokeWidth={2} />
            {PROFILE.location}
          </p>
        </div>

        <ModeSwitch mode={mode} setMode={setMode} />
      </header>

      <p className="pf-blurb">{PROFILE.blurb}</p>

      <main className="pf-content" key={mode}>
        {isPro ? <ProfessionalView /> : <PersonalView />}
      </main>

      <footer className="pf-footer">
        <a href="#" className="pf-link">
          <Github size={16} /> github
        </a>
        <a href="#" className="pf-link">
          <Linkedin size={16} /> linkedin
        </a>
        <a href="#" className="pf-link">
          <Mail size={16} /> hello@Sreyas.dev
        </a>
      </footer>
    </div>
  );
}

/* ---------------------------------------------------------
   MODE SWITCH — the signature element
--------------------------------------------------------- */

function ModeSwitch({ mode, setMode }) {
  const proRef = useRef(null);
  const personalRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = mode === "professional" ? proRef.current : personalRef.current;
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [mode]);

  return (
    <div className={`pf-switch pf-switch--${mode}`} role="tablist" aria-label="View mode">
      <Terminal size={14} className="pf-switch-prompt" strokeWidth={2} />
      <div
        className="pf-switch-indicator"
        style={{ left: indicator.left, width: indicator.width }}
      />
      <button
        ref={proRef}
        role="tab"
        aria-selected={mode === "professional"}
        className={mode === "professional" ? "is-active" : ""}
        onClick={() => setMode("professional")}
      >
        --professional
      </button>
      <button
        ref={personalRef}
        role="tab"
        aria-selected={mode === "personal"}
        className={mode === "personal" ? "is-active" : ""}
        onClick={() => setMode("personal")}
      >
        --personal
      </button>
      <span className="pf-switch-cursor">▊</span>
    </div>
  );
}
/* ---------------------------------------------------------
   Date  Cals
--------------------------------------------------------- */

function getDuration(startDate) {
  if (!startDate) return "";

  const start = new Date(startDate);
  if (isNaN(start)) return "";

  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];

  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} month${months > 1 ? "s" : ""}`);

  return parts.join(" ");
}

/* ---------------------------------------------------------
   PROFESSIONAL VIEW
--------------------------------------------------------- */

function ProfessionalView() {
  return (
    <div className="pf-fade">
      <section className="pf-section">
        <h2>
          <span className="pf-eyebrow">01</span> Experience
        </h2>
        <div className="pf-timeline">
          {EXPERIENCE.map((job) => (
            <div className="pf-job" key={job.company}>
              <div className="pf-job-dot" />
              <div className="pf-job-body">
                <div className="pf-job-head">
                  <h3>
                    {job.role}
                    <span className="pf-duration">
                      {" · "}
                      {getDuration(job.start)}
                    </span>
                  </h3>
                  <h3>
                    {job.role}
                    <span className="pf-duration">
                      {" · "}
                      {getDuration(job.start)}
                    </span>
                  </h3>

                  <span className="pf-job-period">{job.period}</span>
                </div>
                <p className="pf-job-company">{job.company}</p>
                <p className="pf-job-desc">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <h2>
          <span className="pf-eyebrow">02</span> Projects
        </h2>
        <div className="pf-grid">
          {PROJECTS.map((p) => (
            <a href={p.link} className="pf-card" key={p.name}>
              <div className="pf-card-top">
                <span className="pf-card-name">{p.name}</span>
                <ExternalLink size={14} strokeWidth={2} />
              </div>
              <span className="pf-card-tag">{p.tag}</span>
              <p className="pf-card-desc">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <h2>
          <span className="pf-eyebrow">03</span> Skills
        </h2>
        <div className="pf-skills">
          {SKILLS.map((s) => (
            <span className="pf-skill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------------------
   PERSONAL VIEW
--------------------------------------------------------- */

function PersonalView() {
  return (
    <div className="pf-fade">
      <section className="pf-section">
        <h2>Outside of work</h2>
        <div className="pf-hobbies">
          {HOBBIES.map((h) => {
            const Icon = h.icon;
            return (
              <div className="pf-hobby" key={h.title}>
                <Icon size={18} strokeWidth={1.75} />
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pf-section">
        <h2>Right now</h2>
        <div className="pf-now">
          {NOW.map((n) => (
            <div className="pf-now-row" key={n.label}>
              <span className="pf-now-label">{n.label}</span>
              <span className="pf-now-value">{n.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------------------
   STYLES
--------------------------------------------------------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --bg: #0b0e14;
  --surface: #10141c;
  --surface-2: #171c26;
  --border: #232a38;
  --text: #e7eaf1;
  --text-muted: #8891a3;
  --accent-pro: #55e6c1;
  --accent-personal: #f2a65c;
}

.pf-root {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 48px 24px 64px;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  border-radius: 12px;
}

.pf-glow {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(85,230,193,0.12), transparent 70%);
  pointer-events: none;
  transition: background 0.4s ease;
}

.pf-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.pf-identity h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}

.pf-role {
  margin: 0 0 8px;
  color: var(--text-muted);
  font-size: 15px;
}

.pf-duration {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.pf-location {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  color: var(--text-muted);
  font-size: 12px;
  font-family: 'JetBrains Mono', monospace;
}

.pf-blurb {
  max-width: 460px;
  margin: 28px 0 40px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* --- mode switch --- */

.pf-switch {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 5px 10px 5px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
}

.pf-switch-prompt {
  color: var(--text-muted);
  margin-right: 4px;
}

.pf-switch-indicator {
  position: absolute;
  top: 5px;
  bottom: 5px;
  border-radius: 5px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.pf-switch button {
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-size: inherit;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.pf-switch button.is-active {
  color: var(--text);
}

.pf-switch--professional .pf-switch button.is-active {
  color: var(--accent-pro);
}

.pf-switch--personal .pf-switch button.is-active {
  color: var(--accent-personal);
}

.pf-switch-cursor {
  color: var(--accent-pro);
  animation: pf-blink 1.1s steps(1) infinite;
  margin-left: 2px;
  font-size: 11px;
}

.pf-switch--personal .pf-switch-cursor {
  color: var(--accent-personal);
}

@keyframes pf-blink {
  50% { opacity: 0; }
}

/* --- content --- */

.pf-content {
  position: relative;
  z-index: 1;
}

.pf-fade {
  animation: pf-fade-in 0.35s ease both;
}

@keyframes pf-fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.pf-section {
  margin-bottom: 44px;
}

.pf-section h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pf-eyebrow {
  color: var(--accent-pro);
  opacity: 0.7;
}

/* --- experience timeline --- */

.pf-timeline {
  position: relative;
  padding-left: 18px;
  border-left: 1px solid var(--border);
}

.pf-job {
  position: relative;
  padding-bottom: 26px;
}

.pf-job:last-child {
  padding-bottom: 0;
}

.pf-job-dot {
  position: absolute;
  left: -22.5px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-pro);
  box-shadow: 0 0 0 3px rgba(85,230,193,0.15);
}

.pf-job-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.pf-job-head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.pf-job-period {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  color: var(--text-muted);
  white-space: nowrap;
}

.pf-job-company {
  margin: 2px 0 6px;
  font-size: 13px;
  color: var(--accent-pro);
}

.pf-job-desc {
  margin: 0;
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.55;
}

/* --- projects --- */

.pf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.pf-card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.pf-card:hover {
  border-color: var(--accent-pro);
  transform: translateY(-2px);
}

.pf-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
}

.pf-card-name {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 14px;
}

.pf-card-tag {
  display: inline-block;
  margin: 8px 0 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  color: var(--accent-pro);
  background: rgba(85,230,193,0.08);
  padding: 2px 7px;
  border-radius: 4px;
}

.pf-card-desc {
  margin: 0;
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

/* --- skills --- */

.pf-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pf-skill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 999px;
}

/* --- hobbies --- */

.pf-hobbies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.pf-hobby {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  color: var(--accent-personal);
  transition: border-color 0.2s ease;
}

.pf-hobby:hover {
  border-color: var(--accent-personal);
}

.pf-hobby h3 {
  margin: 10px 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.pf-hobby p {
  margin: 0;
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

/* --- now --- */

.pf-now {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.pf-now-row {
  display: flex;
  gap: 14px;
  padding: 12px 16px;
  font-size: 13px;
}

.pf-now-row + .pf-now-row {
  border-top: 1px solid var(--border);
}

.pf-now-label {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent-personal);
  min-width: 78px;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-top: 1px;
}

.pf-now-value {
  color: var(--text);
}

/* --- footer --- */

.pf-footer {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 56px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  position: relative;
  z-index: 1;
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

.pf-link:hover {
  color: var(--text);
}

@media (prefers-reduced-motion: reduce) {
  .pf-fade, .pf-switch-cursor, .pf-switch-indicator, .pf-card, .pf-hobby {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 520px) {
  .pf-identity h1 { font-size: 22px; }
  .pf-root { padding: 32px 16px 48px; }
}
`;

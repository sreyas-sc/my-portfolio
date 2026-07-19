// src/data/profile.js
// All your content lives here. Edit freely — nothing below this file needs to change.

export const PROFILE = {
  name: "Sreyas",
  role: "Software Engineer",
  location: "Kochi, India",
  blurb:
    "I build fast, reliable web systems. Backend-leaning, but I don't flinch at a CSS grid.",
};

export const EXPERIENCE = [
  {
    company: "Williams Lea",
    role: "Software Engineer",
    start: "2024-12-02",
    period: "Dec 2024 — Present",
    // desc: "Lead a 4-person team rebuilding the payments pipeline. Cut p99 latency by 63% and moved the fleet to event-driven infra.",
  },
  {
    company: "TechFriar",
    role: "MERN Stack Trainee",
    period: "Aug - Nov 2025",
    // desc: "Owned the internal tooling platform used by 200+ engineers. Shipped a self-serve deploy dashboard adopted org-wide.",
  },
  {
    company: "Levantar Solutions",
    role: "web developer (Part time)",
    period: "2024",
    // desc: "Built the first version of the notifications service, still running in production today.",
  },
   {
    company: "ClaySys Technologies",
    role: "Software Analyst(L3)",
    period: "May 2021 - Oct 2022",
    // desc: "Built the first version of the notifications service, still running in production today.",
  },
];

export const EDUCATION = [
  {
    school: "College of Engineering, Trivandrum",
    degree: "MCA",  
    period: "Oct 2022 — Jun 2024",
    desc: "Graduated with a Master of Computer Applications (MCA) from the College of Engineering, Trivandrum, Kerala, India. The program focused on advanced topics in computer science, including software development, database management, and network security.",
  },

  {
    school: "Naipunnya School of Management, Cherthala",
    degree: "BCA",
    period: "Jun 2018 — Apr 2021",
    desc: "Graduated with a Bachelor of Computer Applications (BCA) from Naipunnya School of Management, Cherthala, Kerala, India. The program provided a strong foundation in computer science, covering areas such as programming, web development, and database management.",
  },

    {
    school: "H.S.S Kandamangalam, Cherthala",
    degree: "DHSE",
    period: "Apr 2016 — Jun 2018",
  },
];

export const PROJECTS = [
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

export const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "Go",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Python",
  "Java",
  "C++",
  "HTML/CSS",
  "MongoDB",
  "Express.js",
  "Next.js",
  "Redux",
  "RESTful APIs",
  "Git/GitHub",
  "Agile/Scrum Methodologies",
  "Unit Testing",
  "CI/CD",
  "Cloud Computing",
  "Microservices Architecture",
  "Web Security Best Practices",
  "Performance Optimization",
  "jenkins",
  "Kubernetes",
  "Marklogic",
];

export const HOBBIES = [
  { icon: "Camera", title: "Film photography", desc: "Mostly a Pentax K1000 and whatever expired film I can find." },
  { icon: "Mountain", title: "Bouldering", desc: "V4-ish on a good day. Bad knees, worse footwork." },
  { icon: "ChefHat", title: "Cooking", desc: "Currently deep in a sourdough phase. Ask me about hydration ratios." },
  { icon: "Music", title: "Making beats", desc: "Ableton on weekends. Nothing released, everything half-finished." },
  { icon: "BookOpen", title: "Reading", desc: "Sci-fi and systems books, in roughly equal measure." },
  { icon: "Gamepad2", title: "Chess", desc: "~1400 rapid. Still fall for the same three openings." },
];

export const NOW = [
  { label: "reading", value: "The Left Hand of Darkness" },
  { label: "listening", value: "a lot of instrumental jazz" },
  { label: "building", value: "a wood shelf, badly" },
];

// Your photo for the floating circle on the Personal tab.
// Put the actual file at public/media/profile-photo.jpg (or change this path to match).
export const PROFILE_PHOTO = "/media/sreyas.jpg";

export const CONTACT = {
  email: "sreyas.sc@gmail.com",
  github: "https://github.com/sreyas-sc",
  linkedin: "https://linkedin.com/in/sreyas-sc",
  instagram: "https://instagram.com/sreyas.s_",
  whatsapp: "wa.me/919446155555",
};

// Media shown in the Instagram-style gallery when a hobby card is clicked.
// Keys must match a hobby's `title` in HOBBIES exactly.
// Put your actual files in /public/media/<folder>/ — paths below are
// served from the root, e.g. "/media/photography/shot-01.jpg" maps to
// the file at public/media/photography/shot-01.jpg
export const MEDIA_BY_HOBBY = {
  "Film photography": [
    { type: "image", src: "/media/photography/shot-01.jpg", caption: "Kochi backwaters, Kodak Gold 200" },
    { type: "image", src: "/media/photography/shot-02.jpg", caption: "Old town, early morning light" },
    { type: "video", src: "/media/photography/clip-01.mp4", poster: "/media/photography/clip-01-poster.jpg", caption: "Developing a roll at home" },
    { type: "image", src: "/media/photography/shot-03.jpg", caption: "Fish market, overexposed on purpose" },
    { type: "image", src: "/media/photography/shot-04.jpg", caption: "Rain on the balcony" },
    { type: "image", src: "/media/photography/shot-05.jpg", caption: "Self portrait, mirror, K1000" },
  ],
};
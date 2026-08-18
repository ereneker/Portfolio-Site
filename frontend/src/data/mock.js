// Mock data for the cinematographer portfolio
// All data is mock and will be replaced with backend API calls
import dontPlayThePianoImg from '../assets/dont-play-the-piano.png';
import mansBestFreundeImg from '../assets/mans-best-freunde.png';
import anotherRoundImg from '../assets/another-round.png';

export const siteInfo = {
  name: "EREN EKER",
  title: "TECHNICAL GAME DESIGNER",
  bio: "Game design student with a programming background, recently expanding into sound design.",
  location: "Based in Cologne, Germany",
  email: "ereneker5@gmail.com",
  copyright: "\u00a9 2026 EE",
};

export const navLinks = [
  { label: "WORK", path: "/#work" },
  { label: "CV", path: "/cv" },
  { label: "CONTACTS", path: "/contacts" },
  {label: "BLOG", path: "/blog"},
];

export const projects = [
  {
    id: "mindway-vr",
    year: "",
    credit: "COMPANY: MINDWAY STUDIOS",
    title: "MINDWAY VR",
    image: "https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/b6bw6b8t_mindway-900.png",
    category: "VR Application",
  },
  {
    id: "mind-and-motion",
    year: "",
    credit: "COMPANY: MINDWAY STUDIOS",
    title: "MIND & MOTION",
    image: "https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/7ji1f0vq_Screenshot%202024-07-08%20002310.png",
    category: "VR Application",
  },
  {
    id: "first-resort",
    year: "",
    credit: "COMPANY: MINDWAY STUDIOS",
    title: "FIRST RESORT",
    image: "https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/o881jhdr_AppLab_ScreenShot_31%20%281%29.jpg",
    category: "VR Application",
  },
  {
    id: "mia-workaria",
    year: "",
    credit: "COMPANY: MIA TECH",
    title: "MIA - WORKARIA",
    image: "https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/ht6whne0_-_-.png",
    category: "Application",
  },
  {
    id: "occupational-healthy-game",
    year: "",
    credit: "PERSONAL PROJECT",
    title: "OCCUPATIONAL HEALTHY GAME",
    image: "https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/i9qbotsx_mainpage.PNG",
    category: "Game",
  },
  {
    id: "dont-play-the-piano",
    credit: "Personal Project",
    title: "Don't Play The Piano",
    image: dontPlayThePianoImg,
    link: "https://ereneker.itch.io/dont-play-the-piano",
  },
  {
    id: "mans-best-freunde",
    credit: "CGL Game Jam 2025",
    title: "Mans Best Freunde",
    image: mansBestFreundeImg,
    description: "Mans Beste Freunde is a game made in 4 days for the CGL Mini-Jam 2026 from 23-26 March. It is a 'cosy game' where you play as Sneep and try to be the best companion. (which is the theme for the jam). However, it seems that your owner might not be in the clearest of mind and its up to you to help him! I worked as composer & audio designer/programmer.",
    link: "https://binsprout.itch.io/mans-beste-freunde",
  },
  {
    id: "Another-Round-Dance-Scene-Remake-On-Unreal-Engine-5",
    credit: "Personal Project",
    title: "Another Round - Dance Scene Remake On Unreal Engine 5",
    image: anotherRoundImg,
    description: "This project is a remake of the dance scene from the movie 'Another Round' using Unreal Engine 5. The goal was to recreate the scene with realistic lighting, animations, and sound design. My focus on the project was to set-up cameras & editing sounds. I created my own version with camera angles while staying true to original source.",
    link: "https://www.youtube.com/watch?v=cOdDak1SV5U&list=PPSV",
  }
];

export const cvData = {
  selectedWork: [
    { year: "", title: "Mindway VR", role: "Programmer", director: "Mindway Studios" },
    { year: "", title: "Mind & Motion", role: "Programmer", director: "Mindway Studios" },
    { year: "", title: "First Resort", role: "Programmer", director: "Mindway Studios" },
    { year: "", title: "MIA - Workaria", role: "Programmer", director: "MIA Tech" },
  ],
  personalProjects: [
    { year: "", title: "Occupational Healthy Game", role: "Developer", director: "" },
  ],
  awards: [],
  education: [
    { year: "2027", institution: "Cologne University of Applied Sciences", degree: "Game Development and Research, MA" },
    { year: "2022", institution: "Atilim University", degree: "Information System Engineering, BS" },
  ],
};

export const contactInfo = {
  email: "ereneker5@gmail.com",
  phone: "+49 178 5626644",
  representation: [],
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ereneker5/" },
    { platform: "GitHub", url: "https://github.com/ereneker" },
    { platform: "itch.io", url: "https://ereneker.itch.io/" },
    { platform: "SoundCloud", url: "https://soundcloud.com/eren-eker" },
  ],
};

export const blogPosts = [
  {
    id: 1,
    slug: "building-dont-play-the-piano",
    title: "Building Don't Play The Piano",
    date: "2026-08-18",
    category: "Project Update",
    excerpt:
      "A short development update on Don't Play The Piano and what I learned while building its interaction systems.",
    image: "/images/blog/dont-play-the-piano.jpg",
    content: [
      "Don't Play The Piano started as an experiment around player expectation and interaction.",
      "One of the things I wanted to explore was how a very simple instruction could create tension when the environment keeps encouraging the player to break it.",
      "During development, I also started thinking more about how sound can communicate consequences before anything visibly changes in the environment."
    ],
  },

  {
    id: 2,
    slug: "what-inscryption-taught-me-about-card-design",
    title: "What Inscryption Taught Me About Card Design",
    date: "2026-08-10",
    category: "Games",
    excerpt:
      "Some thoughts on how Inscryption makes physical interaction, presentation and card mechanics feel inseparable.",
    image: "/images/blog/inscryption.jpg",
    content: [
      "One of the things I find interesting about Inscryption is that the cards never feel disconnected from the space around them.",
      "The table, animations and physical presentation all reinforce the mechanics.",
      "It made me think differently about how I want cards to behave in my own projects."
    ],
  },
];

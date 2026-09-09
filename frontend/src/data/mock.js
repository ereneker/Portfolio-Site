// Mock data for the cinematographer portfolio
// All data is mock and will be replaced with backend API calls
import dontPlayThePianoImg from '../assets/dont-play-the-piano.png';
import mansBestFreundeImg from '../assets/mans-best-freunde.png';
import anotherRoundImg from '../assets/another-round.png';
import controlImg from '../assets/control-booth.jpeg';
import arcRaidersImg from '../assets/arc-raiders.jpeg';
import sadOImg from '../assets/sad-o.jpeg';

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
    slug: "my-gibberish-starts-here",
    title: "First Blog Post: My Gibberish Starts Here",
    date: "2026-08-18",
    category: "Updates",
    excerpt:
      "As I hardly can explain myself. I'm starting this blog to share my thoughts, ideas, and projects. I hope you enjoy it. If anyone reading anyway.",
    image: "",
    content: [
      "I have decided to start this blog. I have been thinking about it for a while, and finally decided to do it. I want to share my thoughts, ideas, and projects with the world (or just myself, fuck it.) I don't know how often I will do this. Probably whenever I have too much thought in my head and need to get it out.",
      "For today's thoughts, it's killing me that my website looks terrible with black-and-white colors. I want to make it look better, but I don't know how. Too lazy to think about it. Maybe one day. For now, I just want to keep playing Mortal Shell 2.",
    ],
  },

  {
    id: 2,
    slug: "my-gibberish-continues-here",
    title: "Surviving Gamescom & Enjoying Depression",
    date: "2026-09-06",
    category: "Updates",
    excerpt:
      "I already took a break after my first blog post. Consistency is key of course and this is me.",
    image: "",
    content: [
      { type: "paragraph", text: "If you are reading this, know that I've been drifted in void for the last two weeks. It's cold in 30 degrees Celsius. I'm wondering if it would feel hot in -5 Celsius. At least that's the feeling when I got stuck in the creative process of the game I'm working on. I have been working on it for a while, but since the moment I have to create something visual, I feel like I'm making no process at all." },
      {
        type: "paragraph",
        text: "I actually had the best time two weeks ago. I went to Gamescom for the first time in my life. First two days was working at Gamescom Dev. Then I had the chance to visit Gamescom (for free, damn). From the moment I entered the hall, energy changed drastically. At first I was just trying to play some games, then it turned to just finding the best freebies. I saw the new Witcher 3 DLC. I thought I wouldn't care but actually loved it! (Not that I just love free t-shirt and the bag)",
      },
      { type: "image", src: controlImg, alt: "Gamescom 2026", caption: "Gamescom 2026" },
      { type: "paragraph", text: "Of course I couldn't try Control Resonant. Since that's the only game I'm dying to play, why would I? " },
      { type: "image", src: sadOImg, alt: "Sad O", caption: "Sad O" },
      { type: "paragraph", text: "This is my final day at Gamescom. Just looking at that letter 'O' shape and think how sad it looks. I can understand how tired it is. Being have to watch all those biz guys running around, vape and do the fake business talks sounds terrific. I know that I'll have to do that too. "},
      { type: "paragraph", text: "After a week packed with games and trying to make connections with publishers, that void was inevitable. So I filled it with the game I'm working on. I think it only made it bigger though. I have so many ideas with no talent on creating the visuals whatsoever. I think I'll just go back to Mubi and watch anything. "}
    ],
  },
]


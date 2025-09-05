// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
{
  title: "Data Structures & Algorithms",
  description:
    "I design and implement efficient algorithms and optimized data structures using C++. My goal is to solve complex problems with clean, scalable, and high-performance code.",
  items: [
    {
      title: "Problem Solving",
      description: "(LeetCode, Codeforces, CodeChef)",
    },
    {
      title: "Data Structures",
      description: "(Arrays, Linked Lists, Trees, Graphs, Heaps, Hash Maps)",
    },
    {
      title: "Algorithm Design",
      description: "(Dynamic Programming, Greedy, Divide & Conquer, Backtracking)",
    },
  ],
},
{
  title: "Graphics & UI/UX Design",
  description:
    "I craft visually appealing and user-friendly designs that enhance user experience. From wireframes to final assets, I ensure every design element aligns with your brand's vision and goals.",
  items: [
    {
      title: "UI/UX Design",
      description: "(Wireframing, Prototyping, User Flows, Design Systems)",
    },
    {
      title: "Design Tools",
      description: "(Figma, Canva, Adobe XD, Photoshop)",
    },
    {
      title: "Branding & Assets",
      description: "(Logos, Social Media Graphics, Marketing Materials)",
    },
  ],
},
{
  title: "Data Analytics & Insights",
  description:
    "I help businesses turn raw data into actionable insights. By leveraging modern analytics tools and techniques, I uncover patterns, trends, and metrics that drive smarter decisions and business growth.",
  items: [
    {
      title: "Data Cleaning & Preparation",
      description: "(ETL Processes, Data Wrangling, Preprocessing)",
    },
    {
      title: "Data Visualization",
      description: "(Power BI, Tableau, Matplotlib, Dashboards)",
    },
    {
      title: "Business Intelligence",
      description: "(KPI Tracking, Trend Analysis, Performance Reports)",
    },
  ],
},{
  title: "AI & Machine Learning",
  description:
    "I design and implement intelligent systems that learn and adapt. From predictive models to automation, I help businesses leverage AI and ML to make smarter decisions, reduce manual work, and stay ahead of the competition.",
  items: [
    {
      title: "Predictive Modeling",
      description: "(Regression, Classification, Forecasting)",
    },
    {
      title: "Natural Language Processing",
      description: "(Chatbots, Text Analytics, Sentiment Analysis)",
    },
    {
      title: "Computer Vision",
      description: "(Image Recognition, Object Detection, OCR)",
    },
  ],
},

];
export const projects = [
  {
  id: 1,
  name: "Spylt-Vite",
  description:
    "A high-performance frontend scaffold built using Vite. Available on my GitHub (fearDluffy/Spylt-Vite), it's designed for blazing-fast development experience and optimized production builds.",
  href: "https://spylt-vite.vercel.app/", 
  image: "/assets/projects/spyelt-vite.png",       
  bgImage: "/assets/backgrounds/spylt-bg.jpg",   
  frameworks: [
    { id: 1, name: "Vite" },
    { id: 2, name: "React" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Tailwind CSS" },
    { id: 5, name: "ESLint" },
  ],
},
  {
  id: 2,
  name: "Gaming Website",
  description:
    "A visually immersive gaming platform showcasing trending games, live streams, and player stats with smooth animations and responsive design.",
  href: "https://gaming-website-main-8g3xvl5ej-feardluffys-projects.vercel.app/", // replace with the actual GitHub repo link
  image: "/assets/projects/Gaming-Website-Main.png", // update with your actual image path
  bgImage: "/assets/backgrounds/gaming-bg.jpg", // optional background image
  frameworks: [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ],
}
,
  {
  id: 3,
  name: "GTA VI Website Clone",
  description:
    "A fan-made clone of the official Rockstar Games GTA VI website with smooth GSAP animations and a responsive layout.",
  href: "https://gta6-web-prop.vercel.app/", 
  image: "/assets/projects/gta-6.png", 
  bgImage: "/assets/backgrounds/gta6-bg.jpg", 
  frameworks: [
   { id: 1, name: "Vite" },
    { id: 2, name: "React" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Tailwind CSS" },
    { id: 5, name: "GSAP" },
  ],
}
,
  {
  id: 5,
  name: "Movie Landing Page",
  description:
    "A dynamic movie landing page featuring trending movies, upcoming releases, and a modern responsive design.",
  href: "https://movie-landing-page-six.vercel.app/", // Live project link
  image: "/assets/projects/movie.png", // Static preview image
  bgImage: "/assets/backgrounds/movie-bg.jpg", // Background image for styling
  frameworks: [
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS3" },
    { id: 3, name: "JavaScript" },
  ],
}
,
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/krishna_sharma666" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@fearDluffy",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ankit-kumar-64469b37b/" },
  { name: "GitHub", href: "https://github.com/fearDluffy" },
  {name: "Twiter" , href: "https://x.com/krishnasha61981?s=08"}
];

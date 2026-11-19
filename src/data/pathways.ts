export type Pathway = {
  id: string;
  title: string;
  age: string;
  description: string;
  icon: number;
  accent: "orange" | "violet" | "yellow" | "blue" | "pink" | "life";
  prompt: string;
};

export const pathways: Pathway[] = [
  {
    id: "kids",
    title: "Kids",
    age: "Ages 5–8",
    description: "A first journey into discovery, creativity and confidence.",
    icon: 0,
    accent: "orange",
    prompt: "Ask big questions and explore through play",
  },
  {
    id: "pro-kids",
    title: "Pro Kids",
    age: "Ages 8–12",
    description: "From questions to making things. Explore practical creation and foundational technology.",
    icon: 1,
    accent: "violet",
    prompt: "Make things and try technology hands-on",
  },
  {
    id: "spark",
    title: "Spark",
    age: "Ages 10–14",
    description: "Solve, design, build. Explore problem-solving, technology and projects.",
    icon: 2,
    accent: "yellow",
    prompt: "Solve problems and build projects",
  },
  {
    id: "pro-spark",
    title: "Pro Spark",
    age: "Ages 14–18",
    description: "An idea worth exploring? Take on advanced projects, AI and innovation.",
    icon: 3,
    accent: "blue",
    prompt: "Take on advanced projects, AI and innovation",
  },
  {
    id: "future",
    title: "Future",
    age: "Ages 18–25",
    description: "Turn what you know into what you can do. Build career readiness, a portfolio and practical skills.",
    icon: 4,
    accent: "pink",
    prompt: "Build a portfolio and get career-ready",
  },
  {
    id: "professional",
    title: "Professional",
    age: "Ages 25+",
    description: "Your next chapter can start with a new skill. Upskill, reskill and adapt.",
    icon: 5,
    accent: "orange",
    prompt: "Learn a new skill for work",
  },
  {
    id: "tarvyx-life",
    title: "Tarvyx Life",
    age: "Any Age",
    description: "Because curiosity does not retire. Continuous learning at every stage of life.",
    icon: 6,
    accent: "life",
    prompt: "Keep learning, whatever my age or stage",
  },
];

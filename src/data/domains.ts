import aiChip from "../assets/images/domains/ai-chip.png";
import automotive from "../assets/images/domains/automotive.png";
import camera from "../assets/images/domains/camera.png";
import rocket from "../assets/images/domains/rocket.png";
import healthcare from "../assets/images/domains/healthcare.png";
import career from "../assets/images/domains/career-chart.png";
import neet from "../assets/images/domains/neet-medical.png";

export type Domain = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  areas: string[];
};

export const domains: Domain[] = [
  {
    id: "ai-software",
    title: "AI, Software & Digital Technology",
    description: "Build, apply and explore AI, data, software and emerging technology.",
    image: aiChip,
    imageAlt: "Glowing artificial intelligence microchip",
    areas: [
      "AI/ML",
      "Generative AI",
      "Python",
      "Data Science",
      "Full Stack",
      "Cloud Computing",
      "Cybersecurity",
      "Robotics",
      "Quantum Computing",
      "AI Automation",
    ],
  },
  {
    id: "engineering-automotive",
    title: "Engineering, Automotive & Advanced Technology",
    description: "Explore machines, vehicles, engineering systems and next-generation technologies.",
    image: automotive,
    imageAlt: "Blue futuristic car with neon lights",
    areas: [
      "Automotive",
      "Embedded Systems",
      "IoT",
      "Mechatronics",
      "Semiconductors",
      "EV Technology",
      "Renewable Energy",
      "Robotics",
      "Industrial Automation",
    ],
  },
  {
    id: "camera-imaging",
    title: "Camera & Imaging Technology",
    description: "Learn to capture, create and bring ideas to life through imaging.",
    image: camera,
    imageAlt: "Professional camera with a glowing lens",
    areas: ["Camera Technology", "Imaging Systems", "Photography", "Engineering Applications"],
  },
  {
    id: "aerospace-space",
    title: "Aerospace, Rocket & Space",
    description: "Discover space, rockets and aerospace innovations.",
    image: rocket,
    imageAlt: "Rocket launching through glowing clouds",
    areas: ["Rockets", "Aerospace", "Space Technology", "Telecommunications", "Advanced Engineering"],
  },
  {
    id: "healthcare-medical",
    title: "AI, Healthcare & Medical Sciences",
    description: "Explore how science, technology and AI contribute to healthcare and medical innovation.",
    image: healthcare,
    imageAlt: "Glowing heart with a medical heartbeat and cross",
    areas: [
      "Radiology",
      "Neurology",
      "Cardiology",
      "Oncology",
      "Medical Imaging",
      "AI Healthcare",
      "Medical Sciences",
    ],
  },
  {
    id: "career-industry",
    title: "Career, Industry & Professional Pathways",
    description: "Build future-ready skills for careers, leadership and entrepreneurship.",
    image: career,
    imageAlt: "Career growth chart, rising arrow and briefcase",
    areas: [
      "Entrepreneurship",
      "Business Strategy",
      "Leadership",
      "Product Management",
      "Business Development",
      "Professional Skills",
    ],
  },
  {
    id: "neet",
    title: "NEET – Medical Entrance Exam Preparation",
    description:
      "Prepare for the NEET examination with structured learning, science concepts, practice tests and expert-guided preparation.",
    image: neet,
    imageAlt: "NEET medical entrance preparation with stethoscope, shield and study books",
    areas: [
      "Physics",
      "Chemistry",
      "Biology",
      "Botany",
      "Zoology",
      "Human Physiology",
      "Genetics",
      "Ecology",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "NEET Mock Tests",
    ],
  },
];

import { useEffect } from "react";
import learningIllustration from "../assets/images/experience-learning.png";
import staircaseIllustration from "../assets/images/experience-staircase.png";

const experiences = [
  {
    title: "LEARN BY DOING",
    description: "Knowledge becomes capability through application.",
    icon: "cap",
    tone: "cyan",
  },
  {
    title: "REAL-WORLD EXPERTS",
    description: "Learning is shaped by people who practise what they teach.",
    icon: "people",
    tone: "purple",
  },
  {
    title: "BUILT AROUND THE LEARNER",
    description: "Different pathways support different stages of growth.",
    icon: "layers",
    tone: "gold",
  },
  {
    title: "RELEVANT BY DESIGN",
    description: "Learning evolves alongside industries and the world around us.",
    icon: "spark",
    tone: "pink",
  },
];

const stages = [
  { number: "1", name: "KNOW", description: "Build understanding and strong foundations.", tone: "blue" },
  {
    number: "2",
    name: "EXPERIENCE",
    description: "Explore ideas with guidance and practical perspectives.",
    tone: "cyan",
  },
  { number: "3", name: "APPLY", description: "Put knowledge into practice and develop capability.", tone: "violet" },
  { number: "4", name: "GROW", description: "Build confidence and keep moving forward.", tone: "pink" },
];

function ExperienceIcon({ name }: { name: string }) {
  const iconProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "cap":
      return (
        <svg {...iconProps}>
          <path d="m3 17 21-11 21 11-21 11L3 17Z" />
          <path d="M12 22v10c7 6 17 6 24 0V22M44 18v13" />
          <circle cx="44" cy="34" r="2" />
        </svg>
      );
    case "people":
      return (
        <svg {...iconProps}>
          <circle cx="18" cy="16" r="7" />
          <path d="M4 40v-3a14 14 0 0 1 28 0v3H4ZM33 10a7 7 0 0 1 0 14M37 29a11 11 0 0 1 7 10v1" />
        </svg>
      );
    case "layers":
      return (
        <svg {...iconProps}>
          <path d="m24 5 20 10-20 10L4 15 24 5Z" />
          <path d="m4 23 20 10 20-10M4 31l20 10 20-10" />
        </svg>
      );
    case "spark":
      return (
        <svg {...iconProps}>
          <path d="m24 4 5.2 14.8L44 24l-14.8 5.2L24 44l-5.2-14.8L4 24l14.8-5.2L24 4Z" />
          <path d="m39 4 2.3 5.7L47 12l-5.7 2.3L39 20l-2.3-5.7L31 12l5.7-2.3L39 4Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...iconProps}>
          <path d="M24 4 41 10v12c0 11-7.5 18-17 22C14.5 40 7 33 7 22V10l17-6Z" />
          <path d="m16 24 5 5 11-12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ExperienceSection() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".experience-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="experience-section"
      id="experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-container">
        <header className="experience-heading experience-reveal">
          <p className="experience-kicker">
            <span aria-hidden="true" />
            EXPERIENCE
            <span aria-hidden="true" />
          </p>
          <h2 id="experience-title">
            Learning should leave you
            <br />
            with <span>more than information.</span>
          </h2>
          
          <img
            className="experience-hero-illustration"
            src={learningIllustration}
            alt="A graduation cap above an open book, surrounded by learning and technology icons"
            fetchPriority="high"
          />
        </header>

        <div className="experience-feature-grid">
          {experiences.map((item, index) => (
            <article
              className={`experience-feature experience-feature--${item.tone} experience-reveal`}
              key={item.title}
              style={{ "--experience-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <span className="experience-feature__icon">
                <ExperienceIcon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="experience-progression" aria-labelledby="progression-title">
          <h2 id="progression-title" className="experience-subheading experience-reveal">
            <span aria-hidden="true" />
            From knowing to growing
            <span aria-hidden="true" />
          </h2>
          <div className="progression-panel experience-reveal">
            <div className="progression-art">
              <img
                src={staircaseIllustration}
                alt="Four ascending steps labelled Know, Experience, Apply and Grow, with a golden arrow and flag"
                loading="lazy"
              />
            </div>
            <div className="progression-table-wrap">
              <table className="progression-table">
                <thead>
                  <tr>
                    <th scope="col">Stage</th>
                    <th scope="col">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {stages.map((stage) => (
                    <tr key={stage.number}>
                      <td>
                        <span className={`progression-number progression-number--${stage.tone}`}>
                          {stage.number}
                        </span>
                        <strong>{stage.name}</strong>
                      </td>
                      <td>{stage.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        

        
      </div>
    </section>
  );
}

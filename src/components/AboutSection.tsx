import { useEffect } from "react";
import AboutIcon from "./AboutIcon";

const storyCards = [
  {
    title: "A simple thought started it all",
    description:
      "Learning and the real world should never feel far apart. Understanding a concept matters. Knowing how to apply it, experiment with it and use it to solve problems matters too.",
    icon: 0,
  },
  {
    title: "That question became Tarvyx.",
    description:
      "Tarvyx brings diverse fields of learning into one ecosystem, creating opportunities to explore, build knowledge and develop capabilities that extend beyond conventional classroom learning.",
    icon: 1,
  },
];

const principles = [
  {
    title: "Our Purpose",
    description:
      "To bridge the gap between learning and real-world application, making education more practical, relevant and meaningful for every stage of a learner’s journey.",
    icon: 2,
  },
  {
    title: "Our Mission",
    description:
      "To deliver practical, industry-relevant learning across diverse fields, enabling learners to build strong knowledge, develop real-world capabilities and move forward with confidence.",
    icon: 3,
  },
  {
    title: "Our Vision",
    description:
      "To build a multidisciplinary learning ecosystem where knowledge, application and innovation come together, preparing learners to adapt, grow and succeed in an evolving world.",
    icon: 4,
  },
];

const philosophy = [
  {
    title: "LEARN",
    description: "Build strong foundations through engaging, practical learning.",
    icon: 5,
  },
  {
    title: "INNOVATE",
    description: "Turn knowledge into ideas through exploration, experimentation and creation.",
    icon: 6,
  },
  {
    title: "SUCCEED",
    description: "Build the skills, confidence and capability to move forward in learning and career.",
    icon: 7,
  },
];

export default function AboutSection() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".about-reveal");
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
    <section className="about-section" id="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <header className="about-heading about-reveal">
          <p className="about-kicker">
            <span aria-hidden="true" />
            ABOUT US
          </p>
          <h2 id="about-title">
            The world keeps changing.
            <br />
            Learning should <span>move with it.</span>
          </h2>
          <div className="about-hero-values" aria-label="Learn, Innovate, Succeed">
            {philosophy.map((item) => (
              <span className="about-hero-value" key={item.title}>
                <AboutIcon index={item.icon} />
                <strong>{item.title.charAt(0) + item.title.slice(1).toLowerCase()}</strong>
              </span>
            ))}
          </div>
        </header>

        <div className="about-story-grid">
          {storyCards.map((card, index) => (
            <article
              className={`about-card about-story-card about-story-card--${index + 1} about-reveal`}
              key={card.title}
              style={{ "--about-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <span className="about-icon-tile">
                <AboutIcon index={card.icon} />
              </span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-lower-layout">
          <div className="about-principles-grid">
            {principles.map((item, index) => (
              <article
                className={`about-card about-principle-card about-principle-card--${index + 1} about-reveal`}
                key={item.title}
                style={{ "--about-delay": `${index * 90}ms` } as React.CSSProperties}
              >
                <span className="about-icon-tile">
                  <AboutIcon index={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="about-philosophy" aria-labelledby="about-philosophy-title">
            <h2 className="about-philosophy__title about-reveal" id="about-philosophy-title">
              Our <span>Philosophy</span>
            </h2>
            <div className="about-philosophy-grid">
              <svg className="about-philosophy__path" viewBox="0 0 70 420" preserveAspectRatio="none" aria-hidden="true">
                <path d="M37 65 C5 112 5 163 37 210 S69 308 37 355" />
                <circle cx="37" cy="65" r="5" />
                <circle cx="37" cy="210" r="5" />
                <circle cx="37" cy="355" r="5" />
              </svg>
              {philosophy.map((item, index) => (
                <article
                  className={`about-card about-philosophy-card about-philosophy-card--${index + 1} about-reveal`}
                  key={item.title}
                  style={{ "--about-delay": `${index * 90}ms` } as React.CSSProperties}
                >
                  <span className="about-icon-tile">
                    <AboutIcon index={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

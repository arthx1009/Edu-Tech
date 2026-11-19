import Button from "./Button";
import kyroPlatform from "../assets/images/prof-kyro-platform.png";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" id="about">
        <div className="eyebrow">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 2 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
          </svg>
          <span>A Multidisciplinary Learning Platform</span>
        </div>

        <h1 id="hero-title">
          What could your
          <br />
          <span className="gradient-text">curiosity</span> become?
        </h1>

        <h2>A new question could open up a whole new world.</h2>
        <p className="hero-description">
          What fascinates you? How things work? How technology is changing the world? Follow that
          curiosity. At Tarvyx Edu-Tech, learning connects knowledge with application across diverse
          fields and every stage of a learner&apos;s journey.
        </p>

        <p className="hero-tagline">
          <span aria-hidden="true" />
          Learn. Innovate. Succeed.
        </p>

        <div className="hero-actions">
          <Button href="#learning-stages" className="cta--path">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m4 15 7-7 6-4 3 3-4 6-7 7-5-5Z" />
              <path d="m8 11 5 5M4 15l-1 6 6-1M14 5l5 5" />
            </svg>
            Find Your Learning Path <span aria-hidden="true">→</span>
          </Button>
          <Button href="#domains" variant="secondary">
            <span className="play-icon" aria-hidden="true">▶</span>
            Explore Our World
          </Button>
        </div>
      </div>

      <div className="hero-art" aria-label="Prof. Kyro and holographic technology panels">
        <div className="hero-art__halo" aria-hidden="true" />
        <img
          src={kyroPlatform}
          alt="Prof. Kyro, a fox learning companion, standing on a holographic platform surrounded by AI, robotics, automotive, VR, rocket and healthcare panels"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

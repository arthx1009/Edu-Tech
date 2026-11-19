import leadershipLogo from "../assets/images/leadership-profile-logo.png";

const leaders = [
  { name: "SAHERA TAZEEN S", designation: "Director" },
  { name: "DEVI SREE NB", designation: "Chief Executive Officer" },
  {
    name: "SAFA SALSABEEL Z",
    designation: "Founder & Managing Director",
  },
];

export default function LeadershipSection() {
  return (
    <section
      className="leadership-section"
      id="leadership-section"
      aria-labelledby="leadership-title"
    >
      <div className="leadership-container">
        <header className="leadership-heading">
          <p className="leadership-kicker">THE PEOPLE BEHIND TARVYX</p>
          <h2 id="leadership-title">
            Our <span>Leadership</span>
          </h2>
        </header>

        <div className="leadership-grid">
          {leaders.map((leader) => (
            <article className="leadership-card" key={leader.name}>
              <div className="leadership-avatar" aria-hidden="true">
                <img src={leadershipLogo} alt="" />
              </div>
              <h3>{leader.name}</h3>
              <p>{leader.designation}</p>
              <span className="leadership-card__accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
      <svg className="leadership-ribbon" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 72C240 10 480 10 720 72s480 62 720 0" />
        <path d="M0 90C240 28 480 28 720 90s480 62 720 0" />
      </svg>
    </section>
  );
}

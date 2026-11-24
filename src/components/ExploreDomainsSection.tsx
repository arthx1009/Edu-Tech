import { useEffect, useRef, useState } from "react";
import kyro from "../assets/images/domains/prof-kyro-full.png";
import { domains, type Domain } from "../data/domains";
import DomainCard from "./DomainCard";

export default function ExploreDomainsSection() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".domains-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedDomain && !dialog.open) dialog.showModal();
    if (!selectedDomain && dialog.open) dialog.close();
  }, [selectedDomain]);

  useEffect(() => {
    if (!selectedDomain) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedDomain(null);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedDomain]);

  function closeDialog() {
    setSelectedDomain(null);
  }

  return (
    <section
      className="explore-domains-section"
      id="explore-domains-section"
      aria-labelledby="domains-title"
    >
      <div className="domains-container">
        <header className="domains-heading domains-reveal">
          <span className="domains-label">Explore Domains</span>
          <h2 id="domains-title">
            Explore Our <span>Domains</span>
          </h2>
          <p>Diverse fields, real-world learning, and future-ready skills — all in one place.</p>
        </header>

        <div className="domains-grid" aria-label="Explore learning domains">
          {domains.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={index}
              onSelect={setSelectedDomain}
            />
          ))}
        </div>

        <a className="young-minds-link domains-reveal" href="#learning-pathways-section">
          <span>
            <strong>Young Minds &amp; Future Skills</strong>
            <span>Explore learning pathways designed for young learners and future skills.</span>
          </span>
          <span className="young-minds-link__arrow" aria-hidden="true">→</span>
        </a>

        <aside className="domain-kyro-banner domains-reveal">
          <div className="domain-kyro-banner__copy">
            <h2>Not sure which domain fits you?</h2>
            <p>Tell us what interests you, and we’ll help you find the right learning pathway.</p>
            <div className="domain-kyro-banner__actions">
              <a className="domain-button domain-button--primary" href="#learning-pathways-section">
                Find Your Pathway <span aria-hidden="true">→</span>
              </a>
              <a className="domain-button domain-button--secondary" href="#experience-section">
                <span className="domain-play-icon" aria-hidden="true">▶</span>
                How It Works
              </a>
            </div>
          </div>
          <img
            className="domain-kyro-banner__mascot"
            src={kyro}
            alt="Prof. Kyro, the Tarvyx fox mascot"
            loading="lazy"
          />
        </aside>
      </div>

      <dialog
        className="domain-detail-dialog"
        ref={dialogRef}
        aria-labelledby="domain-detail-title"
        onClose={closeDialog}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        {selectedDomain && (
          <div className="domain-detail">
            <button className="domain-detail__close" type="button" onClick={closeDialog} aria-label="Close domain details">
              ×
            </button>
            <img src={selectedDomain.image} alt={selectedDomain.imageAlt} />
            <h2 id="domain-detail-title">{selectedDomain.title}</h2>
            <p>{selectedDomain.description}</p>
            <h3>Explore areas</h3>
            <ul>
              {selectedDomain.areas.map((area) => (
                <li key={area}>
                  {selectedDomain.id === "neet" ? (
                    <a
                      className="domain-detail__area"
                      href="#learning-pathways-section"
                      onClick={closeDialog}
                    >
                      {area}
                    </a>
                  ) : (
                    area
                  )}
                </li>
              ))}
            </ul>
            <a
              className="domain-button domain-button--primary"
              href="#learning-pathways-section"
              onClick={closeDialog}
            >
              Explore Pathways <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}

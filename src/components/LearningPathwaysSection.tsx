import { useEffect, useState } from "react";
import PathwayCard from "./PathwayCard";
import PathwayFinder from "./PathwayFinder";
import { pathways } from "../data/pathways";
import type { Pathway } from "../data/pathways";

export default function LearningPathwaysSection() {
  const [selectedId, setSelectedId] = useState(pathways[0].id);
  const selectedPathway = pathways.find((pathway) => pathway.id === selectedId) ?? pathways[0];

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".pathways-reveal");
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

  function selectPathway(id: string) {
    const pathway: Pathway | undefined = pathways.find((item) => item.id === id);
    if (pathway) setSelectedId(pathway.id);
  }

  return (
    <section
      className="learning-pathways"
      id="learning-pathways-section"
      aria-labelledby="pathways-title"
    >
      <div className="pathways-atmosphere" aria-hidden="true" />

      <div className="pathways-container">
        <header className="pathways-heading">
          <p className="pathways-kicker">
            <span aria-hidden="true" />
            LEARNING PATHWAYS
            <span aria-hidden="true" />
          </p>
          <h2 id="pathways-title">
            There is more than <em className="gradient-text">one way</em> to begin
          </h2>
          
          <p className="pathways-promise">Choose a stage. Find a spark. See where it leads.</p>
        </header>

        <div className="pathway-grid" aria-label="Seven learning pathways">
          {pathways.map((pathway, index) => (
            <PathwayCard
              key={pathway.id}
              pathway={pathway}
              index={index}
              selected={selectedPathway.id === pathway.id}
              onSelect={selectPathway}
            />
          ))}
        </div>

        <PathwayFinder
          pathways={pathways}
          selectedPathway={selectedPathway}
          onSelect={selectPathway}
        />

      </div>

    </section>
  );
}

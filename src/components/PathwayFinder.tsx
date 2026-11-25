import type { Pathway } from "../data/pathways";
import { brochureRoutes } from "../data/brochureRoutes";
import PathwayIcon from "./PathwayIcon";
import kyro from "../assets/images/prof-kyro-learning.png";

type PathwayFinderProps = {
  pathways: Pathway[];
  selectedPathway: Pathway;
  onSelect: (id: string) => void;
};

export default function PathwayFinder({
  pathways,
  selectedPathway,
  onSelect,
}: PathwayFinderProps) {
  return (
    <div className="pathway-finder pathways-reveal">
      <div className="pathway-finder__intro">
        <div className="pathway-finder__mascot">
          <span className="pathway-finder__orbit" aria-hidden="true" />
          <img
            src={kyro}
            alt="Prof. Kyro smiling and giving a thumbs-up"
            loading="lazy"
          />
        </div>
        <div className="pathway-finder__copy">
          <h3>Not sure which pathway fits?</h3>
          <p>That is completely fine. Tell us what you enjoy and we will help you choose.</p>
          <span className="pathway-finder__spark" aria-hidden="true" />
        </div>
      </div>

      <fieldset className="pathway-options">
        <legend className="visually-hidden">Choose what you want to do</legend>
        <div className="pathway-options__head" aria-hidden="true">
          <span>I want to...</span>
          <span>Start here</span>
        </div>
        <div className="pathway-options__list" role="radiogroup" aria-label="Choose what you want to do">
          {pathways.map((pathway) => (
            <label
              className={`pathway-option${selectedPathway.id === pathway.id ? " is-selected" : ""}`}
              htmlFor={`pathway-choice-${pathway.id}`}
              key={pathway.id}
            >
              <input
                id={`pathway-choice-${pathway.id}`}
                type="radio"
                name="pathway-choice"
                value={pathway.id}
                checked={selectedPathway.id === pathway.id}
                onChange={() => onSelect(pathway.id)}
              />
              <span className="pathway-option__prompt">{pathway.prompt}</span>
              <span className="pathway-option__recommendation">
                <strong>{pathway.title}</strong> ({pathway.age.toLowerCase()})
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <aside className="recommended-pathway" aria-live="polite" aria-atomic="true">
        <h3>Your Pathway</h3>
        <PathwayIcon index={selectedPathway.icon} className="pathway-icon--recommendation" />
        <p className="recommended-pathway__title">{selectedPathway.title}</p>
        <p className="recommended-pathway__age">{selectedPathway.age}</p>
        <span className="recommended-pathway__separator" aria-hidden="true" />
        <p className="recommended-pathway__description">{selectedPathway.description}</p>
        <a
          className="recommended-pathway__button"
          href={brochureRoutes[selectedPathway.id] ?? `#pathway-${selectedPathway.id}`}
          onClick={() => onSelect(selectedPathway.id)}
        >
          Start Here <span aria-hidden="true">→</span>
        </a>
      </aside>
    </div>
  );
}

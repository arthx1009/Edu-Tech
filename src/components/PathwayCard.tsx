import { useState, type PointerEvent } from "react";
import type { Pathway } from "../data/pathways";
import { brochureRoutes } from "../data/brochureRoutes";
import PathwayIcon from "./PathwayIcon";

type PathwayCardProps = {
  pathway: Pathway;
  index: number;
  selected: boolean;
  onSelect: (id: string) => void;
};

export default function PathwayCard({
  pathway,
  index,
  selected,
  onSelect,
}: PathwayCardProps) {
  const [pointerTilt, setPointerTilt] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setPointerTilt({ x: (0.5 - y) * 5, y: (x - 0.5) * 5 });
  }

  function resetPointer() {
    setPointerTilt({ x: 0, y: 0 });
  }

  return (
    <button
      className={`pathway-card pathway-card--${pathway.accent}${selected ? " is-selected" : ""} pathways-reveal`}
      id={`pathway-${pathway.id}`}
      type="button"
      aria-pressed={selected}
      style={{
        "--card-index": index,
        "--tilt-x": `${pointerTilt.x}deg`,
        "--tilt-y": `${pointerTilt.y}deg`,
      } as React.CSSProperties}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onBlur={resetPointer}
      onClick={() => {
        const brochureRoute = brochureRoutes[pathway.id];
        if (brochureRoute) {
          window.location.assign(brochureRoute);
          return;
        }
        onSelect(pathway.id);
      }}
    >
      <PathwayIcon index={pathway.icon} />
      <span className="pathway-card__title">{pathway.title}</span>
      <span className="pathway-card__age">{pathway.age}</span>
      <span className="pathway-card__separator" aria-hidden="true" />
      <span className="pathway-card__description">{pathway.description}</span>
    </button>
  );
}

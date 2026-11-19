import type { Domain } from "../data/domains";

type DomainCardProps = {
  domain: Domain;
  index: number;
  onSelect: (domain: Domain) => void;
};

export default function DomainCard({ domain, index, onSelect }: DomainCardProps) {
  return (
    <button
      className="domain-card domains-reveal"
      id={`domain-${domain.id}`}
      type="button"
      style={{ "--domain-delay": `${index * 70}ms` } as React.CSSProperties}
      onClick={() => onSelect(domain)}
      aria-label={`Explore ${domain.title}`}
    >
      <span className="domain-card__art">
        <img src={domain.image} alt={domain.imageAlt} loading="lazy" />
      </span>
      <span className="domain-card__title">{domain.title}</span>
      <span className="domain-card__description">{domain.description}</span>
      <span className="domain-card__arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

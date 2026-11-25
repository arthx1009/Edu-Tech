type GlanceItem = {
  id: string;
  title: string;
  description: string;
  icon: "stages" | "fields" | "expert" | "modes" | "location" | "kyro";
};

const items: GlanceItem[] = [
  {
    id: "learning-stages",
    title: "6 Learning Stages",
    description: "From Kids to Professional, plus Tarvyx Life for any age.",
    icon: "stages",
  },
  {
    id: "domains",
    title: "5 Fields to Explore",
    description: "AI & Software, Engineering, Careers, Young Minds and Healthcare.",
    icon: "fields",
  },
  {
    id: "expert-learning",
    title: "Expert-Led Learning",
    description: "Learn from professionals who practise what they teach.",
    icon: "expert",
  },
  {
    id: "learning-modes",
    title: "Online and Offline",
    description: "Classes in both modes.",
    icon: "modes",
  },
  {
    id: "location",
    title: "Pan World",
    description: "Open to learners across the world.",
    icon: "location",
  },
  {
    id: "prof-kyro",
    title: "Meet Prof. Kyro",
    description: "An AI learning companion that makes guidance more accessible.",
    icon: "kyro",
  },
];

function GlanceIcon({ name }: { name: GlanceItem["icon"] }) {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "stages":
      return (
        <svg {...commonProps}>
          <path d="m24 5 19 10-19 10L5 15 24 5Z" />
          <path d="m5 23 19 10 19-10M5 31l19 10 19-10" />
        </svg>
      );
    case "fields":
      return (
        <svg {...commonProps}>
          <rect x="7" y="7" width="13" height="13" rx="2" />
          <rect x="28" y="7" width="13" height="13" rx="2" />
          <rect x="7" y="28" width="13" height="13" rx="2" />
          <rect x="28" y="28" width="13" height="13" rx="2" />
        </svg>
      );
    case "expert":
      return (
        <svg {...commonProps}>
          <circle cx="19" cy="16" r="8" />
          <path d="M4 40v-3a15 15 0 0 1 30 0v3H4ZM34 12a8 8 0 0 1 0 16M38 31a11 11 0 0 1 6 9" />
        </svg>
      );
    case "modes":
      return (
        <svg {...commonProps}>
          <rect x="6" y="8" width="36" height="25" rx="2" />
          <path d="M3 40h42M16 33l-2 7m18-7 2 7" />
        </svg>
      );
    case "location":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="19" />
          <path d="M5 24h38M24 5c5 5 7 12 7 19s-2 14-7 19c-5-5-7-12-7-19s2-14 7-19Z" />
        </svg>
      );
    case "kyro":
      return (
        <svg {...commonProps}>
          <path d="m24 4 4.5 12.5L41 21l-12.5 4.5L24 38l-4.5-12.5L7 21l12.5-4.5L24 4Z" />
          <path d="m39 31 2.2 6.3L47 40l-5.8 2.1L39 48l-2.1-5.9L31 40l5.9-2.7L39 31Z" />
        </svg>
      );
  }
}

export default function AtGlanceSection() {
  return (
    <section className="glance-section" id="at-a-glance" aria-label="Tarvyx Edu-Tech at a glance">
      <div className="glance-panel">
        {items.map((item) => (
          <article className="glance-card" id={item.id} key={item.id}>
            <GlanceIcon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

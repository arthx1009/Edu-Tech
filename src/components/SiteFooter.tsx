import tmsMark from "../assets/logos/tms-mark.png";

type FooterItem = {
  label: string;
  href?: string;
};

const footerGroups: { title: string; icon: "company" | "solutions" | "resources" | "legal"; items: FooterItem[] }[] = [
  {
    title: "Company",
    icon: "company",
    items: [
      { label: "About", href: "#about-section" },
      { label: "Leadership", href: "#leadership-section" },
      { label: "Careers" },
      { label: "Research", href: "#explore-domains-section" },
    ],
  },
  {
    title: "Solutions",
    icon: "solutions",
    items: [
      { label: "Software", href: "#domain-ai-software" },
      { label: "Cloud", href: "#domain-ai-software" },
      { label: "AI", href: "#domain-ai-software" },
      { label: "Enterprise", href: "#domain-career-industry" },
    ],
  },
  {
    title: "Resources",
    icon: "resources",
    items: [
      { label: "Blog" },
      { label: "Courses", href: "#learning-pathways-section" },
      { label: "FAQ", href: "#faq-section" },
      { label: "Case Studies" },
    ],
  },
  {
    title: "Legal",
    icon: "legal",
    items: [
      { label: "Privacy" },
      { label: "Terms" },
      { label: "Cookies" },
      { label: "NDA" },
    ],
  },
];

function FooterGroupIcon({ name }: { name: (typeof footerGroups)[number]["icon"] }) {
  const iconPaths = {
    company: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
    solutions: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />,
    resources: <path d="M12 6.5c-2-2-5-2.5-9-2v15c4-.5 7 0 9 2m0-15c2-2 5-2.5 9-2v15c-4-.5-7 0-9 2m0-15v15" />,
    legal: <path d="m12 3 8 3v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Zm-4 9 3 3 5-6" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function SocialIcon({ network }: { network: "LinkedIn" | "GitHub" | "Instagram" | "YouTube" | "X" }) {
  if (network === "LinkedIn") return <span className="footer-social__letters">in</span>;

  const paths = {
    GitHub: <><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.67c-2.53.55-3.06-1.07-3.06-1.07-.41-1.05-1.01-1.33-1.01-1.33-.83-.57.06-.56.06-.56.92.07 1.4.95 1.4.95.82 1.4 2.15 1 2.68.77.08-.6.32-1 .58-1.23-2.02-.23-4.15-1.01-4.15-4.5 0-1 .36-1.81.95-2.45-.1-.24-.41-1.16.09-2.42 0 0 .77-.25 2.48.93A8.6 8.6 0 0 1 12 7.23c.78 0 1.57.1 2.3.31 1.72-1.18 2.48-.93 2.48-.93.5 1.26.19 2.18.1 2.42.59.64.94 1.45.94 2.45 0 3.5-2.13 4.26-4.16 4.49.33.29.62.84.62 1.7v2.44c0 .24.17.52.63.43A9 9 0 0 0 12 3Z" /></>,
    Instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" /></>,
    YouTube: <><path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8a2.5 2.5 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8Z" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></>,
    X: <path d="M5 4h3.8l10.2 16h-3.8L5 4Zm0 16 6.8-7.5m1.4-1.5L19 4" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[network]}
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section className="footer-cta" aria-label="Join Tarvyx Mind Systems">
          <span className="footer-cta__accent" aria-hidden="true" />
          <div className="footer-cta__copy">
            <h2>Learn. Innovate. Succeed.</h2>
            <p>Become part of a culture driven by creativity, engineering excellence, and continuous innovation.</p>
          </div>
          <div className="footer-cta__actions">
            <span className="footer-cta__careers" aria-disabled="true">
              Careers <span aria-hidden="true">→</span>
            </span>
            <a className="footer-cta__contact" href="#enquiry-section">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Contact Us
            </a>
          </div>
        </section>

        <div className="footer-main">
          <section className="footer-brand" aria-label="Tarvyx Mind Systems">
            <div className="footer-brand__heading">
              <img src={tmsMark} alt="" />
              <span className="footer-brand__divider" aria-hidden="true" />
              <strong>Tarvyx Mind Systems</strong>
            </div>
            <p>
              Engineering Intelligence for the Future — Delivering innovative software, cloud, AI,
              and enterprise solutions with excellence.
            </p>
            <div className="footer-socials" role="group" aria-label="Social networks; profile links were not provided">
              {(["LinkedIn", "GitHub", "Instagram", "YouTube", "X"] as const).map((network) => (
                <span className="footer-social" key={network} aria-hidden="true">
                  <SocialIcon network={network} />
                </span>
              ))}
            </div>
          </section>

          <nav className="footer-groups" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <section className="footer-group" key={group.title}>
                <span className={`footer-group__icon footer-group__icon--${group.icon}`}>
                  <FooterGroupIcon name={group.icon} />
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tarvyx Mind Systems. All rights reserved.</p>
          <div className="footer-bottom__details">
            <span className="footer-location">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Bangalore, Karnataka – India
            </span>
            <span className="footer-bottom__divider" aria-hidden="true" />
            <span>Building the Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

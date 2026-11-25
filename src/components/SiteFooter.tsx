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
      { label: "Careers", href: "#learning-pathways-section" },
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

const socialLinks = [
  { network: "Instagram", href: "https://www.instagram.com/tarvyx.edu_tech?avpt=bDdtZjZhcGIxazVx" },
  { network: "X", href: "https://x.com/Tarvyxed" },
  { network: "LinkedIn", href: "https://www.linkedin.com/company/tarvyxmindsystems/" },
  { network: "GitHub", href: "https://github.com/arthx1009" },
] as const;

type SocialNetwork = (typeof socialLinks)[number]["network"];

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "LinkedIn") return <span className="footer-social__letters">in</span>;

  const paths = {
    GitHub: <><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.67c-2.53.55-3.06-1.07-3.06-1.07-.41-1.05-1.01-1.33-1.01-1.33-.83-.57.06-.56.06-.56.92.07 1.4.95 1.4.95.82 1.4 2.15 1 2.68.77.08-.6.32-1 .58-1.23-2.02-.23-4.15-1.01-4.15-4.5 0-1 .36-1.81.95-2.45-.1-.24-.41-1.16.09-2.42 0 0 .77-.25 2.48.93A8.6 8.6 0 0 1 12 7.23c.78 0 1.57.1 2.3.31 1.72-1.18 2.48-.93 2.48-.93.5 1.26.19 2.18.1 2.42.59.64.94 1.45.94 2.45 0 3.5-2.13 4.26-4.16 4.49.33.29.62.84.62 1.7v2.44c0 .24.17.52.63.43A9 9 0 0 0 12 3Z" /></>,
    Instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" /></>,
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
        <section className="footer-cta" aria-label="Join Tarvyx Mind Systems Pvt Ltd">
          <span className="footer-cta__accent" aria-hidden="true" />
          <div className="footer-cta__copy">
            <h2>Learn. Innovate. Succeed.</h2>
            <p>Become part of a culture driven by creativity, engineering excellence, and continuous innovation.</p>
          </div>
          <div className="footer-cta__actions">
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
          <section className="footer-brand" aria-label="Tarvyx Mind Systems Pvt Ltd">
            <div className="footer-brand__heading">
              <img src={tmsMark} alt="" />
              <span className="footer-brand__divider" aria-hidden="true" />
              <strong>Tarvyx Mind Systems Pvt Ltd</strong>
            </div>
            <p>
              Engineering Intelligence for the Future — Delivering innovative software, cloud, AI,
              and enterprise solutions with excellence.
            </p>
            <nav className="footer-socials" aria-label="Social media">
              {socialLinks.map(({ network, href }) => (
                <a
                  className="footer-social"
                  href={href}
                  key={network}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Tarvyx on ${network} (opens in a new tab)`}
                >
                  <SocialIcon network={network} />
                </a>
              ))}
            </nav>
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
          <p>© {new Date().getFullYear()} Tarvyx Mind Systems Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom__details">
            <address className="footer-location">
              <span>
                <span>Site No. 21, Khatha No. 475</span>
                <span>Next Cross of Sampigehalli Police Station</span>
                <span>Basavalingappa Nagar, Sampigehalli Village</span>
                <span>Yelahanka Hobli, Bangalore North</span>
                <span>Karnataka - 560064, India</span>
              </span>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

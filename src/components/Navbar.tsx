import { useEffect, useRef, useState } from "react";
import tmsMark from "../assets/logos/tms-mark.png";
import eduTechMark from "../assets/logos/edutech-mark.png";

const searchEntries = [
  { title: "About Tarvyx Edu-Tech", detail: "A multidisciplinary learning platform", href: "#about-section" },
  { title: "Experience", detail: "Learning should leave you with more than information.", href: "#experience-section" },
  { title: "Explore Domains", detail: "Diverse fields, real-world learning, and future-ready skills", href: "#explore-domains-section" },
  { title: "Get in Touch", detail: "Share a few details and our team will get in touch.", href: "#enquiry-section" },
  { title: "FAQ", detail: "Clear answers to common questions about Tarvyx Education.", href: "#faq-section" },
  { title: "Learning Pathways", detail: "Choose a stage. Find a spark. See where it leads.", href: "#learning-pathways-section" },
  { title: "Learning stages", detail: "From Kids to Professional, plus Tarvyx Life", href: "#learning-stages" },
  { title: "Fields to explore", detail: "AI & Software, Engineering, Careers, Young Minds and Healthcare", href: "#explore-domains-section" },
  { title: "Learning modes", detail: "Classes in both online and offline modes", href: "#learning-modes" },
  { title: "Meet Prof. Kyro", detail: "An AI learning companion", href: "#at-a-glance" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pathwaysActive, setPathwaysActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);
  const [domainsActive, setDomainsActive] = useState(false);
  const [enquiryActive, setEnquiryActive] = useState(false);
  const [faqActive, setFaqActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const results = normalizedQuery
    ? searchEntries.filter((entry) =>
        `${entry.title} ${entry.detail}`.toLowerCase().includes(normalizedQuery),
      )
    : [];

  function scrollToTopImmediately() {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  }

  function scrollToHash(hash: string, behavior: ScrollBehavior) {
    const id = decodeURIComponent(hash.slice(1));
    if (id === "home") {
      if (behavior === "instant") {
        scrollToTopImmediately();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior });
      }
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    function handleInternalLinkClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const source = event.target;
      if (!(source instanceof Element)) return;
      const anchor = source.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const hash = anchor.hash;
      if (!hash || hash === "#") return;

      const id = decodeURIComponent(hash.slice(1));
      if (id !== "home" && !document.getElementById(id)) return;

      event.preventDefault();
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
      scrollToHash(hash, "smooth");
    }

    let scrollYBeforeTabSwitch = window.scrollY;
    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        scrollYBeforeTabSwitch = window.scrollY;
        return;
      }

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: scrollYBeforeTabSwitch, left: 0, behavior: "auto" });
      root.style.scrollBehavior = previousScrollBehavior;
    }

    let pendingHashAlignment = 0;
    function alignCurrentHash() {
      if (pendingHashAlignment) return;
      pendingHashAlignment = window.requestAnimationFrame(() => {
        pendingHashAlignment = 0;
        if (window.location.hash) scrollToHash(window.location.hash, "instant");
      });
    }

    document.addEventListener("click", handleInternalLinkClick, true);
    window.addEventListener("popstate", alignCurrentHash);
    window.addEventListener("hashchange", alignCurrentHash);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (window.location.hash) scrollToHash(window.location.hash, "instant");

    return () => {
      document.removeEventListener("click", handleInternalLinkClick, true);
      window.removeEventListener("popstate", alignCurrentHash);
      window.removeEventListener("hashchange", alignCurrentHash);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (pendingHashAlignment) window.cancelAnimationFrame(pendingHashAlignment);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const pathwaysSection = document.getElementById("learning-pathways-section");
    const observer = new IntersectionObserver(
      ([entry]) => setPathwaysActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );

    if (pathwaysSection) observer.observe(pathwaysSection);

    const aboutSection = document.getElementById("about-section");
    const aboutObserver = new IntersectionObserver(
      ([entry]) => setAboutActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (aboutSection) aboutObserver.observe(aboutSection);

    const experienceSection = document.getElementById("experience-section");
    const experienceObserver = new IntersectionObserver(
      ([entry]) => setExperienceActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (experienceSection) experienceObserver.observe(experienceSection);

    const domainsSection = document.getElementById("explore-domains-section");
    const domainsObserver = new IntersectionObserver(
      ([entry]) => setDomainsActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (domainsSection) domainsObserver.observe(domainsSection);

    const enquirySection = document.getElementById("enquiry-section");
    const enquiryObserver = new IntersectionObserver(
      ([entry]) => setEnquiryActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (enquirySection) enquiryObserver.observe(enquirySection);

    const faqSection = document.getElementById("faq-section");
    const faqObserver = new IntersectionObserver(
      ([entry]) => setFaqActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (faqSection) faqObserver.observe(faqSection);

    return () => {
      observer.disconnect();
      aboutObserver.disconnect();
      experienceObserver.disconnect();
      domainsObserver.disconnect();
      enquiryObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  function closeNavigation() {
    setMobileOpen(false);
    setSearchOpen(false);
  }

  function toggleSearch() {
    setSearchOpen((isOpen) => !isOpen);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand-group" href="#home" aria-label="Tarvyx Edu-Tech home" onClick={closeNavigation}>
          <span className="brand-unit brand-unit--tms" aria-label="Tarvyx Mind Systems, a TMS Group">
            <img className="brand-mark brand-mark--tms" src={tmsMark} alt="" />
            <span className="brand-copy brand-copy--tms">
              <span className="brand-name">TARVYX</span>
              <span className="brand-caption">MIND SYSTEMS</span>
              <span className="brand-tagline">— A TMS GROUP —</span>
            </span>
          </span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-unit brand-unit--education" aria-label="Tarvyx Edu-Tech">
            <img className="brand-mark brand-mark--education" src={eduTechMark} alt="" />
            <span className="brand-copy brand-copy--education">
              <span className="brand-name">TARVYX</span>
              <span className="brand-caption">EDU-TECH</span>
            </span>
          </span>
        </a>

        <button
          className={`mobile-menu-toggle${mobileOpen ? " is-open" : ""}`}
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__content${mobileOpen ? " is-open" : ""}`}>
          <div className="navbar__links">
            <a
              className={`nav-link${pathwaysActive || aboutActive || experienceActive || domainsActive || enquiryActive || faqActive ? "" : " nav-link--active"}`}
              href="#home"
              onClick={closeNavigation}
            >
              Home
            </a>
            <a
              className={`nav-link${aboutActive && !experienceActive && !domainsActive && !enquiryActive && !faqActive ? " nav-link--active nav-link--about-active" : ""}`}
              href="#about-section"
              onClick={closeNavigation}
            >
              About
            </a>
            <a
              className={`nav-link${experienceActive && !domainsActive && !enquiryActive && !faqActive ? " nav-link--active nav-link--experience-active" : ""}`}
              href="#experience-section"
              onClick={closeNavigation}
            >
              Experience
            </a>
            <a
              className={`nav-link${pathwaysActive && !aboutActive && !experienceActive && !domainsActive && !enquiryActive && !faqActive ? " nav-link--active" : ""}`}
              href="#learning-pathways-section"
              onClick={closeNavigation}
            >
              Learning Pathways
            </a>
            <a
              className={`nav-link${domainsActive && !enquiryActive && !faqActive ? " nav-link--active nav-link--domains-active" : ""}`}
              href="#explore-domains-section"
              onClick={closeNavigation}
            >
              Explore Domains
            </a>
            <a
              className={`nav-link${faqActive ? " nav-link--active nav-link--faq-active" : ""}`}
              href="#faq-section"
              onClick={closeNavigation}
            >
              FAQ
            </a>
          </div>

          <div className="navbar__actions">
            <button
              className={`search-toggle${searchOpen ? " is-active" : ""}`}
              type="button"
              aria-label={searchOpen ? "Close search" : "Search this page"}
              aria-expanded={searchOpen}
              onClick={toggleSearch}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
            <a
              className="enquire-button"
              href="#enquiry-section"
              onClick={closeNavigation}
            >
              Enquire Now <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {searchOpen && (
          <div className="search-panel">
            <label htmlFor="site-search">Search Tarvyx Edu-Tech</label>
            <div className="search-field">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
              <input
                id="site-search"
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search learning, fields, modes..."
              />
            </div>
            {normalizedQuery && (
              <div className="search-results" aria-live="polite">
                {results.length > 0 ? (
                  results.map((result) => (
                    <a href={result.href} key={result.title} onClick={closeNavigation}>
                      <strong>{result.title}</strong>
                      <span>{result.detail}</span>
                    </a>
                  ))
                ) : (
                  <p>No matching content found.</p>
                )}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

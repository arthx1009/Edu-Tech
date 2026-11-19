import AboutSection from "../components/AboutSection";
import AtGlanceSection from "../components/AtGlanceSection";
import ExperienceSection from "../components/ExperienceSection";
import EnquirySection from "../components/EnquirySection";
import FaqSection from "../components/FaqSection";
import ExploreDomainsSection from "../components/ExploreDomainsSection";
import HeroSection from "../components/HeroSection";
import LearningPathwaysSection from "../components/LearningPathwaysSection";
import LeadershipSection from "../components/LeadershipSection";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <AtGlanceSection />
        <div className="pathways-about-flow">
          <LearningPathwaysSection />
          <AboutSection />
          <ExperienceSection />
          <ExploreDomainsSection />
          <LeadershipSection />
          <EnquirySection />
          <FaqSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

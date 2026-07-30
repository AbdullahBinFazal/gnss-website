import HeroSection from "./components/HeroSection";
import DomainsSection from "./components/DomainsSection";
import ResearchDetailSection from "./components/ResearchDetailSection";
import IonosphericSection from "./components/IonosphericSection";
import CrustalDeformationSection from "./components/CrustalDeformationSection";
import ImpactSection from "./components/ImpactSection";
import ResearchProjectsSection from "./components/ResearchProjectsSection";
import PublicationsSection from "./components/PublicationsSection";
import styles from "./Research.module.css";

const Research = () => {
  return (
    <div className={styles.research}>
      <HeroSection />
      
      <div id="domains">
        <DomainsSection />
      </div>
      
      <div id="research-detail">
        <ResearchDetailSection />
      </div>
      
      <div id="ionospheric">
        <IonosphericSection />
      </div>
      
      <div id="crustal-deformation">
        <CrustalDeformationSection />
      </div>
      
      <div id="impact">
        <ImpactSection />
      </div>
      
      <div id="research-projects">
        <ResearchProjectsSection />
      </div>
      
      <div id="publications">
        <PublicationsSection />
      </div>
    </div>
  );
};

export default Research;
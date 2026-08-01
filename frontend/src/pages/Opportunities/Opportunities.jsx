import HeroSection from "./components/HeroSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import EngagementSection from "./components/EngagementSection";
import ResearchOpportunitiesCarousel from "./components/ResearchOpportunitiesCarousel";
import styles from "./Opportunities.module.css";

const Opportunities = () => {
  return (
    <div className={styles.opportunities}>
      <HeroSection />
      <OpportunitiesSection />

      <div id="research-opportunities">
        <ResearchOpportunitiesCarousel />
      
      <div id="engagement">
        <EngagementSection />
      </div>
      
    
      </div>
    </div>
  );
};

export default Opportunities;
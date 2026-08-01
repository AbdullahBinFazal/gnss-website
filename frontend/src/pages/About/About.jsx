import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import OurMission from "./components/OurMission";
import CoreObjectives from "./components/CoreObjectives";
import TeamSection from "./components/TeamSection";
import LabLeadershipSection from "./components/LabLeadershipSection";
import ResearchTeamsSection from "./components/ResearchTeamsSection";
import AlumniNetworkSection from "./components/AlumniNetworkSection";
import StrategicObjectivesCarousel from "./components/StrategicObjectivesCarousel";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <HeroSection />
      <StatsSection />
      
      <div id="our-mission" style={{ scrollMarginTop: "130px" }}>
        <OurMission />
      </div>
      
      <div id="core-objectives" style={{ scrollMarginTop: "130px" }}>
        <CoreObjectives />
      </div>

         <div id="strategic-objectives">
        <StrategicObjectivesCarousel />
      </div>
      
      <div id="team" style={{ scrollMarginTop: "130px" }}>
        <TeamSection />
      </div>
      
      <div id="lab-leadership" style={{ scrollMarginTop: "130px" }}>
        <LabLeadershipSection />
      </div>
      
      <div id="research-teams" style={{ scrollMarginTop: "130px" }}>
        <ResearchTeamsSection />
      </div>
      
      <div id="alumni" style={{ scrollMarginTop: "130px" }}>
        <AlumniNetworkSection />
      </div>
    </div>
  );
};

export default About;
import HeroSection from "./components/HeroSection";
import AcademicsSection from "./components/AcademicsSection";
import StatsSection from "./components/StatsSection";
import ProgramTabs from "./components/ProgramTabs";
import MSProgram from "./components/MSProgram";
import PhDProgram from "./components/PhDProgram";
import UndergraduateSection from "./components/UndergraduateSection";
import AcademicResourcesSection from "./components/AcademicResourcesSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import EngagementSection from "./components/EngagementSection";
import ResearchOpportunitiesSection from "./components/ResearchOpportunitiesSection";
import GNSSAcademySection from "./components/GNSSAcademySection";
import TrainingWorkshopsSection from "./components/TrainingWorkshopsSection";
import TutorialsSection from "./components/TutorialsSection";
import styles from "./Programs.module.css";
import { useState } from "react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("ms");

  return (
    <div className={styles.programs}>
      <HeroSection />
      
      <div id="academics">
        <AcademicsSection />
      </div>
      
      <StatsSection />
      <ProgramTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "ms" ? <MSProgram /> : <PhDProgram />}
      
      <div id="undergraduate">
        <UndergraduateSection />
      </div>
      
      <div id="academic-resources">
        <AcademicResourcesSection />
      </div>
      
      <OpportunitiesSection />
      <EngagementSection />
      
      <div id="research-opportunities">
        <ResearchOpportunitiesSection />
      </div>
      
      <div id="gnss-academy">
        <GNSSAcademySection />
      </div>
      
      <div id="training-workshops">
        <TrainingWorkshopsSection />
      </div>
      
      <div id="tutorials">
        <TutorialsSection />
      </div>
    </div>
  );
};

export default Programs;
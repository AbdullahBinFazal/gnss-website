import HeroSection from "./components/HeroSection";
import CoPilotOverviewSection from "./components/CoPilotOverviewSection"; 
import CoPilotAssistanceSection from "./components/CoPilotAssistanceSection"; 
import AskItSection from "./components/AskItSection";
import CoPilotCodeSection from "./components/CoPilotCodeSection";
import CoPilotConfigSection from "./components/CoPilotConfigSection";
import PromptItWithSection from "./components/PromptItWithSection";
import CoPilotInfrastructureSection from "./components/CoPilotInfrastructureSection";
import styles from "./CoPilot.module.css";

const CoPilot = () => {
  return (
    <div className={styles.coPilot}>
      <HeroSection />
      <CoPilotOverviewSection />
      
      <div id="copilot-assistance">
        <CoPilotAssistanceSection />
      </div>
      
      <AskItSection />
      
      <CoPilotCodeSection />
      
      <div id="software-configuration">
        <CoPilotConfigSection />
      </div>
      
      {/* Prompt It With Section - Added after Config */}
      <PromptItWithSection />  {/* ← ADDED HERE */}
      
      <div id="data-hub-navigation">
        <CoPilotInfrastructureSection />
      </div>
    </div>
  );
};

export default CoPilot;
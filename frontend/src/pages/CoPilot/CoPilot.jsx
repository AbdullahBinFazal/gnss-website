import HeroSection from "./components/HeroSection";
import CoPilotOverviewSection from "./components/CoPilotOverviewSection"; 
import CoPilotAssistanceSection from "./components/CoPilotAssistanceSection"; 
import CoPilotCodeSection from "./components/CoPilotCodeSection";
import CoPilotConfigSection from "./components/CoPilotConfigSection";
import CoPilotInfrastructureSection from "./components/CoPilotInfrastructureSection";

import styles from "./CoPilot.module.css";

const CoPilot = () => {
  return (
    <div className={styles.coPilot}>
      <HeroSection />
      <CoPilotOverviewSection />
          <CoPilotAssistanceSection />
            <CoPilotCodeSection /> 
            <CoPilotConfigSection />
             <CoPilotInfrastructureSection />  
      
    </div>
  );
};

export default CoPilot;
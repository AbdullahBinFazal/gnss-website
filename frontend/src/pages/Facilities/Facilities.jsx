import HeroSection from "./components/HeroSection";
import InfrastructureSection from "./components/InfrastructureSection";
import SensorEquipmentSection from "./components/SensorEquipmentSection";
import ComputingSection from "./components/ComputingSection";
import ResearchInfrastructureSection from "./components/ResearchInfrastructureSection";
import LaboratoriesCarousel from "./components/LaboratoriesCarousel";
import styles from "./Facilities.module.css";

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <HeroSection />
      <InfrastructureSection />
      
      <div id="sensor-equipment">
        <SensorEquipmentSection />
      </div>
      
      <ComputingSection />

      <div id="laboratories">
        <LaboratoriesCarousel />
      
      <div id="research-infrastructure">
        <ResearchInfrastructureSection />
      </div>
      
      
      </div>
    </div>
  );
};

export default Facilities;
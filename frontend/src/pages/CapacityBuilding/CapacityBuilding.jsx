import HeroSection from "./components/HeroSection";
import GNSSAcademySection from "./components/GNSSAcademySection";
import TrainingWorkshopsSection from "./components/TrainingWorkshopsSection";
import TutorialsSection from "./components/TutorialsSection";
import CoreModulesSection from "./components/CoreModulesSection";  // ← ADD THIS
import styles from "./CapacityBuilding.module.css";

const CapacityBuilding = () => {
  return (
    <div className={styles.capacityBuilding}>
      <HeroSection />
      <GNSSAcademySection />
      
      
      {/* <CoreModulesSection />  */}
      
      <div id="training-workshops">
        <TrainingWorkshopsSection />
      </div>

      <CoreModulesSection /> 
      
      <div id="tutorials">
        <TutorialsSection />
      </div>
    </div>
  );
};

export default CapacityBuilding;
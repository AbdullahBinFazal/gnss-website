import HeroSection from "./components/HeroSection";
import InfrastructureSection from "./components/InfrastructureSection";
import SensorEquipmentSection from "./components/SensorEquipmentSection";
import ComputingSection from "./components/ComputingSection";
import ObservatoryOverviewSection from "./components/ObservatoryOverviewSection";
import LiveDashboardSection from "./components/LiveDashboardSection";
import DataHubSection from "./components/DataHubSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import styles from "./Infrastructure.module.css";

const Infrastructure = () => {
  return (
    <div className={styles.infrastructure}>
      <HeroSection />
      
      <div id="facilities">
        <InfrastructureSection />
      </div>
      
      <SensorEquipmentSection />
      <ComputingSection />
      
      <div id="digital-observatory">
        <ObservatoryOverviewSection />
      </div>
      
      <LiveDashboardSection />
      <DataHubSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      
    </div>
  );
};

export default Infrastructure;
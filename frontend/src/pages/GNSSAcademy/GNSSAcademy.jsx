import HeroSection from "./components/HeroSection";
import GNSSAcademySection from "./components/GNSSAcademySection";  // ← ADD
import styles from "./GNSSAcademy.module.css";

const GNSSAcademy = () => {
  return (
    <div className={styles.gnssAcademy}>
      <HeroSection />
      <GNSSAcademySection />  {/* ← ADD */}
    </div>
  );
};

export default GNSSAcademy;
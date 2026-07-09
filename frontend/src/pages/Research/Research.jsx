import HeroSection from "./components/HeroSection";
import DomainsSection from "./components/DomainsSection";
import ImpactSection from "./components/ImpactSection";
import SDGsSection from "./components/SDGsSection";
import LabsSection from "./components/LabsSection";
import styles from "./Research.module.css";

const Research = () => {
  return (
    <div className={styles.research}>
      <HeroSection />
      <DomainsSection />
      <ImpactSection />
      <SDGsSection />
      <LabsSection />
    </div>
  );
};

export default Research;
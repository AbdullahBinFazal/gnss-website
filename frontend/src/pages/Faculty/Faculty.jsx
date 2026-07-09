import HeroSection from "./components/HeroSection";
import HostUniversitySection from "./components/HostUniversitySection";
import ScopeSection from "./components/ScopeSection";
import DomainsSection from "./components/DomainsSection";
import SDGsSection from "./components/SDGsSection";
import ImpactSection from "./components/ImpactSection";
import PrincipalInvestigator from "./components/PrincipalInvestigator";
import TeamSection from "./components/TeamSection";
import styles from "./Faculty.module.css";

const Faculty = () => {
  return (
    <div className={styles.faculty}>
      <HeroSection />
      <HostUniversitySection />
      <ScopeSection />
      <DomainsSection />
      <SDGsSection />
      <ImpactSection />
      <PrincipalInvestigator />
      <TeamSection />
    </div>
  );
};

export default Faculty;
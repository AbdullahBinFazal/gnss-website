import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";  // ← ADD
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.team}>
      <HeroSection />
      <TeamSection />  {/* ← ADD */}
    </div>
  );
};

export default Team;
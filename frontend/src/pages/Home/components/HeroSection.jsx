import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.animateFadeInUp}`}>
        <span className={styles.badge}>🛰️ National Center of GIS & Space Applications</span>
        <h1 className={styles.title}>
          Advancing <span className="gradient-text">GNSS</span> Research &<br />
          Space Applications
        </h1>
        <p className={styles.description}>
          The GNSS program at NCGSA focuses on cutting-edge research in
          navigation, timing, surveying, and space applications.
        </p>
        <div className={styles.buttons}>
          <Link to="/programs" className="btn-primary">Explore Program →</Link>
          <Link to="/research" className="btn-secondary">View Research</Link>
        </div>
        <div className={styles.trustBadges}>
          <span>✅ MS/PhD Program</span>
          <span>🔬 State-of-the-art Lab</span>
          <span>🌍 Global Collaborations</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
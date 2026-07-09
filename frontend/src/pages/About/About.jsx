import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import DomainsSection from "./components/DomainsSection";
import ContactSection from "./components/ContactSection";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <HeroSection />
      <StatsSection />
      <DomainsSection />
      <ContactSection />
    </div>
  );
};

export default About;
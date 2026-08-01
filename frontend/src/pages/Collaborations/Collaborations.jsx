import HeroSection from "./components/HeroSection";
// import PartnersSection from "./components/PartnersSection";
import AcademicPartnersCarousel from "./components/AcademicPartnersCarousel";
import AgreementsSection from "./components/AgreementsSection";
import OutreachSection from "./components/OutreachSection";
import NewsEventsSection from "./components/NewsEventsSection";
import styles from "./Collaborations.module.css";

const Collaborations = () => {
  return (
    <div className={styles.collaborations}>
      <HeroSection />
      {/* <PartnersSection /> */}
      
  <div id="academic-partners">
        <AcademicPartnersCarousel />
      </div>

      <div id="agreements">
        <AgreementsSection />
      </div>
      
      <div id="outreach">
        <OutreachSection />
      </div>
      
      <NewsEventsSection />
    </div>
  );
};

export default Collaborations;
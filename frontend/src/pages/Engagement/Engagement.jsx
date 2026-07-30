import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import OrganizationsSection from "./components/OrganizationsSection";
import EngagementsSection from "./components/EngagementsSection";
import ExchangesSection from "./components/ExchangesSection";
import AgreementsSection from "./components/AgreementsSection";
import OutreachSection from "./components/OutreachSection";
import NewsEventsSection from "./components/NewsEventsSection";
import styles from "./Engagement.module.css";

const Engagement = () => {
  return (
    <div className={styles.engagement}>
      <HeroSection />
      
      <div id="collaborations">
        <PartnersSection />
      </div>
      
      <OrganizationsSection />
      <EngagementsSection />
      <ExchangesSection />
      
      <div id="agreements">
        <AgreementsSection />
      </div>
      
      <OutreachSection />
      
      <div id="news-events">
        <NewsEventsSection />
      </div>
    </div>
  );
};

export default Engagement;
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import OrganizationsSection from "./components/OrganizationsSection";
import EngagementsSection from "./components/EngagementsSection";
import ExchangesSection from "./components/ExchangesSection";
import AgreementsSection from "./components/AgreementsSection";
import OutreachSection from "./components/OutreachSection";
import NewsEventsSection from "./components/NewsEventsSection";
import GNSSObservatorySection from "./components/GNSSObservatorySection";  // ← ADD
import LiveDashboardSection from "./components/LiveDashboardSection";      // ← ADD
import DataHubSection from "./components/DataHubSection";                  // ← ADD
import styles from "./Engagement.module.css";

const Engagement = () => {
  return (
    <div className={styles.engagement}>
      <HeroSection />
      
      <div id="collaborations">
        <PartnersSection />
      </div>

      
      
<GNSSObservatorySection />
      <LiveDashboardSection />
      <DataHubSection />



     
      
      <div id="agreements">
        <AgreementsSection />
      </div>
      
      <OutreachSection />
      
      <div id="news-events">
        <NewsEventsSection />
      </div>

         <div id="gnss-observatory">
        <GNSSObservatorySection />
      </div>

      {/* New Sections */}
      <OrganizationsSection />
      <EngagementsSection />
      <ExchangesSection />
    </div>
  );
};

export default Engagement;
import { Typography } from 'antd';
import styles from "../Events.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <Title level={1} className={styles.heroTitle}>
          <span>Events</span>
        </Title>
        <Paragraph className={styles.heroSubtitle}>
          Workshops, Conferences, and Outreach Programs at NCGSA-IST
        </Paragraph>
      </div>
    </section>
  );
};

export default HeroSection;
import { Typography } from 'antd';
import styles from "../GNSSAcademy.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.badge}>🎓 GNSS Academy</span>
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>GNSS</span> Academy
          </Title>
          <Paragraph className={styles.heroDescription}>
            Dedicated professional training and public outreach arm, bridging the gap between 
            academic theory and real-world industrial application in GNSS technology.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Typography } from 'antd';
import styles from "../Facilities.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🏗️ Facilities</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Facilities</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            State-of-the-art GNSS laboratories, receivers, and research infrastructure 
            supporting cutting-edge space applications and navigation research.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
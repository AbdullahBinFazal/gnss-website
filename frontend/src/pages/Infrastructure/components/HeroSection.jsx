import { Typography } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          <Title level={1} className={styles.heroTitle}>
            World-Class <span className={styles.heroHighlight}>Infrastructure</span>
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
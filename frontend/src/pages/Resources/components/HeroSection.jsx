import { Typography } from 'antd';
import styles from "../Resources.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Resources</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Access a comprehensive collection of GNSS research materials, datasets, 
            software tools, and educational resources for students and researchers.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
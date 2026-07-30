import { Typography } from 'antd';
import styles from "../Engagement.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Engagement</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Building meaningful partnerships and collaborations to advance GNSS research, 
            education, and space applications for the benefit of society.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
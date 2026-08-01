import { Typography } from 'antd';
import styles from "../Opportunities.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🚀 Opportunities</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Opportunities</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Explore exciting career opportunities, research positions, and academic programs 
            in GNSS technology, space applications, and related fields.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
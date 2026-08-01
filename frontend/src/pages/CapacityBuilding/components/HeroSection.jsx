import { Typography } from 'antd';
import styles from "../CapacityBuilding.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🎓 Capacity Building</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Capacity</span> Building
          </Title>
          <Paragraph className={styles.heroDescription}>
            Building human capacity through specialized education, training programs, and knowledge 
            sharing initiatives in GNSS technology and space applications.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
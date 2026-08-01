import { Typography } from 'antd';
import styles from "../Team.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>👥 Our Team</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Our</span> Team
          </Title>
          <Paragraph className={styles.heroDescription}>
            A collaborative, multi-tiered research team uniting experienced academic leadership 
            with brilliant student innovators in GNSS and space sciences.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Typography } from 'antd';
import styles from "../Collaborations.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🤝 Collaborations</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Collaborations</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Building strategic partnerships with leading academic institutions, research organizations, 
            and industry partners to advance GNSS research and space applications globally.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
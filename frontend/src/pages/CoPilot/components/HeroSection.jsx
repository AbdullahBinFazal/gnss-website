import { Typography } from 'antd';
import styles from "../CoPilot.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          <Title level={1} className={styles.heroTitle}>
            GNSS <span className={styles.heroHighlight}>Co-Pilot</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Your intelligent assistant for GNSS research, navigation, and space applications. 
            Powered by artificial intelligence to support researchers, students, and professionals.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Typography } from 'antd';
import styles from "./HeroSection.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🤖 AI-Powered Assistant</span> */}
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
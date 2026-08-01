import { Typography } from 'antd';
import styles from "../DigitalObservatory.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>🔭 Digital Observatory</span> */}
          <Title level={1} className={styles.heroTitle}>
            <span className={styles.heroHighlight}>Digital</span> Observatory
          </Title>
          <Paragraph className={styles.heroDescription}>
            Real-time monitoring of GNSS signals, ionospheric conditions, and space weather phenomena 
            for research and operational applications.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
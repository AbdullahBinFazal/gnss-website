// src/pages/DigitalObservatory/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/DigitalObservatoryStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Digital</span> Observatory
        </Title>
        <Paragraph className={styles.heroDescription}>
          Real-time monitoring of GNSS signals, ionospheric conditions, and space weather phenomena 
          for research and operational applications.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
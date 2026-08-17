// src/pages/DigitalObservatory/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/DigitalObservatoryStyles/DigitalObservatory.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className={styles.heroOverlayShadow} />
      <div className={styles.heroOverlay} />
      
      <div className={styles.heroDecorations}>
        <div className={styles.decoLine1} />
        <div className={styles.decoLine2} />
        <div className={styles.decoLine3} />
        <div className={styles.decoDot1} />
        <div className={styles.decoDot2} />
        <div className={styles.decoDot3} />
        <div className={styles.decoDot4} />
        <div className={styles.decoDot5} />
        <div className={styles.decoDot6} />
        <div className={styles.decoDot7} />
        <div className={styles.decoLine4} />
        <div className={styles.decoLine5} />
      </div>

      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          Digital Observatory
        </Title>
        <Paragraph className={styles.heroDescription}>
          The Digital Observatory transforms receiver measurements and scientific datasets into clear, interactive visualizations for education, research and operational awareness.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
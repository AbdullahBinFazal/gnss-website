// src/pages/CapacityBuilding/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/CapacityBuilding.module.css";

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
          Capacity Building
        </Title>
        <Paragraph className={styles.heroDescription}>
          The lab delivers focused schools, workshops, seminars and technical sessions that connect GNSS theory with practical tools, datasets and real-world applications.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
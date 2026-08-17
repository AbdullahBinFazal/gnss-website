// src/pages/Opportunities/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.heroBackground} />
      
      {/* Overlay Shadow - Same as About Comp1 */}
      <div className={styles.heroOverlayShadow} />
      
      <div className={styles.heroOverlay} />
      
      {/* Decorative geometric elements - Figma design */}
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
        {/* Title */}
        <Title level={1} className={styles.heroTitle}>
          Opportunities
        </Title>

        {/* Description */}
        <Paragraph className={styles.heroDescription}>
          The lab offers pathways for students, researchers, professionals and partner organizations to contribute to advanced work in satellite navigation and PNT.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
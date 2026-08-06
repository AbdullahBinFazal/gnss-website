// src/pages/Facilities/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/FacilitiesStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Facilities</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          State-of-the-art GNSS laboratories, receivers, and research infrastructure 
          supporting cutting-edge space applications and navigation research.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
// src/pages/Programs/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Academics</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Pakistan's First Dedicated Graduate Program in Global Navigation Satellite Systems
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
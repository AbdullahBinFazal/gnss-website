// src/pages/CoPilot/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          GNSS <span>Co-Pilot</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Your intelligent assistant for GNSS research, navigation, and space applications. 
          Powered by artificial intelligence to support researchers, students, and professionals.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
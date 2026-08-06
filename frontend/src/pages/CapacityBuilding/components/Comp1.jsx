// src/pages/CapacityBuilding/components/Comp1.jsx
import { Flex, Typography } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Capacity</span> Building
        </Title>
        <Paragraph className={styles.heroDescription}>
          Building human capacity through specialized education, training programs, and knowledge 
          sharing initiatives in GNSS technology and space applications.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
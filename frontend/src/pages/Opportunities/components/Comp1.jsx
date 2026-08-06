// src/pages/Opportunities/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Opportunities</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Explore exciting career opportunities, research positions, and academic programs 
          in GNSS technology, space applications, and related fields.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
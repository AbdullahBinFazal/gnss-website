// src/pages/Collaborations/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          <span>Collaborations</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Building strategic partnerships with leading academic institutions, research organizations, 
          and industry partners to advance GNSS research and space applications globally.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
// src/pages/About/components/comp1.jsx
import { Flex, Typography } from "antd";
import styles from "../../../styles/AboutStyles/Comp1.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          About <span></span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Global Navigation Satellite System Lab, a research and development
          lab, is dedicated to the advancement of GNSS technology and plays a
          crucial role in advancing research, innovation, and cutting-edge
          GNSS applications.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
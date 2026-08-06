// src/pages/Research/components/Comp1.jsx
import { Flex, Typography } from "antd";
import styles from "../../../styles/ResearchStyles/Comp1.module.css";

const { Title } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <Flex vertical justify="center" align="center" className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          Research Domains
        </Title>
      </Flex>
    </section>
  );
};

export default Comp1;
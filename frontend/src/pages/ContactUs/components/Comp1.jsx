// src/pages/ContactUs/components/Comp1.jsx
import { Typography } from "antd";
import styles from "../../../styles/ContactUsStyles/ContactUs.module.css";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Title level={1} className={styles.heroTitle}>
          Contact <span>Us</span>
        </Title>
        <Paragraph className={styles.heroDescription}>
          Get in touch with the GNSS Research Lab for academic inquiries, industrial research partnerships, or data-sharing collaborations.
        </Paragraph>
      </div>
    </section>
  );
};

export default Comp1;
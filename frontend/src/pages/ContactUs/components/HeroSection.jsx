import { Typography } from 'antd';
import styles from "./HeroSection.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className={styles.heroContent}>
          {/* <span className={styles.badge}>📬 Get in Touch</span> */}
          <Title level={1} className={styles.heroTitle}>
            Contact <span className={styles.heroHighlight}>Us</span>
          </Title>
          <Paragraph className={styles.heroDescription}>
            Get in touch with the GNSS Research Lab for academic inquiries, industrial research partnerships, or data-sharing collaborations.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
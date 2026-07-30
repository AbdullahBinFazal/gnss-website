import { Typography } from 'antd';
import styles from "./HeroSection.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <Title level={1} className={styles.title}>
          ❓ <span>Frequently Asked</span> Questions
        </Title>
        <Paragraph className={styles.subtitle}>
          Find answers to commonly asked questions about GNSS, programs, research, and more.
        </Paragraph>
      </div>
    </section>
  );
};

export default HeroSection;
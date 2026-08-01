import { Typography } from 'antd';
import styles from "../About.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className="container">
        <Title level={1} className={styles.heroTitle}>About <span>Us</span></Title>
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

export default HeroSection;
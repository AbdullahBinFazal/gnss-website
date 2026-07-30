import { Link } from "react-router-dom";
import { Button, Typography, Space, Flex } from 'antd';
import styles from "./HeroSection.module.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.animateFadeInUp}`}>
        <span className={styles.badge}>🛰️ National Center of GIS & Space Applications</span>
        
        <Title level={1} className={styles.title}>
          Advancing <span className={styles.heroGradientText}>GNSS</span> Research &<br />
          Space Applications
        </Title>
        
        <Paragraph className={styles.description}>
          The GNSS program at NCGSA focuses on cutting-edge research in
          navigation, timing, surveying, and space applications.
        </Paragraph>
        
        <Flex gap="16px" justify="center" wrap="wrap" className={styles.buttons}>
          <Link to="/programs">
            <Button type="primary" size="large" className={styles.primaryBtn}>
              Explore Program →
            </Button>
          </Link>
          <Link to="/research">
            <Button size="large" className={styles.secondaryBtn}>
              View Research
            </Button>
          </Link>
        </Flex>
        
        <Flex gap="32px" justify="center" wrap="wrap" className={styles.trustBadges}>
          <span>✅ MS/PhD Program</span>
          <span>🔬 State-of-the-art Lab</span>
          <span>🌍 Global Collaborations</span>
        </Flex>
      </div>
    </section>
  );
};

export default HeroSection;
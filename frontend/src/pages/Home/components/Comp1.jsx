// src/pages/Home/components/Comp1.jsx
import { Link } from "react-router-dom";
import { Button, Typography, Flex } from 'antd';
import styles from "../../../styles/HomeStyles/Comp1.module.css";
import heroVideo from "../../../assets/hero-bg.mp4";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.homeHero}>
      <video 
        className={styles.homeHeroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="../../../assets/hero-bg.jpeg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.homeHeroContent}>
        <div className={styles.fadeInUp}>
          <Title level={1} className={styles.homeHeroTitle}>
            Advancing <span>GNSS</span> Research &<br />
            Space Applications
          </Title>
          
          <Paragraph className={styles.homeHeroDescription}>
            The GNSS program at NCGSA focuses on cutting-edge research in
            navigation, timing, surveying, and space applications.
          </Paragraph>
          
          <Flex gap="16px" justify="center" wrap="wrap" className={styles.homeHeroButtons}>
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
        </div>
      </div>
    </section>
  );
};

export default Comp1;
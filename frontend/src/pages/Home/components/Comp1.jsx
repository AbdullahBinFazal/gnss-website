// src/pages/Home/components/Comp1.jsx
import { Link } from "react-router-dom";
import { Typography } from 'antd';
import styles from "../../../styles/HomeStyles/Home.module.css";
import heroVideo from "../../../assets/hero-bg.mp4";

const { Title, Paragraph } = Typography;

const Comp1 = () => {
  return (
    <section className={styles.hero}>
      <video 
        className={styles.heroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="../../../assets/hero-bg.jpeg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.heroDecorations} />

      <div className={styles.heroContent}>
        <div className={styles.fadeInUp}>
          <Title level={1} className={styles.heroTitle}>
            Advancing GNSS Research And
            Applications
          </Title>
          <Paragraph className={styles.heroDescription}>
            The GNSS Research Lab of National Center of GIS & Space Applications at the Institute of Space Technology advances research, education and applied innovation in satellite navigation, precise positioning, resilient PNT and space-weather monitoring. 
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Comp1;
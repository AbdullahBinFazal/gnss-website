import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className="container">
        <h1 className={styles.title}>About <span>Us</span></h1>
        <p className={styles.description}>
          Global Navigation Satellite System Lab, a research and development
          lab, is dedicated to the advancement of GNSS technology and plays a
          crucial role in advancing research, innovation, and cutting-edge
          GNSS applications.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
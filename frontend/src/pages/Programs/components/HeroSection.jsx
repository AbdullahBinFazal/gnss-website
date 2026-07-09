import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <h1 className={styles.title}>
          <span>MS/PhD GNSS</span> Program
        </h1>
        <p className={styles.subtitle}>
          Pakistan's First Dedicated Graduate Program in Global Navigation Satellite Systems
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
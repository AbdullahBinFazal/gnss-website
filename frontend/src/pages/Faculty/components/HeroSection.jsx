import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <h1 className={styles.title}>
          <span>GNSS and Space Education</span> Research Lab
        </h1>
        <p className={styles.subtitle}>GSERL - Institute of Space Technology, Islamabad</p>
      </div>
    </section>
  );
};

export default HeroSection;
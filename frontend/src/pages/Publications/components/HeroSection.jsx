import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <h1 className={styles.title}>
          <span>Publications</span>
        </h1>
        <p className={styles.subtitle}>
          Research publications from NCGSA - National Center of GIS & Space Applications
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "80px 0", textAlign: "center" }}>
      <div className="container">
        <h2 className={styles.title}>
          <span>Research</span> Domains
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
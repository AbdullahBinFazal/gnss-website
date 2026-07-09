import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className="section-hero" style={{ padding: "60px 0 40px", textAlign: "center" }}>
      <div className="container">
        <h1 className={styles.title}>
          <span>Events</span>
        </h1>
        <p className={styles.subtitle}>
          Workshops, Conferences, and Outreach Programs at NCGSA-IST
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
import styles from "./GNSSLabSection.module.css";

const GNSSLabSection = () => {
  const gnssLabImage = "https://images.unsplash.com/photo-1710267224542-6c0428a796fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhdGVsbGl0ZSUyMHNwYWNlfGVufDB8fDB8fHww";

  return (
    <section style={{ padding: "20px 0 60px" }}>
      <div className="container">
        <div className={styles.card}>
          <img src={gnssLabImage} alt="GNSS Research Lab" className={styles.cardImage} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h2 className={styles.title}>
              🛰️ <span className={styles.gradientText}>GNSS Research Lab</span>
            </h2>
            <p className={styles.description}>
              The GNSS Research Lab, established in 2020 under the National Center of GIS and Space Applications (NCGSA), is equipped with cutting-edge GNSS receivers and equipment. It serves as a specialized hub for advanced research and innovation in satellite navigation.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>📅 Established 2020</span>
              <span className={styles.tag}>🏛️ Under NCGSA</span>
              <span className={styles.tag}>⚡ State-of-the-art Facility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GNSSLabSection;
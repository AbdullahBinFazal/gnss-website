import styles from "./HostUniversitySection.module.css";

const HostUniversitySection = () => {
  const istBuildingImage = "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop";

  return (
    <section className="section-about" style={{ padding: "20px 0" }}>
      <div className="container">
        <div className={styles.card}>
          <img src={istBuildingImage} alt="Institute of Space Technology, Islamabad" className={styles.image} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h3 className={styles.title}>🏛️ Host University</h3>
            <p className={styles.text}>Institute of Space Technology, Pakistan<br />Institute of Space Technology, Islamabad</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostUniversitySection;
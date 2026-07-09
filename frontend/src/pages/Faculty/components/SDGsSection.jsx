import styles from "./SDGsSection.module.css";

const sdgs = ["Good Health and Wellbeing", "Quality Education", "Gender Equality", "Decent Work and Economic Growth", "Reduced Inequality", "Industry Innovation and Infrastructure", "Sustainable Cities and Communities", "Climate Action", "Life Below Water", "Life On Land", "Partnership to Achieve Goals"];

const SDGsSection = () => {
  return (
    <section className="section-sdgs" style={{ padding: "40px 0" }}>
      <div className="container">
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=500&fit=crop" alt="Focused SDGs" className={styles.cardImage} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h2 className={styles.heading}>Focused <span className="gradient-text" style={{ color: "#a78bfa" }}>SDGs</span></h2>
            <div className={styles.grid}>
              {sdgs.map((sdg, index) => (
                <div key={index} className={styles.sdgItem}>{sdg}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
import styles from "./SDGsSection.module.css";

const sdgs = ["Good Health and Wellbeing", "Quality Education", "Gender Equality", "Decent Work and Economic Growth", "Reduced Inequality", "Industry Innovation and Infrastructure", "Sustainable Cities and Communities", "Climate Action", "Life Below Water", "Life On Land", "Partnership to Achieve Goals"];

const SDGsSection = () => {
  return (
    <section className="section-sdgs" style={{ padding: "40px 0" }}>
      <div className="container">
        <div className={styles.card}>
          <img src="https://media.gettyimages.com/id/165773692/photo/satellite-and-earth.jpg?s=612x612&w=0&k=20&c=Vlp5tQzJyqBIUxtqvHZ5MvAOHPjPo0LeozGo9wjAKfk=" alt="Focused SDGs" className={styles.cardImage} />
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
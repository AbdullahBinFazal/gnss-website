import styles from "./PhDProgram.module.css";

const programData = {
  phd: {
    title: "PhD Global Navigation Satellite Systems",
    duration: "3-5 Years",
    eligibility: [
      "MS in GNSS, Remote Sensing & GIS, Space Science, or related field",
      "Minimum 3.0 CGPA (or equivalent)",
      "GAT (Subject) with minimum 60% score",
      "Research proposal in relevant area"
    ],
    specializations: [
      "Advanced GNSS Signal Processing",
      "GNSS Augmentation Systems",
      "Space Weather & Satellite Navigation",
      "GNSS for Geospatial & Remote Sensing Applications",
      "Satellite Navigation Systems Design & Engineering"
    ],
    researchAreas: [
      "Multi-GNSS Positioning Algorithms",
      "Real-Time Kinematic (RTK) Positioning",
      "Precise Point Positioning (PPP)",
      "Ionosphere Modeling & Monitoring",
      "Seismo-Ionospheric Anomalies",
      "GNSS Spoofing & Jamming Detection",
      "Small Satellite Navigation Systems",
      "LEO-PNT Systems",
      "GNSS Reflectometry",
      "Space Weather Impact on GNSS"
    ]
  }
};

const SectionCard = ({ image, title, children }) => (
  <div className={styles.sectionCard}>
    <img src={image} alt={title} className={styles.sectionImage} />
    <div className={styles.sectionOverlay} />
    <div className={styles.sectionContent}>{children}</div>
  </div>
);

const PhDProgram = () => {
  const data = programData.phd;
  const sectionImages = {
    specializations: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    research: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
  };

  return (
    <section className="section-programs" style={{ padding: "20px 0 40px" }}>
      <div className="container">
        <div className={styles.programContainer}>
          {/* Program Overview */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <h2 className={styles.programTitle}>{data.title}</h2>
            <p className={styles.duration}>Duration: <strong>{data.duration}</strong></p>
            <div>
              <h4 className={styles.subHeading}>Eligibility Criteria</h4>
              <ul className={styles.list}>
                {data.eligibility.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* Specializations */}
          <SectionCard image={sectionImages.specializations} title="Specializations">
            <h3 className={styles.cardTitle}>🎯 Specializations</h3>
            <div className={styles.specializationsGrid}>
              {data.specializations.map((s, i) => (
                <div key={i} className={styles.specializationItem}>{s}</div>
              ))}
            </div>
          </SectionCard>

          {/* Research Areas */}
          <SectionCard image={sectionImages.research} title="Research Areas">
            <h3 className={styles.cardTitle}>🧪 Research Areas</h3>
            <div className={styles.researchGrid}>
              {data.researchAreas.map((item, i) => (
                <div key={i} className={styles.researchItem}>🧪 {item}</div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default PhDProgram;
import styles from "./ResearchAreasSection.module.css";

const researchAreas = [
  { icon: "📡", title: "PPP/RTK Techniques", desc: "Precise Point Positioning and Real-Time Kinematic for high-accuracy applications.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
  { icon: "🌐", title: "Ionosphere Studies", desc: "Understanding ionospheric effects on GNSS signals and navigation accuracy.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" },
  { icon: "☀️", title: "Space Weather", desc: "Solar activity impacts on GNSS performance and satellite operations.", image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ad?w=600&h=400&fit=crop" },
  { icon: "📡", title: "GNSS Receivers", desc: "Design and development of advanced GNSS receiver technologies.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" },
  { icon: "🛡️", title: "Spoofing & Jamming", desc: "Security aspects of GNSS signals and anti-jamming techniques.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop" },
  { icon: "🛰️", title: "LEO-PNT", desc: "Low Earth Orbit positioning, navigation, and timing systems.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop" },
];

const ResearchAreasSection = () => {
  return (
    <section className="section-domains" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Research Themes</span>
          <h2>Our <span className="gradient-text">Research</span> Areas</h2>
          <p>Exploring the frontiers of GNSS technology and space applications.</p>
        </div>
        <div className={styles.grid}>
          {researchAreas.map((area, index) => (
            <div key={index} className={styles.researchCard}>
              <img src={area.image} alt={area.title} className={styles.cardImage} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{area.icon}</div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDesc}>{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;
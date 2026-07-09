import styles from "./StatsSection.module.css";

const stats = [
  { label: "Expert Faculty", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", icon: "👨‍🏫" },
  { label: "Active Research Projects", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", icon: "🔬" },
  { label: "International Publications", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&h=400&fit=crop", icon: "📄" },
  { label: "Graduate Researchers", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", icon: "🎓" },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <img src={stat.image} alt={stat.label} className={styles.statImage} />
              <div className={styles.overlay} />
              <div className={styles.statContent}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
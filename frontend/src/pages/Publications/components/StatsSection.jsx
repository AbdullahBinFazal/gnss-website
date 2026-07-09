import styles from "./StatsSection.module.css";

const stats = [
  { label: "Research Publications", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&h=350&fit=crop", icon: "📄" },
  { label: "Research Domains", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=350&fit=crop", icon: "🔬" },
  { label: "Conference & Journal Papers", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop", icon: "🌍" },
  { label: "Innovation & Collaboration", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=350&fit=crop", icon: "🚀" },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "20px 0" }}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <img src={stat.image} alt={stat.label} className={styles.cardImage} />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <div className={styles.icon}>{stat.icon}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
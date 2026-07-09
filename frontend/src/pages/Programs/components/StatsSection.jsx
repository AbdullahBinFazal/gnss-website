import styles from "./StatsSection.module.css";

const stats = [
  { label: "Established Graduate Program", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop", icon: "🚀" },
  { label: "Active Research", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", icon: "🎓" },
  { label: "Thesis Based Learning", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&h=400&fit=crop", icon: "📄" },
  { label: "International Publications", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", icon: "📚" },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "30px 0" }}>
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
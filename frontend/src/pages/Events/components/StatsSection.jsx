import styles from "./StatsSection.module.css";

const stats = [
  { label: "Scientific Conferences", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=350&fit=crop", icon: "📅" },
  { label: "Training & Workshops", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=350&fit=crop", icon: "🎓" },
  { label: "International Collaborations", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop", icon: "🌍" },
  { label: "Community Outreach", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=350&fit=crop", icon: "🤝" },
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
import styles from "./StatsSection.module.css";

const statsData = [
  { id: 1, value: "28", label: "Software and Hardware Solutions", icon: "💻", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center" },
  { id: 2, value: "175", label: "Research Publications", icon: "📄", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop&crop=center" },
  { id: 3, value: "435", label: "Research Impact Factor", icon: "📊", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&crop=center" },
  { id: 4, value: "39", label: "Software and Hardware Solutions", icon: "⚙️", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=500&fit=crop&crop=center" },
];

const StatsSection = () => {
  return (
    <section className="section-about" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className={styles.grid}>
          {statsData.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <img src={stat.image} alt={stat.label} className={styles.statImage} />
              <div className={styles.overlay} />
              <div className={styles.statContent}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
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
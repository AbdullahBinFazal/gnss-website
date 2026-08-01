import styles from "../Programs.module.css";

const stats = [
  { label: "Established Graduate Program", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2", icon: "" },
  { label: "Active Research", image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2", icon: "" },
  { label: "Thesis Based Learning", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2", icon: "" },
  { label: "International Publications", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2", icon: "" },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "30px 0" }}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <img src={stat.image} alt={stat.label} className={styles.cardImage} />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <div className={styles.icon}>{stat.icon}</div>
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
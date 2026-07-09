import styles from "./ImpactSection.module.css";

const impactStats = [
  { id: 1, value: "49", label: "Academic Research & Development", icon: "📊", image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=300&fit=crop&crop=center" },
  { id: 2, value: "32", label: "Hardware/Software", icon: "💻", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center" },
  { id: 3, value: "601", label: "Models & Maps Development", icon: "🗺️", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop&crop=center" },
  { id: 4, value: "37", label: "Capacity Building", icon: "🏗️", image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=300&fit=crop&crop=center" },
  { id: 5, value: "67", label: "Linkages & Commercialization", icon: "🔗", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center" },
];

const ImpactCard = ({ stat }) => (
  <div className={styles.impactCard}>
    <img src={stat.image} alt={stat.label} className={styles.cardImage} />
    <div className={styles.overlay} />
    <div className={styles.cardContent}>
      <div className={styles.icon}>{stat.icon}</div>
      <div className={styles.value}>{stat.value}</div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  </div>
);

const ImpactSection = () => {
  return (
    <section className="section-impact" style={{ padding: "60px 0" }}>
      <div className="container">
        <h2 className={styles.heading}>Research <span className="gradient-text">Impact</span></h2>
        <p className={styles.subheading}>Measuring our contribution to space science and technology</p>
        <div className={styles.grid}>
          {impactStats.map(s => <ImpactCard key={s.id} stat={s} />)}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
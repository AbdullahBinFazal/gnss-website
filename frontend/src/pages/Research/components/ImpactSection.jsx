import styles from "../Research.module.css";

const impactStats = [
  { id: 1, value: "49", label: "Academic Research & Development", icon: "", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 2, value: "32", label: "Hardware/Software", icon: "", image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 3, value: "601", label: "Models & Maps Development", icon: "", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 4, value: "37", label: "Capacity Building", icon: "", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 5, value: "67", label: "Linkages & Commercialization", icon: "", image: "https://www.bing.com/th/id/OIP.wI6ZFV8xbLIXhAq3PXfiNgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
];

const ImpactCard = ({ stat }) => (
  <div className={styles.impactCard}>
    <img src={stat.image} alt={stat.label} className={styles.impactCardImage} />
    <div className={styles.impactOverlay} />
    <div className={styles.impactContent}>
      <div className={styles.impactIcon}>{stat.icon}</div>
      <div className={styles.impactValue}>{stat.value}</div>
      <div className={styles.impactLabel}>{stat.label}</div>
    </div>
  </div>
);

const ImpactSection = () => {
  return (
    <section className="section-impact" style={{ padding: "60px 0" }}>
      <div className="container">
        <h2 className={styles.impactHeading}>Research <span className="gradient-text">Impact</span></h2>
        <p className={styles.impactSubheading}>Measuring our contribution to space science and technology</p>
        <div className={styles.impactGrid}>
          {impactStats.map(s => <ImpactCard key={s.id} stat={s} />)}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
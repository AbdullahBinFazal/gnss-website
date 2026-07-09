import styles from "./ImpactSection.module.css";

const impacts = [
  { number: "49", label: "Academic Research & Development", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop" },
  { number: "32", label: "Hardware/ Software", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop" },
  { number: "1", label: "Models & Maps Development", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop" },
  { number: "601", label: "Capacity Building", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" },
  { number: "37", label: "Linkages & Commercialization", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop" },
  { number: "67", label: "Research Impact", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop" },
];

const ImpactSection = () => {
  return (
    <section className="section-impact" style={{ padding: "20px 0 40px" }}>
      <div className="container">
        <h2 className={styles.heading}><span className="gradient-text">Impact</span></h2>
        <div className={styles.grid}>
          {impacts.map((impact, index) => (
            <div key={index} className={styles.impactCard}>
              <img src={impact.image} alt={impact.label} className={styles.cardImage} />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <div className={styles.number}>{impact.number}</div>
                <div className={styles.label}>{impact.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
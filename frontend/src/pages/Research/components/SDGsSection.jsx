import styles from "./SDGsSection.module.css";

const sdgs = [
  { name: "Good Health and Wellbeing", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&crop=center" },
  { name: "Quality Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center" },
  { name: "Gender Equality", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&crop=center" },
  { name: "Decent Work and Economic Growth", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop&crop=center" },
  { name: "Reduced Inequality", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop&crop=center" },
  { name: "Industry Innovation and Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center" },
  { name: "Sustainable Cities and Communities", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop&crop=center" },
  { name: "Climate Action", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop&crop=center" },
  { name: "Life Below Water", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center" },
  { name: "Life On Land", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&crop=center" },
  { name: "Partnership to Achieve Goals", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center" },
];

const SDGCard = ({ sdg }) => (
  <div className={styles.sdgCard}>
    <img src={sdg.image} alt={sdg.name} className={styles.cardImage} />
    <div className={styles.overlay} />
    <span className={styles.cardName}>{sdg.name}</span>
  </div>
);

const SDGsSection = () => {
  return (
    <section className="section-sdgs" style={{ padding: "60px 0" }}>
      <div className="container">
        <h2 className={styles.heading}>Focused <span className="gradient-text">SDGs</span></h2>
        <p className={styles.subheading}>Aligning our research with the Sustainable Development Goals</p>
        <div className={styles.grid}>
          {sdgs.map((s, i) => <SDGCard key={i} sdg={s} />)}
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
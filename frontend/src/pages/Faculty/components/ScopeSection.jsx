import styles from "./ScopeSection.module.css";

const ScopeSection = () => {
  return (
    <section style={{ padding: "20px 0 40px" }}>
      <div className="container">
        <div className="glass-card" style={{ padding: "32px" }}>
          <h3 className={styles.title}>Scope</h3>
          <p className={styles.text}>GNSS and Space Education Research Lab (GSERL) is dedicated to produce cutting edge research outputs and human resource capacity building in the field of Global Navigation Satellite Systems and space.</p>
          <p className={styles.text}>Major research activities of GSERL include but not limited to transport monitoring system, livestock management using GNSS, Jamming & Spoofing, GNSS – INS Integration and GNSS Augmentation Systems. GSERL, in collaboration with the international GNSS community and local resources, aims to develop significant tools and techniques on national level to help harvest numerous benefits of GNSS and space applications.</p>
          <p className={styles.text}>GSERL also focuses on research for methods to spread mass awareness on national level about space science, technology and its applications through various summer/winter schools, seminars, events, workshops & training, competitions and public gatherings for all age groups. The lab aims to incorporate all the segments of the society towards a common goal of realizing the potential in space science & technology for socio-economic and technological development at national and international level.</p>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
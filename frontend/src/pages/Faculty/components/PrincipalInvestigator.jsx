import styles from "./PrincipalInvestigator.module.css";

const PrincipalInvestigator = () => {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <h2 className={styles.heading}>Principal Investigator / Lab <span className="gradient-text">Director</span></h2>
        <div className="glass-card" style={{ padding: "32px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
          <div className={styles.photo}>
            <img src="https://ncgsa.org.pk/storage/2021/04/Dr.-Abdul-Waheed.jpg" alt="Dr. Abdul Waheed" />
          </div>
          <div>
            <h3 className={styles.name}>Dr. Abdul Waheed</h3>
            <p className={styles.institute}>IST, Islamabad</p>
            <p className={styles.contact}>📧 <a href="mailto:waheed901@yahoo.com">waheed901@yahoo.com</a></p>
            <p className={styles.contact}>📞 051-967-5467</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalInvestigator;
import styles from "./DomainsSection.module.css";

const researchDomains = [
  { title: "Domain 1 – Space Awareness and Outreach", description: "This application domain deals with the space education and awareness activities targeting general masses for the greater impact.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop" },
  { title: "Domain 2 – Education & Training", description: "This Application domain focuses on the education and specialized trainings related to space science & technology and GNSS. Several education programs, including degree programs will be run throughout the year to develop specialized human resource in the domains of Space Science & Technology and GNSS.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop" },
  { title: "Domain 3 – GNSS Research & Development", description: "This Application domain is specifically focused on GNSS. Purpose of the domain is to design and develop some hardware and software solutions using GNSS. These solutions will be focused on the real-life problems in our society.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" },
  { title: "Domain 4 – GNSS Applications", description: "This domain deals with the applications and spins offs of GNSS. Various applications of GNSS technology will be applied to design solutions, applications and research products.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop" },
];

const DomainsSection = () => {
  return (
    <section className="section-domains" style={{ padding: "20px 0" }}>
      <div className="container">
        <h2 className={styles.heading}>Research <span className="gradient-text">Domains</span></h2>
        <div className={styles.grid}>
          {researchDomains.map((domain, index) => (
            <div key={index} className={styles.domainCard}>
              <img src={domain.image} alt={domain.title} className={styles.cardImage} />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{domain.title}</h4>
                <p className={styles.cardDescription}>{domain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
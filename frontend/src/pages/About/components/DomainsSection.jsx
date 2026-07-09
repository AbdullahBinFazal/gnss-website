import styles from "./DomainsSection.module.css";

const domains = [
  { id: 1, title: "Domain 1 – GNSS Research and Development", icon: "📡", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center",
    description: "The objective of this domain is to devise and develop a range of hardware and software solutions that employ GNSS technology. By developing hardware and software solutions that incorporate GNSS technology, the aim is to provide tangible benefits to society by addressing real life challenges. GNSS Research Lab is currently working on the development of GNSS receivers capable of performing occultation measurements, as well as establishing a Continuous Operating Reference Station (CORS) Network." },
  { id: 2, title: "Domain 2 – Education and Training", icon: "🎓", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&h=600&fit=crop&crop=center",
    description: "The main emphasis of this domain is on education and training programs that are centered on GNSS. These programs may include degree courses, with aim of cultivating a highly skilled workforce specializing in various domains of GNSS. GNSS Research Lab is dedicated to enhancing its capacity in the area of Global Navigation Satellite Systems by conducting interactive training sessions and seminars. Like Summer and Winter School on GNSS, Internships at undergraduate and graduate level, Seminars and webinars. These efforts are aimed at providing hands-on experience to participants and promoting practical learning in this field." },
  { id: 3, title: "Domain 3 – GNSS Research Application", icon: "🛰️", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=600&fit=crop&crop=center",
    description: "The focus of this domain is on the practical applications and benefits derived from GNSS technology. Several Research applications of GNSS are being pursued within this domain.",
    applications: ["GNSS Space Weather", "GNSS Augmentation System", "GIS-GNSS Integration", "INS-GNSS Integration", "Seismic & Earthquake Monitoring", "CORS Network of Universities", "GNSS Jamming", "GNSS Spoofing", "Indoor Positioning System", "GNSS Web/Mobile Application", "Navigation Constellation Design", "Transport Monitoring System", "Interference Monitoring", "Integrity Monitoring", "GNSS & Reflectometry", "Earthquake Monitoring"] },
];

const DomainsSection = () => {
  return (
    <section className="section-domains" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 16px", background: "rgba(255,255,255,0.15)", borderRadius: "9999px", color: "#ffffff", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)" }}>Our Research</span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>GNSS Research <span style={{ color: "#ffffff" }}>Lab Domains</span></h2>
        </div>
        <div className={styles.grid}>
          {domains.map((domain) => (
            <div key={domain.id} className={styles.domainCard}>
              <img src={domain.image} alt={domain.title} className={styles.domainImage} />
              <div className={styles.overlay} />
              <div className={styles.domainContent}>
                <div className={styles.domainHeader}>
                  <span className={styles.domainIcon}>{domain.icon}</span>
                  <h3 className={styles.domainTitle}>{domain.title}</h3>
                </div>
                <p className={styles.domainDescription}>{domain.description}</p>
                {domain.applications && (
                  <div className={styles.applications}>
                    <p className={styles.applicationsTitle}>Research Applications:</p>
                    <div className={styles.applicationsList}>
                      {domain.applications.map((app, idx) => (
                        <span key={idx} className={styles.applicationTag}>{app}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
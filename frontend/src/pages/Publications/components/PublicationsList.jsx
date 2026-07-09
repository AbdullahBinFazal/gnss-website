import { Link } from "react-router-dom";
import styles from "./PublicationsList.module.css";

// Data moved outside
const publications = [
  { id: 1, title: "Design, Implementation and Verification of GNSS Continuously Operating Reference Stations using Commercial off the Shelf Receivers", authors: "Dr. Najam Naqvi, Daniyal Raza Kazmi, Faran Ali, Faaiz Ahmed Jeelani, Usama Ahmed", journal: "IAF Space Communications and Navigation Symposium (IAC-25)", year: 2025, type: "Conference Paper", category: "GNSS CORS", link: "https://iafastro.directory/iac/paper/id/103401/", abstract: "This research implemented a carrier-phase-based CORS network at IST Islamabad using Zed F9P receiver as base station and C94-M8P as rover. The study evaluated RTK-based positioning accuracy compared to standalone GNSS solutions.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" },
  { id: 2, title: "Leveraging Machine Learning for the Detection of Structured Interference in Global Navigation Satellite Systems", authors: "Imtiaz Nabi, Salma Zainab Farooq, Sunnyaha Saeed, S.A. Irtaza, K. Shehzad, M. Arif, I. Khan, S. Ahmad", journal: "PeerJ Computer Science", year: 2024, type: "Journal Paper", category: "GNSS Security", link: "https://peerj.com/articles/cs-2399/", abstract: "This study explores machine learning techniques for detecting GNSS spoofing attacks, specifically focusing on SCER spoofing attacks using the TEXBAT dataset. Logistic regression and SVM achieved 94% F1-score.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" },
  { id: 3, title: "Pioneering Navigation: The Specialized MS GNSS Program at Institute of Space Technology, Pakistan", authors: "Dr. Najam Naqvi, Samra Kiran, Dr. Salma Zainab Farooq, Usama Ahmed, Daniyal Raza Kazmi", journal: "IAF Space Education and Outreach Symposium (IAC-24)", year: 2024, type: "Conference Paper", category: "GNSS Education", link: "https://iafastro.directory/iac/paper/id/91375/", abstract: "This paper outlines the establishment and contributions of the specialized MS GNSS Program at IST since 2014, which has graduated over 60 students with 60 research theses and 100+ publications.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop" },
  { id: 4, title: "The Establishment of the First Global Navigation Satellite Systems (GNSS) Research Lab", authors: "Dr. Najam Naqvi, Dr. Salma Zainab Farooq, Samra Kiran, Usama Ahmed, Daniyal Raza Kazmi", journal: "IAF Space Communications and Navigation Symposium (IAC-24)", year: 2024, type: "Conference Paper", category: "GNSS Lab", link: "https://iafastro.directory/iac/archive/browse/IAC-24/B2/IP/90881/", abstract: "This research outlines the establishment of the first GNSS Lab in Pakistan, a state-of-the-art facility equipped with cutting-edge GNSS receivers, committed to advancing GNSS research and education.", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop" },
  { id: 5, title: "Resolution Improvement in GNSS Based Synthetic Aperture Radar Using GPS L1 Signals from Different Look Angles", authors: "Muhammad Shoaib Ul Hassan, Hassan Sadiq, Najam Abbas Naqvi, Mohammad Usman", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "GNSS SAR", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper explores resolution improvement in GNSS-based Synthetic Aperture Radar using GPS L1 signals from different look angles.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop" },
  { id: 6, title: "Performance Analysis of Global Ionosphere/TEC Models Over Islamabad", authors: "National University of Science and Technology (NUST), Institute of Space Technology (IST)", journal: "ICASE 2021", year: 2021, type: "Conference Paper", category: "Ionosphere", link: "https://ieeexplore.ieee.org/document/9904116", abstract: "This paper analyzes Global Ionosphere Maps (GIM) and IRI-2016 models over Islamabad. It concludes that IRI-2016 correlates better to actual TEC when local GNSS data is unavailable.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop" },
  { id: 7, title: "GNSS TEC based Ionosphere Anomalies Related to the 2019 Mw 6.2 Thailand Earthquake", authors: "Shireen Mushtaq, Rimsha Ashraf, Dr. Munawar Shah, Punyawi Jamjareegulgran", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "Seismo-Ionospheric", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper investigates GNSS TEC-based ionosphere anomalies related to the 2019 Mw 6.2 Thailand Earthquake.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop" },
  { id: 8, title: "Investigation of Seismo Ionospheric Anomalies Associated with the Mw 6.7 Mongolia Earthquake", authors: "Shireen Mushtaq, Rimsha Ashraf", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "Seismo-Ionospheric", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper investigates seismo-ionospheric anomalies associated with the Mw 6.7 Mongolia Earthquake using GNSS TEC data.", image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ad?w=800&h=400&fit=crop" },
  { id: 9, title: "Possible Seismo-Ionospheric Anomalies Associated with the Earthquakes Occurred in 2018 Using GNSS TEC: A Statistical Analysis", authors: "Muhammad Arqim Adil, Munawar Shah, Asim Khan, Ejaz Nazir, Mohamed Freeshah, Hamza Bin Babar", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "Seismo-Ionospheric", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "Statistical analysis of possible seismo-ionospheric anomalies associated with earthquakes in 2018 using GNSS TEC data.", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop" },
  { id: 10, title: "Establishment of National Center of GIS & Space Applications: The First Step towards achieving the UN SDGs through Space", authors: "Dr. Najam Naqvi, Dr. Salma Zainab Farooq, Usama Ahmed, Daniyal Raza Kazmi", journal: "IAF Space Education and Outreach Symposium (IAC-24)", year: 2024, type: "Conference Paper", category: "NCGSA", link: "https://iafastro.directory/iac/archive/browse/IAC-24/E1/IP/91021/", abstract: "This paper shares the success story of establishing NCGSA at Pakistan to achieve UN SDGs through space science, technology and its applications.", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop" },
  { id: 11, title: "Modeling and Simulation of BSAR System Using Reflected BeiDou B11 Signals", authors: "Hassan Sadiq, Muhammad Shoaib ul Hassan, Muhammad Usman", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "GNSS Applications", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper presents modeling and simulation of Bi-Static Synthetic Aperture Radar using reflected BeiDou B11 signals.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop" },
  { id: 12, title: "GNSS Fault Detection and Exclusion Algorithm for Single Frequency Receivers", authors: "Sunnyaha Saeed, Salma Zainab Farooq, Imtiaz Nabi", journal: "19th International Bhurban Conference on Applied Sciences and Technology (IBCAST 2022)", year: 2022, type: "Conference Paper", category: "GNSS Integrity", link: "http://cy.gmachineinfo.com/hydetail.aspx?id=105301295", abstract: "This paper proposes an integrity monitoring algorithm for single frequency GNSS receivers that detects and identifies faulty measurements, excluding them to ensure reliable outputs.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" },
  { id: 13, title: "Threats to the Navigation of Drone Based Delivery Services", authors: "Imtiaz Nabi, Salma Zainab Farooq, Sunnyaha Saeed", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "GNSS Security", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper discusses threats to navigation of drone-based delivery services, focusing on GNSS vulnerabilities.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop" },
];

const categoryColors = { "GNSS CORS": "#6366f1", "GNSS Security": "#ec4899", "GNSS Education": "#22c55e", "GNSS Lab": "#f59e0b", "GNSS SAR": "#8b5cf6", "Ionosphere": "#06b6d4", "Seismo-Ionospheric": "#ef4444", "NCGSA": "#14b8a6", "GNSS Applications": "#f97316", "GNSS Integrity": "#8b5cf6" };

const getCategoryColor = (cat) => categoryColors[cat] || "#6366f1";

const PublicationCard = ({ pub }) => (
  <div className={styles.publicationCard} style={{ borderLeft: `4px solid ${getCategoryColor(pub.category)}` }}>
    <img src={pub.image} alt={pub.category} className={styles.cardImage} />
    <div className={styles.overlay} />
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{pub.title}</h3>
          <p className={styles.cardText}><strong>Authors:</strong> {pub.authors}</p>
          <p className={styles.cardText}><strong>Journal:</strong> {pub.journal}</p>
          <p className={styles.cardText}><strong>Year:</strong> {pub.year}</p>
          {pub.abstract && <p className={styles.cardAbstract}>{pub.abstract}</p>}
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.categoryTag} style={{ background: `${getCategoryColor(pub.category)}40`, color: getCategoryColor(pub.category) }}>
            {pub.category}
          </span>
          <span className={styles.typeTag} style={{ background: pub.type === "Journal Paper" ? "rgba(34,197,94,0.3)" : "rgba(99,102,241,0.3)", color: pub.type === "Journal Paper" ? "#22c55e" : "#6366f1" }}>
            {pub.type}
          </span>
          {pub.link && (
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
              View Paper →
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PublicationsList = ({ activeFilter, searchTerm }) => {
  const filtered = publications.filter(pub => {
    const matchFilter = activeFilter === "all" || pub.category === activeFilter;
    const matchSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section className="section-publications" style={{ padding: "20px 0 60px" }}>
      <div className="container">
        <div className={styles.listContainer}>
          {filtered.length === 0 ? (
            <div className="glass-card" style={{ padding: "40px", textAlign: "center" }}>
              <p style={{ color: "var(--text-secondary)" }}>No publications found matching your criteria.</p>
            </div>
          ) : (
            filtered.map((pub) => <PublicationCard key={pub.id} pub={pub} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsList;
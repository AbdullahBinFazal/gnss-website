import { useState } from "react";
import styles from "../Research.module.css";

const publications = [
  { id: 1, title: "Design, Implementation and Verification of GNSS Continuously Operating Reference Stations using Commercial off the Shelf Receivers", authors: "Dr. Najam Naqvi, Daniyal Raza Kazmi, Faran Ali, Faaiz Ahmed Jeelani, Usama Ahmed", journal: "IAF Space Communications and Navigation Symposium (IAC-25)", year: 2025, type: "Conference Paper", category: "GNSS CORS", link: "https://iafastro.directory/iac/paper/id/103401/", abstract: "This research implemented a carrier-phase-based CORS network at IST Islamabad using Zed F9P receiver as base station and C94-M8P as rover. The study evaluated RTK-based positioning accuracy compared to standalone GNSS solutions.", image: "https://media.gettyimages.com/id/2206773305/photo/satellite-in-space-station-orbiting-earth-providing-communication-internet-connection-coverage.jpg?s=612x612&w=0&k=20&c=LUimbBcDRewwUbzKTMLfFhxhWqm_bwjajUVSLpkTtu8=" },
  { id: 2, title: "Leveraging Machine Learning for the Detection of Structured Interference in Global Navigation Satellite Systems", authors: "Imtiaz Nabi, Salma Zainab Farooq, Sunnyaha Saeed, S.A. Irtaza, K. Shehzad, M. Arif, I. Khan, S. Ahmad", journal: "PeerJ Computer Science", year: 2024, type: "Journal Paper", category: "GNSS Security", link: "https://peerj.com/articles/cs-2399/", abstract: "This study explores machine learning techniques for detecting GNSS spoofing attacks, specifically focusing on SCER spoofing attacks using the TEXBAT dataset. Logistic regression and SVM achieved 94% F1-score.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" },
  { id: 3, title: "Pioneering Navigation: The Specialized MS GNSS Program at Institute of Space Technology, Pakistan", authors: "Dr. Najam Naqvi, Samra Kiran, Dr. Salma Zainab Farooq, Usama Ahmed, Daniyal Raza Kazmi", journal: "IAF Space Education and Outreach Symposium (IAC-24)", year: 2024, type: "Conference Paper", category: "GNSS Education", link: "https://iafastro.directory/iac/paper/id/91375/", abstract: "This paper outlines the establishment and contributions of the specialized MS GNSS Program at IST since 2014, which has graduated over 60 students with 60 research theses and 100+ publications.", image: "https://media.gettyimages.com/id/1609597622/photo/satellite-internet-communication-from-space.jpg?s=612x612&w=0&k=20&c=sZWPgtH8lFsOYNCzmpissHgUyYCJOqPK9SeTXZutqYU=" },
  { id: 4, title: "The Establishment of the First Global Navigation Satellite Systems (GNSS) Research Lab", authors: "Dr. Najam Naqvi, Dr. Salma Zainab Farooq, Samra Kiran, Usama Ahmed, Daniyal Raza Kazmi", journal: "IAF Space Communications and Navigation Symposium (IAC-24)", year: 2024, type: "Conference Paper", category: "GNSS Lab", link: "https://iafastro.directory/iac/archive/browse/IAC-24/B2/IP/90881/", abstract: "This research outlines the establishment of the first GNSS Lab in Pakistan, a state-of-the-art facility equipped with cutting-edge GNSS receivers, committed to advancing GNSS research and education.", image: "https://media.gettyimages.com/id/96376746/photo/satellite-with-solar-panels-above-earth.jpg?s=612x612&w=0&k=20&c=bn_DeXGOFrt48Q-gJ_e3l_B7S1AhaVZQjf7UiwVkLqU=" },
  { id: 5, title: "Resolution Improvement in GNSS Based Synthetic Aperture Radar Using GPS L1 Signals from Different Look Angles", authors: "Muhammad Shoaib Ul Hassan, Hassan Sadiq, Najam Abbas Naqvi, Mohammad Usman", journal: "ICASE 2021 Proceedings", year: 2021, type: "Conference Paper", category: "GNSS SAR", link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84", abstract: "This paper explores resolution improvement in GNSS-based Synthetic Aperture Radar using GPS L1 signals from different look angles.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop" },
  { id: 6, title: "Performance Analysis of Global Ionosphere/TEC Models Over Islamabad", authors: "National University of Science and Technology (NUST), Institute of Space Technology (IST)", journal: "ICASE 2021", year: 2021, type: "Conference Paper", category: "Ionosphere", link: "https://ieeexplore.ieee.org/document/9904116", abstract: "This paper analyzes Global Ionosphere Maps (GIM) and IRI-2016 models over Islamabad. It concludes that IRI-2016 correlates better to actual TEC when local GNSS data is unavailable.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop" },
];

const categoryColors = { "GNSS CORS": "#f5f5f5", "GNSS Security": "#fbf7f9", "GNSS Education": "#f2faf5", "GNSS Lab": "#efece7", "GNSS SAR": "#faf9fe", "Ionosphere": "#edf3f4", "Seismo-Ionospheric": "#f3eeee", "NCGSA": "#eff4f4", "GNSS Applications": "#faf6f3", "GNSS Integrity": "#f8f7fa" };

const getCategoryColor = (cat) => categoryColors[cat] || "#6366f1";

const stats = [
  { label: "Research Publications", icon: "📄" },
  { label: "Research Domains", icon: "🔬" },
  { label: "Conference & Journal Papers", icon: "🌍" },
  { label: "Innovation & Collaboration", icon: "🚀" },
];

const categories = ["all", ...new Set(publications.map(p => p.category))];

const PublicationCard = ({ pub }) => (
  <div className={styles.pubCard} style={{ borderLeft: `4px solid ${getCategoryColor(pub.category)}` }}>
    <img src={pub.image} alt={pub.category} className={styles.pubCardImage} />
    <div className={styles.pubOverlay} />
    <div className={styles.pubCardContent}>
      <div className={styles.pubCardHeader}>
        <div className={styles.pubCardBody}>
          <h3 className={styles.pubCardTitle}>{pub.title}</h3>
          <p className={styles.pubCardText}><strong>Authors:</strong> {pub.authors}</p>
          <p className={styles.pubCardText}><strong>Journal:</strong> {pub.journal}</p>
          <p className={styles.pubCardText}><strong>Year:</strong> {pub.year}</p>
          {pub.abstract && <p className={styles.pubCardAbstract}>{pub.abstract}</p>}
        </div>
        <div className={styles.pubCardMeta}>
          <span className={styles.pubCategoryTag} style={{ background: `${getCategoryColor(pub.category)}40`, color: getCategoryColor(pub.category) }}>
            {pub.category}
          </span>
          <span className={styles.pubTypeTag} style={{ background: pub.type === "Journal Paper" ? "rgb(243, 248, 245)" : "rgb(255, 255, 255)", color: pub.type === "Journal Paper" ? "#000000" : "#000000" }}>
            {pub.type}
          </span>
          {pub.link && (
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.pubViewLink}>
              View Paper →
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = publications.filter(pub => {
    const matchFilter = activeFilter === "all" || pub.category === activeFilter;
    const matchSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section className="section-publications" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="section-title">
          <h2>Research <span className="gradient-text">Publications</span></h2>
          <p>Research publications from NCGSA - National Center of GIS & Space Applications</p>
        </div>

        <div className={styles.pubStatsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.pubStatCard}>
              <div className={styles.pubStatIcon}>{stat.icon}</div>
              <div className={styles.pubStatLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.pubFilterContainer}>
          <div className={styles.pubCategories}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.pubCategoryBtn} ${activeFilter === cat ? styles.active : ""}`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
          <div className={styles.pubSearchBox}>
            <span className={styles.pubSearchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.pubSearchInput}
            />
          </div>
        </div>

        <div className={styles.pubListGrid}>
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

export default PublicationsSection;
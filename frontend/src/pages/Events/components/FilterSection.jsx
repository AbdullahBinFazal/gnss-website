import styles from "./FilterSection.module.css";

// Data moved outside for categories
const eventsData = [
  { id: 1, title: "National Space Symposium 2025", date: "2025", type: "Symposium", category: "Conference", description: "Jointly organized by SUPARCO, NCGSA, and IST. Prof. Ahsan Iqbal, Federal Minister for Planning, Development & Special Initiatives, was the Chief Guest and inaugurated the NCGSA research facility.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop", icon: "🛰️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 2, title: "2nd Workshop on General Relativity, Cosmology, Astrophysics & Particle Physics 2024", date: "December 12, 2024", type: "Workshop", category: "Academic", description: "Organized by SARL-NCGSA at IST Islamabad. Brought together over 80 students, researchers, and professionals from across Pakistan.", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop", icon: "🌌", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 3, title: "National GIS Summit 2024", date: "November 20, 2024", type: "Summit", category: "Conference", description: "Hosted by NCGSA at IST Islamabad to commemorate International GIS Day. Featured sessions on geospatial solutions for sustainable development, GIS for agriculture, climate change, and geo-forensics.", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop", icon: "🗺️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 4, title: "Workshop on Space Law and Policy 2024", date: "September 3-4, 2024", type: "Workshop", category: "Academic", description: "Two-day workshop at IST Islamabad with over 60 participants. Featured international experts including Hamza Hameed (Singapore) and Muhammad Arham Khan (SUPARCO).", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop", icon: "⚖️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 5, title: "International Workshop on Geological Remote Sensing & Applications 2024", date: "June 5-6, 2024", type: "Workshop", category: "International", description: "Organized by NCGSA in collaboration with G-SAG Lab, University of Peshawar. Expert facilitators from ITC, University of Twente, Netherlands.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop", icon: "🌍", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 6, title: "World Space Week 2025", date: "October 9-10, 2025", type: "Festival", category: "Outreach", description: "Two-day event for Grades 6-12 under the theme 'Living in Space'. Features Space Knowledge Quest, Creative Writing, Technology Demonstrations, and Art & Design competitions.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop", icon: "🚀", link: "https://ncgsa.org.pk/world-space-week/" },
  { id: 7, title: "Summer School on Remote Sensing & GISc 2023", date: "June 19-23, 2023", type: "Summer School", category: "Training", description: "Five-day program with over 100 participants. Collaboration with Deqing Association for Geospatial Information Professionals (DQGIP), China.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop", icon: "📡", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 8, title: "Teachers' Training Workshop on Space Education 2023", date: "September 14-16, 2023", type: "Workshop", category: "Training", description: "Three-day workshop for primary and secondary science teachers. Conducted in collaboration with IAU Office of Astronomy for Education.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop", icon: "👨‍🏫", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 9, title: "APRSAF Space Education Seminar 2023", date: "February 1, 2023", type: "Seminar", category: "International", description: "Jointly organized by JAXA, SUPARCO SEAD, and NCGSA SERL at IST Islamabad. Over 100 students and educators participated.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop", icon: "🌏", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 10, title: "2nd GNSS Winter School 2022", date: "October 19-21, 2022", type: "Winter School", category: "Training", description: "Organized by GNSS Research Lab-NCGSA. Focused on GNSS technology and space weather phenomena, including ionosphere disturbances and signal disruptions.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop", icon: "📡", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 11, title: "1st GNSS Winter School 2021", date: "February 22-26, 2021", type: "Winter School", category: "Training", description: "First GNSS Winter School at IST Islamabad. Covered GNSS signal structure, receiver architecture, signal processing, and ionospheric effects.", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop", icon: "🛰️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 12, title: "Workshop on Principles of Project Management 2022", date: "December 27-30, 2022", type: "Workshop", category: "Training", description: "Four-day workshop at IST Islamabad. Covered project management concepts aligned with PMBOK 6 framework.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop", icon: "📊", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 13, title: "180 Seconds Space Film Festival 2021", date: "Summer 2021", type: "Festival", category: "Outreach", description: "Organized by Space Education Research Lab-NCGSA. Invited short films in fiction, documentary, and animation genres centered on 'Space Science, Technology, and Its Applications'.", image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ad?w=800&h=400&fit=crop", icon: "🎬", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 14, title: "Geospatial Hackathon 2020", date: "2020", type: "Hackathon", category: "Competition", description: "Organized by GNSS and Space Education Research Lab in response to COVID-19 pandemic impacts on society.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop", icon: "💻", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 15, title: "International Conference on Geological Hazards 2025", date: "May 27-28, 2025", type: "Conference", category: "International", description: "Organized by Geological Survey of Pakistan. NCGSA researchers presented on GNSS innovation, hazard monitoring, and academic CORS networks. Letter of Cooperation signed between NCGSA and GSP.", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop", icon: "🏔️", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 16, title: "75th International Astronautical Congress 2024", date: "October 14-18, 2024", type: "Conference", category: "International", description: "Held in Milan, Italy. Dr. Najam Abbas shared insights on NCGSA's establishment and impact. NCGSA's poster selected amongst interactive top 10 presentations.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop", icon: "🌎", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 17, title: "Webinar on Monitoring Geomagnetic Storms using Magnetometers 2024", date: "May 21, 2024", type: "Webinar", category: "Academic", description: "Hosted by NCGSA in collaboration with SUPARCO and NED University. Featured indigenous development of magnetometer by NED-UET and SUPARCO.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop", icon: "⚡", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 18, title: "14th International Conference on Electrical Engineering 2024", date: "May 21-23, 2024", type: "Conference", category: "International", description: "Held in Cairo, Egypt. GNSS Lab-NCGSA presented three research papers. Ms. Samra Kiran received the Best Poster Award.", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop", icon: "🔌", link: "https://ncgsa.org.pk/collaboration/" },
];

const categories = ["all", ...new Set(eventsData.map(e => e.category))];

const FilterSection = ({ activeFilter, setActiveFilter, searchTerm, setSearchTerm }) => {
  return (
    <section style={{ padding: "20px 0" }}>
      <div className="container">
        <div className={styles.filterContainer}>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.categoryBtn} ${activeFilter === cat ? styles.active : ""}`}
              >
                {cat === "all" ? "All Events" : cat}
              </button>
            ))}
          </div>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
import { Button, Input, Space } from 'antd';
import styles from "./FilterSection.module.css";

const { Search } = Input;

// Data moved outside for categories
const eventsData = [
  { id: 1, title: "National Space Symposium 2025", date: "2025", type: "Symposium", category: "Conference" },
  { id: 2, title: "2nd Workshop on General Relativity, Cosmology, Astrophysics & Particle Physics 2024", date: "December 12, 2024", type: "Workshop", category: "Academic" },
  { id: 3, title: "National GIS Summit 2024", date: "November 20, 2024", type: "Summit", category: "Conference" },
  { id: 4, title: "Workshop on Space Law and Policy 2024", date: "September 3-4, 2024", type: "Workshop", category: "Academic" },
  { id: 5, title: "International Workshop on Geological Remote Sensing & Applications 2024", date: "June 5-6, 2024", type: "Workshop", category: "International" },
  { id: 6, title: "World Space Week 2025", date: "October 9-10, 2025", type: "Festival", category: "Outreach" },
  { id: 7, title: "Summer School on Remote Sensing & GISc 2023", date: "June 19-23, 2023", type: "Summer School", category: "Training" },
  { id: 8, title: "Teachers' Training Workshop on Space Education 2023", date: "September 14-16, 2023", type: "Workshop", category: "Training" },
  { id: 9, title: "APRSAF Space Education Seminar 2023", date: "February 1, 2023", type: "Seminar", category: "International" },
  { id: 10, title: "2nd GNSS Winter School 2022", date: "October 19-21, 2022", type: "Winter School", category: "Training" },
  { id: 11, title: "1st GNSS Winter School 2021", date: "February 22-26, 2021", type: "Winter School", category: "Training" },
  { id: 12, title: "Workshop on Principles of Project Management 2022", date: "December 27-30, 2022", type: "Workshop", category: "Training" },
  { id: 13, title: "180 Seconds Space Film Festival 2021", date: "Summer 2021", type: "Festival", category: "Outreach" },
  { id: 14, title: "Geospatial Hackathon 2020", date: "2020", type: "Hackathon", category: "Competition" },
  { id: 15, title: "International Conference on Geological Hazards 2025", date: "May 27-28, 2025", type: "Conference", category: "International" },
  { id: 16, title: "75th International Astronautical Congress 2024", date: "October 14-18, 2024", type: "Conference", category: "International" },
  { id: 17, title: "Webinar on Monitoring Geomagnetic Storms using Magnetometers 2024", date: "May 21, 2024", type: "Webinar", category: "Academic" },
  { id: 18, title: "14th International Conference on Electrical Engineering 2024", date: "May 21-23, 2024", type: "Conference", category: "International" },
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
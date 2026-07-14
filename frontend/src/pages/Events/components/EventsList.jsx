import styles from "./EventsList.module.css";

// Data moved outside
const eventsData = [
  { id: 1, title: "National Space Symposium 2025", date: "2025", type: "Symposium", category: "Conference", description: "Jointly organized by SUPARCO, NCGSA, and IST. Prof. Ahsan Iqbal, Federal Minister for Planning, Development & Special Initiatives, was the Chief Guest and inaugurated the NCGSA research facility.", image: "https://plus.unsplash.com/premium_photo-1679756099015-b06104fff761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2F0ZWxsaXRlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D", icon: "🛰️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 2, title: "2nd Workshop on General Relativity, Cosmology, Astrophysics & Particle Physics 2024", date: "December 12, 2024", type: "Workshop", category: "Academic", description: "Organized by SARL-NCGSA at IST Islamabad. Brought together over 80 students, researchers, and professionals from across Pakistan.", image: "https://images.unsplash.com/photo-1710267224542-6c0428a796fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhdGVsbGl0ZSUyMHNwYWNlfGVufDB8fDB8fHww", icon: "🌌", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 3, title: "National GIS Summit 2024", date: "November 20, 2024", type: "Summit", category: "Conference", description: "Hosted by NCGSA at IST Islamabad to commemorate International GIS Day. Featured sessions on geospatial solutions for sustainable development, GIS for agriculture, climate change, and geo-forensics.", image: "https://media.gettyimages.com/id/2167849497/photo/satellite-in-space-station-orbiting-earth.jpg?s=612x612&w=0&k=20&c=cnmNm9dBVanP6_5hNG6vMM023XBZZhxn10h6Mch8O8g=", icon: "🗺️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 4, title: "Workshop on Space Law and Policy 2024", date: "September 3-4, 2024", type: "Workshop", category: "Academic", description: "Two-day workshop at IST Islamabad with over 60 participants. Featured international experts including Hamza Hameed (Singapore) and Muhammad Arham Khan (SUPARCO).", image: "https://media.gettyimages.com/id/1648725322/photo/satellite-internet-communication-and-earth.jpg?s=612x612&w=0&k=20&c=-MeQJG21OCHLWyt2xmb5sTXPTTEi8aFGzOuroCs7NSU=", icon: "⚖️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 5, title: "International Workshop on Geological Remote Sensing & Applications 2024", date: "June 5-6, 2024", type: "Workshop", category: "International", description: "Organized by NCGSA in collaboration with G-SAG Lab, University of Peshawar. Expert facilitators from ITC, University of Twente, Netherlands.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop", icon: "🌍", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 6, title: "World Space Week 2025", date: "October 9-10, 2025", type: "Festival", category: "Outreach", description: "Two-day event for Grades 6-12 under the theme 'Living in Space'. Features Space Knowledge Quest, Creative Writing, Technology Demonstrations, and Art & Design competitions.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop", icon: "🚀", link: "https://ncgsa.org.pk/world-space-week/" },
  { id: 7, title: "Summer School on Remote Sensing & GISc 2023", date: "June 19-23, 2023", type: "Summer School", category: "Training", description: "Five-day program with over 100 participants. Collaboration with Deqing Association for Geospatial Information Professionals (DQGIP), China.", image: "https://media.gettyimages.com/id/165773692/photo/satellite-and-earth.jpg?s=612x612&w=0&k=20&c=Vlp5tQzJyqBIUxtqvHZ5MvAOHPjPo0LeozGo9wjAKfk=", icon: "📡", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 8, title: "Teachers' Training Workshop on Space Education 2023", date: "September 14-16, 2023", type: "Workshop", category: "Training", description: "Three-day workshop for primary and secondary science teachers. Conducted in collaboration with IAU Office of Astronomy for Education.", image: "https://media.gettyimages.com/id/2206773305/photo/satellite-in-space-station-orbiting-earth-providing-communication-internet-connection-coverage.jpg?s=612x612&w=0&k=20&c=LUimbBcDRewwUbzKTMLfFhxhWqm_bwjajUVSLpkTtu8=", icon: "👨‍🏫", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 9, title: "APRSAF Space Education Seminar 2023", date: "February 1, 2023", type: "Seminar", category: "International", description: "Jointly organized by JAXA, SUPARCO SEAD, and NCGSA SERL at IST Islamabad. Over 100 students and educators participated.", image: "https://media.gettyimages.com/id/1609597622/photo/satellite-internet-communication-from-space.jpg?s=612x612&w=0&k=20&c=sZWPgtH8lFsOYNCzmpissHgUyYCJOqPK9SeTXZutqYU=", icon: "🌏", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 10, title: "2nd GNSS Winter School 2022", date: "October 19-21, 2022", type: "Winter School", category: "Training", description: "Organized by GNSS Research Lab-NCGSA. Focused on GNSS technology and space weather phenomena, including ionosphere disturbances and signal disruptions.", image: "https://media.gettyimages.com/id/96376746/photo/satellite-with-solar-panels-above-earth.jpg?s=612x612&w=0&k=20&c=bn_DeXGOFrt48Q-gJ_e3l_B7S1AhaVZQjf7UiwVkLqU=", icon: "📡", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 11, title: "1st GNSS Winter School 2021", date: "February 22-26, 2021", type: "Winter School", category: "Training", description: "First GNSS Winter School at IST Islamabad. Covered GNSS signal structure, receiver architecture, signal processing, and ionospheric effects.", image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop", icon: "🛰️", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 12, title: "Workshop on Principles of Project Management 2022", date: "December 27-30, 2022", type: "Workshop", category: "Training", description: "Four-day workshop at IST Islamabad. Covered project management concepts aligned with PMBOK 6 framework.", image: "https://media.gettyimages.com/id/96376746/photo/satellite-with-solar-panels-above-earth.jpg?s=612x612&w=0&k=20&c=bn_DeXGOFrt48Q-gJ_e3l_B7S1AhaVZQjf7UiwVkLqU=", icon: "📊", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 13, title: "180 Seconds Space Film Festival 2021", date: "Summer 2021", type: "Festival", category: "Outreach", description: "Organized by Space Education Research Lab-NCGSA. Invited short films in fiction, documentary, and animation genres centered on 'Space Science, Technology, and Its Applications'.", image: "https://media.gettyimages.com/id/1249929729/photo/core-module-of-chinas-space-station-tianhe-orbiting-earth.jpg?s=612x612&w=0&k=20&c=BjiDbFD1ZXh8nCI5L7wRhu9gq885VV22v5oETO_V9gc=", icon: "🎬", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 14, title: "Geospatial Hackathon 2020", date: "2020", type: "Hackathon", category: "Competition", description: "Organized by GNSS and Space Education Research Lab in response to COVID-19 pandemic impacts on society.", image: "https://media.gettyimages.com/id/2167849497/photo/satellite-in-space-station-orbiting-earth.jpg?s=612x612&w=0&k=20&c=cnmNm9dBVanP6_5hNG6vMM023XBZZhxn10h6Mch8O8g=", icon: "💻", link: "https://ncgsa.org.pk/training-workshop/" },
  { id: 15, title: "International Conference on Geological Hazards 2025", date: "May 27-28, 2025", type: "Conference", category: "International", description: "Organized by Geological Survey of Pakistan. NCGSA researchers presented on GNSS innovation, hazard monitoring, and academic CORS networks. Letter of Cooperation signed between NCGSA and GSP.", image: "https://media.gettyimages.com/id/1648725322/photo/satellite-internet-communication-and-earth.jpg?s=612x612&w=0&k=20&c=-MeQJG21OCHLWyt2xmb5sTXPTTEi8aFGzOuroCs7NSU=", icon: "🏔️", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 16, title: "75th International Astronautical Congress 2024", date: "October 14-18, 2024", type: "Conference", category: "International", description: "Held in Milan, Italy. Dr. Najam Abbas shared insights on NCGSA's establishment and impact. NCGSA's poster selected amongst interactive top 10 presentations.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop", icon: "🌎", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 17, title: "Webinar on Monitoring Geomagnetic Storms using Magnetometers 2024", date: "May 21, 2024", type: "Webinar", category: "Academic", description: "Hosted by NCGSA in collaboration with SUPARCO and NED University. Featured indigenous development of magnetometer by NED-UET and SUPARCO.", image: "https://media.gettyimages.com/id/96376746/photo/satellite-with-solar-panels-above-earth.jpg?s=612x612&w=0&k=20&c=bn_DeXGOFrt48Q-gJ_e3l_B7S1AhaVZQjf7UiwVkLqU=", icon: "⚡", link: "https://ncgsa.org.pk/collaboration/" },
  { id: 18, title: "14th International Conference on Electrical Engineering 2024", date: "May 21-23, 2024", type: "Conference", category: "International", description: "Held in Cairo, Egypt. GNSS Lab-NCGSA presented three research papers. Ms. Samra Kiran received the Best Poster Award.", image: "https://media.gettyimages.com/id/1249929729/photo/core-module-of-chinas-space-station-tianhe-orbiting-earth.jpg?s=612x612&w=0&k=20&c=BjiDbFD1ZXh8nCI5L7wRhu9gq885VV22v5oETO_V9gc=", icon: "🔌", link: "https://ncgsa.org.pk/collaboration/" },
];

const categoryColors = { "Conference": "#ffffff", "Workshop": "#f59e0b", "Training": "#ffffff", "International": "#fffeff", "Outreach": "#ffffff", "Academic": "#fbfeff", "Festival": "#fcfbfa", "Summer School": "#ffffff", "Winter School": "#eef1f5", "Seminar": "#e3e1e8", "Competition": "#eee8e8", "Hackathon": "#fbfffe", "Summit": "#ffffff", "Webinar": "#ffffff" };

const getCategoryColor = (cat) => categoryColors[cat] || "#ffffff";

const EventCard = ({ event }) => (
  <div className={styles.eventCard} style={{ borderLeft: `4px solid ${getCategoryColor(event.category)}` }}>
    <img src={event.image} alt={event.title} className={styles.cardImage} />
    <div className={styles.overlay} />
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{event.icon}</span>
        <span className={styles.categoryTag} style={{ background: `${getCategoryColor(event.category)}40`, color: getCategoryColor(event.category) }}>
          {event.category}
        </span>
        <span className={styles.typeTag}>{event.type}</span>
      </div>
      <h3 className={styles.cardTitle}>{event.title}</h3>
      <p className={styles.cardDescription}>{event.description}</p>
      <div className={styles.cardFooter}>
        <span className={styles.cardDate}>📅 {event.date}</span>
        {event.link && (
          <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.learnLink}>
            Learn More →
          </a>
        )}
      </div>
    </div>
  </div>
);

const EventsList = ({ activeFilter, searchTerm }) => {
  const filtered = eventsData.filter(event => {
    const matchFilter = activeFilter === "all" || event.category === activeFilter;
    const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section className="section-events" style={{ padding: "20px 0 60px" }}>
      <div className="container">
        <div className={styles.grid}>
          {filtered.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
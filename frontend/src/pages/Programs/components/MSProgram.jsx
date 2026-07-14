import styles from "./MSProgram.module.css";

const programData = {
  ms: {
    title: "MS Global Navigation Satellite Systems",
    duration: "2 Years",
    eligibility: [
      "BS in Electronics/Telecommunications/Electrical Engineering",
      "BS in Computer Science",
      "BS in Physics or equivalent",
      "Minimum 2.5 CGPA (or equivalent)",
      "GAT (General) with minimum 50% score"
    ],
    specializations: [
      "Integrated Satellite Navigation Systems",
      "Advanced GNSS Signal Processing",
      "GNSS Augmentation Systems",
      "Space Weather & Satellite Navigation",
      "GNSS for Geospatial & Remote Sensing Applications",
      "Satellite Navigation Systems Design & Engineering"
    ],
    courseStructure: [
      { title: "Core Courses", courses: ["Fundamentals of GNSS", "Reference Systems and Coordinate Transformations", "Satellite Orbits and Positioning", "GNSS Signal Structures and Modulation Techniques", "Position Determination Techniques"] },
      { title: "Advanced Courses", courses: ["Advanced GNSS Signal Processing", "GNSS/INS Integrated Navigation", "Space Weather and GNSS", "GNSS Augmentation Systems", "GNSS Receivers and Software Defined Radio"] },
      { title: "Elective Courses", courses: ["GNSS for Geospatial Applications", "Remote Sensing & GIS Integration", "Satellite Navigation System Design", "GNSS Security: Spoofing & Jamming", "Ionosphere Monitoring & Modeling"] }
    ],
    researchDomains: ["Constellation Design", "NAV-COM Integration", "GNSS Signal & Integrity Monitoring", "Space Weather Effects", "Natural Hazard Monitoring", "Earthquake Monitoring", "Ionosphere Monitoring", "Volcanic Eruption Monitoring", "GNSS Receiver Development", "Signal Security & Interference Detection"]
  }
};

const SectionCard = ({ image, title, children }) => (
  <div className={styles.sectionCard}>
    <img src={image} alt={title} className={styles.sectionImage} />
    <div className={styles.sectionOverlay} />
    <div className={styles.sectionContent}>{children}</div>
  </div>
);

const MSProgram = () => {
  const data = programData.ms;
  const sectionImages = {
    specializations: "https://plus.unsplash.com/premium_photo-1712039658659-7019cfe912e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFydGh8ZW58MHx8MHx8fDA%3D",
    courses: "https://plus.unsplash.com/premium_photo-1714618990872-09781a8421f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNhdGVsbGl0ZSUyMHNwYWNlfGVufDB8fDB8fHww",
    research: "https://plus.unsplash.com/premium_photo-1679756099015-b06104fff761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2F0ZWxsaXRlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D",
  };

  return (
    <section className="section-programs" style={{ padding: "20px 0 40px" }}>
      <div className="container">
        <div className={styles.programContainer}>
          {/* Program Overview */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <h2 className={styles.programTitle}>{data.title}</h2>
            <p className={styles.duration}>Duration: <strong>{data.duration}</strong></p>
            <div>
              <h4 className={styles.subHeading}>Eligibility Criteria</h4>
              <ul className={styles.list}>
                {data.eligibility.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* Specializations */}
          <SectionCard image={sectionImages.specializations} title="Specializations">
            <h3 className={styles.cardTitle}>🎯 Specializations</h3>
            <div className={styles.specializationsGrid}>
              {data.specializations.map((s, i) => (
                <div key={i} className={styles.specializationItem}>{s}</div>
              ))}
            </div>
          </SectionCard>

          {/* Course Structure */}
          <SectionCard image={sectionImages.courses} title="Course Structure">
            <h3 className={styles.cardTitle}>📚 Course Structure</h3>
            {data.courseStructure.map((section, i) => (
              <div key={i} className={styles.courseSection}>
                <h4 className={styles.courseTitle}>{section.title}</h4>
                <ul className={styles.courseList}>
                  {section.courses.map((c, idx) => <li key={idx}>{c}</li>)}
                </ul>
              </div>
            ))}
          </SectionCard>

          {/* Research Domains */}
          <SectionCard image={sectionImages.research} title="Research Domains">
            <h3 className={styles.cardTitle}>🔬 Research Domains</h3>
            <div className={styles.researchGrid}>
              {data.researchDomains.map((item, i) => (
                <div key={i} className={styles.researchItem}>🔬 {item}</div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default MSProgram;
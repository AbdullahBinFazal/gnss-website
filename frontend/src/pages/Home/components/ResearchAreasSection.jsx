import { Col, Row, Typography } from 'antd';
import styles from "../Home.module.css";

const { Title, Paragraph } = Typography;

const researchTags = [
  { name: "PPP/RTK Techniques", icon: "📡" },
  { name: "Ionosphere Studies", icon: "🌐" },
  { name: "Space Weather", icon: "☀️" },
  { name: "GNSS Receivers", icon: "📡" },
  { name: "Spoofing & Jamming", icon: "🛡️" },
  { name: "LEO-PNT", icon: "🛰️" },
];

const ResearchAreasSection = () => {
  return (
    <section className="section-domains" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            GNSS <span>Research</span> Areas
          </Title>
        </div>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="NCGSA Research Labs"
                className={styles.sectionImage}
              />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Paragraph className={styles.description}>
                NCGSA Research Labs are dedicated to cutting edge research in the domains 
                varying from Geo Information Science, Remote Sensing, Astronomy & Astrophysics 
                to Space Education, Global Navigation Satellite Systems and Small Satellite 
                Technology. Leading researchers and scientists of Pakistan have come together 
                to ensure significant contribution required towards capacity building at 
                national level in GIS and Space Application Sector.
              </Paragraph>
            </div>
          </Col>
        </Row>

        <div className={styles.tagsWrapper}>
          <div className={styles.tagsContainer}>
            {researchTags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag.icon} {tag.name}
              </span>
            ))}
            {researchTags.map((tag, index) => (
              <span key={`dup-${index}`} className={styles.tag}>
                {tag.icon} {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;
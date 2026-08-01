import { Col, Row, Typography } from 'antd';
import styles from "../Facilities.module.css";

const { Title, Paragraph } = Typography;

const ResearchInfrastructureSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Research <span className={styles.highlight}>Infrastructure</span> and Laboratory Facilities
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🔬</span>
                  <div>
                    <h4 className={styles.listTitle}>GNSS Research and Experimentation Facility</h4>
                    <p className={styles.listDesc}>Dedicated research facility equipped with cutting-edge GNSS technology for experimentation and analysis.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Multi-Constellation GNSS Receivers</h4>
                    <p className={styles.listDesc}>High-performance receivers supporting GPS, GLONASS, Galileo, and BeiDou constellations for comprehensive research.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>💻</span>
                  <div>
                    <h4 className={styles.listTitle}>Software-Defined GNSS Receiver Facility</h4>
                    <p className={styles.listDesc}>Flexible software-defined radio platforms for GNSS signal processing and receiver development.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📍</span>
                  <div>
                    <h4 className={styles.listTitle}>Continuously Operating Reference Stations</h4>
                    <p className={styles.listDesc}>Permanent reference stations providing real-time data for precise positioning and geodetic research.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>GNSS Antennas and Survey Equipment</h4>
                    <p className={styles.listDesc}>Professional-grade antennas and survey equipment for field data collection and research campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Research Infrastructure and Laboratory Facilities"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResearchInfrastructureSection;
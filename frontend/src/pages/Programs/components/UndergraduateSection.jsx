import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const UndergraduateSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg" alt="Undergraduate & FYP Pathways" className={styles.sectionImage} />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Undergraduate <span className={styles.highlight}>& FYP Pathways</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🛠️</span>
                  <div>
                    <h4 className={styles.listTitle}>BS Final Year Projects (FYP)</h4>
                    <p className={styles.listDesc}>We offer competitive, hands-on final-year project placements for outstanding undergraduate students in Space Science, Geoinformatics, Electrical Engineering, and Computer Science.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📊</span>
                  <div>
                    <h4 className={styles.listTitle}>Project Pathways</h4>
                    <ul className={styles.listItems}>
                      <li>Frontend dashboard visualization (Leaflet.js/Plotly.js)</li>
                      <li>Mobile GIS application development</li>
                      <li>Low-cost dual-frequency receiver benchmarking</li>
                      <li>Local multipath environment analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UndergraduateSection;
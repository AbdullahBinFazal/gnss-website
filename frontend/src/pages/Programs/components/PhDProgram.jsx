import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const PhDProgram = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.programContainer}>
          <Row gutter={[50, 40]} align="middle" className={styles.phdOverview}>
            <Col xs={24} lg={12}>
              <div className={styles.imageWrapper}>
                <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" alt="PhD GNSS & Space Engineering" className={styles.sectionImage} />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.textContent}>
                <span className={styles.badge}>Program</span>
                <Title level={2} className={styles.heading}>
                  PhD in <span className={styles.highlight}>GNSS & Space Engineering</span>
                </Title>
                <Paragraph className={styles.description}>
                  Our PhD program is designed for researchers aiming to pioneer new scientific methodologies in satellite-based positioning, timing, and atmospheric remote sensing.
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Row gutter={[50, 40]} align="middle" className={styles.phdDetails}>
            <Col xs={24} lg={12}>
              <div className={styles.textContent}>
                <span className={styles.badge}>Details</span>
                <Title level={2} className={styles.heading}>
                  Program <span className={styles.highlight}>Details</span>
                </Title>
                <div className={styles.detailsList}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>⏱️</span>
                    <div>
                      <h4 className={styles.detailTitle}>Duration</h4>
                      <p className={styles.detailDesc}>3 to 5 Years | Coursework + Comprehensive Exam + Peer-Reviewed Dissertation</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🔬</span>
                    <div>
                      <h4 className={styles.detailTitle}>Core Research Domains</h4>
                      <ul className={styles.listItems}>
                        <li>Multi-frequency Integer Ambiguity Resolution for Next-Gen PPP</li>
                        <li>Regional Ionospheric Total Electron Content (TEC) and Scintillation Modeling over South Asia</li>
                        <li>High-Precision Geodetic Network Adjustments for Tectonic Strain Analysis</li>
                        <li>Advanced Space Weather Monitoring and Satellite Orbit Determination</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📝</span>
                    <div>
                      <h4 className={styles.detailTitle}>Expectations</h4>
                      <p className={styles.detailDesc}>Doctoral candidates lead our high-end computing facilities (GAMIT/GLOBK and Bernese GNSS Software), mentor undergraduate teams, and publish their findings in high-impact international aerospace and geodetic journals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.imageWrapper}>
                <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-3-1200x1165.jpg" alt="Program Details" className={styles.sectionImage} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default PhDProgram;
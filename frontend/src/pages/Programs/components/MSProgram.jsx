import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const MSProgram = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.programContainer}>
          <Row gutter={[50, 40]} align="middle" className={styles.msOverview}>
            <Col xs={24} lg={12}>
              <div className={styles.imageWrapper}>
                <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" alt="MS GNSS & Space Engineering" className={styles.sectionImage} />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.textContent}>
                <Title level={2} className={styles.heading}>
                  Master of Science (MS) in <span className={styles.highlight}>GNSS & Space Engineering</span>
                </Title>
                <Paragraph className={styles.description}>
                  Our MS program focuses on the technical, algorithmic, and engineering aspects of modern positioning systems. It bridges the gap between hardware receiver architectures and downstream software applications.
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Row gutter={[50, 40]} align="middle" className={styles.msDetails}>
            <Col xs={24} lg={12}>
              <div className={styles.textContent}>
                <Title level={2} className={styles.heading}>
                  Program <span className={styles.highlight}>Details</span>
                </Title>
                <div className={styles.detailsList}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>⏱️</span>
                    <div>
                      <h4 className={styles.detailTitle}>Duration</h4>
                      <p className={styles.detailDesc}>2 Years (4 Semesters) | 30 Credit Hours (24 Coursework + 6 Thesis)</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📚</span>
                    <div>
                      <h4 className={styles.detailTitle}>Core Coursework</h4>
                      <ul className={styles.listItems}>
                        <li>Advanced Multi-Constellation GNSS Architecture</li>
                        <li>Statistical Signal Processing & Kalman Filtering</li>
                        <li>Geodetic Data Analysis & Error Modeling</li>
                        <li>Scripting and Automation for Geospatial Data (Python/C++)</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🔬</span>
                    <div>
                      <h4 className={styles.detailTitle}>Thesis Research Focus</h4>
                      <p className={styles.detailDesc}>MS students are responsible for algorithmic optimization, sensor fusion (e.g., GNSS/INS integration for UAVs), real-time software-defined radio (SDR) testing, and building the automation pipelines that drive our live GNSS Observatory.</p>
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

export default MSProgram;
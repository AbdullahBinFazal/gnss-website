import { Col, Row, Typography } from 'antd';
import styles from "../About.module.css";

const { Title } = Typography;

const LabLeadershipSection = () => {
  return (
    <section className="section-leadership" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" 
                alt="Lab Leadership & Faculty"
                className={styles.sectionImage}
              />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.headingSmall}>
                Lab Leadership <span className={styles.highlight}>& Faculty</span>
              </Title>
              
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>👨‍🔬</span>
                  <div>
                    <h4 className={styles.listTitle}>Lab Director / Principal Investigator</h4>
                    <p className={styles.listDesc}>
                      <strong>[Name, Ph.D.]</strong> – Expert in Scientific Geodesy and Space Systems.
                    </p>
                  </div>
                </div>

                <div className={styles.listItem}>
                  <span className={styles.listIcon}>👨‍🏫</span>
                  <div>
                    <h4 className={styles.listTitle}>Co-Investigators / Co-PIs</h4>
                    <p className={styles.listDesc}>
                      <strong>[Name, Ph.D.]</strong> – Specializing in Signal Processing and Ionospheric Physics.
                    </p>
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

export default LabLeadershipSection;
import { Col, Row, Typography } from 'antd';
import styles from "./LabLeadershipSection.module.css";

const { Title, Paragraph } = Typography;

const LabLeadershipSection = () => {
  return (
    <section className="section-leadership" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" 
                alt="Lab Leadership & Faculty"
                className={styles.leadershipImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Leadership</span> */}
              <Title level={2} className={styles.heading}>
                Lab Leadership <span className={styles.highlight}>& Faculty</span>
              </Title>
              
              <div className={styles.leadershipList}>
                <div className={styles.leadershipItem}>
                  <span className={styles.leadershipIcon}>👨‍🔬</span>
                  <div>
                    <h4 className={styles.leadershipTitle}>Lab Director / Principal Investigator</h4>
                    <p className={styles.leadershipDesc}>
                      <strong>[Name, Ph.D.]</strong> – Expert in Scientific Geodesy and Space Systems.
                    </p>
                  </div>
                </div>

                <div className={styles.leadershipItem}>
                  <span className={styles.leadershipIcon}>👨‍🏫</span>
                  <div>
                    <h4 className={styles.leadershipTitle}>Co-Investigators / Co-PIs</h4>
                    <p className={styles.leadershipDesc}>
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
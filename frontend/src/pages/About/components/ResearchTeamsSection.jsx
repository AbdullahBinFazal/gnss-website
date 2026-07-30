import { Col, Row, Typography } from 'antd';
import styles from "./ResearchTeamsSection.module.css";

const { Title, Paragraph } = Typography;

const ResearchTeamsSection = () => {
  return (
    <section className="section-research-teams" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Teams</span> */}
              <Title level={2} className={styles.heading}>
                Research <span className={styles.highlight}>Teams</span>
              </Title>
              
              <div className={styles.teamsList}>
                <div className={styles.teamItem}>
                  <span className={styles.teamIcon}>👩‍💻</span>
                  <div>
                    <h4 className={styles.teamTitle}>PhD Candidates</h4>
                    <p className={styles.teamDesc}>
                      Leading long-term, citable research and managing scientific processing workflows.
                    </p>
                  </div>
                </div>

                <div className={styles.teamItem}>
                  <span className={styles.teamIcon}>👨‍🎓</span>
                  <div>
                    <h4 className={styles.teamTitle}>MS Researchers</h4>
                    <p className={styles.teamDesc}>
                      Engineering our automation scripts, data conversion pipelines, and dashboard APIs.
                    </p>
                  </div>
                </div>

                <div className={styles.teamItem}>
                  <span className={styles.teamIcon}>🧑‍💻</span>
                  <div>
                    <h4 className={styles.teamTitle}>BS FYP Teams</h4>
                    <p className={styles.teamDesc}>
                      Building interactive web visualizations, user documentation, and conducting 
                      local field data collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Research Teams"
                className={styles.teamsImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResearchTeamsSection;
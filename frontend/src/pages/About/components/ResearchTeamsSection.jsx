import { Col, Row, Typography } from 'antd';
import styles from "../About.module.css";

const { Title } = Typography;

const ResearchTeamsSection = () => {
  return (
    <section className="section-research-teams" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.headingSmall}>
                Research <span className={styles.highlight}>Teams</span>
              </Title>
              
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>👩‍💻</span>
                  <div>
                    <h4 className={styles.listTitle}>PhD Candidates</h4>
                    <p className={styles.listDesc}>
                      Leading long-term, citable research and managing scientific processing workflows.
                    </p>
                  </div>
                </div>

                <div className={styles.listItem}>
                  <span className={styles.listIcon}>👨‍🎓</span>
                  <div>
                    <h4 className={styles.listTitle}>MS Researchers</h4>
                    <p className={styles.listDesc}>
                      Engineering our automation scripts, data conversion pipelines, and dashboard APIs.
                    </p>
                  </div>
                </div>

                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🧑‍💻</span>
                  <div>
                    <h4 className={styles.listTitle}>BS FYP Teams</h4>
                    <p className={styles.listDesc}>
                      Building interactive web visualizations, user documentation, and conducting 
                      local field data collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Research Teams"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResearchTeamsSection;
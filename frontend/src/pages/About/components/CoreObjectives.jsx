import { Col, Row, Typography } from 'antd';
import styles from "../About.module.css";

const { Title } = Typography;

const CoreObjectives = () => {
  return (
    <section className="section-objectives" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2020/09/480-4808320_hd-earth-day-image-in-our-system-gis-removebg-preview.png" 
                alt="Core Objectives"
                className={styles.sectionImage}
              />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Objectives</span>
              </Title>
              
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🎯</span>
                  <div>
                    <h4 className={styles.listTitle}>Advance High-Precision Geodesy</h4>
                    <p className={styles.listDesc}>
                      Pioneer local research in millimeter-level positioning and localized error modeling.
                    </p>
                  </div>
                </div>

                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🏗️</span>
                  <div>
                    <h4 className={styles.listTitle}>Support National Infrastructure</h4>
                    <p className={styles.listDesc}>
                      Provide reliable, open-source geodetic data streams and positioning solutions to public and private stakeholders.
                    </p>
                  </div>
                </div>

                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🎓</span>
                  <div>
                    <h4 className={styles.listTitle}>Empower Human Capital</h4>
                    <p className={styles.listDesc}>
                      Educate and train undergraduate and postgraduate students to meet the rising demands of the global space economy.
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

export default CoreObjectives;
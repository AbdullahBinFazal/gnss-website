import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const TrainingWorkshopsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" alt="Professional Training & Workshops" className={styles.sectionImage} />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Professional <span className={styles.highlight}>Training & Workshops</span>
              </Title>
              <Paragraph className={styles.description}>
                We conduct regular, intensive short courses designed for industry professionals, geodetic surveyors, GIS specialists, and external university faculty.
              </Paragraph>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📚</span>
                  <div>
                    <h4 className={styles.listTitle}>Core Modules</h4>
                    <ul className={styles.listItems}>
                      <li>Introduction to Multi-GNSS Architecture</li>
                      <li>RTK Network Deployment</li>
                      <li>PPP Processing with gLAB</li>
                      <li>Open-Source Mapping via RTKLIB</li>
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

export default TrainingWorkshopsSection;
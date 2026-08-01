import { Col, Row, Typography } from 'antd';
import styles from "../CoPilot.module.css";

const { Title, Paragraph } = Typography;

const CoPilotOverviewSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="GNSS Co-Pilot"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Your <span className={styles.highlight}>AI-Powered</span> Satellite Navigation<br />
                Research & Technical Assistant
              </Title>
              <Paragraph className={styles.description}>
                Welcome to the GNSS Co-Pilot, an advanced, domain-specific AI assistant integrated 
                into the NCGSA GNSS Research Lab portal. Designed specifically for students, 
                researchers, and geospatial professionals, the Co-Pilot is trained on core 
                satellite navigation frameworks, scientific software documentation, and 
                international geodetic standards.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoPilotOverviewSection;
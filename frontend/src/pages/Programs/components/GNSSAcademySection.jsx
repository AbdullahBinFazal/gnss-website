import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const GNSSAcademySection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Capacity</span> Building
              </Title>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>GNSS</span> Academy
              </Title>
              <Paragraph className={styles.description}>
                The GNSS Academy is our dedicated professional training and public outreach arm, 
                aimed at bridging the gap between academic theory and real-world industrial application.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg" alt="GNSS Academy" className={styles.sectionImage} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GNSSAcademySection;
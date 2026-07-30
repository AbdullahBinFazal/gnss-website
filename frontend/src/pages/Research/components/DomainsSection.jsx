import { Col, Row, Typography } from 'antd';
import styles from "../Research.module.css";

const { Title, Paragraph } = Typography;

const DomainsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            <span>Domains</span>
          </Title>
        </div>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/NCGSA-Research-Domains.png" 
                alt="Research Domains"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Paragraph className={styles.description}>
                Our lab conducts rigorous theoretical and applied research across several critical 
                pillars of satellite navigation. We leverage multi-constellation data 
                (GPS, Galileo, GLONASS, BeiDou) to address complex geospatial challenges.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DomainsSection;
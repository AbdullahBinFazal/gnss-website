import { Col, Row, Typography } from 'antd';
import styles from "../DigitalObservatory.module.css";

const { Title, Paragraph } = Typography;

const ObservatoryOverviewSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>GNSS</span> Observatory
              </Title>
              <Paragraph className={styles.description}>
                The GNSS Observatory serves as our interactive public window, streaming real-time 
                geospatial insights and serving as a centralized hub for regional geodetic data.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="GNSS Observatory"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ObservatoryOverviewSection;
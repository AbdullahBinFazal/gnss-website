import { Col, Row, Typography } from 'antd';
import styles from "../DigitalObservatory.module.css";

const { Title, Paragraph } = Typography;

const SpaceWeatherObservatorySection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Space Weather Observatory"
                className={styles.sectionImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Space Weather</span> Observatory
              </Title>
              <Paragraph className={styles.description}>
                A Space Weather Observatory monitors environmental conditions in Earth's magnetosphere, 
                ionosphere, and thermosphere driven by solar activity to forecast disruptions to 
                technology and infrastructure.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SpaceWeatherObservatorySection;
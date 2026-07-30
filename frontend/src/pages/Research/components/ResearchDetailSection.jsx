import { Col, Row, Typography } from 'antd';
import styles from "../Research.module.css";

const { Title, Paragraph } = Typography;

const ResearchDetailSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Precise Point Positioning <span className={styles.highlight}>(PPP) & RTK Algorithms</span>
              </Title>
              <Paragraph className={styles.description}>
                We design, evaluate, and optimize advanced estimation algorithms to accelerate 
                convergence times and improve positioning reliability. Our work focuses on 
                multi-frequency integer ambiguity resolution, carrier-phase residual analysis, 
                and the deployment of real-time kinematic (RTK) networks for safety-of-life 
                applications.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" 
                alt="PPP & RTK Algorithms"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResearchDetailSection;
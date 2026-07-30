import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const AcademicsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg" alt="Academics" className={styles.sectionImage} />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Academics</span>
              </Title>
              <Paragraph className={styles.description}>
                The GNSS Research Lab provides a comprehensive, research-driven academic environment. 
                We train the next generation of satellite navigation experts through specialized 
                graduate programs, hands-on laboratory modules, and direct integration into national 
                space projects under the NCGSA framework.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AcademicsSection;
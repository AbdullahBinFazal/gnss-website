import { Col, Row, Typography } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const InfrastructureSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            <span className={styles.sectionHighlight}>Facilities</span>
          </Title>
        </div>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg" 
                alt="Infrastructure"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Infrastructure</span>
              </Title>
              <Paragraph className={styles.description}>
                The GNSS Research Lab houses top-tier hardware and high-performance computing assets, 
                making it a fully self-reliant facility capable of scientific-grade data acquisition 
                and high-throughput processing.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default InfrastructureSection;
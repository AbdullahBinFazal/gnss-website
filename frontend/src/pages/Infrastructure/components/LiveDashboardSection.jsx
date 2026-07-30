import { Col, Row, Typography } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const LiveDashboardSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Live Dashboard"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Live</span> Dashboard
              </Title>
              <Paragraph className={styles.description}>
                Direct Link to the NCGSA WordPress Integrated Dashboard.
              </Paragraph>
              <Paragraph className={styles.description}>
                Monitor our permanent tracking stations across Pakistan through interactive 
                Leaflet.js maps and Plotly time-series charts. Track live satellite tracking 
                counts, signal-to-noise ratios (SNR), multi-frequency carrier phase residuals, 
                and real-time positioning variances.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LiveDashboardSection;
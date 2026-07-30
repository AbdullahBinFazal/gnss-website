import { Col, Row, Typography } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const DataHubSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Data</span> Hub & Download Center
              </Title>
              <Paragraph className={styles.description}>
                We support the global and local scientific community by providing open access to our data archives:
              </Paragraph>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Raw RINEX Files</h4>
                    <p className={styles.listDesc}>Daily, quality-checked RINEX v2 and v3 observation logs from our CORS network.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🌡️</span>
                  <div>
                    <h4 className={styles.listTitle}>Meteorological Data</h4>
                    <p className={styles.listDesc}>Co-located weather sensor readouts for advanced tropospheric delay investigations.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📍</span>
                  <div>
                    <h4 className={styles.listTitle}>Daily Coordinate Solutions</h4>
                    <p className={styles.listDesc}>High-precision position updates and long-term station velocity vectors.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg" 
                alt="Data Hub & Download Center"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DataHubSection;
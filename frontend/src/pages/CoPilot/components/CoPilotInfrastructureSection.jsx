import { Col, Row, Typography } from 'antd';
import styles from "./CoPilotInfrastructureSection.module.css";

const { Title, Paragraph } = Typography;

const CoPilotInfrastructureSection = () => {
  return (
    <section className="section-copilot-infrastructure" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Lab Infrastructure & Data Hub Navigation"
                className={styles.infrastructureImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Infrastructure</span> */}
              <Title level={2} className={styles.heading}>
                Lab Infrastructure <span className={styles.highlight}>& Data Hub Navigation</span>
              </Title>
              
              <div className={styles.infrastructureList}>
                <div className={styles.infrastructureItem}>
                  <span className={styles.infrastructureIcon}>💾</span>
                  <div>
                    <h4 className={styles.infrastructureTitle}>Lab Infrastructure & Data Hub Navigation</h4>
                    <p className={styles.infrastructureDesc}>
                      Quickly locate resources within our own NCGSA network:
                    </p>
                    <ul className={styles.infrastructureListItems}>
                      <li>"Where can I download the raw RINEX files for the Islamabad CORS station?"</li>
                      <li>"What geodetic choke-ring antennas are currently deployed in the lab?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoPilotInfrastructureSection;
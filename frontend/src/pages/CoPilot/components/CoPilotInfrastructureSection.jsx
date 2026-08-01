import { Col, Row, Typography } from 'antd';
import styles from "../CoPilot.module.css";

const { Title, Paragraph } = Typography;

const CoPilotInfrastructureSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Lab Infrastructure & Data Hub Navigation"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Lab Infrastructure <span className={styles.highlight}>& Data Hub Navigation</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>💾</span>
                  <div>
                    <h4 className={styles.listTitle}>Lab Infrastructure & Data Hub Navigation</h4>
                    <p className={styles.listDesc}>Quickly locate resources within our own NCGSA network:</p>
                    <ul className={styles.listItems}>
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
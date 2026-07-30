import { Col, Row, Typography } from 'antd';
import styles from "../Research.module.css";

const { Title, Paragraph } = Typography;

const IonosphericSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg" 
                alt="Ionospheric Modeling & Space Weather"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Ionospheric Modeling <span className={styles.highlight}>& Space Weather</span>
              </Title>
              <Paragraph className={styles.description}>
                The ionosphere remains a primary source of error for GNSS signals. Our team 
                develops regional Total Electron Content (TEC) models and monitors ionospheric 
                scintillation anomalies over Pakistan's geographic coordinates. This research 
                is vital for predicting space weather impacts on satellite communication and 
                aviation navigation.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default IonosphericSection;
import { Col, Row, Typography } from 'antd';
import styles from "../CoPilot.module.css";

const { Title, Paragraph } = Typography;

const CoPilotAssistanceSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                How the <span className={styles.highlight}>Co-Pilot</span> Can Assist You
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📚</span>
                  <div>
                    <h4 className={styles.listTitle}>1. Academic & Theoretical Guidance</h4>
                    <p className={styles.listDesc}>Stuck on a complex positioning concept? The Co-Pilot provides clear, universal explanations for complex topics. Ask it:</p>
                    <ul className={styles.listItems}>
                      <li>"What is the difference between Float and Fixed ambiguities in RTK?"</li>
                      <li>"How does the Melbourne-Wübbena linear combination detect cycle slips?"</li>
                      <li>"Explain ionospheric scintillation and its impact on L-band signals."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Co-Pilot Assistance"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoPilotAssistanceSection;
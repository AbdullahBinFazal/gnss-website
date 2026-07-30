import { Col, Row, Typography } from 'antd';
import styles from "./CoPilotAssistanceSection.module.css";

const { Title, Paragraph } = Typography;

const CoPilotAssistanceSection = () => {
  return (
    <section className="section-copilot-assistance" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>How It Works</span> */}
              <Title level={2} className={styles.heading}>
                How the <span className={styles.highlight}>Co-Pilot</span> Can Assist You
              </Title>
              
              <div className={styles.assistanceList}>
                <div className={styles.assistanceItem}>
                  <span className={styles.assistanceIcon}>📚</span>
                  <div>
                    <h4 className={styles.assistanceTitle}>1. Academic & Theoretical Guidance</h4>
                    <p className={styles.assistanceDesc}>
                      Stuck on a complex positioning concept? The Co-Pilot provides clear, 
                      universal explanations for complex topics. Ask it:
                    </p>
                    <ul className={styles.assistanceListItems}>
                      <li>"What is the difference between Float and Fixed ambiguities in RTK?"</li>
                      <li>"How does the Melbourne-Wübbena linear combination detect cycle slips?"</li>
                      <li>"Explain ionospheric scintillation and its impact on L-band signals."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Co-Pilot Assistance"
                className={styles.assistanceImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoPilotAssistanceSection;
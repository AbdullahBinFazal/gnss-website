import { Col, Row, Typography } from 'antd';
import styles from "./CoPilotConfigSection.module.css";

const { Title, Paragraph } = Typography;

const CoPilotConfigSection = () => {
  return (
    <section className="section-copilot-config" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Configuration</span> */}
              <Title level={2} className={styles.heading}>
                Software Configuration <span className={styles.highlight}>& Debugging</span>
              </Title>
              
              <div className={styles.configList}>
                <div className={styles.configItem}>
                  <span className={styles.configIcon}>🛠️</span>
                  <div>
                    <h4 className={styles.configTitle}>3. Software Configuration & Debugging</h4>
                    <p className={styles.configDesc}>
                      Configuring scientific engines can be daunting. The Co-Pilot provides step-by-step 
                      setup assistance for your lab coursework. Prompt it with:
                    </p>
                    <ul className={styles.configListItems}>
                      <li>"Give me a command-line configuration template for running RTKLIB (rnx2rtkp) in PPP-Kinematic mode."</li>
                      <li>"What does error code X mean in GAMIT processing?"</li>
                      <li>"How do I toggle off the tropospheric mapping function in gLAB via the CLI?"</li>
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
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/NCGSA-Research-Domains.png" 
                alt="Software Configuration & Debugging"
                className={styles.configImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CoPilotConfigSection;
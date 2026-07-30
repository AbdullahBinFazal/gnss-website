import { Col, Row, Typography } from 'antd';
import styles from "./CoPilotCodeSection.module.css";

const { Title, Paragraph } = Typography;

const CoPilotCodeSection = () => {
  return (
    <section className="section-copilot-code" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2020/09/480-4808320_hd-earth-day-image-in-our-system-gis-removebg-preview.png" 
                alt="Code Generation & Scripting Support"
                className={styles.codeImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Code Support</span> */}
              <Title level={2} className={styles.heading}>
                Code Generation <span className={styles.highlight}>& Scripting Support</span>
              </Title>
              
              <div className={styles.codeList}>
                <div className={styles.codeItem}>
                  <span className={styles.codeIcon}>💻</span>
                  <div>
                    <h4 className={styles.codeTitle}>2. Code Generation & Scripting Support</h4>
                    <p className={styles.codeDesc}>
                      Accelerate your MS and BS research workflows. The Co-Pilot can draft, optimize, 
                      and debug Python, C++, or MATLAB scripts for geospatial data handling. Try asking:
                    </p>
                    <ul className={styles.codeListItems}>
                      <li>"Write a Python script using Pandas to extract SNR data from a gLAB .out file."</li>
                      <li>"How do I parse a RINEX v3 header to find the receiver antenna type?"</li>
                      <li>"Show me a script to plot a satellite skyplot using Matplotlib."</li>
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

export default CoPilotCodeSection;
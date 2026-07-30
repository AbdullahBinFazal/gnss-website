import { Col, Row, Typography } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const ComputingSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="Computing & Server Infrastructure"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Computing & <span className={styles.highlight}>Server Infrastructure</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🖥️</span>
                  <div>
                    <h4 className={styles.listTitle}>Processing Servers</h4>
                    <p className={styles.listDesc}>High-performance Linux server arrays running dedicated background automation loops for continuous stream decoding and quality control.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📊</span>
                  <div>
                    <h4 className={styles.listTitle}>Scientific Software Stacks</h4>
                    <p className={styles.listDesc}>Local hosting of premium geodetic suites—including GAMIT/GLOBK, Bernese GNSS Software, gLAB core, and custom-compiled RTKLIB engines—enabling multi-station network adjustments and deep-dive error isolation.</p>
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

export default ComputingSection;
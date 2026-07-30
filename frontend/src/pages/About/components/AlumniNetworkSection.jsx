import { Col, Row, Typography } from 'antd';
import styles from "./AlumniNetworkSection.module.css";

const { Title, Paragraph } = Typography;

const AlumniNetworkSection = () => {
  return (
    <section className="section-alumni" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="Alumni Network"
                className={styles.alumniImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Alumni</span> */}
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Alumni</span> Network
              </Title>
              <Paragraph className={styles.description}>
                Our graduates go on to shape the aerospace and geospatial sectors, securing 
                positions at premier national space agencies like SUPARCO, top global universities, 
                and leading private autonomous technology firms.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AlumniNetworkSection;
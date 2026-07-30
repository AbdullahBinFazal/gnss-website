import { Col, Row, Typography } from 'antd';
import styles from "./OurMission.module.css";

const { Title, Paragraph } = Typography;

const OurMission = () => {
  return (
    <section className="section-mission" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Our <span className={styles.highlight}>Mission</span>
              </Title>
              <Paragraph className={styles.description}>
                To foster innovation in satellite navigation through high-impact scientific research, 
                state-of-the-art infrastructure development, and world-class academic training for 
                the next generation of space scientists and engineers in Pakistan.
              </Paragraph>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/ncgsa-800x800.jpg" 
                alt="Our Mission"
                className={styles.missionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurMission;
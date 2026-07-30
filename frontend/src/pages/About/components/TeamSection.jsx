import { Col, Row, Typography } from 'antd';
import styles from "./TeamSection.module.css";

const { Title, Paragraph } = Typography;

const TeamSection = () => {
  return (
    <section className="section-team" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Team</span> */}
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Team</span>
              </Title>
              <Paragraph className={styles.description}>
                Our strength lies in our collaborative, multi-tiered research team, uniting 
                experienced academic leadership with brilliant student innovators.
              </Paragraph>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Team"
                className={styles.teamImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
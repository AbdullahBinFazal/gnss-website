import { Col, Row, Typography } from 'antd';
import styles from "../Team.module.css";

const { Title, Paragraph } = Typography;

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Team</span>
              </Title>
              <Paragraph className={styles.description}>
                Our strength lies in our collaborative, multi-tiered research team, uniting 
                experienced academic leadership with brilliant student innovators.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Team"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
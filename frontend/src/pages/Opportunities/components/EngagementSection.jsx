import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Opportunities.module.css";

const { Title, Paragraph } = Typography;

const EngagementSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Engagement</span>
              </Title>
              <Flex vertical gap="small">
                <div>
                  <h4 className={styles.subHeading}>Internships</h4>
                  <p className={styles.descriptionSm}>Hands-on internship opportunities for students to gain practical experience in GNSS research and space applications.</p>
                </div>
                <div>
                  <h4 className={styles.subHeading}>Final-Year Projects</h4>
                  <p className={styles.descriptionSm}>Collaborative final-year project opportunities for undergraduate students to work on real-world GNSS challenges.</p>
                </div>
                <div>
                  <h4 className={styles.subHeading}>Visiting Researcher Programme</h4>
                  <p className={styles.descriptionSm}>Inviting national and international researchers to collaborate on GNSS research projects and exchange expertise.</p>
                </div>
                <div>
                  <h4 className={styles.subHeading}>Scholarships</h4>
                  <p className={styles.descriptionSm}>Merit-based scholarships for outstanding students pursuing GNSS and space science education and research.</p>
                </div>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="Engagement" 
                className={styles.sectionImage} 
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EngagementSection;
import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Engagement.module.css";

const { Title, Paragraph } = Typography;

const EngagementsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg" 
                alt="Engagements"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Engagements</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>Industry Partners</Title>
                  <Paragraph className={styles.description}>Industry collaborations with technology firms including Beijing MinoSpace, URAAN Pakistan, and East West Infinity for technology transfer, innovation, and commercialization of GNSS solutions.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Professional Societies</Title>
                  <Paragraph className={styles.description}>Engagement with professional organizations including IEEE, ISNET, ISWI, and World Space Week Association to promote GNSS research and space awareness through conferences and outreach activities.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Joint Research Initiatives</Title>
                  <Paragraph className={styles.description}>Collaborative research in constellation design, GNSS signal monitoring, space weather effects, and natural hazard monitoring to develop innovative solutions for navigation and positioning challenges.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EngagementsSection;
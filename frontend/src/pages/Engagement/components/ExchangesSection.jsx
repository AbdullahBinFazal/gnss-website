import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Engagement.module.css";

const { Title, Paragraph } = Typography;

const ExchangesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Exchanges"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Exchanges</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>Academic Exchange</Title>
                  <Paragraph className={styles.description}>Faculty and student exchange programs with partner institutions to facilitate knowledge sharing and build international research collaborations in GNSS and space sciences.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Faculty and Student Mobility</Title>
                  <Paragraph className={styles.description}>Opportunities for faculty and students to participate in research visits, exchange programs, and collaborative projects with national and international partner institutions.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Joint Publications</Title>
                  <Paragraph className={styles.description}>Co-authored research publications in international journals and conference proceedings with national and international partners to share GNSS research findings and innovations.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ExchangesSection;
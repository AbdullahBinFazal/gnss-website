import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Collaborations.module.css";

const { Title, Paragraph } = Typography;

const AgreementsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg" 
                alt="Agreements"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Agreements</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>Shared Research Infrastructure</Title>
                  <Paragraph className={styles.description}>Access to shared research facilities including the IST GNSS Observatory, Academic CORS Network, and specialized GNSS laboratories for collaborative research projects.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Memoranda of Understanding</Title>
                  <Paragraph className={styles.description}>Formal agreements with partner institutions establishing frameworks for collaboration in research, education, and capacity building in GNSS and space applications.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Collaborative Training Programmes</Title>
                  <Paragraph className={styles.description}>Joint training programs, workshops, and short courses designed to build capacity in GNSS technology and space applications for professionals and researchers.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AgreementsSection;
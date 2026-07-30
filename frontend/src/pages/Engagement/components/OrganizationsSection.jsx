import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Engagement.module.css";

const { Title, Paragraph } = Typography;

const OrganizationsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                Organizations <span className={styles.highlight}>& Agencies</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>Government Organisations</Title>
                  <Paragraph className={styles.description}>Partnerships with government bodies including HEC, SUPARCO, and Geological Survey of Pakistan to support national space policy development, research infrastructure, and disaster management applications.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Space Agencies</Title>
                  <Paragraph className={styles.description}>Collaboration with SUPARCO (Pakistan) and international space agencies for joint space technology development, satellite navigation research, and space weather monitoring initiatives.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Research Centres</Title>
                  <Paragraph className={styles.description}>Partnerships with research institutions including CASS, NASTP, Pakistan Science Foundation, and NCCS for advanced research in aerospace security, cyber defense, and space applications.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" 
                alt="Organizations & Agencies"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OrganizationsSection;
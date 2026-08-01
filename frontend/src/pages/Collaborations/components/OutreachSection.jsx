import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Collaborations.module.css";

const { Title, Paragraph } = Typography;

const OutreachSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Outreach</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>Visiting Researchers</Title>
                  <Paragraph className={styles.description}>Hosting international and national visiting researchers to foster collaboration, share expertise, and strengthen research networks in GNSS and space sciences.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Partnership Opportunities</Title>
                  <Paragraph className={styles.description}>Opportunities for new partnerships with academic institutions, research organizations, and industry partners to advance GNSS research and space applications.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>Become a Research Partner</Title>
                  <Paragraph className={styles.description}>Organizations interested in collaboration can contact the GNSS Research Lab at the Institute of Space Technology, Islamabad to explore partnership opportunities.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-3-1200x1165.jpg" 
                alt="Outreach"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OutreachSection;
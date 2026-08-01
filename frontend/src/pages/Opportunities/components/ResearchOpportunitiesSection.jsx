import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Opportunities.module.css";

const { Title } = Typography;

const ResearchOpportunitiesSection = () => {
  const opportunities = [
    "MS thesis opportunities",
    "PhD research opportunities",
    "Final-year projects",
    "Research assistantships",
    "Internships",
    "Visiting student opportunities",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/NCGSA-Research-Domains.png" 
                alt="Research Opportunities" 
                className={styles.sectionImage} 
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Research</span> Opportunities
              </Title>
              <List
                dataSource={opportunities}
                renderItem={(item) => (
                  <List.Item className={styles.bulletItem}>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.bulletText}>{item}</span>
                  </List.Item>
                )}
              />
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResearchOpportunitiesSection;
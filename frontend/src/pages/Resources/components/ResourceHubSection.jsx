import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Resources.module.css";

const { Title } = Typography;

const ResourceHubSection = () => {
  const items = [
    "Recommended Books",
    "Standards and Specifications",
    "Research Templates",
    "Thesis and Report Templates",
    "Useful External Links",
    "Downloads",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2025/08/CAPACITY-BUILDING-WORKSHOP-01-1200x1191.jpg" 
                alt="Resource Hub"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Resource</span> Hub
              </Title>
              <List
                dataSource={items}
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

export default ResourceHubSection;
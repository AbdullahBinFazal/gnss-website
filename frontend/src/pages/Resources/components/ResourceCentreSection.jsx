import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Resources.module.css";

const { Title } = Typography;

const ResourceCentreSection = () => {
  const items = [
    "Resource Overview",
    "Learning Materials",
    "Lecture Notes",
    "Laboratory Manuals",
    "Training Presentations",
    "Video Lectures",
    "Tutorials",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                GNSS <span className={styles.highlight}>Knowledge</span> and Resource Centre
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
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="GNSS Knowledge and Resource Centre"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ResourceCentreSection;
import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Research.module.css";

const { Title } = Typography;

const ResearchProjectsSection = () => {
  const projects = [
    "GNSS Observatory",
    "Precise Positioning Services",
    "GNSS Interference Monitoring",
    "Satellite Constellation Design",
    "Software-Defined Receiver Development",
    "Student Research Projects",
    "Collaborative Research Projects",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Research Projects"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Research</span> Projects
              </Title>
              <List
                dataSource={projects}
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

export default ResearchProjectsSection;
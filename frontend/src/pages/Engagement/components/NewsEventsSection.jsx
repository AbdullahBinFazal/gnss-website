import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Engagement.module.css";

const { Title } = Typography;

const NewsEventsSection = () => {
  const items = [
    "Latest News",
    "Research Announcements",
    "Upcoming Events",
    "Conferences",
    "Workshops",
    "Seminars",
    "Webinars",
    "Training Programmes",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2020/09/480-4808320_hd-earth-day-image-in-our-system-gis-removebg-preview.png" 
                alt="News & Events"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                News <span className={styles.highlight}>& Events</span>
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

export default NewsEventsSection;
import { Col, Row, Typography, Flex, List } from 'antd';
import styles from "../Infrastructure.module.css";

const { Title } = Typography;

const ServicesSection = () => {
  const services = [
    "Precise Positioning Services",
    "GNSS Data Processing",
    "RTK and NRTK Support",
    "CORS Services",
    "GNSS Survey Support",
    "Receiver Testing",
    "Signal and Interference Analysis",
    "Ionospheric Data Services",
    "Technical Consultancy",
    "Custom Training",
    "Request a Service",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2020/09/480-4808320_hd-earth-day-image-in-our-system-gis-removebg-preview.png" 
                alt="Services"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Services</span>
              </Title>
              <List
                dataSource={services}
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

export default ServicesSection;
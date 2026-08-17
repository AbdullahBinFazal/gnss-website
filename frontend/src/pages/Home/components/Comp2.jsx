// src/pages/Home/components/Comp2.jsx
import { Col, Row, Typography, Flex } from 'antd';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = homeData.comp2;

  return (
    <section className={`${styles.sectionLight} ${styles.padding128}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={`${styles.title} ${styles.titleSize38}`}>
                {data.title}
              </Title>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`}>
                {data.description1}
              </Paragraph>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`}>
                {data.description2}
              </Paragraph>
              <a href={data.link} className={styles.link}>
                {data.linkText}
                <span className={styles.linkArrow}>→</span>
              </a>
            </Flex>
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image || "https://apiweb.ist.edu.pk/media/original_images/01.jpg"} 
                alt="Institute of Space Technology" 
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
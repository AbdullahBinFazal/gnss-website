// src/pages/Home/components/Comp61.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp61 = () => {
  const data = homeData.comp61;

  return (
    <section className={`${styles.sectionDark} ${styles.padding128}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Academic Programs" 
                className={styles.image}
              />
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={`${styles.title} ${styles.titleSize39}`}>
                {data.title}
              </Title>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`}>
                {data.description}
              </Paragraph>
              <Link to="/programs" className={styles.link}>
                VIEW PROGRAMS
                <span className={styles.linkArrow}>→</span>
              </Link>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp61;
// src/pages/Collaborations/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";
import collaborationsData from "../../../json/pages/collaborations/collaborationsData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = collaborationsData.comp3;

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
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Collaborations" 
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
// src/pages/Collaborations/components/Comp7.jsx
import { Col, Row, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";
import collaborationsData from "../../../json/pages/collaborations/collaborationsData.json";

const { Title, Paragraph } = Typography;

const Comp7 = () => {
  const data = collaborationsData.comp7;
  const cards = data.cards || [];

  return (
    <section className={`${styles.sectionDark} ${styles.padding110}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="International Scientific Networks" 
                className={styles.image}
              />
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={`${styles.title} ${styles.titleSize39}`}>
                {data.title}
              </Title>
              <div className={styles.verticalCards}>
                {cards && cards.map((card) => (
                  <div key={card.id} className={styles.verticalCard}>
                    <div className={styles.verticalCardImage}>
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className={styles.verticalCardContent}>
                      <Title level={4} className={styles.verticalCardTitle}>
                        {card.title}
                      </Title>
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp7;
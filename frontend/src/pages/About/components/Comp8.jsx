// src/pages/About/components/Comp8.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/About.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp8 = () => {
  const data = aboutData.comp8;

  return (
    <section className={`${styles.sectionLight} ${styles.padding128}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={`${styles.title} ${styles.titleSize42}`}>
                {data.title}
              </Title>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.verticalCards}>
              {data.teamCards.cards.map((card) => (
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
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp8;
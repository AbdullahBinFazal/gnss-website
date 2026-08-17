// src/pages/CapacityBuilding/components/Comp7.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/CapacityBuilding.module.css";
import capacityBuildingData from "../../../json/pages/capacityBuilding/capacityBuildingData.json";

const { Title, Paragraph } = Typography;

const Comp7 = () => {
  const data = capacityBuildingData.comp7;
  const cards = data.cards?.items || [];

  return (
    <section className={`${styles.sectionDark} ${styles.padding80}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={`${styles.glassCard} ${styles.glassCardPadding63}`}>
              <Title level={2} className={styles.glassCardTitle}>
                {data.title}
              </Title>
              <Paragraph className={styles.glassCardDescription}>
                {data.description}
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.verticalCards}>
              {cards && cards.map((card) => (
                <div 
                  key={card.id}
                  className={styles.verticalCard}
                  role="button"
                  tabIndex={0}
                >
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

export default Comp7;
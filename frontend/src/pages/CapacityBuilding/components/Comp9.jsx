// src/pages/CapacityBuilding/components/Comp9.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/CapacityBuilding.module.css";
import capacityBuildingData from "../../../json/pages/capacityBuilding/capacityBuildingData.json";

const { Title, Paragraph } = Typography;

const Comp9 = () => {
  const data = capacityBuildingData.comp9;

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "60px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {data.cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={6}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>

                <div className={styles.cardOverlay}>
                  <span className={styles.cardOverlayTitle}>
                    {card.title}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardSubtitle}>
                    {card.subtitle}
                  </span>
                  <div className={styles.cardDivider} />
                  <Paragraph className={styles.cardDescription}>
                    {card.resourcePerson}
                  </Paragraph>
                  <Paragraph className={styles.cardDescription}>
                    {card.participants}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp9;
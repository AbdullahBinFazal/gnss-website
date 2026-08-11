// src/pages/CapacityBuilding/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/CapacityBuilding.module.css";
import capacityBuildingData from "../../../json/pages/capacityBuilding/capacityBuildingData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = capacityBuildingData.comp6;

  return (
    <section className={styles.sectionLightGrey} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section 1: Image + Text with Heading on top of text */}
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="Seminars and Webinars" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Seminars
              </Title>
              <Paragraph className={styles.paragraph}>
                {data.title}
              </Paragraph>
            </Flex>
          </Col>
        </Row>

        {/* Section 2: Cards */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.cardsTitle}>
              {data.cards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.cards.items.map((card) => (
              <Col key={card.id} xs={12} sm={12} md={6}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={card.image} alt={card.title} />
                    <div className={styles.cardOverlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <Title level={4} className={styles.cardTitle}>
                      {card.title}
                    </Title>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Comp6;
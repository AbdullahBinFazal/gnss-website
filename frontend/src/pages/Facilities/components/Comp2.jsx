// src/pages/Facilities/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/FacilitiesStyles/Comp2.module.css";
import facilitiesData from "../../../json/pages/facilities/facilitiesData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = facilitiesData.comp2;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="Research Infrastructure" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                {data.title}
              </Title>
              <Paragraph className={styles.paragraph}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
        </Row>

        {/* Section 2: Cards */}
        <div style={{ marginTop: "60px" }}>
          <Row gutter={[24, 24]} justify="center">
            {data.cards.map((card) => (
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
                    <div className={styles.cardSubtitle}>{card.subtitle}</div>
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

export default Comp2;
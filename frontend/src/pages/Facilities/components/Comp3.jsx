// src/pages/Facilities/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/FacilitiesStyles/Comp3.module.css";
import facilitiesData from "../../../json/pages/facilities/facilitiesData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = facilitiesData.comp3;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section 1: Title + Image + Text */}
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="GNSS Receivers and Antennas" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Paragraph className={styles.paragraph}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
        </Row>

        {/* Section 2: Receiver Ecosystem Cards */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.cardsTitle}>
              Its receiver ecosystem includes :
            </Title>
          </Flex>

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

export default Comp3;
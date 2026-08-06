// src/pages/Facilities/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/FacilitiesStyles/Comp6.module.css";
import facilitiesData from "../../../json/pages/facilities/facilitiesData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = facilitiesData.comp6;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section 1: Title + Text */}
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
          <Paragraph className={styles.paragraphCenter}>
            {data.description}
          </Paragraph>
        </Flex>

        {/* Section 2: GISTM Cards */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.gistmTitle}>
              {data.gistmCards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.gistmCards.cards.map((card) => (
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
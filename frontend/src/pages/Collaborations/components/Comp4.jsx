// src/pages/Collaborations/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";
import collaborationsData from "../../../json/pages/collaborations/collaborationsData.json";

const { Title } = Typography;

const Comp4 = () => {
  const data = collaborationsData.comp4;

  return (
    <section className={styles.sectionOffWhite} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section 1: Academic and Research Institutions */}
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
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

        {/* Section 2: Government and Public-Sector Organizations */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.titleCenter}>
              {data.governmentCards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.governmentCards.cards.map((card) => (
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

        {/* Section 3: Industry and Technology Partners */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.titleCenter}>
              {data.industryCards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.industryCards.cards.map((card) => (
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

        {/* Section 4: International Scientific Networks */}
        <div style={{ marginTop: "60px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.titleCenter}>
              {data.internationalCards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.internationalCards.cards.map((card) => (
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

export default Comp4;
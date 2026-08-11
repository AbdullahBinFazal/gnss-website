// src/pages/About/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/About.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = aboutData.comp3;

  return (
    <section className={styles.sectionWhite} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section 1: Title + 3 Cards */}
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {data.cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={8}>
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

        {/* Section 2: History */}
        <div style={{ marginTop: "60px" }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={10}>
              <div className={styles.historyImage}>
                <img src={data.history.image} alt="History" />
              </div>
            </Col>

            <Col xs={24} lg={14}>
              <Flex vertical gap={16}>
                <Title level={2} className={styles.historyTitle}>
                  {data.history.title}
                </Title>
                <Paragraph className={styles.historyParagraph}>
                  {data.history.description}
                </Paragraph>
              </Flex>
            </Col>
          </Row>
        </div>

        {/* Section 3: Integrated Research Platform */}
        <div style={{ marginTop: "80px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.titleCenter}>
              {data.platformCards.title}
            </Title>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.platformCards.cards.map((card) => (
              <Col key={card.id} xs={24} sm={12} md={6}>
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

        {/* Section 4: GNSS Contributions */}
        <div style={{ marginTop: "80px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.titleCenter}>
              {data.gnssContributions.title}
            </Title>
            <Paragraph className={styles.paragraphCenter}>
              {data.gnssContributions.description}
            </Paragraph>
          </Flex>

          <Row gutter={[24, 24]} justify="center">
            {data.gnssContributions.cards.map((card) => (
              <Col key={card.id} xs={24} sm={12} md={8}>
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
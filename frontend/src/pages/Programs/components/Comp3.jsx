// src/pages/Programs/components/Comp3.jsx
import { Col, Row, Typography, Flex, Button } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp3.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = programsData.comp3;

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

        {/* Section 2: Cards */}
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

        {/* Section 3: Button */}
        <Flex justify="center" style={{ marginTop: "40px" }}>
          <Button 
            type="primary" 
            size="large"
            className={styles.programBtn}
            onClick={() => window.open(data.button.link, "_blank")}
          >
            {data.button.text}
          </Button>
        </Flex>

        {/* Section 4: Button Cards */}
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
          {data.buttonCards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={12}>
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
    </section>
  );
};

export default Comp3;
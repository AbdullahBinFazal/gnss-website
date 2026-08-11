// src/pages/Programs/components/Comp6.jsx
import { Col, Row, Typography, Flex, Button } from "antd";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = programsData.comp6;

  return (
    <section className={styles.sectionLightGrey} style={{ padding: "60px 20px" }}>
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
              <img src={data.image} alt="BS Satellite Navigation" />
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

        {/* Section 2: Button */}
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

        {/* Section 3: Cards */}
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
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
    </section>
  );
};

export default Comp6;
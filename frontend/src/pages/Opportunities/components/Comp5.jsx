// src/pages/Opportunities/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Opportunities.module.css";
import opportunitiesData from "../../../json/pages/opportunities/opportunitiesData.json";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const data = opportunitiesData.comp5;

  return (
    <section className={styles.sectionWhite} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
          <Paragraph className={styles.paragraphCenter}>
            {data.description}
          </Paragraph>
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
    </section>
  );
};

export default Comp5;
// src/pages/Collaborations/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";
import collaborationsData from "../../../json/pages/collaborations/collaborationsData.json";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  const data = collaborationsData.comp4;

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize39}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {data.cards && data.cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={6}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  {card.title}
                </Title>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
// src/pages/About/components/Comp7.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/About.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp7 = () => {
  const data = aboutData.comp7;

  const cardData = [
    {
      id: 1,
      title: "OUR MISSION",
      subtitle: "High Quality Research",
      description: data.cards[0]?.description || "",
      image: data.cards[0]?.image || "",
      number: "01"
    },
    {
      id: 2,
      title: "STRATEGIC OBJECTIVES",
      subtitle: "To Deliver Specialized:",
      description: data.cards[1]?.description || "",
      image: data.cards[1]?.image || "",
      number: "02"
    },
    {
      id: 3,
      title: "RESEARCH & INNOVATION",
      subtitle: "To Build Productive:",
      description: data.cards[2]?.description || "",
      image: data.cards[2]?.image || "",
      number: "03"
    }
  ];

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "60px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize41}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {cardData.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={8}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={styles.cardOverlay}>
                  <span className={styles.cardOverlayTitle}>
                    {card.title}
                  </span>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardSubtitle}>
                    {card.subtitle}
                  </span>
                  <div className={styles.cardDivider} />
                  <Paragraph className={styles.cardDescription}>
                    {card.description}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp7;
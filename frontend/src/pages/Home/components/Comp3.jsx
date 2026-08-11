// src/pages/Home/components/Comp3.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const navigate = useNavigate();
  const data = homeData.comp3;

  // Mapping card titles to page URLs
  const pageMap = {
    "Research and Innovation": "/research",
    "Academic Excellence": "/programs",
    "Digital Observation": "/digital-observatory",
    "Capacity Development": "/capacity-building",
  };

  const handleCardClick = (title) => {
    const path = pageMap[title];
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className={styles.sectionLightGrey} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {data.cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={6}>
              <div 
                className={styles.card}
                onClick={() => handleCardClick(card.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(card.title);
                  }
                }}
              >
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <Title level={4} className={styles.cardTitle}>
                    {card.title}
                  </Title>
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

export default Comp3;
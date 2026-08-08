// src/pages/CoPilot/components/Comp7.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Typography, Flex, Row, Col } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp7.module.css";
import copilotData from "../../../json/pages/copilot/copilotData.json";

const { Title } = Typography;

const Comp7 = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const data = copilotData.comp7;

  const cardsPerView = 3;
  const maxIndex = Math.max(0, data.cards.length - cardsPerView);

  const handlePrev = () => setCarouselIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleCards = data.cards.slice(carouselIndex, carouselIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev} disabled={carouselIndex === 0}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visibleCards.map((card) => (
                <Col key={card.id} xs={24} sm={24} md={8}>
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

          <button className={styles.carouselArrow} onClick={handleNext} disabled={carouselIndex === maxIndex}>
            <RightOutlined />
          </button>
        </div>

        <div className={styles.carouselIndicators}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${carouselIndex === idx ? styles.indicatorActive : ""}`}
              onClick={() => setCarouselIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comp7;
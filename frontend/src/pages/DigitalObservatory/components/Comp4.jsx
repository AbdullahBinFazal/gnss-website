// src/pages/DigitalObservatory/components/Comp4.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/DigitalObservatoryStyles/Comp4.module.css";
import digitalObservatoryData from "../../../json/pages/digitalObservatory/digitalObservatoryData.json";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = digitalObservatoryData.comp4;

  const cardsPerView = 3;
  const totalCards = data.cards.items.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const visibleCards = data.cards.items.slice(currentIndex, currentIndex + cardsPerView);

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

        {/* Section 2: Carousel Cards */}
        <div style={{ marginTop: "40px" }}>
          <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
            <Title level={2} className={styles.cardsTitle}>
              {data.cards.title}
            </Title>
          </Flex>

          <div className={styles.carouselWrapper}>
            <button className={styles.carouselArrow} onClick={handlePrev}>
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

            <button className={styles.carouselArrow} onClick={handleNext}>
              <RightOutlined />
            </button>
          </div>

          <div className={styles.carouselIndicators}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicator} ${currentIndex === idx ? styles.indicatorActive : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp4;
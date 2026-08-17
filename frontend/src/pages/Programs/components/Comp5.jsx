// src/pages/Programs/components/Comp5.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = programsData.comp5;

  const allCards = [...(data.cards || []), ...(data.buttonCards || [])];
  
  const cardsPerView = 3;
  const totalCards = allCards.length;
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

  const visibleCards = allCards.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className={`${styles.sectionLight} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize18} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
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
                    </div>
                    <Title level={4} className={styles.cardTitle}>
                      {card.title}
                    </Title>
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

        <Flex justify="center" style={{ marginTop: "40px" }}>
          <a 
            href={data.button.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            VIEW PROGRAM 
          </a>
        </Flex>
      </div>
    </section>
  );
};

export default Comp5;
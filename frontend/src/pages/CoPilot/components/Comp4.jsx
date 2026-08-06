// src/pages/CoPilot/components/Comp4.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Typography, Flex, Row, Col } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp4.module.css";

const { Title } = Typography;

const Comp4 = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const questions = [
    { id: 1, title: "What is the difference between Float and Fixed ambiguities in RTK?", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 2, title: "How does the Melbourne-Wübbena linear combination detect cycle slips?", image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 3, title: "Explain ionospheric scintillation and its impact on L-band signals.", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, questions.length - cardsPerView);

  const handlePrev = () => setCarouselIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleQuestions = questions.slice(carouselIndex, carouselIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            Ask it
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev} disabled={carouselIndex === 0}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visibleQuestions.map((question) => (
                <Col key={question.id} xs={24} sm={24} md={8}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={question.image} alt={question.title} />
                    </div>
                    <h3 className={styles.cardTitle}>{question.title}</h3>
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

export default Comp4;
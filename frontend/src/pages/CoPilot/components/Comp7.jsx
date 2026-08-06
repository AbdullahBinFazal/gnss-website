// src/pages/CoPilot/components/Comp7.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Typography, Flex, Row, Col } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp7.module.css";

const { Title } = Typography;

const Comp7 = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prompts = [
    { id: 1, title: "Give me a command-line configuration template for running RTKLIB (rnx2rtkp) in PPP-Kinematic mode.", image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 2, title: "What does error code X mean in GAMIT processing?", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 3, title: "How do I toggle off the tropospheric mapping function in gLAB via the CLI?", image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, prompts.length - cardsPerView);

  const handlePrev = () => setCarouselIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));

  const visiblePrompts = prompts.slice(carouselIndex, carouselIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            Prompt it with
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev} disabled={carouselIndex === 0}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visiblePrompts.map((prompt) => (
                <Col key={prompt.id} xs={24} sm={24} md={8}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={prompt.image} alt={prompt.title} />
                    </div>
                    <h3 className={styles.cardTitle}>{prompt.title}</h3>
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
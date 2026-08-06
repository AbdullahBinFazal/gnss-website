// src/pages/Programs/components/Comp8.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp8.module.css";

const { Title, Paragraph } = Typography;

const Comp8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pathways = [
    { id: 1, title: "Frontend dashboard visualization (Leaflet.js/Plotly.js)", description: "Build interactive web dashboards for GNSS data visualization using Leaflet.js for mapping and Plotly.js for dynamic charts.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop" },
    { id: 2, title: "Mobile GIS application development", description: "Develop cross-platform mobile applications for field data collection, GIS mapping, and real-time GNSS data visualization.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop" },
    { id: 3, title: "Low-cost dual-frequency receiver benchmarking", description: "Evaluate and compare performance of low-cost dual-frequency GNSS receivers against professional geodetic-grade receivers.", image: "https://www.bing.com/th/id/OIP.VeNYZWZhVGGva0b_shGFhQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 4, title: "Local multipath environment analysis", description: "Analyze multipath effects in urban and rural environments to improve positioning accuracy and signal quality assessment.", image: "https://www.bing.com/th/id/OIP.yV_U9QHOtRllspnTxd39bAHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  const cardsPerView = 3;
  const totalCards = pathways.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalCards - cardsPerView + 1) === 0 ? 0 : prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - cardsPerView : prevIndex - 1);
  };

  const visiblePathways = pathways.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            <span>Project Pathways</span>
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visiblePathways.map((pathway) => (
                <Col key={pathway.id} xs={24} sm={24} md={8}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={pathway.image} alt={pathway.title} />
                      <div className={styles.cardOverlay} />
                    </div>
                    <div className={styles.cardContent}>
                      <Title level={4} className={styles.cardTitle}>
                        {pathway.title}
                      </Title>
                      <Paragraph className={styles.cardDescription}>
                        {pathway.description}
                      </Paragraph>
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
          {Array.from({ length: totalCards - cardsPerView + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${currentIndex === idx ? styles.indicatorActive : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comp8;
// src/pages/Opportunities/components/Comp3.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Typography, Flex, Row, Col } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp3.module.css";

const { Title } = Typography;

const Comp3 = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const opportunities = [
    { id: 1, name: "MS Thesis Opportunities", image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 2, name: "PhD Research Opportunities", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 3, name: "Final-year Projects", image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 4, name: "Research Assistantships", image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 5, name: "Internships", image: "https://ncgsa.org.pk/wp-content/uploads/2025/08/internship.jpg" },
    { id: 6, name: "Visiting Student Opportunities", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, opportunities.length - cardsPerView);

  const handlePrev = () => setCarouselIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleOpportunities = opportunities.slice(carouselIndex, carouselIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            Research Opportunities
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button
            className={styles.carouselArrow}
            onClick={handlePrev}
            disabled={carouselIndex === 0}
          >
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visibleOpportunities.map((opportunity) => (
                <Col key={opportunity.id} xs={24} sm={24} md={8}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={opportunity.image} alt={opportunity.name} />
                    </div>
                    <h3 className={styles.cardTitle}>{opportunity.name}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <button
            className={styles.carouselArrow}
            onClick={handleNext}
            disabled={carouselIndex === maxIndex}
          >
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

export default Comp3;
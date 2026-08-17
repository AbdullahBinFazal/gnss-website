// src/pages/Research/components/Comp6.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Research.module.css";
import researchData from "../../../json/pages/research/researchData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const data = researchData.comp6;
  const publications = data.publications;

  const cardsPerView = 3;
  const categories = ["All", ...new Set(publications.map((p) => p.category))];
  const filtered = publications.filter((pub) => {
    return activeFilter === "All" || pub.category === activeFilter;
  });

  const totalCards = filtered.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const visibleCards = filtered.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className={`${styles.sectionLight} ${styles.padding96}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "24px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize41}`}>
            {data.title}
          </Title>
        </Flex>

        <Flex vertical align="center" style={{ marginBottom: "24px" }}>
          <Paragraph className={`${styles.description} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <div className={styles.filterWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterChip} ${activeFilter === cat ? styles.filterChipActive : ""}`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <>
            <div className={styles.carouselWrapper}>
              <button className={styles.carouselArrow} onClick={handlePrev}>
                <LeftOutlined />
              </button>

              <div className={styles.carouselContainer}>
                <Row gutter={[24, 24]} justify="center">
                  {visibleCards.map((pub) => (
                    <Col key={pub.id} xs={24} sm={24} md={8}>
                      <div className={styles.publicationCard}>
                        <div className={styles.publicationCardContent}>
                          <div className={styles.publicationCategoryTag}>
                            <span>{pub.category}</span>
                          </div>
                          <span className={styles.publicationYear}>{pub.year}</span>
                          <h3 className={styles.publicationTitle}>{pub.title}</h3>
                          <p className={styles.publicationAuthors}>{pub.authors}</p>
                          {pub.doi && (
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>
                              VIEW PAPER 
                            </a>
                          )}
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
          </>
        ) : (
          <div className={styles.emptyState}>
            <p>No publications found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comp6;
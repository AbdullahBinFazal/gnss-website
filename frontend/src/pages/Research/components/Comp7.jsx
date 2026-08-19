// src/pages/Research/components/Comp7.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Research.module.css";
import researchData from "../../../json/pages/research/researchData.json";

const { Title, Paragraph } = Typography;

// Custom arrow components for Ant Design Carousel
const PrevArrow = ({ onClick }) => (
  <button className={styles.carouselArrow} onClick={onClick}>
    <LeftOutlined />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className={styles.carouselArrow} onClick={onClick}>
    <RightOutlined />
  </button>
);

const Comp7 = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const data = researchData.comp7;
  const publications = data.publications;

  const categories = ["All", ...new Set(publications.map((p) => p.category))];
  const filtered = publications.filter((pub) => {
    return activeFilter === "All" || pub.category === activeFilter;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
          <Carousel {...settings} className={styles.antCarousel}>
            {filtered.map((pub) => (
              <div key={pub.id} className={styles.carouselSlide}>
                <div className={styles.publicationCard}>
                  <div className={styles.publicationCardContent}>
                    <div className={styles.publicationCategoryTag}>
                      <span>{pub.category}</span>
                    </div>
                    <span className={styles.publicationYear}>{pub.year}</span>
                    <h3 className={styles.publicationTitle}>{pub.title}</h3>
                    <p className={styles.publicationAuthors}>{pub.conference}</p>
                    <a href="#" className={styles.publicationLink}>VIEW PAPER</a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.emptyState}>
            <p>No publications found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comp7;
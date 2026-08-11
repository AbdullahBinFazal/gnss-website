// src/pages/Research/components/Comp6.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Tag,
  Input,
  Button,
  Flex,
  Statistic,
  Empty,
  Typography,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "../../../styles/ResearchStyles/Research.module.css";
import researchData from "../../../json/pages/research/researchData.json";

const { Title, Paragraph, Text } = Typography;

// Category colors for tags
const categoryColors = {
  "Seismo-Ionospheric": "#090909",
  "Ionospheric": "#060606",
  "GNSS": "#090909",
  "GNSS Security": "#050404",
  "GNSS CORS": "#0b0b0b",
  "GNSS Education": "#080808",
  "GNSS Lab": "#090909",
  "GNSS SAR": "#0c0c0c",
  "Space Weather": "#090909",
  "Atmospheric": "#000101",
  "Remote Sensing": "#090909",
  "Machine Learning": "#0a0a0b",
  "Geodesy": "#0b0b0b",
  "GNSS Applications": "#050505",
};

const getCategoryColor = (category) => categoryColors[category] || "#1890ff";

const Comp6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const data = researchData.comp6;
  const publications = data.publications;

  const cardsPerView = 3;

  // Get unique categories for filters
  const categories = ["All", ...new Set(publications.map((p) => p.category))];

  // Filter publications
  const filtered = publications.filter((pub) => {
    const matchFilter = activeFilter === "All" || pub.category === activeFilter;
    const matchSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.year.toString().includes(searchTerm) ||
      pub.doi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.impact?.toString().includes(searchTerm);
    return matchFilter && matchSearch;
  });

  const totalCards = filtered.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  // Reset index when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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

  // Publication Card Component
  const PublicationCard = ({ publication }) => {
    const borderColor = getCategoryColor(publication.category);

    return (
      <Card
        hoverable
        className={styles.publicationCard}
        style={{ borderLeftColor: borderColor }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        cover={
          <div className={styles.publicationImageWrapper}>
            <img
              alt={publication.title}
              src={publication.image}
              className={styles.publicationImage}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <div className={styles.publicationOverlay} />
          </div>
        }
      >
        <Flex vertical gap={12} className={styles.publicationContent}>
          <div className={styles.publicationTitle}>
            {publication.title}
          </div>

          <div className={styles.publicationMetaData}>
            <div className={styles.publicationMeta}>
              <strong>Authors:</strong> {publication.authors}
            </div>

            <div className={styles.publicationMeta}>
              <strong>Journal:</strong> {publication.journal}
            </div>

            <div className={styles.publicationMeta}>
              <strong>Year:</strong> {publication.year}
            </div>

            {publication.impact && (
              <div className={styles.publicationMeta}>
                <strong>Impact Factor:</strong> {publication.impact}
              </div>
            )}
          </div>

          <Flex wrap gap="small" className={styles.publicationTags}>
            <Tag 
              color={borderColor} 
              className={styles.publicationTagWhite}
              style={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              {publication.category}
            </Tag>
            <Tag style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              {publication.year}
            </Tag>
          </Flex>

          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.publicationLink}
              style={{ color: borderColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              View Paper →
            </a>
          )}
        </Flex>
      </Card>
    );
  };

  return (
    <section className={styles.sectionLightGrey} style={{ padding: "80px 20px" }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
          <Paragraph className={styles.paragraphCenter}>
            {data.description}
          </Paragraph>
        </div>

        {/* Search and Filter Section */}
        <div className={styles.filterWrapper}>
          <Flex vertical gap={16}>
            <Flex wrap gap="small" className={styles.filterButtons}>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  type={activeFilter === cat ? "primary" : "default"}
                  onClick={() => handleFilterChange(cat)}
                  className={styles.filterButton}
                >
                  {cat}
                </Button>
              ))}
            </Flex>

            <Input
              placeholder="Search by title, author, journal, year, DOI, or impact factor..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
              allowClear
            />
          </Flex>
        </div>

        {/* Stats Cards */}
        <Row gutter={[24, 24]} className={styles.statsRow}>
          <Col xs={12} sm={6}>
            <Card className={styles.statsCard}>
              <div className={styles.statsIcon}></div>
              <Statistic 
                title="Total Publications" 
                value={filtered.length}
                valueClassName={styles.statsValue}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className={styles.statsCard}>
              <div className={styles.statsIcon}></div>
              <Statistic 
                title="Categories" 
                value={categories.length - 1}
                valueClassName={styles.statsValue}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className={styles.statsCard}>
              <div className={styles.statsIcon}></div>
              <Statistic 
                title="Unique Authors" 
                value={new Set(publications.map(p => p.authors.split(', ')).flat()).size}
                valueClassName={styles.statsValue}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className={styles.statsCard}>
              <div className={styles.statsIcon}></div>
              <Statistic 
                title="Years" 
                value={new Set(publications.map(p => p.year)).size}
                valueClassName={styles.statsValue}
              />
            </Card>
          </Col>
        </Row>

        {/* Carousel */}
        {filtered.length > 0 ? (
          <>
            <div className={styles.carouselWrapper}>
              <button className={styles.carouselArrow} onClick={handlePrev}>
                <LeftOutlined />
              </button>

              <div className={styles.carouselContainer}>
                <Row gutter={[24, 24]} justify="center">
                  {visibleCards.map((publication) => (
                    <Col key={publication.id} xs={24} sm={24} md={8}>
                      <PublicationCard publication={publication} />
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
          <Card className={styles.emptyCard}>
            <Empty description="No publications found matching your search" />
            <p className={styles.emptyText}>
              Try adjusting your search or category filters
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Comp6;
import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import styles from "../Facilities.module.css";

const { Title, Paragraph } = Typography;

const LaboratoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const laboratories = [
    {
      id: 1,
      title: "GNSS Receivers & Antennas",
      description: "High-precision dual-frequency receivers and multi-constellation antennas designed for accurate positioning and geodetic measurements across diverse environmental conditions.",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    },
    {
      id: 2,
      title: "Software and Processing Platforms",
      description: "Advanced data processing systems and specialized software suites for GNSS signal analysis, atmospheric modeling, and real-time positioning solutions.",
      image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    },
    {
      id: 3,
      title: "ICTP GNSS Station",
      description: "Continuously operating reference station providing real-time and post-processed GNSS data for regional monitoring and research applications.",
      image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    },
    {
      id: 4,
      title: "GISTM Receiver",
      description: "Dedicated state-of-the-art receiver system for precise geophysical and atmospheric monitoring with multi-frequency signal processing capabilities.",
      image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    },
    {
      id: 5,
      title: "Academic CORS Network",
      description: "Integrated continuously operating reference station network supporting academic research, education, and regional positioning infrastructure development.",
      image: "https://www.bing.com/th/id/OIP.wI6ZFV8xbLIXhAq3PXfiNgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    },
    {
      id: 6,
      title: "Student Research Workstations",
      description: "Dedicated computational and laboratory spaces equipped with specialized tools for hands-on GNSS research, data analysis, and experiential learning.",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
      icon: ""
    }
  ];

  const cardsPerView = 3;
  const totalCards = laboratories.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalCards - cardsPerView + 1) === 0 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalCards - cardsPerView : prevIndex - 1
    );
  };

  const visibleCards = laboratories.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            <span className={styles.sectionHighlight}>Laboratories</span>
          </Title>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button 
            className={styles.carouselArrow + ' ' + styles.arrowLeft}
            onClick={handlePrev}
            aria-label="Previous cards"
          >
            <LeftOutlined />
          </button>

          {/* Cards Container */}
          <div className={styles.carouselContainer}>
            <Row gutter={[24, 0]} justify="center">
              {visibleCards.map((lab) => (
                <Col key={lab.id} xs={24} sm={24} md={8} className={styles.carouselCol}>
                  <div className={styles.labCard}>
                    {/* Card Image */}
                    <div className={styles.cardImageWrapper}>
                      <img 
                        src={lab.image} 
                        alt={lab.title}
                        className={styles.cardImage}
                      />
                      <div className={styles.cardOverlay}></div>
                    </div>

                    {/* Card Content */}
                    <div className={styles.cardContent}>
                      <div className={styles.cardIcon}>{lab.icon}</div>
                      <Title level={4} className={styles.cardTitle}>
                        {lab.title}
                      </Title>
                      <Paragraph className={styles.cardDescription}>
                        {lab.description}
                      </Paragraph>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Right Arrow */}
          <button 
            className={styles.carouselArrow + ' ' + styles.arrowRight}
            onClick={handleNext}
            aria-label="Next cards"
          >
            <RightOutlined />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className={styles.carouselIndicators}>
          {Array.from({ length: totalCards - cardsPerView + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${currentIndex === idx ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to card set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaboratoriesCarousel;
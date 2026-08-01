import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import styles from "../DigitalObservatory.module.css";

const { Title, Paragraph } = Typography;

const GNSSObservatoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const observatoryCards = [
    {
      id: 1,
      title: "Live GNSS Station Status",
      description: "Real-time monitoring and operational status of all active GNSS stations",
      image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 2,
      title: "CORS Network Map",
      description: "Interactive geographic visualization of continuously operating reference station network",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 3,
      title: "Real-Time Data Streams",
      description: "Live data feeds from satellite constellations and ground-based receivers",
      image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 4,
      title: "GNSS Satellite Visibility",
      description: "Current satellite constellation visibility and sky plot visualization",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Constellation Status",
      description: "Health and operational status of GPS, GLONASS, Galileo, and BeiDou satellites",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Position Dilution of Precision",
      description: "PDOP analysis and geometric strength of satellite constellation geometry",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Total Electron Content Monitoring",
      description: "TEC measurements for ionospheric electron density analysis",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 8,
      title: "Ionospheric Activity",
      description: "Real-time monitoring of ionospheric disturbances and irregularities",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Space Weather Indicators",
      description: "Solar activity, geomagnetic storms, and space weather forecasts",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Multipath Monitoring",
      description: "Detection and analysis of signal reflections affecting positioning accuracy",
      image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 11,
      title: "Signal Quality Analysis",
      description: "Comprehensive assessment of GNSS signal quality metrics and performance",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=400&fit=crop"
    },
    {
      id: 12,
      title: "GNSS Interference Alerts",
      description: "Detection and notification of RF interference and jamming incidents",
      image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 13,
      title: "Reference Station Coordinates",
      description: "Precise coordinates and time series of monitoring station positions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
    },
    {
      id: 14,
      title: "Meteorological Observations",
      description: "Weather data integration with atmospheric effects on GNSS signals",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop"
    }
  ];

  const cardsPerView = 3;
  const totalCards = observatoryCards.length;

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

  const visibleCards = observatoryCards.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            <span className={styles.sectionHighlight}>GNSS Observatory</span>
          </Title>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button 
            className={styles.carouselArrow + ' ' + styles.arrowLeft}
            onClick={handlePrev}
            aria-label="Previous observatory cards"
          >
            <LeftOutlined />
          </button>

          {/* Cards Container */}
          <div className={styles.carouselContainer}>
            <Row gutter={[24, 0]} justify="center">
              {visibleCards.map((card) => (
                <Col key={card.id} xs={24} sm={24} md={8} className={styles.carouselCol}>
                  <div className={styles.observatoryCard}>
                    {/* Card Image */}
                    <div className={styles.cardImageWrapper}>
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className={styles.cardImage}
                      />
                      <div className={styles.cardOverlay}></div>
                    </div>

                    {/* Card Content */}
                    <div className={styles.cardContent}>
                      <Title level={4} className={styles.cardTitle}>
                        {card.title}
                      </Title>
                      <Paragraph className={styles.cardDescription}>
                        {card.description}
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
            aria-label="Next observatory cards"
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
              aria-label={`Go to observatory card set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GNSSObservatoryCarousel;
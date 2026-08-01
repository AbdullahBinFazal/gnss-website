import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import styles from "../Home.module.css";

const { Title, Paragraph } = Typography;

const ServiceCardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Geo Information Science',
      description: 'Earth data analysis and geographic intelligence systems',
      image: 'https://www.bing.com/th/id/OIP._hiBh6HsmPV1tKJdKXHpSQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2'
    },
    {
      id: 2,
      title: 'Remote Sensing',
      description: 'Advanced satellite imagery and environmental monitoring technologies',
      image: 'https://www.bing.com/th/id/OIP.xiMY4x2N7mOqP5LWIi2gCQHaEo?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2'
    },
    {
      id: 3,
      title: 'Astronomy & Astrophysics to Space Education',
      description: 'Comprehensive space science knowledge and training programs',
      image: 'https://www.bing.com/th/id/OIP.AQPbmgtKub1Hm8F2KU39DAHaD6?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2'
    },
    {
      id: 4,
      title: 'Global Navigation Satellite Systems',
      description: 'Precision positioning and navigation infrastructure solutions',
      image: 'https://www.bing.com/th/id/OIP.bmfgSdGU2fyqVUWe-QxDjAHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2'
    },
    {
      id: 5,
      title: 'Small Satellite Technology',
      description: 'Compact satellite systems for diverse applications and research',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21cc?w=800&h=500&fit=crop'
    }
  ];

  const cardsPerView = 3;
  const totalCards = cards.length;

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

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span>Services</span> & Expertise
          </h2>
        </div>

        <div className={styles.serviceCarouselWrapper}>
          {/* Left Arrow */}
          <button 
            className={styles.serviceCarouselArrow + ' ' + styles.serviceArrowLeft}
            onClick={handlePrev}
            aria-label="Previous services"
          >
            <LeftOutlined />
          </button>

          {/* Cards Container */}
          <div className={styles.serviceCarouselContainer}>
            <Row gutter={[24, 0]} justify="center">
              {visibleCards.map((card) => (
                <Col key={card.id} xs={24} sm={24} md={8} className={styles.serviceCarouselCol}>
                  <div className={styles.serviceCard}>
                    {/* Card Image */}
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={styles.serviceCardImage}
                    />
                    <div className={styles.serviceCardOverlay}></div>

                    {/* Card Content */}
                    <div className={styles.serviceCardInner}>
                      <Title level={4} className={styles.serviceCardTitle}>
                        {card.title}
                      </Title>
                      <Paragraph className={styles.serviceCardDescription}>
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
            className={styles.serviceCarouselArrow + ' ' + styles.serviceArrowRight}
            onClick={handleNext}
            aria-label="Next services"
          >
            <RightOutlined />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className={styles.serviceCarouselIndicators}>
          {Array.from({ length: totalCards - cardsPerView + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.serviceDot} ${currentIndex === idx ? styles.active : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to service set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
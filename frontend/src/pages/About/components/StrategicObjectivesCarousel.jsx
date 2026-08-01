import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import styles from "../About.module.css";

const { Title, Paragraph } = Typography;

const StrategicObjectivesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const objectives = [
    {
      id: 1,
      title: "Advance Research in Global Navigation Satellite Systems",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 2,
      title: "Develop Indigenous Positioning, Navigation and Timing Capabilities",
      image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 3,
      title: "Strengthen GNSS Education and Human Capital Development",
      image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 4,
      title: "Establish Advanced GNSS Research Infrastructure",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Promote Innovation in GNSS Receivers and Signal Processing",
      image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 6,
      title: "Enhance Precise Positioning and Navigation Solutions",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Support Resilient and Secure Positioning, Navigation and Timing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Advance Ionospheric and Space Weather Research",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Enable Data-Driven GNSS Services through the Digital Observatory",
      image: "https://www.bing.com/th/id/OIP.wI6ZFV8xbLIXhAq3PXfiNgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 10,
      title: "Foster National and International Research Collaboration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
    },
    {
      id: 11,
      title: "Bridge Academic Research with Industry and Government Needs",
      image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 12,
      title: "Support Emerging Applications of GNSS and Integrated Navigation",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 13,
      title: "Promote Open Data, Knowledge Sharing and Scientific Outreach",
      image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 14,
      title: "Contribute to National Space and Geospatial Development",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=400&fit=crop"
    },
    {
      id: 15,
      title: "Translate Research into Operational Technologies and Services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
    }
  ];

  const cardsPerView = 3;
  const totalCards = objectives.length;

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

  const visibleCards = objectives.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            <span className={styles.sectionHighlight}>Strategic Objectives</span>
          </Title>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button 
            className={styles.carouselArrow + ' ' + styles.arrowLeft}
            onClick={handlePrev}
            aria-label="Previous objectives"
          >
            <LeftOutlined />
          </button>

          {/* Cards Container */}
          <div className={styles.carouselContainer}>
            <Row gutter={[24, 0]} justify="center">
              {visibleCards.map((objective) => (
                <Col key={objective.id} xs={24} sm={24} md={8} className={styles.carouselCol}>
                  <div className={styles.objectiveCard}>
                    {/* Card Image */}
                    <div className={styles.objectiveImageWrapper}>
                      <img 
                        src={objective.image} 
                        alt={objective.title}
                        className={styles.objectiveCardImage}
                      />
                      <div className={styles.objectiveOverlay}></div>
                    </div>

                    {/* Card Content */}
                    <div className={styles.objectiveContent}>
                      <div className={styles.objectiveNumber}>
                        {objective.id}
                      </div>
                      <Title level={4} className={styles.objectiveTitle}>
                        {objective.title}
                      </Title>
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
            aria-label="Next objectives"
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
              aria-label={`Go to objective set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicObjectivesCarousel;
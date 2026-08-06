// src/pages/Collaborations/components/Comp2.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Comp2.module.css";


const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { id: 1, title: "IST", description: "Institute of Space Technology - Pakistan's premier space research institution", image: "https://apiweb.ist.edu.pk/media/original_images/524621008_1212422727565885_3425970150472339642_n.jpg" },
    { id: 2, title: "NUST", description: "National University of Sciences and Technology - Leading engineering and research university", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEPWuhwcdVAvlewqIjb-dzrs3hsmOkHwN8qySs7nxLg&s=10" },
    { id: 3, title: "NED University", description: "NED University of Engineering & Technology - Historic engineering excellence", image: "https://www.bing.com/th/id/OIP.M591_mIvDKaffrt1d01e6QHaDt?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 4, title: "Virtual University", description: "Virtual University of Pakistan - Distance education and technology innovation", image: "https://www.bing.com/th/id/OIP.gq1uZk6mNnF6MQw7quTa0gAAAA?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 5, title: "ICTP", description: "International Centre for Theoretical Physics - Italy-based research institution", image: "https://th.bing.com/th/id/OIP.wZYiJMuKUqgPnrAprqjNeQHaE8?w=227&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
    { id: 6, title: "APSCO", description: "Asia-Pacific Space Cooperation Organization - China-headquartered regional collaboration", image: "https://th.bing.com/th/id/OIP.eVqHt8P_iQyQ_vU7wQhF5QHaMK?w=115&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
    { id: 7, title: "IAU", description: "International Astronomical Union - Global astronomy research coordination", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04DuqtylJTLk-LYQhR28IXzawfI9qK08Cr8eE8AKWdQ&s=10" },
  ];

  const cardsPerView = 3;
  const totalCards = partners.length;

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

  const visibleCards = partners.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            <span>National And International Academic Partners</span>
          </Title>
          <Paragraph className={styles.paragraphCenter} style={{ maxWidth: "800px" }}>
            Collaborations with leading Pakistani universities to advance GNSS research, space technology education, and joint research initiatives and Strategic partnerships with international institutions to facilitate knowledge exchange, joint research, and capacity building in GNSS and space sciences.
          </Paragraph>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visibleCards.map((partner) => (
                <Col key={partner.id} xs={24} sm={24} md={8}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={partner.image} alt={partner.title} />
                      <div className={styles.cardOverlay} />
                    </div>
                    <div className={styles.cardContent}>
                      <Title level={4} className={styles.cardTitle}>
                        {partner.title}
                      </Title>
                      <Paragraph className={styles.cardDescription}>
                        {partner.description}
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

export default Comp2;
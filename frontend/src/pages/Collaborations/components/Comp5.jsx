// src/pages/Collaborations/components/Comp5.jsx
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Comp5.module.css";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsEvents = [
    { id: 1, title: "Latest News", description: "Stay updated with the latest developments, announcements, and breakthroughs from the GNSS Research Lab and NCGSA.", icon: "", image: "https://www.bing.com/th/id/OIP.W2oSyEAw6sBNAh7NiifW_AHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 2, title: "Research Announcements", description: "Discover new research findings, publications, and scientific discoveries from our ongoing GNSS and space research projects.", icon: "", image: "https://www.bing.com/th/id/OIP.vNIJXtXq06wgykJYWizvGwHaDi?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 3, title: "Upcoming Events", description: "Explore upcoming conferences, workshops, seminars, and training programs organized by NCGSA and partner institutions.", icon: "", image: "https://www.bing.com/th/id/OIP.u__BtzFlCgBAChA0i92VmQHaFs?w=193&h=148&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 4, title: "Conferences", description: "Join international and national conferences on GNSS, space science, geoinformatics, and satellite navigation technologies.", icon: "", image: "https://www.bing.com/th/id/OIP.TOkU9ZmOPsX_JALCcd2H0gHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 5, title: "Workshops", description: "Participate in hands-on workshops and training sessions on GNSS technology, data processing, and space applications.", icon: "", image: "https://www.bing.com/th/id/OIP.1UvH1oFkfbvszNpDWBU65QHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 6, title: "Seminars", description: "Attend academic seminars and expert talks on cutting-edge research in satellite navigation, positioning, and timing.", icon: "", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 7, title: "Webinars", description: "Access online webinars and virtual events covering GNSS, space weather, ionospheric studies, and satellite technology.", icon: "", image: "https://www.bing.com/th/id/OIP.xiMY4x2N7mOqP5LWIi2gCQHaEo?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 8, title: "Training Programmes", description: "Enroll in specialized training programmes designed to build capacity in GNSS technology and space applications.", icon: "", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  const cardsPerView = 3;
  const totalCards = newsEvents.length;

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

  const visibleItems = newsEvents.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            <span>News & Events</span>
          </Title>
        </Flex>

        <div className={styles.carouselWrapper}>
          <button className={styles.carouselArrow} onClick={handlePrev}>
            <LeftOutlined />
          </button>

          <div className={styles.carouselContainer}>
            <Row gutter={[24, 24]} justify="center">
              {visibleItems.map((item) => (
                <Col key={item.id} xs={24} sm={24} md={8}>
                  <div className={`${styles.card} ${styles.cardDark}`}>
                    <div className={styles.cardImage}>
                      <img src={item.image} alt={item.title} />
                      <div className={styles.cardOverlay} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardIcon}>{item.icon}</div>
                      <Title level={4} className={styles.cardTitle}>
                        {item.title}
                      </Title>
                      <Paragraph className={styles.cardDescription}>
                        {item.description}
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

export default Comp5;
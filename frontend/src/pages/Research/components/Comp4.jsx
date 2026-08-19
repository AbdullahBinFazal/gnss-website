// src/pages/Research/components/Comp4.jsx
import { Carousel, Col, Row, Typography, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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

const Comp4 = () => {
  const data = researchData.comp4;

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
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "60px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize41}`}>
            {data.title}
          </Title>
        </Flex>

        <Carousel {...settings} className={styles.antCarousel}>
          {data.cards.map((card) => (
            <div key={card.id} className={styles.carouselSlide}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={styles.cardOverlay}>
                  <span className={styles.cardOverlayTitle}>
                    {card.title}
                  </span>
                </div>
                <div className={styles.cardContent}>
                  <Paragraph className={styles.cardDescription}>
                    {card.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Comp4;
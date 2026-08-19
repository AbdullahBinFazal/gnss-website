// src/pages/Programs/components/Comp5.jsx
import { Carousel, Typography, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

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

const Comp5 = () => {
  const data = programsData.comp5;

  // Combine both card arrays
  const allCards = [...(data.cards || []), ...(data.buttonCards || [])];

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
    <section className={`${styles.sectionLight} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize18} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <Carousel {...settings} className={styles.antCarousel}>
          {allCards.map((card) => (
            <div key={card.id} className={styles.carouselSlide}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  {card.title}
                </Title>
              </div>
            </div>
          ))}
        </Carousel>

        <Flex justify="center" style={{ marginTop: "40px" }}>
          <a 
            href={data.button.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            VIEW PROGRAM 
          </a>
        </Flex>
      </div>
    </section>
  );
};

export default Comp5;
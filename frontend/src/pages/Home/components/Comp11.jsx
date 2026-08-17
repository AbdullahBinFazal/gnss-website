// src/pages/Home/components/Comp11.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp11 = () => {
  const navigate = useNavigate();
  const data = homeData.comp11;

  const sectionMap = {
    "Graduate Research": "/opportunities#graduate-research",
    "Internships": "/opportunities#internships",
  };

  const handleCardClick = (link) => {
    if (link) {
      navigate(link);
      setTimeout(() => {
        const hash = link.split('#')[1];
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 500);
    }
  };

  const filteredCards = data.cards.filter(card => 
    card.title === "Projects" || card.title === "Internships"
  );

  const displayCards = filteredCards.map(card => {
    if (card.title === "Projects") {
      return { ...card, displayTitle: "Graduate Research" };
    }
    return { ...card, displayTitle: card.title };
  });

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize42}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize20} ${styles.descriptionCenter900}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {displayCards.map((card) => {
            const link = sectionMap[card.displayTitle] || "#";
            return (
              <Col key={card.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div 
                  className={styles.card}
                  onClick={() => handleCardClick(link)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(link);
                    }
                  }}
                >
                  <div className={styles.cardImage}>
                    <img src={card.image} alt={card.displayTitle} />
                  </div>
                  <Title level={4} className={styles.cardTitleGrotesk}>
                    {card.displayTitle}
                  </Title>
                  <Link to={link} className={styles.exploreLink} onClick={(e) => e.stopPropagation()}>
                    EXPLORE 
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>

        <Flex justify="center" style={{ marginTop: "48px" }}>
          <Link to="/opportunities" className={styles.viewAllLink}>
            VIEW OPPORTUNITIES 
          </Link>
        </Flex>
      </div>
    </section>
  );
};

export default Comp11;
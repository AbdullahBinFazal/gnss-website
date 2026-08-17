// src/pages/Home/components/Comp6.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const navigate = useNavigate();
  const data = homeData.comp6;

  const sectionMap = {
    "Domains": "/research#domains-section",
    "Projects": "/research#projects-section",
    "Publications": "/research#publications-section",
  };

  const handleCardClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  const filteredCards = data.cards.filter(card => card.title !== "Research");

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize42}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize18_32} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {filteredCards.map((card, index) => {
            const link = sectionMap[card.title] || "#";
            return (
              <Col key={card.id} xs={24} sm={12} md={8}>
                <div 
                  className={styles.card}
                  onClick={() => handleCardClick(link)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === 'Space') {
                      handleCardClick(link);
                    }
                  }}
                >
                  <div className={styles.cardImage}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <Title level={4} className={styles.cardTitle}>
                    {card.title}
                  </Title>
                  <Link to={link} className={styles.exploreLink}>
                    EXPLORE 
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>

        <Flex justify="center" style={{ marginTop: "48px" }}>
          <Link to="/research" className={styles.viewAllLink}>
            VIEW RESEARCH 
          </Link>
        </Flex>
      </div>
    </section>
  );
};

export default Comp6;
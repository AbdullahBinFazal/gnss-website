// src/pages/Home/components/Comp5.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const navigate = useNavigate();
  const data = homeData.comp5;

  const sectionMap = {
    "Ecosystem": "/facilities#ecosystem-section",
    "Environment": "/facilities#environment-section",
    "Receivers": "/facilities#receivers-section",
    "Equipments": "/facilities#equipments-section",
  };

  const handleCardClick = (title) => {
    const path = sectionMap[title];
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className={`${styles.sectionDark} ${styles.padding80}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={`${styles.glassCard} ${styles.glassCardPadding63}`}>
              <Title level={2} className={styles.glassCardTitle}>
                {data.title}
              </Title>
              <Paragraph className={styles.glassCardDescription}>
                {data.description}
              </Paragraph>
              {data.button && (
                <Link to={data.button.link || "#"} className={styles.button}>
                  {data.button.text || "VIEW Facilities"} 
                </Link>
              )}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.verticalCards}>
              {data.cards && data.cards.map((card) => (
                <div 
                  key={card.id}
                  className={styles.verticalCard}
                  onClick={() => handleCardClick(card.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(card.title);
                    }
                  }}
                >
                  <div className={styles.verticalCardImage}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className={styles.verticalCardContent}>
                    <Title level={4} className={styles.verticalCardTitle}>
                      {card.title}
                    </Title>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp5;
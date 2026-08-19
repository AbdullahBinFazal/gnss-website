// src/pages/Home/components/Comp61.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp61 = () => {
  const navigate = useNavigate();
  const data = homeData.comp61;

  const handleCardClick = (title) => {
    // Map card titles to their respective program pages
    const programMap = {
      "MS GNSS": "/programs#ms-program-section",
      "PhD GNSS": "/programs#phd-program-section",
      "BS Satellite Navigation": "/programs#bs-program-section",
      "MS Space Technology": "/programs#ms-space-section",
    };
    const path = programMap[title];
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className={`${styles.sectionLight} ${styles.padding80}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          {/* Vertical Cards - LEFT side (swapped from right) */}
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

          {/* Glass Card Container - RIGHT side (swapped from left) */}
          <Col xs={24} lg={12}>
            <div className={`${styles.glassCard} ${styles.glassCardPadding63}`}>
              <Title level={2} className={styles.glassCardTitle}>
                {data.title}
              </Title>
              <Paragraph className={styles.glassCardDescription}>
                {data.description}
              </Paragraph>
              {data.button && (
                <Link to={data.button.link || "/programs"} className={styles.button}>
                  {data.button.text || "VIEW Academics"} 
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp61;
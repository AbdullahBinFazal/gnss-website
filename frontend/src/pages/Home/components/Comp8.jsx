// src/pages/Home/components/Comp8.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp8 = () => {
  const navigate = useNavigate();
  const data = homeData.comp8;

  const sectionMap = {
    "GNSS Schools": "/capacity-building#gnss-school-section",
    "Conferences": "/capacity-building#conferences-section",
    "Workshops": "/capacity-building#workshops-section",
    "Seminars": "/capacity-building#seminars-section",
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
              <Link to="/capacity-building" className={styles.button}>
                EXPLORE ALL 
              </Link>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.verticalCards}>
              {data.cards && data.cards.map((card) => (
                <div 
                  key={card.id}
                  className={styles.verticalCard}
                  onClick={() => handleCardClick(sectionMap[card.title])}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(sectionMap[card.title]);
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

export default Comp8;
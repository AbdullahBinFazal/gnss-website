// src/pages/Home/components/Comp11.jsx
import { Col, Row, Typography, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Comp11.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp11 = () => {
  const navigate = useNavigate();
  const data = homeData.comp11;

  // Mapping card titles to Opportunities page section IDs
  const sectionMap = {
    "Projects": "/opportunities#projects-section",
    "Internships": "/opportunities#internships-section",
    "Assistantships": "/opportunities#assistantships-section",
    "Collaborations": "/opportunities#collaborations-section",
  };

  const handleCardClick = (title) => {
    const path = sectionMap[title];
    if (path) {
      navigate(path);
      // Force scroll to section after navigation
      setTimeout(() => {
        const hash = path.split('#')[1];
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
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="Opportunities" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={3} className={styles.subtitle}>
                {data.subtitle}
              </Title>
              <Paragraph className={styles.paragraph}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
        </Row>

        {/* Cards Row with professional spacing */}
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: "48px" }}>
          {data.cards.map((card) => (
            <Col key={card.id} xs={12} sm={6} md={6}>
              <div 
                className={styles.card}
                onClick={() => handleCardClick(card.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(card.title);
                  }
                }}
              >
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <Title level={4} className={styles.cardTitle}>
                    {card.title}
                  </Title>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp11;
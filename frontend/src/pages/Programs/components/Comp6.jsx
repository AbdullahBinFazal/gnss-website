// src/pages/Programs/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = programsData.comp6;
  const cards = data.cards || [];

  return (
    <section className={`${styles.sectionDark} ${styles.padding110}`}>
      <div className={styles.container}>
        {/* Title at the top - centered */}
        <Flex vertical align="center" style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
        </Flex>

        {/* Content with image and vertical cards */}
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Program" 
                className={styles.image}
              />
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`}>
                {data.description}
              </Paragraph>
              <div className={styles.verticalCards}>
                {cards && cards.map((card) => (
                  <div key={card.id} className={styles.verticalCard}>
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
              <a 
                href={data.button.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                VIEW PROGRAM 
              </a>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp6;
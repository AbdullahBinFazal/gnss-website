// src/pages/Programs/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import styles from "../../../styles/ProgramsStyles/Programs.module.css";
import programsData from "../../../json/pages/programs/programsData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = programsData.comp3;

  return (
    <section className={`${styles.sectionLight} ${styles.padding110}`}>
      <div className={styles.container}>
        {/* Title at the top - centered */}
        <Flex vertical align="center" style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
        </Flex>

        {/* Content with image and vertical cards */}
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Paragraph className={`${styles.description} ${styles.descriptionSize18}`} style={{ textAlign: 'left', width: '100%' }}>
                {data.description}
              </Paragraph>
              <div className={styles.verticalCards} style={{ width: '100%' }}>
                {data.cards && data.cards.map((card) => (
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
                style={{ alignSelf: 'flex-start' }}
              >
                VIEW PROGRAM 
              </a>
            </Flex>
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Program" 
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
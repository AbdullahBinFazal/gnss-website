// src/pages/CoPilot/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import styles from "../../../styles/CoPilotStyles/Comp2.module.css";
import copilotData from "../../../json/pages/copilot/copilotData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = copilotData.comp2;

  return (
    <section className={styles.sectionCoPilot}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <Row gutter={[40, 40]} align="middle">
          {/* Left Column - Text Content */}
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              {/* Title */}
              <Title level={2} className={styles.coPilotTitle}>
                {data.title}
              </Title>

              {/* Description */}
              <Paragraph className={styles.coPilotDescription}>
                {data.description}
              </Paragraph>

              {/* Vertical Cards - Like Home Comp5 Facilities */}
              <div className={styles.cardsVerticalContainer}>
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
            </Flex>
          </Col>

          {/* Right Column - Image */}
          <Col xs={24} lg={10}>
            <div className={styles.coPilotImageWrapper}>
              <img 
                src={data.image} 
                alt="CoPilot" 
                className={styles.coPilotImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
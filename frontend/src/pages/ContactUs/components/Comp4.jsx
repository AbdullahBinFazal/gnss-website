// src/pages/ContactUs/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/ContactUs.module.css";
import contactUsData from "../../../json/pages/contactUs/contactUsData.json";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  const data = contactUsData.comp4;
  const cards = data.cards || [];

  return (
    <section className={`${styles.sectionLight} ${styles.padding110}`}>
      <div className={styles.container}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Socials" 
                className={styles.image}
              />
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
                {data.title}
              </Title>
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
                      <a 
                        href={card.buttonLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {card.buttonText}
                        <span className={styles.linkArrow}>→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
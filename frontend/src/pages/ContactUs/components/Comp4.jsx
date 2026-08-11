// src/pages/ContactUs/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/ContactUs.module.css";
import contactUsData from "../../../json/pages/contactUs/contactUsData.json";

const { Title } = Typography;

const Comp4 = () => {
  const data = contactUsData.comp4;

  return (
    <section className={styles.sectionOffWhite} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {data.cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={8}>
              <div className={styles.card}>
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

export default Comp4;
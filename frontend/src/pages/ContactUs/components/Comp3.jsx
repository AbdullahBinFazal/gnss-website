// src/pages/ContactUs/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/ContactUs.module.css";
import contactUsData from "../../../json/pages/contactUs/contactUsData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = contactUsData.comp3;

  return (
    <section className={`${styles.sectionDark} ${styles.padding96}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.contactContent}>
              <div className={styles.verticalCards}>
                {data.cards && data.cards.map((card) => (
                  <div key={card.id} className={styles.verticalCard}>
                    <div className={styles.verticalCardContent}>
                      <span className={styles.verticalCardTitle}>{card.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Contact details" 
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
// src/pages/Facilities/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/FacilitiesStyles/Facilities.module.css";
import facilitiesData from "../../../json/pages/facilities/facilitiesData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = facilitiesData.comp6;
  const cards = data.gistmCards?.cards || [];

  return (
    <section className={`${styles.sectionDark} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize40}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize20} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {cards.map((card) => (
            <Col key={card.id} xs={24} sm={12} md={6}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.title} />
                </div>
                <Title level={4} className={styles.cardTitle}>
                  {card.title}
                </Title>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp6;
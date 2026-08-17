// src/pages/Collaborations/components/Comp8.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Collaborations.module.css";
import collaborationsData from "../../../json/pages/collaborations/collaborationsData.json";

const { Title, Paragraph } = Typography;

const Comp8 = () => {
  const data = collaborationsData.comp8;

  return (
    <section className={`${styles.sectionLight} ${styles.padding96}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize39}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.verticalList}>
              <div className={styles.descriptionWithBorder}>
                <Paragraph className={`${styles.description} ${styles.descriptionSize20}`}>
                  {data.description}
                </Paragraph>
              </div>
              {data.cards && data.cards.map((card) => (
                <div key={card.id} className={styles.verticalListItem}>
                  <div className={styles.verticalListItemContent}>
                    <span className={styles.verticalListItemText}>{card.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Engagement" 
                className={styles.imageCover}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp8;
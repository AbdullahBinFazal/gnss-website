// src/pages/Research/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Research.module.css";
import researchData from "../../../json/pages/research/researchData.json";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const data = researchData.comp5;

  const listItems = [
    { id: 1, text: "Journal publications" },
    { id: 2, text: "Conference publications" },
    { id: 3, text: "MS research theses" }
  ];

  return (
    <section className={`${styles.sectionLight} ${styles.padding96}`}>
      <div className={styles.container}>
        <Flex vertical align="center" style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize41}`}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src={data.image} 
                alt="Publications" 
                className={styles.imageCover}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.verticalList}>
              <div className={styles.descriptionWithBorder}>
                <Paragraph className={`${styles.description} ${styles.descriptionSize19}`}>
                  {data.description}
                </Paragraph>
              </div>
              {listItems.map((item) => (
                <div key={item.id} className={styles.verticalListItem}>
                  <div className={styles.verticalListItemContent}>
                    <span className={styles.verticalListItemText}>{item.text}</span>
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

export default Comp5;
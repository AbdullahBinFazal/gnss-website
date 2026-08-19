// src/pages/About/components/Comp9.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/About.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp9 = () => {
  const data = aboutData.comp9;

  return (
    <section className={`${styles.sectionLight} ${styles.padding60}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={12} style={{ marginBottom: "48px" }}>
          <Title level={2} className={`${styles.title} ${styles.titleSize41}`}>
            {data.title}
          </Title>
          <Paragraph className={`${styles.description} ${styles.descriptionSize20} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>
        </Flex>

        <div className={styles.sectionHeader}>
          <span className={styles.sectionHeaderText}>LEADERSHIP</span>
        </div>
        
        <Row gutter={[24, 24]} justify="center" style={{ marginBottom: "64px" }}>
          {data.leadership && data.leadership.map((person) => (
            <Col key={person.id} xs={24} sm={12} md={8} lg={8}>
              <div className={styles.memberCard}>
                <div className={styles.memberCardImage}>
                  <img src={person.image} alt={person.name} />
                </div>
                <Title level={4} className={styles.memberCardTitle}>
                  {person.name}
                </Title>
                <Paragraph className={styles.memberCardDetail}>
                  {person.role}
                </Paragraph>
                <Paragraph className={styles.memberCardDetail}>
                  {person.detail}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.sectionHeader}>
          <span className={styles.sectionHeaderText}>MEMBERS</span>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {data.phdCandidates && data.phdCandidates.map((person) => (
            <Col key={person.id} xs={24} sm={12} md={8} lg={8}>
              <div className={styles.memberCard}>
                <div className={styles.memberCardImage}>
                  <img src={person.image} alt={person.name} />
                </div>
                <Title level={4} className={styles.memberCardTitle}>
                  {person.name}
                </Title>
                <Paragraph className={styles.memberCardDetail}>
                  {person.detail}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp9;
// src/pages/About/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/Comp6.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp6 = () => {
  const data = aboutData.comp6;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="Mission" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                {data.title}
              </Title>
              <Paragraph className={styles.paragraph}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp6;
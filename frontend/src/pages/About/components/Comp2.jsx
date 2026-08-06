// src/pages/About/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/AboutStyles/Comp2.module.css";
import aboutData from "../../../json/pages/about/aboutData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = aboutData.comp2;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            {data.title}
          </Title>
        </Flex>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="GNSS Research Lab" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
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

export default Comp2;
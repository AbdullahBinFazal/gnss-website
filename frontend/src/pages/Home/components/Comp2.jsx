// src/pages/Home/components/Comp2.jsx
import { Col, Row, Typography, Flex } from 'antd';
import styles from "../../../styles/HomeStyles/Comp2.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = homeData.comp2;

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="GNSS" />
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

export default Comp2;
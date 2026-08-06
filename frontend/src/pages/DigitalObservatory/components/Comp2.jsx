// src/pages/DigitalObservatory/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/DigitalObservatoryStyles/Comp2.module.css";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span>GNSS</span> Observatory
              </Title>
              <Paragraph className={styles.paragraph}>
                The GNSS Observatory serves as our interactive public window, streaming real-time 
                geospatial insights and serving as a centralized hub for regional geodetic data.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="GNSS Observatory"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
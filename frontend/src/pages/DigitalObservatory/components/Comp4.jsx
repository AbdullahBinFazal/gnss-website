// src/pages/DigitalObservatory/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/DigitalObservatoryStyles/Comp4.module.css";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg"
                alt="Space Weather Observatory"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span>Space Weather</span> Observatory
              </Title>
              <Paragraph className={styles.paragraph}>
                A Space Weather Observatory monitors environmental conditions in Earth's magnetosphere, 
                ionosphere, and thermosphere driven by solar activity to forecast disruptions to 
                technology and infrastructure.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
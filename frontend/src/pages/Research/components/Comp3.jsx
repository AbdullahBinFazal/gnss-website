// src/pages/Research/components/Comp3.jsx
import { Row, Col, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp3.module.css";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Precise Point Positioning <span>(PPP) & RTK Algorithms</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                We design, evaluate, and optimize advanced estimation algorithms
                to accelerate convergence times and improve positioning
                reliability. Our work focuses on multi frequency integer
                ambiguity resolution, carrier phase residual analysis, and the
                deployment of real time kinematic (RTK) networks for safety of
                life applications.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg"
                alt="PPP & RTK Algorithms"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
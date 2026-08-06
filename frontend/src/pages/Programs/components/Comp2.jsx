// src/pages/Programs/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp2.module.css";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg" alt="Academics" />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span>Academics</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                The GNSS Research Lab provides a comprehensive, research-driven academic environment. 
                We train the next generation of satellite navigation experts through specialized 
                graduate programs, hands-on laboratory modules, and direct integration into national 
                space projects under the NCGSA framework.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
// src/pages/CoPilot/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp2.module.css";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png"
                alt="GNSS Co-Pilot"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Your <span>AI-Powered</span> Satellite Navigation<br />
                Research & Technical Assistant
              </Title>
              <Paragraph className={styles.paragraph}>
                Welcome to the GNSS Co-Pilot, an advanced, domain-specific AI assistant integrated 
                into the NCGSA GNSS Research Lab portal. Designed specifically for students, 
                researchers, and geospatial professionals, the Co-Pilot is trained on core 
                satellite navigation frameworks, scientific software documentation, and 
                international geodetic standards.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
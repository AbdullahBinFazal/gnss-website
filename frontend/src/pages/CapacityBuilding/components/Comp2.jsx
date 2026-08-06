// src/pages/CapacityBuilding/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/Comp2.module.css";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span>GNSS</span> Academy
              </Title>
              <Paragraph className={styles.paragraph}>
                The GNSS Academy is our dedicated professional training and public outreach arm, 
                aimed at bridging the gap between academic theory and real-world industrial application.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg"
                alt="GNSS Academy"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
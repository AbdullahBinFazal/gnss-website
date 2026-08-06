// src/pages/CapacityBuilding/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/Comp5.module.css";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Tutorials <span>& Documentation</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                Access a growing library of video guides, step-by-step setup documentation, and 
                processing manuals curated by our postgraduate students. Learn how to configure 
                low-cost receivers, process complex RINEX logs, and debug cycle slips effectively.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png"
                alt="Tutorials & Documentation"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp5;
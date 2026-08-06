// src/pages/Research/components/Comp2.jsx
import { Row, Col, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp2.module.css";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex justify="center" style={{ marginBottom: "40px" }}>
          <Title level={2} className={styles.titleCenter}>
            <span>The</span> Domains
          </Title>
        </Flex>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/NCGSA-Research-Domains.png"
                alt="Research Domains"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Paragraph className={styles.paragraph}>
                Our lab conducts rigorous theoretical and applied research across
                several critical pillars of satellite navigation. We leverage
                multi constellation data (GPS, Galileo, GLONASS, BeiDou) to
                address complex geospatial challenges.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
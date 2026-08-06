// src/pages/Research/components/Comp4.jsx
import { Row, Col, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp4.module.css";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-1-1200x1200.jpg"
                alt="Ionospheric Modeling & Space Weather"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Ionospheric Modeling <span>& Space Weather</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                The ionosphere remains a primary source of error for GNSS
                signals. Our team develops regional Total Electron Content (TEC)
                models and monitors ionospheric scintillation anomalies over
                Pakistan's geographic coordinates. This research is vital for
                predicting space weather impacts on satellite communication and
                aviation navigation.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
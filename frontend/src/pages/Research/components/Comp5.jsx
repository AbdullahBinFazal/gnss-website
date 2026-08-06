// src/pages/Research/components/Comp5.jsx
import { Row, Col, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp5.module.css";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                Crustal Deformation <span>& Precision Applications</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                Using high precision scientific geodetic processing, we track
                subtle tectonic movements, land subsidence, and structural
                displacements over long term time series. Additionally, we adapt
                these technologies for downstream commercial sectors, including
                precision agriculture, autonomous drone mapping, and disaster
                management.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg"
                alt="Crustal Deformation & Precision Applications"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp5;
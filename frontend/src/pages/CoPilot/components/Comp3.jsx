// src/pages/CoPilot/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp3.module.css";

const { Title } = Typography;

const Comp3 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                How the <span>Co-Pilot</span> Can Assist You
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>1. Academic & Theoretical Guidance</h4>
                    <p className={styles.listDesc}>Stuck on a complex positioning concept? The Co-Pilot provides clear, universal explanations for complex topics.</p>
                  </div>
                </div>
              </div>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="Co-Pilot Assistance"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
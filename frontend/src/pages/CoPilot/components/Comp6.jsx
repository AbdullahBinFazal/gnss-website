// src/pages/CoPilot/components/Comp6.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp6.module.css";

const { Title } = Typography;

const Comp6 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Software Configuration <span>& Debugging</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>3. Software Configuration & Debugging</h4>
                    <p className={styles.listDesc}>Configuring scientific engines can be daunting. The Co-Pilot provides step-by-step setup assistance for your lab coursework.</p>
                  </div>
                </div>
              </div>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2025/09/NCGSA-Research-Domains.png"
                alt="Software Configuration & Debugging"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp6;
// src/pages/CoPilot/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp5.module.css";

const { Title } = Typography;

const Comp5 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2020/09/480-4808320_hd-earth-day-image-in-our-system-gis-removebg-preview.png"
                alt="Code Generation & Scripting Support"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Code Generation <span>& Scripting Support</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>2. Code Generation & Scripting Support</h4>
                    <p className={styles.listDesc}>Accelerate your MS and BS research workflows. The Co-Pilot can draft, optimize, and debug Python, C++, or MATLAB scripts for geospatial data handling.</p>
                  </div>
                </div>
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp5;
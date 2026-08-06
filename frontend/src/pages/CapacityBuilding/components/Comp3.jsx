// src/pages/CapacityBuilding/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CapacityBuildingStyles/Comp3.module.css";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="Professional Training & Workshops"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Professional <span>Training & Workshops</span>
              </Title>
              <Paragraph className={styles.paragraph}>
                We conduct regular, intensive short courses designed for industry professionals, 
                geodetic surveyors, GIS specialists, and external university faculty.
              </Paragraph>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>Core Modules</h4>
                    <ul className={styles.listItems}>
                      <li>Introduction to Multi-GNSS Architecture</li>
                      <li>RTK Network Deployment</li>
                      <li>PPP Processing with gLAB</li>
                      <li>Open-Source Mapping via RTKLIB</li>
                    </ul>
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

export default Comp3;
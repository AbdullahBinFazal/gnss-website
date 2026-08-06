// src/pages/CoPilot/components/Comp8.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CoPilotStyles/Comp8.module.css";

const { Title } = Typography;

const Comp8 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg"
                alt="Lab Infrastructure & Data Hub Navigation"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Lab Infrastructure <span>& Data Hub Navigation</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>Lab Infrastructure & Data Hub Navigation</h4>
                    <p className={styles.listDesc}>Quickly locate resources within our own NCGSA network:</p>
                    <ul className={styles.listItems}>
                      <li>"Where can I download the raw RINEX files for the Islamabad CORS station?"</li>
                      <li>"What geodetic choke-ring antennas are currently deployed in the lab?"</li>
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

export default Comp8;
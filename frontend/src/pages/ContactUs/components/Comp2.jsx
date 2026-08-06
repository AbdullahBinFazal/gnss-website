// src/pages/ContactUs/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/Comp2.module.css";

const { Title } = Typography;

const Comp2 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://apiweb.ist.edu.pk/media/original_images/524621008_1212422727565885_3425970150472339642_n.jpg"
                alt="Physical Address"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span></span> Address
              </Title>
              <div className={styles.addressBox}>
                <p className={styles.addressText}>
                  <strong>GNSS Research Lab</strong><br />
                  National Center of GIS and Space Applications (NCGSA)<br />
                  Institute of Space Technology<br />
                  Islamabad Highway, Islamabad<br />
                  Pakistan
                </p>
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp2;
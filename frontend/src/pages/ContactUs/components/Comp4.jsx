// src/pages/ContactUs/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/Comp4.module.css";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png"
                alt="Visit Us"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                <span>Visit</span> Us
              </Title>
              <Paragraph className={styles.paragraph}>
                Institute Of Space Technology, Islamabad Pakistan
              </Paragraph>
              <div className={styles.mapWrapper}>
                <iframe 
                  src="https://maps.google.com/maps?q=33.5194,73.1775&z=17&output=embed" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IST Location Map"
                />
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
// src/pages/Collaborations/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Comp3.module.css";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const agreements = [
    { title: "Shared Research Infrastructure", desc: "Access to shared research facilities including the IST GNSS Observatory, Academic CORS Network, and specialized GNSS laboratories for collaborative research projects." },
    { title: "Memoranda of Understanding", desc: "Formal agreements with partner institutions establishing frameworks for collaboration in research, education, and capacity building in GNSS and space applications." },
    { title: "Collaborative Training Programmes", desc: "Joint training programs, workshops, and short courses designed to build capacity in GNSS technology and space applications for professionals and researchers." },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg"
                alt="Agreements"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Agreements</span>
              </Title>
              <Flex vertical gap={24}>
                {agreements.map((item, index) => (
                  <div key={index}>
                    <Title level={4} className={styles.titleSmall}>
                      {item.title}
                    </Title>
                    <Paragraph className={styles.paragraph}>
                      {item.desc}
                    </Paragraph>
                  </div>
                ))}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
// src/pages/Collaborations/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/CollaborationsStyles/Comp4.module.css";

const { Title, Paragraph } = Typography;

const Comp4 = () => {
  const outreachItems = [
    { title: "Visiting Researchers", desc: "Hosting international and national visiting researchers to foster collaboration, share expertise, and strengthen research networks in GNSS and space sciences." },
    { title: "Partnership Opportunities", desc: "Opportunities for new partnerships with academic institutions, research organizations, and industry partners to advance GNSS research and space applications." },
    { title: "Become a Research Partner", desc: "Organizations interested in collaboration can contact the GNSS Research Lab at the Institute of Space Technology, Islamabad to explore partnership opportunities." },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Outreach</span>
              </Title>
              <Flex vertical gap={24}>
                {outreachItems.map((item, index) => (
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
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-3-1200x1165.jpg"
                alt="Outreach"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
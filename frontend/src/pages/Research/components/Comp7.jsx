// src/pages/Research/components/Comp7.jsx
import { Row, Col, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp7.module.css";

const { Title, Text } = Typography;

const projects = [
  "GNSS Observatory",
  "Precise Positioning Services",
  "GNSS Interference Monitoring",
  "Satellite Constellation Design",
  "Software-Defined Receiver Development",
  "Student Research Projects",
  "Collaborative Research Projects",
];

const Comp7 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="Research Projects"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Research</span> Projects
              </Title>
              <Flex vertical gap={8}>
                {projects.map((item, index) => (
                  <Text key={index} className={styles.projectText}>
                    {item}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp7;
// src/pages/Opportunities/components/Comp2.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp2.module.css";

const { Title } = Typography;

const Comp2 = () => {
  const opportunitiesItems = [
    { title: "Current Opportunities", desc: "Explore current openings for research positions, assistantships, and graduate programs at the GNSS Research Lab." },
    { title: "Research Assistantships", desc: "Opportunities for students to work on cutting-edge GNSS research projects alongside experienced faculty and researchers." },
    { title: "Graduate Research Positions", desc: "Fully-funded graduate research positions for MS and PhD candidates in GNSS, space science, and related fields." },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="Opportunities"
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Opportunities</span>
              </Title>
              <Flex vertical gap={16}>
                {opportunitiesItems.map((item, index) => (
                  <div key={index}>
                    <h4 className={styles.titleSmall}>{item.title}</h4>
                    <p className={styles.paragraphSmall}>{item.desc}</p>
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

export default Comp2;
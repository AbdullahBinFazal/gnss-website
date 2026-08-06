// src/pages/Programs/components/Comp10.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp10.module.css";

const { Title, Paragraph } = Typography;

const Comp10 = () => {
  const opportunities = [
    { id: 1, title: "Current Opportunities", description: "Explore current openings for research positions, assistantships, and graduate programs at the GNSS Research Lab.", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 2, title: "Research Assistantships", description: "Opportunities for students to work on cutting-edge GNSS research projects alongside experienced faculty and researchers.", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
    { id: 3, title: "Graduate Research Positions", description: "Fully-funded graduate research positions for MS and PhD candidates in GNSS, space science, and related fields.", image: "https://www.bing.com/th/id/OIP.1UvH1oFkfbvszNpDWBU65QHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px" }}>
          <Title level={2} className={styles.titleCenter}>
            <span>Opportunities</span>
          </Title>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {opportunities.map((opportunity) => (
            <Col key={opportunity.id} xs={24} sm={12} md={8}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={opportunity.image} alt={opportunity.title} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <Title level={4} className={styles.cardTitle}>
                    {opportunity.title}
                  </Title>
                  <Paragraph className={styles.cardDescription}>
                    {opportunity.description}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp10;
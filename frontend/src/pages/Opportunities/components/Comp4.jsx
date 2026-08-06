// src/pages/Opportunities/components/Comp4.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp4.module.css";

const { Title } = Typography;

const Comp4 = () => {
  const engagementItems = [
    { title: "Internships", desc: "Hands-on internship opportunities for students to gain practical experience in GNSS research and space applications." },
    { title: "Final-Year Projects", desc: "Collaborative final-year project opportunities for undergraduate students to work on real-world GNSS challenges." },
    { title: "Visiting Researcher Programme", desc: "Inviting national and international researchers to collaborate on GNSS research projects and exchange expertise." },
    { title: "Scholarships", desc: "Merit-based scholarships for outstanding students pursuing GNSS and space science education and research." },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Engagement</span>
              </Title>
              <Flex vertical gap={16}>
                {engagementItems.map((item, index) => (
                  <div key={index}>
                    <h4 className={styles.titleSmall}>{item.title}</h4>
                    <p className={styles.paragraphSmall}>{item.desc}</p>
                  </div>
                ))}
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png"
                alt="Engagement"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp4;
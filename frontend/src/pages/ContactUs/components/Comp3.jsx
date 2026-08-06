// src/pages/ContactUs/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ContactUsStyles/Comp3.module.css";

const { Title } = Typography;

const Comp3 = () => {
  const emails = [
    { icon: "", title: "General & Academic Inquiries", address: "lab-info@university.edu.pk" },
    { icon: "", title: "Data Hub & Observatory Support", address: "observatory-admin@university.edu.pk" },
    { icon: "", title: "GNSS Academy Registration", address: "academy-reg@university.edu.pk" },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                <span>Email</span> Contacts
              </Title>
              <div className={styles.emailList}>
                {emails.map((item, index) => (
                  <div key={index} className={styles.emailItem}>
                    <span className={styles.emailIcon}>{item.icon}</span>
                    <div>
                      <h4 className={styles.titleSmall}>{item.title}</h4>
                      <p className={styles.emailAddress}>{item.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png"
                alt="Email Contacts"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
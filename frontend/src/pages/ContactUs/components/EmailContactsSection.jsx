import { Col, Row, Typography } from 'antd';
import styles from "./EmailContactsSection.module.css";

const { Title, Paragraph } = Typography;

const EmailContactsSection = () => {
  return (
    <section className="section-email-contacts" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Email</span> */}
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Email</span> Contacts
              </Title>
              
              <div className={styles.emailList}>
                <div className={styles.emailItem}>
                  <span className={styles.emailIcon}>📧</span>
                  <div>
                    <h4 className={styles.emailTitle}>General & Academic Inquiries</h4>
                    <p className={styles.emailAddress}>lab-info@university.edu.pk</p>
                  </div>
                </div>

                <div className={styles.emailItem}>
                  <span className={styles.emailIcon}>📡</span>
                  <div>
                    <h4 className={styles.emailTitle}>Data Hub & Observatory Support</h4>
                    <p className={styles.emailAddress}>observatory-admin@university.edu.pk</p>
                  </div>
                </div>

                <div className={styles.emailItem}>
                  <span className={styles.emailIcon}>🎓</span>
                  <div>
                    <h4 className={styles.emailTitle}>GNSS Academy Registration</h4>
                    <p className={styles.emailAddress}>academy-reg@university.edu.pk</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Email Contacts"
                className={styles.emailImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EmailContactsSection;
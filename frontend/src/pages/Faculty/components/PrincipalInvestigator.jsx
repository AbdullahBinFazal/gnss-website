import { Col, Row, Typography } from 'antd';
import styles from "../Faculty.module.css";

const { Title } = Typography;

const PrincipalInvestigator = () => {
  return (
    <section className="section-about" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} sm={8} md={6} lg={4}>
            <div className={styles.photoWrapper}>
              <img 
                src="https://th.bing.com/th/id/OIP.PkQr8PS_Cd6OTHRfdA9mwgAAAA?w=125&h=150&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" 
                alt="Dr. Abdul Waheed" 
                className={styles.photo} 
              />
            </div>
          </Col>

          <Col xs={24} sm={16} md={18} lg={20}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.headingSmall}>
                Principal Investigator / <span className={styles.highlight}>Lab Director</span>
              </Title>
              <h3 className={styles.name}>Dr. Abdul Waheed</h3>
              <p className={styles.institute}>IST, Islamabad</p>
              <div className={styles.contactInfo}>
                <p className={styles.contact}>📧 <a href="mailto:waheed901@yahoo.com">waheed901@yahoo.com</a></p>
                <p className={styles.contact}>📞 051-967-5467</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PrincipalInvestigator;
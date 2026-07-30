import { Col, Row, Typography } from 'antd';
import styles from "./VisitUsSection.module.css";

const { Title, Paragraph } = Typography;

const VisitUsSection = () => {
  return (
    <section className="section-visit-us" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="Visit Us"
                className={styles.visitImage}
              />
            </div>
          </Col>

          {/* Right Side - Map */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <span className={styles.badge}>Location</span>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Visit</span> Us
              </Title>
              <Paragraph className={styles.description}>
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
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default VisitUsSection;
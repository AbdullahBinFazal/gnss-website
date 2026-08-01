import { Col, Row, Typography } from 'antd';
import styles from "../ContactUs.module.css";

const { Title, Paragraph } = Typography;

const PhysicalAddressSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://apiweb.ist.edu.pk/media/original_images/524621008_1212422727565885_3425970150472339642_n.jpg" 
                alt="Physical Address"
                className={styles.sectionImage}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Physical</span> Address
              </Title>
              <div className={styles.addressBox}>
                <p className={styles.addressText}>
                  <strong>GNSS Research Lab</strong><br />
                  National Center of GIS and Space Applications (NCGSA)<br />
                  Institute of Space Technology<br />
                  Islamabad Highway, Islamabad<br />
                  Pakistan
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PhysicalAddressSection;
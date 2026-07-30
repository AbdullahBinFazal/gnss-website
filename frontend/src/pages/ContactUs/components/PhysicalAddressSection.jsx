import { Col, Row, Typography } from 'antd';
import styles from "./PhysicalAddressSection.module.css";

const { Title, Paragraph } = Typography;

const PhysicalAddressSection = () => {
  return (
    <section className="section-address" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6m7VbOEoWFeCrlanPPf-OsYgLQxEW7el4H77XpasRw&s" 
                alt="Physical Address"
                className={styles.addressImage}
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>Location</span> */}
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
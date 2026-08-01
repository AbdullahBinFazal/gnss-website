import { Col, Row, Typography } from 'antd';
import styles from "../Faculty.module.css";

const { Title, Paragraph } = Typography;

const HostUniversitySection = () => {
  const istImage = "https://apiweb.ist.edu.pk/media/original_images/524621008_1212422727565885_3425970150472339642_n.jpg";

  return (
    <section className="section-about" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Host</span> University
              </Title>
              <Paragraph className={styles.description}>
                Institute of Space Technology, Islamabad, Pakistan
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.imageWrapperBox}>
              <img 
                src={istImage} 
                alt="Institute of Space Technology, Islamabad" 
                className={styles.sectionImageBox} 
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HostUniversitySection;
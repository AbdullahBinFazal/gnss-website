import { Col, Row, Typography } from 'antd';
import styles from "../Research.module.css";

const { Title, Paragraph } = Typography;

const CrustalDeformationSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Crustal Deformation <span className={styles.highlight}>& Precision Applications</span>
              </Title>
              <Paragraph className={styles.description}>
                Using high-precision scientific geodetic processing, we track subtle tectonic 
                movements, land subsidence, and structural displacements over long-term time 
                series. Additionally, we adapt these technologies for downstream commercial 
                sectors, including precision agriculture, autonomous drone mapping, and 
                disaster management.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-2-1200x1200.jpg" 
                alt="Crustal Deformation & Precision Applications"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CrustalDeformationSection;
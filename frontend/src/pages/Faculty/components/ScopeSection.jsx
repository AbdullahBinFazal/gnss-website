import { Col, Row, Typography } from 'antd';
import styles from "../Faculty.module.css";

const { Title, Paragraph } = Typography;

const ScopeSection = () => {
  const scopeImage = "https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png";

  return (
    <section className="section-about" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapperNoBox}>
              <img 
                src={scopeImage} 
                alt="GNSS Research Lab" 
                className={styles.sectionImage} 
              />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Scope</span>
              </Title>
              <Paragraph className={styles.description}>
                GNSS and Space Education Research Lab (GSERL) is dedicated to produce cutting edge research outputs and human resource capacity building in the field of Global Navigation Satellite Systems and space.
              </Paragraph>
              <Paragraph className={styles.description}>
                Major research activities of GSERL include but not limited to transport monitoring system, livestock management using GNSS, Jamming & Spoofing, GNSS – INS Integration and GNSS Augmentation Systems. GSERL, in collaboration with the international GNSS community and local resources, aims to develop significant tools and techniques on national level to help harvest numerous benefits of GNSS and space applications.
              </Paragraph>
              <Paragraph className={styles.description}>
                GSERL also focuses on research for methods to spread mass awareness on national level about space science, technology and its applications through various summer/winter schools, seminars, events, workshops & training, competitions and public gatherings for all age groups. The lab aims to incorporate all the segments of the society towards a common goal of realizing the potential in space science & technology for socio-economic and technological development at national and international level.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ScopeSection;
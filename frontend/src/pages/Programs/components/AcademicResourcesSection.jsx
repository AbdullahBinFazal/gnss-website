import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const AcademicResourcesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Academic Resources <span className={styles.highlight}>& Lab Facilities</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📦</span>
                  <div>
                    <h4 className={styles.listTitle}>The GNSS Data Sandbox</h4>
                    <p className={styles.listDesc}>A localized Git repository containing proprietary Python libraries, gLAB configuration templates, and historical RINEX data clearings for research benchmarking.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>🖥️</span>
                  <div>
                    <h4 className={styles.listTitle}>HPC Workstations</h4>
                    <p className={styles.listDesc}>Dedicated high-performance computing nodes pre-configured with Linux-based scientific processing software stacks.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Field Campaign Kits</h4>
                    <p className={styles.listDesc}>Access to geodetic-grade rovers and choke-ring setups for independent thesis data collection campaigns across Pakistan.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" alt="Academic Resources & Lab Facilities" className={styles.sectionImage} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AcademicResourcesSection;
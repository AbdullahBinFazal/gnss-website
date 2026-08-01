import { Col, Row, Typography } from 'antd';
import styles from "../Facilities.module.css";

const { Title, Paragraph } = Typography;

const researchTags = [
  { name: "PPP/RTK Techniques", icon: "📡" },
  { name: "Ionosphere Studies", icon: "🌐" },
  { name: "Space Weather", icon: "☀️" },
  { name: "GNSS Receivers", icon: "📡" },
  { name: "Spoofing & Jamming", icon: "🛡️" },
  { name: "LEO-PNT", icon: "🛰️" },
];

const SensorEquipmentSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Sensor Equipment <span className={styles.highlight}>& Antennas</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Geodetic Receivers</h4>
                    <p className={styles.listDesc}>Multi-constellation, multi-frequency geodetic-grade receivers capable of continuous 24/7 raw data logging.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Choke-Ring Antennas</h4>
                    <p className={styles.listDesc}>High-gain, multi-frequency antennas equipped with advanced multipath-mitigation technology to capture clean, low-noise satellite tracking signals.</p>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.listIcon}>📡</span>
                  <div>
                    <h4 className={styles.listTitle}>Field Surveying Kits</h4>
                    <p className={styles.listDesc}>Mobile RTK rover setups, optical tribrachs, and ruggedized field controllers deployed for kinematic tracking and rapid baseline mapping campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" 
                alt="Sensor Equipment & Antennas"
                className={styles.sectionImage}
              />
            </div>
          </Col>
        </Row>
        <div className={styles.tagsWrapper}>
          <div className={styles.tagsContainer}>
            {researchTags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag.icon} {tag.name}
              </span>
            ))}
            {researchTags.map((tag, index) => (
              <span key={`dup-${index}`} className={styles.tag}>
                {tag.icon} {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensorEquipmentSection;
import { Col, Row, Typography } from 'antd';
import styles from "./StatsSection.module.css";

const { Title, Paragraph } = Typography;

const statsData = [
  { id: 1, value: "28", label: "Software and Hardware Solutions", icon: "💻", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center" },
  { id: 2, value: "175", label: "Research Publications", icon: "📄", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop&crop=center" },
  { id: 3, value: "435", label: "Research Impact Factor", icon: "📊", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&crop=center" },
  { id: 4, value: "39", label: "Software and Hardware Solutions", icon: "⚙️", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=500&fit=crop&crop=center" },
];

const StatsSection = () => {
  return (
    <section className="section-about" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              {/* <span className={styles.badge}>About Us</span> */}
              <Title level={2} className={styles.heading}>
                Welcome to the <span className={styles.highlight}>GNSS Research Lab</span>
              </Title>
              <Paragraph className={styles.description}>
                The Global Navigation Satellite System (GNSS) Research Lab is a premier academic 
                and research facility operating under the umbrella of the National Center of GIS 
                and Space Applications (NCGSA). Our lab is dedicated to advancing the science, 
                engineering, and practical applications of satellite-based positioning, navigation, 
                and timing (PNT) technologies.
              </Paragraph>
              <Paragraph className={styles.description}>
                By bridging the gap between theoretical space sciences and terrestrial engineering, 
                we develop cutting-edge solutions that drive national progress in autonomous 
                navigation, geospatial infrastructure, and atmospheric monitoring.
              </Paragraph>
            </div>
          </Col>

          {/* Right Side - Stats Grid 2x2 */}
          <Col xs={24} lg={12}>
            <div className={styles.statsGrid}>
              {statsData.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <img src={stat.image} alt={stat.label} className={styles.statImage} />
                  <div className={styles.overlay} />
                  <div className={styles.statContent}>
                    <div className={styles.statIcon}>{stat.icon}</div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default StatsSection;
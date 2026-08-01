import { Col, Row, Typography } from 'antd';
import styles from "../About.module.css";

const { Title, Paragraph } = Typography;

const statsData = [
  { id: 1, value: "28", label: "Software and Hardware Solutions", icon: "", image: "https://www.bing.com/th/id/OIP.xiMY4x2N7mOqP5LWIi2gCQHaEo?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 2, value: "175", label: "Research Publications", icon: "", image: "https://www.bing.com/th/id/OIP.AQPbmgtKub1Hm8F2KU39DAHaD6?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 3, value: "435", label: "Research Impact Factor", icon: "", image: "https://www.bing.com/th/id/OIP.bmfgSdGU2fyqVUWe-QxDjAHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 4, value: "39", label: "Software and Hardware Solutions", icon: "", image: "https://www.bing.com/th/id/OIP.QLvHIv5DHGFXI6Mlx83UYwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
];

const StatsSection = () => {
  return (
    <section className="section-about" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
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

          <Col xs={24} lg={12}>
            <div className={styles.statsGrid}>
              {statsData.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <img src={stat.image} alt={stat.label} className={styles.statImage} />
                  <div className={styles.statOverlay} />
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
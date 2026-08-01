import { Col, Row, Typography } from 'antd';
import styles from "../Home.module.css";

const { Title, Paragraph } = Typography;

const glanceStats = [
  { 
    value: "60+", 
    label: "Graduated Researchers", 
    image: "https://www.bing.com/th/id/OIP.xiMY4x2N7mOqP5LWIi2gCQHaEo?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" 
  },
  { 
    value: "7", 
    label: "Research Labs", 
    image: "https://www.bing.com/th/id/OIP.AQPbmgtKub1Hm8F2KU39DAHaD6?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" 
  },
  { 
    value: "100+", 
    label: "Research Publications", 
    image: "https://www.bing.com/th/id/OIP.bmfgSdGU2fyqVUWe-QxDjAHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" 
  },
  { 
    value: "15+", 
    label: "International Collaborations", 
    image: "https://www.bing.com/th/id/OIP.QLvHIv5DHGFXI6Mlx83UYwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" 
  },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            GNSS <span>at a Glance</span>
          </Title>
        </div>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.statsGrid}>
              {glanceStats.map((stat, index) => (
                <div key={index} className={styles.statsCard}>
                  <img src={stat.image} alt={stat.label} className={styles.statImage} />
                  <div className={styles.statOverlay} />
                  <div className={styles.statContent}>
                    {/* Icon and circle removed */}
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Paragraph className={styles.description}>
                GNSS at NCGSA is a premier research program dedicated to advancing Global 
                Navigation Satellite Systems technology and space applications. With 7 
                state-of-the-art research labs, 60+ graduated researchers, 100+ publications, 
                and 15+ international collaborations, the program is committed to building 
                indigenous capacity in satellite navigation, positioning, and timing technologies.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default StatsSection;
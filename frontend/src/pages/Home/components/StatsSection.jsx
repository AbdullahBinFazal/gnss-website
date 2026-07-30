import { Col, Row, Typography } from 'antd';
import styles from "./StatsSection.module.css";

const { Title, Paragraph } = Typography;

const glanceStats = [
  { 
    value: "60+", 
    label: "Graduated Researchers", 
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center" 
  },
  { 
    value: "7", 
    label: "Research Labs", 
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center" 
  },
  { 
    value: "100+", 
    label: "Research Publications", 
    icon: "📄",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop&crop=center" 
  },
  { 
    value: "15+", 
    label: "International Collaborations", 
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center" 
  },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          {/* <span className={styles.badge}>Overview</span> */}
          <Title level={2} className={styles.sectionTitle}>
            GNSS <span className="gradient-text">at a Glance</span>
          </Title>
        </div>

        <Row gutter={[40, 40]} align="middle">
          {/* Left Side - 4 Grid Containers */}
          <Col xs={24} lg={12}>
            <div className={styles.gridContainer}>
              {glanceStats.map((stat, index) => (
                <div key={index} className={styles.statsCard}>
                  <img src={stat.image} alt={stat.label} className={styles.cardImage} />
                  <div className={styles.overlay} />
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <span className={styles.icon}>{stat.icon}</span>
                    </div>
                    <div className={styles.value}>{stat.value}</div>
                    <div className={styles.label}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side - Text */}
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
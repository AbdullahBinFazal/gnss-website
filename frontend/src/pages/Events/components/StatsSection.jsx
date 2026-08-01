import { Col, Row } from 'antd';
import styles from "../Events.module.css";

const stats = [
  { label: "Scientific Conferences", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=350&fit=crop", icon: "📅" },
  { label: "Training & Workshops", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=350&fit=crop", icon: "🎓" },
  { label: "International Collaborations", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop", icon: "🌍" },
  { label: "Community Outreach", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=350&fit=crop", icon: "🤝" },
];

const StatsSection = () => {
  return (
    <section className="section-stats" style={{ padding: "20px 0" }}>
      <div className="container">
        <Row gutter={[20, 20]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div className={styles.statsCard}>
                <img src={stat.image} alt={stat.label} className={styles.statsImage} />
                <div className={styles.statsOverlay} />
                <div className={styles.statsContent}>
                  <div className={styles.statsIcon}>{stat.icon}</div>
                  <div className={styles.statsLabel}>{stat.label}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default StatsSection;
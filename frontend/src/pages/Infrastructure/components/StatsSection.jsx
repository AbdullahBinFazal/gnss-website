import { Row, Col, Card, Typography } from 'antd';
import { 
  WifiOutlined, 
  CodeOutlined, 
  GlobalOutlined, 
  DesktopOutlined 
} from '@ant-design/icons';
import styles from "../Infrastructure.module.css";

const { Title, Paragraph } = Typography;

const statsData = [
  { icon: <WifiOutlined />, value: "12+", label: "GNSS Receivers", color: "#60a5fa" },
  { icon: <CodeOutlined />, value: "8+", label: "Processing Platforms", color: "#34d399" },
  { icon: <GlobalOutlined />, value: "5+", label: "Reference Stations", color: "#fbbf24" },
  { icon: <DesktopOutlined />, value: "20+", label: "Research Workstations", color: "#f472b6" },
];

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <Title level={2} className={styles.statsTitle}>
            Our <span className={styles.statsHighlight}>Facilities</span>
          </Title>
          <Paragraph className={styles.statsSubtitle}>
            Cutting-edge equipment and infrastructure for GNSS research
          </Paragraph>
        </div>
        <Row gutter={[24, 24]}>
          {statsData.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card bordered={false} className={styles.statCard}>
                <div className={styles.statIcon} style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <Title level={3} className={styles.statValue}>
                  {stat.value}
                </Title>
                <Paragraph className={styles.statLabel}>
                  {stat.label}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default StatsSection;
import { Col, Row, Typography } from 'antd';
import styles from "../CapacityBuilding.module.css";

const { Title, Paragraph } = Typography;

const CoreModulesSection = () => {
  const coreModules = [
    {
      id: 1,
      title: "Introduction to Multi-GNSS Architecture",
      description: "Comprehensive overview of GPS, GLONASS, Galileo, BeiDou, and regional navigation systems. Learn about signal structures, frequencies, and constellation configurations.",
      icon: "",
      image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 2,
      title: "RTK Network Deployment",
      description: "Practical guidance on establishing and managing Real-Time Kinematic networks, including base station placement, data links, and correction distribution methods.",
      icon: "",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 3,
      title: "PPP Processing with gLAB",
      description: "Hands-on training in Precise Point Positioning using gLAB software. Learn to process RINEX files, handle convergence, and interpret positioning results.",
      icon: "",
      image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    },
    {
      id: 4,
      title: "Open-Source Mapping via RTKLIB",
      description: "Master open-source mapping solutions using RTKLIB. Covers data acquisition, processing, visualization, and integration with GIS platforms.",
      icon: "",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>
            Core <span className={styles.sectionHighlight}>Modules</span>
          </Title>
          <Paragraph className={styles.sectionSubtitle}>
            Essential GNSS training modules designed to build expertise in positioning, navigation, and timing technologies
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {coreModules.map((module) => (
            <Col key={module.id} xs={24} sm={12} lg={6}>
              <div className={styles.moduleCard}>
                {/* Card Image */}
                <div className={styles.moduleCardImageWrapper}>
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className={styles.moduleCardImage}
                  />
                  <div className={styles.moduleCardOverlay}></div>
                </div>

                {/* Card Content */}
                <div className={styles.moduleCardContent}>
                  <div className={styles.moduleCardIcon}>{module.icon}</div>
                  <h4 className={styles.moduleCardTitle}>{module.title}</h4>
                  <p className={styles.moduleCardDescription}>{module.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CoreModulesSection;
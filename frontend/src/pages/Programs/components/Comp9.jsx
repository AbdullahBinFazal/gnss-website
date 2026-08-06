// src/pages/Programs/components/Comp9.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp9.module.css";

const { Title } = Typography;

const Comp9 = () => {
  const resources = [
    { icon: "", title: "The GNSS Data Sandbox", desc: "A localized Git repository containing proprietary Python libraries, gLAB configuration templates, and historical RINEX data clearings for research benchmarking." },
    { icon: "", title: "HPC Workstations", desc: "Dedicated high-performance computing nodes pre-configured with Linux-based scientific processing software stacks." },
    { icon: "", title: "Field Campaign Kits", desc: "Access to geodetic-grade rovers and choke-ring setups for independent thesis data collection campaigns across Pakistan." },
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Academic Resources <span>& Lab Facilities</span>
              </Title>
              <div className={styles.list}>
                {resources.map((item, index) => (
                  <div key={index} className={styles.listItem}>
                    <span className={styles.listIcon}>{item.icon}</span>
                    <div>
                      <h4 className={styles.listTitle}>{item.title}</h4>
                      <p className={styles.listDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-4-1200x1188.jpg" alt="Academic Resources & Lab Facilities" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp9;
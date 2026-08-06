// src/pages/Programs/components/Comp7.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/ProgramsStyles/Comp7.module.css";

const { Title } = Typography;

const Comp3 = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.image}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/CIRCULAR-6-1200x1200.jpg" 
                alt="Undergraduate & FYP Pathways" 
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap={24}>
              <Title level={2} className={styles.title}>
                Undergraduate <span>& FYP Pathways</span>
              </Title>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div>
                    <h4 className={styles.listTitle}>BS Final Year Projects (FYP)</h4>
                    <p className={styles.listDesc}>
                      We offer competitive, hands-on final-year project placements for outstanding 
                      undergraduate students in Space Science, Geoinformatics, Electrical Engineering, 
                      and Computer Science.
                    </p>
                  </div>
                </div>
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
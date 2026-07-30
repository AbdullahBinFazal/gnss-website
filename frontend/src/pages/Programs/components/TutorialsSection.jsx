import { Col, Row, Typography } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const TutorialsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.textContent}>
              <Title level={2} className={styles.heading}>
                Tutorials <span className={styles.highlight}>& Documentation</span>
              </Title>
              <Paragraph className={styles.description}>
                Access a growing library of video guides, step-by-step setup documentation, and processing manuals curated by our postgraduate students. Learn how to configure low-cost receivers, process complex RINEX logs, and debug cycle slips effectively.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" alt="Tutorials & Documentation" className={styles.sectionImage} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TutorialsSection;
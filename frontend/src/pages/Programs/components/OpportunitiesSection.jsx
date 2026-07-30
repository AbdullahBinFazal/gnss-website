import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Programs.module.css";

const { Title, Paragraph } = Typography;

const OpportunitiesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.imageWrapper}>
              <img src="https://ncgsa.org.pk/wp-content/uploads/2026/01/NCGSA-Research-Labs.png" alt="Opportunities" className={styles.sectionImage} />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Opportunities</span>
              </Title>
              <Flex vertical gap="small">
                <div>
                  <h4 className={styles.subHeading}>Current Opportunities</h4>
                  <p className={styles.descriptionSm}>Explore current openings for research positions, assistantships, and graduate programs at the GNSS Research Lab.</p>
                </div>
                <div>
                  <h4 className={styles.subHeading}>Research Assistantships</h4>
                  <p className={styles.descriptionSm}>Opportunities for students to work on cutting-edge GNSS research projects alongside experienced faculty and researchers.</p>
                </div>
                <div>
                  <h4 className={styles.subHeading}>Graduate Research Positions</h4>
                  <p className={styles.descriptionSm}>Fully-funded graduate research positions for MS and PhD candidates in GNSS, space science, and related fields.</p>
                </div>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
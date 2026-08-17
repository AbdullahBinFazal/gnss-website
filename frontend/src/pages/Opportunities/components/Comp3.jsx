// src/pages/Opportunities/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp3.module.css";
import opportunitiesData from "../../../json/pages/opportunities/opportunitiesData.json";

const { Title, Paragraph } = Typography;

const Comp3 = () => {
  const data = opportunitiesData.comp3;

  return (
    <section className={styles.sectionOpportunities}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <Row gutter={[40, 40]} align="middle">
          {/* Left Column - Text Content */}
          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              {/* Title */}
              <Title level={2} className={styles.opportunitiesTitle}>
                {data.title}
              </Title>

              {/* Description */}
              <Paragraph className={styles.opportunitiesText}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>

          {/* Right Column - Image */}
          <Col xs={24} lg={10}>
            <div className={styles.opportunitiesImageWrapper}>
              <img 
                src={data.image} 
                alt="Internships" 
                className={styles.opportunitiesSingleImage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp3;
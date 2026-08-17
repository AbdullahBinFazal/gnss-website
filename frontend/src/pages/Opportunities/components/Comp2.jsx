// src/pages/Opportunities/components/Comp3.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/OpportunitiesStyles/Comp2.module.css";
import opportunitiesData from "../../../json/pages/opportunities/opportunitiesData.json";

const { Title, Paragraph } = Typography;

const Comp2 = () => {
  const data = opportunitiesData.comp2;

  return (
    <section className={styles.sectionOpportunities}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div className={styles.opportunitiesContainer}>
          {/* Title - Centered */}
          <Flex vertical align="center" style={{ marginBottom: "48px" }}>
            <Title level={2} className={styles.opportunitiesTitle}>
              {data.title}
            </Title>
          </Flex>

          {/* Content Row - Image + Description + Vertical Cards */}
          <Row gutter={[40, 40]} className={styles.opportunitiesRow}>
            {/* Left Column - Image */}
            <Col xs={24} lg={12}>
              <div className={styles.opportunitiesImageWrapper}>
                <img 
                  src={data.image} 
                  alt="Graduate Research" 
                  className={styles.opportunitiesImage}
                />
              </div>
            </Col>

            {/* Right Column - Description + Vertical Cards */}
            <Col xs={24} lg={12}>
              <div className={styles.opportunitiesContent}>
                {/* Description with left border */}
                <div className={styles.opportunitiesDescriptionWrapper}>
                  <Paragraph className={styles.opportunitiesDescription}>
                    {data.description}
                  </Paragraph>
                </div>

                {/* Vertical Cards - Like Home Comp5 Facilities */}
                <div className={styles.opportunitiesList}>
                  {data.cards && data.cards.map((card) => (
                    <div key={card.id} className={styles.opportunitiesListItem}>
                      <div className={styles.opportunitiesListItemContent}>
                        <span className={styles.opportunitiesListItemText}>{card.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Comp2;
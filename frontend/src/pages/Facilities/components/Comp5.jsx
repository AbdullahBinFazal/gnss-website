// src/pages/Facilities/components/Comp5.jsx
import { Col, Row, Typography, Flex } from "antd";
import styles from "../../../styles/FacilitiesStyles/Facilities.module.css";
import facilitiesData from "../../../json/pages/facilities/facilitiesData.json";

const { Title, Paragraph } = Typography;

const Comp5 = () => {
  const data = facilitiesData.comp5;

  return (
    <section className={styles.sectionWhite} style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={10}>
            <div className={styles.image}>
              <img src={data.image} alt="ICTP GNSS Station" />
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Flex vertical gap={16}>
              <Title level={2} className={styles.title}>
                {data.title}
              </Title>
              <Paragraph className={styles.paragraph}>
                {data.description}
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comp5;
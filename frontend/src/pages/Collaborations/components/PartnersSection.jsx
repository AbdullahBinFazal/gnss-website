import { Col, Row, Typography, Flex } from 'antd';
import styles from "../Collaborations.module.css";

const { Title, Paragraph } = Typography;

const PartnersSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Row gutter={[50, 40]} align="middle">
          <Col xs={24} lg={12}>
            <Flex justify="center" align="middle">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovv6kfpPFmL_ZR0W4lJYw4Cj2mbmB7yFk_txz9MXWDA&s=10" 
                alt="Partners"
                className={styles.sectionImage}
              />
            </Flex>
          </Col>
          <Col xs={24} lg={12}>
            <Flex vertical gap="middle">
              <Title level={2} className={styles.heading}>
                <span className={styles.highlight}>Collaborations</span>
              </Title>
              <Flex vertical gap="large">
                <div>
                  <Title level={4} className={styles.subHeading}>National Academic Partners</Title>
                  <Paragraph className={styles.description}>Collaborations with leading Pakistani universities including IST, NUST, NED University, and Virtual University to advance GNSS research, space technology education, and joint research initiatives.</Paragraph>
                </div>
                <div>
                  <Title level={4} className={styles.subHeading}>International Academic Partners</Title>
                  <Paragraph className={styles.description}>Strategic partnerships with international institutions including ICTP (Italy), APSCO (China), and IAU to facilitate knowledge exchange, joint research, and capacity building in GNSS and space sciences.</Paragraph>
                </div>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PartnersSection;
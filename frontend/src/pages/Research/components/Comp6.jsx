// src/pages/Research/components/Comp6.jsx
import { Col, Row, Statistic, Typography, Flex } from "antd";
import styles from "../../../styles/ResearchStyles/Comp6.module.css";

const { Text } = Typography;

const impactStats = [
  { id: 1, value: 49, label: "Academic Research & Development", image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 2, value: 32, label: "Hardware / Software", image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 3, value: 601, label: "Models & Maps Development", image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 4, value: 37, label: "Capacity Building", image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
  { id: 5, value: 67, label: "Linkages & Commercialization", image: "https://www.bing.com/th/id/OIP.wI6ZFV8xbLIXhAq3PXfiNgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" },
];

const Comp6 = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "40px" }}>
          <Typography.Title level={2} className={styles.titleCenter}>
            Research <span>Impact</span>
          </Typography.Title>
          <Typography.Paragraph className={styles.paragraphCenter} style={{ maxWidth: "600px" }}>
            Measuring our contribution to space science and technology
          </Typography.Paragraph>
        </Flex>

        <Row gutter={[24, 24]} justify="center">
          {impactStats.map((item) => (
            <Col xs={12} sm={12} md={8} lg={5} xl={4} key={item.id}>
              <div className={styles.card}>
                <div
                  style={{
                    height: "180px",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                  />
                </div>
                <div style={{ padding: "20px 16px", textAlign: "center" }}>
                  <Statistic
                    value={item.value}
                    valueStyle={{
                      color: "#0a0a1a",
                      fontSize: "2rem",
                      fontWeight: 800,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: "0.85rem",
                      color: "#4a4a6a",
                      lineHeight: 1.6,
                      display: "block",
                      marginTop: "12px",
                    }}
                  >
                    {item.label}
                  </Text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Comp6;
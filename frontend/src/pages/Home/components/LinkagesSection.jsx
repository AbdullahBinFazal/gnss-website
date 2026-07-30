import { Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const LinkagesSection = () => {
  return (
    <section className="section-linkages" style={{ padding: "60px 0" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{
            display: "inline-block",
            padding: "4px 16px",
            background: "#000",
            borderRadius: "9999px",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "12px"
          }}>
            Collaborations
          </span>
          <Title level={2} style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: 0,
            color: "var(--text-primary)"
          }}>
            GNSS <span style={{ color: "#000000" }}>Linkages & Outreach</span>
          </Title>
        </div>

        <Row gutter={[40, 40]} align="middle">
          {/* Left Side - Text */}
          <Col xs={24} lg={12}>
            <div style={{ padding: "10px 0" }}>
              <Paragraph style={{
                fontSize: "1.1rem",
                lineHeight: 1.9,
                color: "var(--text-secondary)",
                marginBottom: 0
              }}>
                At GNSS NCGSA, every collaboration within the navigation and space sector 
                is important for us. We believe it is only through cooperation, coordination 
                and collaboration that researchers, scientists, and industry professionals 
                get a chance to interact and benefit from each other. Since its inception, 
                the GNSS program has aimed to build synergistic and mutually beneficial 
                linkages with academia, industry, and international organizations related 
                to satellite navigation, positioning, timing, and space applications.
              </Paragraph>
            </div>
          </Col>

          {/* Right Side - Image - NO VISIBLE BOX */}
          <Col xs={24} lg={12}>
            <div style={{
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              padding: "0"
            }}>
              <img 
                src="https://ncgsa.org.pk/wp-content/uploads/2026/01/linkages-and-Outreach-circle-1200x1199.png" 
                alt="GNSS Linkages & Outreach"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.4s ease",
                  borderRadius: "0"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LinkagesSection;
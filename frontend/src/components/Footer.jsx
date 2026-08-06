// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, Divider } from "antd";
import gnssLogo from "../assets/GNSS-Logo.png";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <AntFooter 
      style={{
        background: "#f8f9fc",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "40px 0 24px",
        marginTop: "60px",
      }}
    >
      <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <Row gutter={[40, 40]} style={{ marginBottom: "32px" }}>
          {/* Brand Column */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img 
                src={gnssLogo} 
                alt="GNSS Logo" 
                style={{ 
                  height: "100px", 
                  width: "auto", 
                  objectFit: "contain",
                }} 
              />
            </Link>
            <Paragraph 
              style={{ 
                color: "#4a4a6a", 
                fontSize: "0.9rem", 
                marginTop: "8px",
                maxWidth: "300px",
              }}
            >
              Institute Of Space Technology, Islamabad.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              fontSize: "0.85rem", 
              fontWeight: 600, 
              textTransform: "uppercase", 
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}>
              Quick Links
            </Title>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/programs", label: "Academics" },
                { to: "/research", label: "Research" },
                { to: "/facilities", label: "Facilities" },
                { to: "/digital-observatory", label: "Digital Observatory" },
                { to: "/capacity-building", label: "Capacity Building" },
                { to: "/collaborations", label: "Collaborations" },
                { to: "/opportunities", label: "Opportunities" },
                { to: "/copilot", label: "Co-Pilot" },
                { to: "/contact-us", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to} style={{ marginBottom: "10px" }}>
                  <Link 
                    to={item.to} 
                    style={{ 
                      color: "#4a4a6a", 
                      textDecoration: "none", 
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#000000"}
                    onMouseLeave={(e) => e.target.style.color = "#4a4a6a"}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Resources */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              fontSize: "0.85rem", 
              fontWeight: 600, 
              textTransform: "uppercase", 
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}>
              Resources
            </Title>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { to: "/research#publications", label: "Publications" },
                { to: "/collaborations#news-events", label: "Events" },
                { to: "/programs#training-workshops", label: "Workshops" },
                { to: "/digital-observatory#gnss-observatory", label: "GNSS Observatory" },
              ].map((item) => (
                <li key={item.to} style={{ marginBottom: "10px" }}>
                  <Link 
                    to={item.to} 
                    style={{ 
                      color: "#4a4a6a", 
                      textDecoration: "none", 
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#000000"}
                    onMouseLeave={(e) => e.target.style.color = "#4a4a6a"}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              fontSize: "0.85rem", 
              fontWeight: 600, 
              textTransform: "uppercase", 
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}>
              Contact
            </Title>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px", color: "#4a4a6a", fontSize: "0.9rem" }}>
                📍 Islamabad, Pakistan
              </li>
              <li style={{ marginBottom: "10px", color: "#4a4a6a", fontSize: "0.9rem" }}>
                📧 info@ist.edu.pk
              </li>
              <li style={{ marginBottom: "10px", color: "#4a4a6a", fontSize: "0.9rem" }}>
                📞 +92-51-1234567
              </li>
            </ul>
          </Col>
        </Row>

        {/* Logos Row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "25px 0",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}>
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvuP7gdReb_phPd0U2uFbOieNlh_wdNSpH2zFJPyO68c9oKAUNt-TNjs&s=10",
            "https://ncgsa.org.pk/wp-content/uploads/2026/01/MINISTRY-OF-PLANNING-COMMISION-150x150.png",
            "https://ncgsa.org.pk/wp-content/uploads/2020/09/hec.png",
            "https://ncgsa.org.pk/wp-content/uploads/2026/01/IST-LOGO-1-200x115-1-1-1.png",
          ].map((logo, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`}
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.7";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#8a8aa0",
        }}>
          © {new Date().getFullYear()} NCGSA - IST Islamabad. All rights reserved.
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
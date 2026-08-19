// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography } from "antd";
import gnssLogo from "../assets/GNSS-Logo.png";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <AntFooter 
      style={{
        background: "#020304",
        padding: 0,
        marginTop: "auto",
        boxShadow: "0px -34px 80px rgba(0, 0, 0, 0.24)",
      }}
    >
      {/* Main Footer Container */}
      <div style={{ 
        maxWidth: "1168px", 
        margin: "0 auto", 
        padding: "0 24px",
        background: "linear-gradient(180deg, rgba(2, 3, 4, 0.08) 0%, rgba(2, 3, 4, 0.55) 46%, #020304 100%), linear-gradient(90deg, rgba(2, 3, 4, 0.92) 0%, rgba(2, 3, 4, 0.5) 45%, rgba(2, 3, 4, 0.9) 100%), radial-gradient(57.88% 355.82% at 56% 10%, rgba(245, 226, 188, 0.42) 0%, rgba(245, 226, 188, 0) 18%)",
        borderBottom: "0.666667px solid rgba(255, 255, 255, 0.28)",
      }}>
        {/* Main Content Row */}
        <Row gutter={[40, 40]} style={{ padding: "46px 0" }}>
          {/* Column 1: NCGSA Brand & Get in Touch */}
          <Col xs={24} sm={12} md={6} lg={6}>
            {/* Logo */}
            <div style={{ marginBottom: "22px" }}>
              <img 
                src={gnssLogo} 
                alt="NCGSA" 
                style={{ 
                  height: "97px", 
                  width: "auto", 
                  objectFit: "contain",
                }} 
              />
              <div style={{ 
                fontSize: "3.78px", 
                color: "#12608D",
                marginTop: "4px",
                fontWeight: 400,
                letterSpacing: "0.5px",
              }}>
                
              </div>
            </div>

            {/* Get in Touch */}
            <div style={{ 
              fontSize: "11px", 
              fontWeight: 700,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "16px",
            }}>
              Get in Touch
            </div>

            {/* Address */}
            <div style={{ 
              fontSize: "14px", 
              lineHeight: "24px",
              color: "#ffffff",
              marginBottom: "14px",
            }}>
              GNSS Research Lab, Institute Of Space Technology,<br />
              1, Islamabad Expressway<br />
              Pakistan
            </div>

            {/* Phone & Email */}
            <div style={{ 
              fontSize: "14px", 
              lineHeight: "24px",
              color: "#fcfdff",
              marginBottom: "14px",
            }}>
              +92 51 9273316-17<br />
              +92 51 9273270<br />
              info@ncgsa.org.pk
            </div>

            {/* Timing */}
            <div style={{ 
              fontSize: "14px", 
              lineHeight: "24px",
              color: "#8D96A8",
            }}>
              08:00 AM - 04:00 PM (Mon-Fri)
            </div>
          </Col>

          {/* Column 2: Stay Connected */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div style={{ 
              fontSize: "11px", 
              fontWeight: 700,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "22px",
            }}>
              Stay Connected
            </div>

            {/* Social Icons */}
            <div style={{ 
              display: "flex", 
              gap: "14px",
              marginBottom: "30px",
            }}>
              {["f", "◎", "▶", "in"].map((icon, index) => (
                <div
                  key={index}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "0.666667px solid #293550",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                    fontSize: "16px",
                    fontWeight: 900,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#008BD2";
                    e.currentTarget.style.color = "#008BD2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#293550";
                    e.currentTarget.style.color = "#CBD5E1";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Newsletter - SHORTER VERSION */}
            <div style={{
              display: "flex",
              border: "0.666667px solid #27344F",
              maxWidth: "220px",
              height: "42px",
              overflow: "hidden",
            }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  padding: "0 12px",
                  background: "#10182A",
                  border: "none",
                  color: "#757575",
                  fontSize: "12px",
                  outline: "none",
                  fontFamily: "Arial",
                  minWidth: "0",
                  width: "130px",
                }}
              />
              <button
                style={{
                  padding: "0 14px",
                  background: "#26344F",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "9px",
                  letterSpacing: "0.8px",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  fontFamily: "Arial",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#008BD2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#26344F";
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Newsletter Text */}
            <div style={{
              fontSize: "13px",
              lineHeight: "20px",
              color: "#fefeff",
              marginTop: "12px",
              maxWidth: "220px",
            }}>
              Subscribe to our newsletter for the latest updates, events &amp; space discoveries.
            </div>
          </Col>

          {/* Column 3: Affiliated With - UPDATED WITH IMAGES */}
          <Col xs={24} sm={12} md={4} lg={4}>
            <div style={{ 
              fontSize: "11px", 
              fontWeight: 700,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "22px",
            }}>
              Affiliated With
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}>
              {/* GOVT Box */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  border: "0.666667px solid #293550",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  padding: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#008BD2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#293550";
                }}
              >
                <img 
                  src="https://ncgsa.org.pk/wp-content/uploads/2026/01/MINISTRY-OF-PLANNING-COMMISION-150x150.png"
                  alt="GOVT"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <span style={{
                  color: "#9FB2CA",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}>
                  GOVT
                </span>
              </div>

              {/* NCGSA Box */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  border: "0.666667px solid #293550",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  padding: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#008BD2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#293550";
                }}
              >
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCN2yD_uWHdT-8sUAUtbQfAiXT3bp4ib9H6Z1s-9iF6XWFcmRHUIUIQNg&s=10"
                  alt="NCGSA"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <span style={{
                  color: "#f5f5f5",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}>
                  NCGSA
                </span>
              </div>

              {/* IST Box */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  border: "0.666667px solid #293550",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  padding: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#008BD2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#293550";
                }}
              >
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2EcTo68gkbII3pei5G3tR49GcAZhncdURHzCU5rC6A&s=10"
                  alt="IST"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <span style={{
                  color: "#fafbfb",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}>
                  IST
                </span>
              </div>
            </div>
          </Col>

          {/* Column 4: Explore */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <div style={{ 
              fontSize: "11px", 
              fontWeight: 700,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "22px",
            }}>
              Explore
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px 0",
            }}>
              {/* Left Column Links */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  "Home",
                  "About",
                  "Facilities",
                  "Research",
                  "Academics",
                ].map((label, index) => (
                  <Link
                    key={index}
                    to={`/${label.toLowerCase().replace(/ /g, "-")}`}
                    style={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#fafbfd",
                      textDecoration: "none",
                      padding: "0",
                      margin: "0",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#008BD2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8D96A8";
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Right Column Links */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  "Digital Observatory",
                  "Capacity Building",
                  "Collaborations",
                  "Co-Pilot",
                  "Opportunities",
                  "Contact Us",
                ].map((label, index) => (
                  <Link
                    key={index}
                    to={`/${label.toLowerCase().replace(/ /g, "-").replace(/gnss-/, "gnss-")}`}
                    style={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#fcfcfc",
                      textDecoration: "none",
                      padding: "0",
                      margin: "0",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#008BD2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8D96A8";
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "0.666667px solid rgb(255, 255, 255)",
        padding: "24px 24px",
        maxWidth: "1168px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div style={{
          fontSize: "11px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#fbfcff",
        }}>
          © 2026 GNSS - GNSS Research Lab, NCGSA, IST. All Rights Reserved.
        </div>

        <div style={{
          fontSize: "11px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#586276",
        }}>
          33.64° N · 73.05° E
        </div>

        <div style={{
          display: "flex",
          gap: "24px",
          fontSize: "11px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#ffffff",
        }}>
          <span style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Privacy</span>
          <span style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Terms</span>
          <span style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Contact</span>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
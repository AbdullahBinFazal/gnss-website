// src/pages/Research/components/Comp8.jsx
import { useState } from "react";
import {
  Row,
  Col,
  Card,
  Tag,
  Input,
  Button,
  Flex,
  Statistic,
  Empty,
  Typography,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
// No CSS module import needed - all styles are inline or from antd
// The component uses inline styles exclusively

const { Text } = Typography;

const publications = [
  {
    id: 1,
    title:
      "Design, Implementation and Verification of GNSS Continuously Operating Reference Stations using Commercial off the Shelf Receivers",
    authors:
      "Dr. Najam Naqvi, Daniyal Raza Kazmi, Faran Ali, Faaiz Ahmed Jeelani, Usama Ahmed",
    journal: "IAF Space Communications and Navigation Symposium (IAC-25)",
    year: 2025,
    type: "Conference Paper",
    category: "GNSS CORS",
    link: "https://iafastro.directory/iac/paper/id/103401/",
    abstract:
      "This research implemented a carrier-phase-based CORS network at IST Islamabad using Zed F9P receiver as base station and C94-M8P as rover. The study evaluated RTK-based positioning accuracy compared to standalone GNSS solutions.",
    image:
      "https://media.gettyimages.com/id/2206773305/photo/satellite-in-space-station-orbiting-earth-providing-communication-internet-connection-coverage.jpg?s=612x612&w=0&k=20&c=LUimbBcDRewwUbzKTMLfFhxhWqm_bwjajUVSLpkTtu8=",
  },
  {
    id: 2,
    title:
      "Leveraging Machine Learning for the Detection of Structured Interference in Global Navigation Satellite Systems",
    authors:
      "Imtiaz Nabi, Salma Zainab Farooq, Sunnyaha Saeed, S.A. Irtaza, K. Shehzad, M. Arif, I. Khan, S. Ahmad",
    journal: "PeerJ Computer Science",
    year: 2024,
    type: "Journal Paper",
    category: "GNSS Security",
    link: "https://peerj.com/articles/cs-2399/",
    abstract:
      "This study explores machine learning techniques for detecting GNSS spoofing attacks, specifically focusing on SCER spoofing attacks using the TEXBAT dataset. Logistic regression and SVM achieved 94% F1-score.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title:
      "Pioneering Navigation: The Specialized MS GNSS Program at Institute of Space Technology, Pakistan",
    authors:
      "Dr. Najam Naqvi, Samra Kiran, Dr. Salma Zainab Farooq, Usama Ahmed, Daniyal Raza Kazmi",
    journal: "IAF Space Education and Outreach Symposium (IAC-24)",
    year: 2024,
    type: "Conference Paper",
    category: "GNSS Education",
    link: "https://iafastro.directory/iac/paper/id/91375/",
    abstract:
      "This paper outlines the establishment and contributions of the specialized MS GNSS Program at IST since 2014, which has graduated over 60 students with 60 research theses and 100+ publications.",
    image:
      "https://media.gettyimages.com/id/1609597622/photo/satellite-internet-communication-from-space.jpg?s=612x612&w=0&k=20&c=sZWPgtH8lFsOYNCzmpissHgUyYCJOqPK9SeTXZutqYU=",
  },
  {
    id: 4,
    title:
      "The Establishment of the First Global Navigation Satellite Systems (GNSS) Research Lab",
    authors:
      "Dr. Najam Naqvi, Dr. Salma Zainab Farooq, Samra Kiran, Usama Ahmed, Daniyal Raza Kazmi",
    journal: "IAF Space Communications and Navigation Symposium (IAC-24)",
    year: 2024,
    type: "Conference Paper",
    category: "GNSS Lab",
    link: "https://iafastro.directory/iac/archive/browse/IAC-24/B2/IP/90881/",
    abstract:
      "This research outlines the establishment of the first GNSS Lab in Pakistan, a state-of-the-art facility equipped with cutting-edge GNSS receivers, committed to advancing GNSS research and education.",
    image:
      "https://media.gettyimages.com/id/96376746/photo/satellite-with-solar-panels-above-earth.jpg?s=612x612&w=0&k=20&c=bn_DeXGOFrt48Q-gJ_e3l_B7S1AhaVZQjf7UiwVkLqU=",
  },
  {
    id: 5,
    title:
      "Resolution Improvement in GNSS Based Synthetic Aperture Radar Using GPS L1 Signals from Different Look Angles",
    authors:
      "Muhammad Shoaib Ul Hassan, Hassan Sadiq, Najam Abbas Naqvi, Mohammad Usman",
    journal: "ICASE 2021 Proceedings",
    year: 2021,
    type: "Conference Paper",
    category: "GNSS SAR",
    link: "https://ncgsa.org.pk/wp-content/uploads/2025/06/ICASE-2021-Proceedings.pdf#84",
    abstract:
      "This paper explores resolution improvement in GNSS-based Synthetic Aperture Radar using GPS L1 signals from different look angles.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Performance Analysis of Global Ionosphere/TEC Models Over Islamabad",
    authors:
      "National University of Science and Technology (NUST), Institute of Space Technology (IST)",
    journal: "ICASE 2021",
    year: 2021,
    type: "Conference Paper",
    category: "Ionosphere",
    link: "https://ieeexplore.ieee.org/document/9904116",
    abstract:
      "This paper analyzes Global Ionosphere Maps (GIM) and IRI-2016 models over Islamabad. It concludes that IRI-2016 correlates better to actual TEC when local GNSS data is unavailable.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  },
];

const categoryColors = {
  "GNSS CORS": "#1890ff",
  "GNSS Security": "#ff4d4f",
  "GNSS Education": "#52c41a",
  "GNSS Lab": "#fa8c16",
  "GNSS SAR": "#722ed1",
  Ionosphere: "#13c2c2",
};

const getCategoryColor = (category) => categoryColors[category] || "#1890ff";

const stats = [
  { label: "Research Publications", value: publications.length, icon: "" },
  {
    label: "Research Domains",
    value: [...new Set(publications.map((p) => p.category))].length,
    icon: "",
  },
  {
    label: "Conference Papers",
    value: publications.filter((p) => p.type === "Conference Paper").length,
    icon: "",
  },
  {
    label: "Journal Papers",
    value: publications.filter((p) => p.type === "Journal Paper").length,
    icon: "",
  },
];

const categories = ["All", ...new Set(publications.map((p) => p.category))];

const PublicationCard = ({ publication }) => {
  const borderColor = getCategoryColor(publication.category);

  return (
    <Card
      hoverable
      style={{
        height: "100%",
        borderLeft: `4px solid ${borderColor}`,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      cover={
        <div style={{ width: "100%", height: "220px", overflow: "hidden", position: "relative" }}>
          <img
            alt={publication.title}
            src={publication.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      }
    >
      <Flex vertical gap={12} style={{ height: "100%" }}>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#0a0a1a",
            lineHeight: 1.4,
            marginBottom: "8px",
          }}
        >
          {publication.title}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#4a4a6a",
              lineHeight: 1.6,
              marginBottom: "6px",
            }}
          >
            <strong style={{ color: "#0a0a1a" }}>Authors:</strong> {publication.authors}
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#4a4a6a",
              lineHeight: 1.6,
              marginBottom: "6px",
            }}
          >
            <strong style={{ color: "#0a0a1a" }}>Journal:</strong> {publication.journal}
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#4a4a6a",
              lineHeight: 1.6,
              marginBottom: "12px",
            }}
          >
            <strong style={{ color: "#0a0a1a" }}>Year:</strong> {publication.year}
          </div>

          {publication.abstract && (
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                color: "#4a4a6a",
                lineHeight: 1.6,
                marginBottom: "12px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {publication.abstract}
            </div>
          )}
        </div>

        <Flex wrap gap="small" style={{ marginTop: "auto" }}>
          <Tag color={borderColor} style={{ color: "white", fontSize: "0.8rem", fontWeight: 600 }}>
            {publication.category}
          </Tag>

          <Tag
            color={publication.type === "Journal Paper" ? "green" : "blue"}
            style={{ fontSize: "0.8rem", fontWeight: 600 }}
          >
            {publication.type}
          </Tag>
        </Flex>

        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              color: borderColor,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginTop: "8px",
              display: "inline-block",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            View Paper →
          </a>
        )}
      </Flex>
    </Card>
  );
};

const Comp8 = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = publications.filter((pub) => {
    const matchFilter = activeFilter === "All" || pub.category === activeFilter;
    const matchSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: "48px", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#0a0a1a",
              margin: 0,
            }}
          >
            Research <span style={{ color: "#000000" }}>Publications</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#4a4a6a",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "12px 0 0 0",
            }}
          >
            Research publications from NCGSA - National Center of GIS & Space Applications
          </p>
        </Flex>

        <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                style={{
                  height: "100%",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{stat.icon}</div>
                <Statistic
                  title={stat.label}
                  value={stat.value}
                  valueStyle={{
                    fontFamily: "Inter, sans-serif",
                    color: "#0a0a1a",
                    fontSize: "2.2rem",
                    fontWeight: 800,
                  }}
                  titleStyle={{
                    fontFamily: "Inter, sans-serif",
                    color: "#4a4a6a",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Flex
          vertical
          gap={16}
          style={{
            marginBottom: "40px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <Flex wrap gap="small">
            {categories.map((cat) => (
              <Button
                key={cat}
                type={activeFilter === cat ? "primary" : "default"}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderRadius: "6px",
                  fontWeight: 600,
                }}
              >
                {cat}
              </Button>
            ))}
          </Flex>

          <Input
            placeholder="Search by title, author, or journal..."
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ fontFamily: "Inter, sans-serif", borderRadius: "6px" }}
            allowClear
          />
        </Flex>

        {filtered.length > 0 ? (
          <Row gutter={[24, 24]}>
            {filtered.map((publication) => (
              <Col xs={24} md={12} lg={8} key={publication.id}>
                <PublicationCard publication={publication} />
              </Col>
            ))}
          </Row>
        ) : (
          <Card style={{ textAlign: "center", padding: "60px 20px", borderRadius: "8px" }}>
            <Empty description="No publications found" />
            <p style={{ fontFamily: "Inter, sans-serif", marginTop: "16px", color: "#4a4a6a" }}>
              Try adjusting your search or category filters
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Comp8;
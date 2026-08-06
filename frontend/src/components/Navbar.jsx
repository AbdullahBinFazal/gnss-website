// src/components/Navbar.jsx
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import gnssLogo from "../assets/GNSS-Logo.png";
import { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setMobileMenuOpen(false);
  };

  // Helper to create dropdown items
  const createDropdownItems = (sections, basePath) => {
    return sections.map((section) => ({
      key: `${basePath}#${section.key}`,
      label: (
        <Link 
          to={`${basePath}#${section.key}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {section.label}
        </Link>
      ),
    }));
  };

  const aboutSections = [
    { key: "our-mission", label: "Our Mission" },
    { key: "core-objectives", label: "Core Objectives" },
    { key: "team", label: "Team" },
    { key: "lab-leadership", label: "Lab Leadership & Faculty" },
    { key: "research-teams", label: "Research Teams" },
    { key: "alumni", label: "Alumni Network" },
  ];

  const programsSections = [
    { key: "academics", label: "Academics" },
    { key: "undergraduate", label: "Undergraduate & FYP Pathways" },
    { key: "academic-resources", label: "Academic Resources & Lab Facilities" },
    { key: "research-opportunities", label: "Research Opportunities" },
    { key: "gnss-academy", label: "GNSS Academy" },
    { key: "training-workshops", label: "Training Workshops" },
    { key: "tutorials", label: "Tutorials" },
  ];

  const researchSections = [
    { key: "domains", label: "Domains" },
    { key: "research-detail", label: "PPP & RTK Algorithms" },
    { key: "ionospheric", label: "Ionospheric Modeling" },
    { key: "crustal-deformation", label: "Crustal Deformation" },
    { key: "impact", label: "Research Impact" },
    { key: "research-projects", label: "Research Projects" },
    { key: "publications", label: "Publications" },
  ];

  const facilitiesSections = [
    { key: "sensor-equipment", label: "Sensor Equipment" },
    { key: "research-infrastructure", label: "Research Infrastructure" },
    { key: "laboratories", label: "Laboratories" },
  ];

  const digitalObservatorySections = [
    { key: "gnss-observatory", label: "GNSS Observatory" },
    { key: "space-weather", label: "Space Weather Observatory" },
  ];

  const capacityBuildingSections = [
    { key: "training-workshops", label: "Training & Workshops" },
    { key: "tutorials", label: "Tutorials & Documentation" },
  ];

  const collaborationsSections = [
    { key: "agreements", label: "Agreements" },
    { key: "outreach", label: "Outreach" },
  ];

  const opportunitiesSections = [
    { key: "engagement", label: "Engagement" },
    { key: "research-opportunities", label: "Research Opportunities" },
  ];

  const coPilotSections = [
    { key: "copilot-assistance", label: "Co-Pilot Assistance" },
    { key: "software-configuration", label: "Software Configuration" },
    { key: "data-hub-navigation", label: "Data Hub Navigation" },
  ];

  // Desktop menu items with dropdowns
  const desktopMenuItems = [
    {
      key: "/",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "about",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(aboutSections, "/about"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/about">About</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "research",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(researchSections, "/research"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/research">Research</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "programs",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(programsSections, "/programs"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/programs">Academics</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "facilities",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(facilitiesSections, "/facilities"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/facilities">Facilities</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "digital-observatory",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(digitalObservatorySections, "/digital-observatory"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/digital-observatory">Digital Observatory</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "capacity-building",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(capacityBuildingSections, "/capacity-building"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/capacity-building">Capacity Building</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "collaborations",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(collaborationsSections, "/collaborations"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/collaborations">Collaborations</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "opportunities",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(opportunitiesSections, "/opportunities"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/opportunities">Opportunities</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "copilot",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(coPilotSections, "/copilot"),
          }}
          placement="bottom"
          trigger={["hover"]}
        >
          <NavLink to="/copilot">Co-Pilot</NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/contact-us",
      label: <NavLink to="/contact-us">Contact Us</NavLink>,
    },
  ];

  // Mobile menu items (simple links without dropdowns)
  const mobileMenuItems = [
    { key: "/", label: <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink> },
    { key: "/about", label: <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink> },
    { key: "/research", label: <NavLink to="/research" onClick={() => setMobileMenuOpen(false)}>Research</NavLink> },
    { key: "/programs", label: <NavLink to="/programs" onClick={() => setMobileMenuOpen(false)}>Academics</NavLink> },
    { key: "/facilities", label: <NavLink to="/facilities" onClick={() => setMobileMenuOpen(false)}>Facilities</NavLink> },
    { key: "/digital-observatory", label: <NavLink to="/digital-observatory" onClick={() => setMobileMenuOpen(false)}>Digital Observatory</NavLink> },
    { key: "/capacity-building", label: <NavLink to="/capacity-building" onClick={() => setMobileMenuOpen(false)}>Capacity Building</NavLink> },
    { key: "/collaborations", label: <NavLink to="/collaborations" onClick={() => setMobileMenuOpen(false)}>Collaborations</NavLink> },
    { key: "/opportunities", label: <NavLink to="/opportunities" onClick={() => setMobileMenuOpen(false)}>Opportunities</NavLink> },
    { key: "/copilot", label: <NavLink to="/copilot" onClick={() => setMobileMenuOpen(false)}>Co-Pilot</NavLink> },
    { key: "/contact-us", label: <NavLink to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink> },
  ];

  // Add Admin link if user is admin
  if (isAdmin) {
    desktopMenuItems.push({
      key: "/admin",
      label: <NavLink to="/admin">Admin</NavLink>,
    });
    mobileMenuItems.push({
      key: "/admin",
      label: <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</NavLink>,
    });
  }

  return (
    <Header 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        height: "var(--header-height, 120px)",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        width: "100%",
      }}
    >
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
      }}>
        {/* Logo */}
        <Link to="/" style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "12px",
          color: "#000000",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          <img 
            src={gnssLogo} 
            alt="GNSS Logo" 
            style={{ 
              height: "75px", 
              width: "auto", 
              objectFit: "contain",
            }} 
          />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={desktopMenuItems}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              flex: 1,
              gap: "16px",
            }}
          />
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            style={{
              fontSize: "20px",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}

        {/* Mobile Drawer */}
        <Drawer
          placement="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          closable={true}
          closeIcon={<CloseOutlined />}
          width={280}
          styles={{
            body: {
              padding: 0,
            },
            header: {
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              padding: "16px 20px",
            }
          }}
        >
          <div style={{ padding: "8px 0" }}>
            <Menu
              mode="inline"
              selectedKeys={[location.pathname]}
              items={mobileMenuItems}
              style={{
                border: "none",
                background: "transparent",
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </Drawer>
      </div>
    </Header>
  );
};

export default Navbar;
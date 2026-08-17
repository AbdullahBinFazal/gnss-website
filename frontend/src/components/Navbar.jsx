// src/components/Navbar.jsx
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import gnssLogo from "../assets/GNSS-Logo.png";
import { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";

const { Header } = Layout;

// Inline styles for navbar (Figma design)
const navbarStyles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(4, 9, 19, 0.9)",
    backdropFilter: "blur(8px)",
    borderBottom: "0.666667px solid #01050d2c",
    height: "var(--header-height, 120px)",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#000000",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoImage: {
    height: "99px",
    width: "auto",
    objectFit: "contain",
  },
  desktopMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    flex: 1,
    gap: "0px",
  },
  mobileMenuButton: {
    fontSize: "20px",
    color: "#909BAD",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
  },
  navLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "11px",
    lineHeight: "10px",
    color: "#fefefe",
    textDecoration: "none",
    // textTransform: "uppercase",
    // letterSpacing: "1.08px",
    padding: "27px 7px 25px",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    transition: "color 0.3s ease",
  },
  activeNavLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "10px",
    color: "#54C4ED",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1.08px",
    padding: "27px 7px 25px",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
  activeUnderline: {
    position: "absolute",
    bottom: "19px",
    left: "7px",
    right: "7px",
    height: "1px",
    background: "#54C4ED",
  },
  dropdownArrow: {
    fontSize: "10px",
    color: "#ffffff",
  },
  dropdownOverlay: {
    background: "#0B1019",
    border: "1px solid #283243",
    borderRadius: "4px",
    padding: "4px 0",
  },
  dropdownLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "10px",
    color: "#f0f0f0",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1.08px",
    display: "block",
    padding: "6px 16px",
    transition: "color 0.3s ease",
  },
  mobileNavLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    color: "#909BAD",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1.08px",
    display: "block",
    padding: "12px 20px",
    transition: "color 0.3s ease",
  },
};

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

  // Handle hash navigation - scroll to section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          style={navbarStyles.dropdownLink}
          onMouseEnter={(e) => e.target.style.color = "#54C4ED"}
          onMouseLeave={(e) => e.target.style.color = "#909BAD"}
        >
          {section.label}
        </Link>
      ),
    }));
  };

  // ─── ABOUT SECTIONS ───
  const aboutSections = [
    { key: "vision-section", label: "Vision" },
    { key: "research-teams-carousel", label: "Mission" },
    { key: "lab-leadership", label: "Objectives" },
    { key: "people-section", label: "Our People" },
  ];

  const researchSections = [
    { key: "domains-section", label: "Domains" },
    { key: "projects-section", label: "Projects" },
    { key: "publications-section", label: "Publications" },
  ];

  const programsSections = [
    { key: "ms-program-section", label: "MS Program" },
    { key: "phd-program-section", label: "PhD Program" },
    { key: "bs-program-section", label: "BS Program" },
  ];

  const facilitiesSections = [
    { key: "ecosystem-section", label: "Antennas" },
    { key: "gnss-station-section", label: "GNSS Station" },
    { key: "receivers-section", label: "Receivers" },
    { key: "equipments-section", label: "Workstations" },
  ];

  const digitalObservatorySections = [
    { key: "gnss-observatory-cards-section", label: "GNSS Observatory" },
    { key: "space-weather-section", label: "Space Weather" },
  ];

  const capacityBuildingSections = [
    { key: "gnss-school-section", label: "GNSS School" },
    { key: "conferences-section", label: "Conferences" },
    { key: "workshops-section", label: "Workshops" },
    { key: "seminars-section", label: "Seminars" },
  ];

  const collaborationsSections = [
    { key: "institutions-section", label: "Institutions" },
    { key: "engagement-section", label: "Engagement" },
  ];

  const opportunitiesSections = [
    { key: "research-opportunities", label: "Graduate Research" },
    { key: "internships-section", label: "Internships" },
  ];

  const coPilotSections = [];

  // ─── DESKTOP MENU ITEMS ───
  const desktopMenuItems = [
    {
      key: "/",
      label: (
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            ...navbarStyles.navLink,
            ...(isActive ? navbarStyles.activeNavLink : {}),
          })}
        >
          Home
          {location.pathname === "/" && <span style={navbarStyles.activeUnderline} />}
        </NavLink>
      ),
    },
    {
      key: "/about",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(aboutSections, "/about"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            About <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/about" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/research",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(researchSections, "/research"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/research" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Research <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/research" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/programs",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(programsSections, "/programs"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/programs" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Academics <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/programs" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/facilities",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(facilitiesSections, "/facilities"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/facilities" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Facilities <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/facilities" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/digital-observatory",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(digitalObservatorySections, "/digital-observatory"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/digital-observatory" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Digital Observatory <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/digital-observatory" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/capacity-building",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(capacityBuildingSections, "/capacity-building"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/capacity-building" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Capacity Building <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/capacity-building" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/collaborations",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(collaborationsSections, "/collaborations"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/collaborations" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Collaborations <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/collaborations" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/opportunities",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(opportunitiesSections, "/opportunities"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/opportunities" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Opportunities <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/opportunities" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/copilot",
      label: (
        <Dropdown
          menu={{
            items: createDropdownItems(coPilotSections, "/copilot"),
            style: { background: "#0B1019", border: "1px solid #283243" },
          }}
          placement="bottom"
          trigger={["hover"]}
          overlayStyle={{ background: "#0B1019" }}
        >
          <NavLink 
            to="/copilot" 
            style={({ isActive }) => ({
              ...navbarStyles.navLink,
              ...(isActive ? navbarStyles.activeNavLink : {}),
            })}
          >
            Co-Pilot <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/copilot" && <span style={navbarStyles.activeUnderline} />}
          </NavLink>
        </Dropdown>
      ),
    },
    {
      key: "/contact-us",
      label: (
        <NavLink 
          to="/contact-us" 
          style={({ isActive }) => ({
            ...navbarStyles.navLink,
            ...(isActive ? navbarStyles.activeNavLink : {}),
          })}
        >
          Contact Us
          {location.pathname === "/contact-us" && <span style={navbarStyles.activeUnderline} />}
        </NavLink>
      ),
    },
  ];

  // ─── MOBILE MENU ITEMS ───
  const mobileMenuItems = [
    { key: "/", label: <NavLink to="/" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Home</NavLink> },
    { key: "/about", label: <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>About</NavLink> },
    { key: "/research", label: <NavLink to="/research" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Research</NavLink> },
    { key: "/programs", label: <NavLink to="/programs" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Academics</NavLink> },
    { key: "/facilities", label: <NavLink to="/facilities" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Facilities</NavLink> },
    { key: "/digital-observatory", label: <NavLink to="/digital-observatory" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Digital Observatory</NavLink> },
    { key: "/capacity-building", label: <NavLink to="/capacity-building" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Capacity Building</NavLink> },
    { key: "/collaborations", label: <NavLink to="/collaborations" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Collaborations</NavLink> },
    { key: "/opportunities", label: <NavLink to="/opportunities" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Opportunities</NavLink> },
    { key: "/copilot", label: <NavLink to="/copilot" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Co-Pilot</NavLink> },
    { key: "/contact-us", label: <NavLink to="/contact-us" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Contact Us</NavLink> },
  ];

  // Add Admin link if user is admin
  if (isAdmin) {
    desktopMenuItems.push({
      key: "/admin",
      label: (
        <NavLink 
          to="/admin" 
          style={({ isActive }) => ({
            ...navbarStyles.navLink,
            ...(isActive ? navbarStyles.activeNavLink : {}),
          })}
        >
          Admin
          {location.pathname === "/admin" && <span style={navbarStyles.activeUnderline} />}
        </NavLink>
      ),
    });
    mobileMenuItems.push({
      key: "/admin",
      label: <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Admin</NavLink>,
    });
  }

  return (
    <Header style={navbarStyles.header}>
      <div style={navbarStyles.container}>
        {/* Logo - Keep original */}
        <Link to="/" style={navbarStyles.logoLink}>
          <img 
            src={gnssLogo} 
            alt="GNSS Logo" 
            style={navbarStyles.logoImage} 
          />
        </Link>

        {/* Desktop Menu - Figma UI */}
        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={desktopMenuItems}
            style={navbarStyles.desktopMenu}
          />
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#909BAD" }} />}
            onClick={() => setMobileMenuOpen(true)}
            style={navbarStyles.mobileMenuButton}
          />
        )}

        {/* Mobile Drawer - Dark theme */}
        <Drawer
          placement="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          closable={true}
          closeIcon={<CloseOutlined style={{ color: "#909BAD" }} />}
          width={280}
          styles={{
            body: {
              padding: 0,
              background: "#0B1019",
            },
            header: {
              borderBottom: "0.666667px solid #283243",
              padding: "16px 20px",
              background: "#0B1019",
            },
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
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
    background: "rgb(0, 0, 0)",
    backdropFilter: "blur(8px)",
    borderBottom: "0.666667px solid #01050d",
    height: "auto",
    minHeight: "80px",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    padding: "0",
    width: "100%",
    flexWrap: "wrap",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: "10px 15px",
    height: "auto",
    minHeight: "80px",
    borderRight: "0.5px solid rgb(0, 0, 0)",
    width: "auto",
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
    height: "90px",
    width: "auto",
    objectFit: "contain",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%",
    height: "auto",
    flex: 1,
    minHeight: "80px",
  },
  firstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.99)",
    padding: "4px 10px",
    minHeight: "30px",
  },
  labName: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    fontSize: "16px",
    lineHeight: "1.2",
    color: "#F3EFED",
    textAlign: "center",
  },
  secondRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    borderBottom: "0.5px solid rgb(0, 0, 0)",
    padding: "4px 10px",
    minHeight: "30px",
  },
  organizationName: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "1.2",
    color: "rgba(243, 239, 237, 0.8)",
    textAlign: "center",
  },
  thirdRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    padding: "4px 10px",
    minHeight: "50px",
  },
  desktopMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    flex: 1,
    gap: "0px",
    flexShrink: 1,
    minWidth: 0,
    overflow: "hidden",
  },
  mobileMenuButton: {
    fontSize: "20px",
    color: "#909BAD",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    marginLeft: "auto",
  },
  navLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "10px",
    color: "#fefefe",
    textDecoration: "none",
    padding: "15px 5px",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "1px",
    transition: "color 0.3s ease",
    flexShrink: 0,
    whiteSpace: "nowrap",
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
    padding: "15px 5px",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  activeUnderline: {
    position: "absolute",
    bottom: "10px", // FIXED: changed from 12px to 10px
    left: "5px",
    right: "5px",
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

// Desktop styles override (applied on larger screens)
const desktopStyles = {
  logoImage: {
    height: "105px",
    width: "auto",
    objectFit: "contain",
  },
  labName: {
    fontSize: "25px",
    lineHeight: "60px",
  },
  organizationName: {
    fontSize: "20px",
    lineHeight: "29px",
  },
  navLink: {
    padding: "27px 7px 25px",
    fontSize: "11px",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  activeNavLink: {
    padding: "27px 7px 25px",
    fontSize: "10px",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  activeUnderline: {
    bottom: "17px", // FIXED: changed from 19px to 17px
    left: "7px",
    right: "7px",
  },
  logoSection: {
    padding: "0 30px",
    minHeight: "150px",
    borderRight: "0.5px solid rgba(0, 0, 0, 0.97)",
  },
  firstRow: {
    padding: "0",
    paddingRight: "230px",
  },
  secondRow: {
    padding: "0",
    paddingRight: "230px",
  },
  thirdRow: {
    padding: "0",
    paddingRight: "90px",
  },
  desktopMenu: {
    flex: 1,
    flexShrink: 1,
    minWidth: 0,
    overflow: "hidden",
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

  // Get merged styles based on screen size
  const getStyles = () => {
    if (isMobile) {
      return navbarStyles;
    }
    // Merge desktop styles
    return {
      header: { ...navbarStyles.header, height: "150px", minHeight: "150px", flexWrap: "nowrap" },
      logoSection: { ...navbarStyles.logoSection, ...desktopStyles.logoSection },
      logoLink: navbarStyles.logoLink,
      logoImage: { ...navbarStyles.logoImage, ...desktopStyles.logoImage },
      container: { ...navbarStyles.container, minHeight: "150px" },
      firstRow: { ...navbarStyles.firstRow, ...desktopStyles.firstRow },
      labName: { ...navbarStyles.labName, ...desktopStyles.labName },
      secondRow: { ...navbarStyles.secondRow, ...desktopStyles.secondRow },
      organizationName: { ...navbarStyles.organizationName, ...desktopStyles.organizationName },
      thirdRow: { ...navbarStyles.thirdRow, ...desktopStyles.thirdRow },
      desktopMenu: { ...navbarStyles.desktopMenu, ...desktopStyles.desktopMenu },
      mobileMenuButton: navbarStyles.mobileMenuButton,
      navLink: { ...navbarStyles.navLink, ...desktopStyles.navLink },
      activeNavLink: { ...navbarStyles.activeNavLink, ...desktopStyles.activeNavLink },
      activeUnderline: { ...navbarStyles.activeUnderline, ...desktopStyles.activeUnderline },
      dropdownArrow: navbarStyles.dropdownArrow,
      dropdownOverlay: navbarStyles.dropdownOverlay,
      dropdownLink: navbarStyles.dropdownLink,
      mobileNavLink: navbarStyles.mobileNavLink,
    };
  };

  const styles = getStyles();

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
            ...styles.navLink,
            ...(isActive ? styles.activeNavLink : {}),
          })}
        >
          Home
          {location.pathname === "/" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            About <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/about" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Research <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/research" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Academics <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/programs" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Facilities <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/facilities" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Digital Observatory <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/digital-observatory" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Capacity Building <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/capacity-building" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Collaborations <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/collaborations" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Opportunities <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/opportunities" && <span style={styles.activeUnderline} />}
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
              ...styles.navLink,
              ...(isActive ? styles.activeNavLink : {}),
            })}
          >
            Co-Pilot <DownOutlined style={navbarStyles.dropdownArrow} />
            {location.pathname === "/copilot" && <span style={styles.activeUnderline} />}
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
            ...styles.navLink,
            ...(isActive ? styles.activeNavLink : {}),
          })}
        >
          Contact Us
          {location.pathname === "/contact-us" && <span style={styles.activeUnderline} />}
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
            ...styles.navLink,
            ...(isActive ? styles.activeNavLink : {}),
          })}
        >
          Admin
          {location.pathname === "/admin" && <span style={styles.activeUnderline} />}
        </NavLink>
      ),
    });
    mobileMenuItems.push({
      key: "/admin",
      label: <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} style={navbarStyles.mobileNavLink}>Admin</NavLink>,
    });
  }

  return (
    <Header style={styles.header}>
      {/* Logo Section - Spans all 3 rows */}
      <div style={styles.logoSection}>
        <Link to="/" style={styles.logoLink}>
          <img 
            src={gnssLogo} 
            alt="GNSS Logo" 
            style={styles.logoImage} 
          />
        </Link>
      </div>

      {/* Main Container - All text rows */}
      <div style={styles.container}>
        {/* First Row - GNSS Research Lab */}
        <div style={styles.firstRow}>
          <span style={styles.labName}>GNSS Research Lab</span>
        </div>

        {/* Second Row - NCGSA, IST, Islamabad */}
        <div style={styles.secondRow}>
          <span style={styles.organizationName}>NCGSA, Institute Of Space Technology, Islamabad</span>
        </div>

        {/* Third Row - Navigation Menu */}
        <div style={styles.thirdRow}>
          {/* Desktop Menu */}
          {!isMobile && (
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={desktopMenuItems}
              style={styles.desktopMenu}
            />
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: "#909BAD" }} />}
              onClick={() => setMobileMenuOpen(true)}
              style={styles.mobileMenuButton}
            />
          )}
        </div>
      </div>

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
    </Header>
  );
};

export default Navbar;
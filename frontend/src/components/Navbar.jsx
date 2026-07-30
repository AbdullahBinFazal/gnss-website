import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import gnssLogo from "../assets/GNSS-Logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [showInfrastructureDropdown, setShowInfrastructureDropdown] = useState(false);
  const [showResearchDropdown, setShowResearchDropdown] = useState(false);
  const [showEngagementDropdown, setShowEngagementDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const aboutSections = [
    { id: "our-mission", label: "Our Mission" },
    { id: "core-objectives", label: "Core Objectives" },
    { id: "team", label: "Team" },
    { id: "lab-leadership", label: "Lab Leadership & Faculty" },
    { id: "research-teams", label: "Research Teams" },
    { id: "alumni", label: "Alumni Network" },
  ];

  const programsSections = [
    { id: "academics", label: "Academics" },
    { id: "undergraduate", label: "Undergraduate & FYP Pathways" },
    { id: "academic-resources", label: "Academic Resources & Lab Facilities" },
    { id: "research-opportunities", label: "Research Opportunities" },
    { id: "gnss-academy", label: "GNSS Academy" },
    { id: "training-workshops", label: "Training Workshops" },
    { id: "tutorials", label: "Tutorials" },
  ];

  const infrastructureSections = [
    { id: "facilities", label: "Facilities" },
    { id: "digital-observatory", label: "Digital Observatory" },
    { id: "services", label: "Services" },
  ];

  const researchSections = [
    { id: "domains", label: "Domains" },
    { id: "research-detail", label: "PPP & RTK Algorithms" },
    { id: "ionospheric", label: "Ionospheric Modeling" },
    { id: "crustal-deformation", label: "Crustal Deformation" },
    { id: "impact", label: "Research Impact" },
    { id: "research-projects", label: "Research Projects" },
    { id: "publications", label: "Publications" },
  ];

  const engagementSections = [
    { id: "collaborations", label: "Collaborations" },
    { id: "agreements", label: "Agreements" },
    { id: "news-events", label: "News & Events" },
  ];

  // Handle hash navigation when page loads or hash changes
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

  const handleAboutDropdownClick = (sectionId) => {
    setShowAboutDropdown(false);
    navigate(`/about#${sectionId}`);
  };

  const handleProgramsDropdownClick = (sectionId) => {
    setShowProgramsDropdown(false);
    navigate(`/programs#${sectionId}`);
  };

  const handleInfrastructureDropdownClick = (sectionId) => {
    setShowInfrastructureDropdown(false);
    navigate(`/infrastructure#${sectionId}`);
  };

  const handleResearchDropdownClick = (sectionId) => {
    setShowResearchDropdown(false);
    navigate(`/research#${sectionId}`);
  };

  const handleEngagementDropdownClick = (sectionId) => {
    setShowEngagementDropdown(false);
    navigate(`/engagement#${sectionId}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo - Left Side */}
        <Link to="/" className="logo">
          <img src={gnssLogo} alt="GNSS Logo" />
          <span className="logo-text">
            GNSS<span>Lab</span>
          </span>
        </Link>

        {/* Nav Links - Right Side, Row 1 */}
        <ul className="nav-links nav-links-row1">
          <li><NavLink to="/">Home</NavLink></li>
          
          {/* About with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <NavLink to="/about">About</NavLink>
            {showAboutDropdown && (
              <ul className="dropdown-menu">
                {aboutSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/about#${section.id}`}
                      onClick={() => handleAboutDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          {/* Infrastructure with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowInfrastructureDropdown(true)}
            onMouseLeave={() => setShowInfrastructureDropdown(false)}
          >
            <NavLink to="/infrastructure">Infrastructure</NavLink>
            {showInfrastructureDropdown && (
              <ul className="dropdown-menu">
                {infrastructureSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/infrastructure#${section.id}`}
                      onClick={() => handleInfrastructureDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Research with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowResearchDropdown(true)}
            onMouseLeave={() => setShowResearchDropdown(false)}
          >
            <NavLink to="/research">Research</NavLink>
            {showResearchDropdown && (
              <ul className="dropdown-menu">
                {researchSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/research#${section.id}`}
                      onClick={() => handleResearchDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>       

          {/* Programs with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowProgramsDropdown(true)}
            onMouseLeave={() => setShowProgramsDropdown(false)}
          >
            <NavLink to="/programs">Academics</NavLink>
            {showProgramsDropdown && (
              <ul className="dropdown-menu">
                {programsSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/programs#${section.id}`}
                      onClick={() => handleProgramsDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Engagement with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowEngagementDropdown(true)}
            onMouseLeave={() => setShowEngagementDropdown(false)}
          >
            <NavLink to="/engagement">Engagement</NavLink>
            {showEngagementDropdown && (
              <ul className="dropdown-menu">
                {engagementSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/engagement#${section.id}`}
                      onClick={() => handleEngagementDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          
          <li><NavLink to="/copilot">Co-Pilot</NavLink></li>
        </ul>

        {/* Nav Links - Right Side, Row 2 */}
        <ul className="nav-links nav-links-row2">
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          {isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
        </ul>

        {/* Auth Buttons - Right Side, Row 3 */}
        <div className="auth-buttons">
          {isAuthenticated ? (
            <>
              <span>👋 {user?.name || "User"} {isAdmin && "👑"}</span>
              <button className="btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn-secondary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
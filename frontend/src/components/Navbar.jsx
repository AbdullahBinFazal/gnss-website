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
  const [showFacilitiesDropdown, setShowFacilitiesDropdown] = useState(false);
  const [showDigitalObservatoryDropdown, setShowDigitalObservatoryDropdown] = useState(false);
  const [showCapacityBuildingDropdown, setShowCapacityBuildingDropdown] = useState(false);
  const [showCollaborationsDropdown, setShowCollaborationsDropdown] = useState(false);
  const [showOpportunitiesDropdown, setShowOpportunitiesDropdown] = useState(false);
  const [showCoPilotDropdown, setShowCoPilotDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { id: "gnss-observatory", label: "GNSS Observatory" },
  ];

  const facilitiesSections = [
    { id: "sensor-equipment", label: "Sensor Equipment" },
    { id: "research-infrastructure", label: "Research Infrastructure" },
    { id: "laboratories", label: "Laboratories" },
  ];

  const digitalObservatorySections = [
    { id: "gnss-observatory", label: "GNSS Observatory" },
    { id: "space-weather", label: "Space Weather Observatory" },
  ];

  const capacityBuildingSections = [
    { id: "training-workshops", label: "Training & Workshops" },
    { id: "tutorials", label: "Tutorials & Documentation" },
  ];

  const collaborationsSections = [
    { id: "agreements", label: "Agreements" },
    { id: "outreach", label: "Outreach" },
  ];

  const opportunitiesSections = [
    { id: "engagement", label: "Engagement" },
    { id: "research-opportunities", label: "Research Opportunities" },
  ];

  const coPilotSections = [
    { id: "copilot-assistance", label: "Co-Pilot Assistance" },
    { id: "software-configuration", label: "Software Configuration" },
    { id: "data-hub-navigation", label: "Data Hub Navigation" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleAboutDropdownClick = (sectionId) => {
    setShowAboutDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/about#${sectionId}`);
  };

  const handleProgramsDropdownClick = (sectionId) => {
    setShowProgramsDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/programs#${sectionId}`);
  };

  const handleInfrastructureDropdownClick = (sectionId) => {
    setShowInfrastructureDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/infrastructure#${sectionId}`);
  };

  const handleResearchDropdownClick = (sectionId) => {
    setShowResearchDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/research#${sectionId}`);
  };

  const handleEngagementDropdownClick = (sectionId) => {
    setShowEngagementDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/engagement#${sectionId}`);
  };

  const handleFacilitiesDropdownClick = (sectionId) => {
    setShowFacilitiesDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/facilities#${sectionId}`);
  };

  const handleDigitalObservatoryDropdownClick = (sectionId) => {
    setShowDigitalObservatoryDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/digital-observatory#${sectionId}`);
  };

  const handleCapacityBuildingDropdownClick = (sectionId) => {
    setShowCapacityBuildingDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/capacity-building#${sectionId}`);
  };

  const handleCollaborationsDropdownClick = (sectionId) => {
    setShowCollaborationsDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/collaborations#${sectionId}`);
  };

  const handleOpportunitiesDropdownClick = (sectionId) => {
    setShowOpportunitiesDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/opportunities#${sectionId}`);
  };

  const handleCoPilotDropdownClick = (sectionId) => {
    setShowCoPilotDropdown(false);
    setMobileMenuOpen(false);
    navigate(`/copilot#${sectionId}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo - Left Side */}
        <Link to="/" className="logo">
          <img src={gnssLogo} alt="GNSS Logo" />
          <span className="logo-text">
            {/* GNSS<span>Lab</span> */}
          </span>
        </Link>

        {/* Mobile Hamburger Menu */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? "hamburger active" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Nav Links - Single Centered Row */}
        <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
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
            {/* <NavLink to="/infrastructure">Infrastructure</NavLink> */}
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

          {/* Programs/Academics with Dropdown */}
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
            {/* <NavLink to="/engagement">Engagement</NavLink> */}
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

          {/* Facilities with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowFacilitiesDropdown(true)}
            onMouseLeave={() => setShowFacilitiesDropdown(false)}
          >
            <NavLink to="/facilities">Facilities</NavLink>
            {showFacilitiesDropdown && (
              <ul className="dropdown-menu">
                {facilitiesSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/facilities#${section.id}`}
                      onClick={() => handleFacilitiesDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Digital Observatory with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowDigitalObservatoryDropdown(true)}
            onMouseLeave={() => setShowDigitalObservatoryDropdown(false)}
          >
            <NavLink to="/digital-observatory">Digital Observatory</NavLink>
            {showDigitalObservatoryDropdown && (
              <ul className="dropdown-menu">
                {digitalObservatorySections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/digital-observatory#${section.id}`}
                      onClick={() => handleDigitalObservatoryDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Capacity Building with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowCapacityBuildingDropdown(true)}
            onMouseLeave={() => setShowCapacityBuildingDropdown(false)}
          >
            <NavLink to="/capacity-building">Capacity Building</NavLink>
            {showCapacityBuildingDropdown && (
              <ul className="dropdown-menu">
                {capacityBuildingSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/capacity-building#${section.id}`}
                      onClick={() => handleCapacityBuildingDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Collaborations with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowCollaborationsDropdown(true)}
            onMouseLeave={() => setShowCollaborationsDropdown(false)}
          >
            <NavLink to="/collaborations">Collaborations</NavLink>
            {showCollaborationsDropdown && (
              <ul className="dropdown-menu">
                {collaborationsSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/collaborations#${section.id}`}
                      onClick={() => handleCollaborationsDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Opportunities with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowOpportunitiesDropdown(true)}
            onMouseLeave={() => setShowOpportunitiesDropdown(false)}
          >
            <NavLink to="/opportunities">Opportunities</NavLink>
            {showOpportunitiesDropdown && (
              <ul className="dropdown-menu">
                {opportunitiesSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/opportunities#${section.id}`}
                      onClick={() => handleOpportunitiesDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Co-Pilot with Dropdown */}
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setShowCoPilotDropdown(true)}
            onMouseLeave={() => setShowCoPilotDropdown(false)}
          >
            <NavLink to="/copilot">Co-Pilot</NavLink>
            {showCoPilotDropdown && (
              <ul className="dropdown-menu">
                {coPilotSections.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/copilot#${section.id}`}
                      onClick={() => handleCoPilotDropdownClick(section.id)}
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          {isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
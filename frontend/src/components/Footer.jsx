import { Link } from "react-router-dom";
import gnssLogo from "../assets/GNSS-Logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="brand">
            <Link to="/" className="logo">
              <img src={gnssLogo} alt="GNSS Logo" className="footer-brand-logo" />
            </Link>
            <p className="brand-text">
              Institute Of Space Technology, Islamabad.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About GNSS</Link></li>
              <li><Link to="/programs">Program Info</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
               <li><Link to="/resources">Resources</Link></li> 
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>📍 Islamabad, Pakistan</li>
              <li>📧 info@ist.edu.pk</li>
              <li>📞 +92-51-1234567</li>
            </ul>
          </div>
        </div>

        {/* Logos Row - 4 Logos */}
        <div className="logos-row">
          <div className="logo-item">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvuP7gdReb_phPd0U2uFbOieNlh_wdNSpH2zFJPyO68c9oKAUNt-TNjs&s=10" 
              alt="GNSS Logo"
              className="footer-logo"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://ncgsa.org.pk/wp-content/uploads/2026/01/MINISTRY-OF-PLANNING-COMMISION-150x150.png" 
              alt="Ministry of Planning & Commission"
              className="footer-logo"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://ncgsa.org.pk/wp-content/uploads/2020/09/hec.png" 
              alt="HEC Logo"
              className="footer-logo"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://ncgsa.org.pk/wp-content/uploads/2026/01/IST-LOGO-1-200x115-1-1-1.png" 
              alt="IST Logo"
              className="footer-logo"
            />
          </div>
        </div>

        <div className="bottom">
          © {new Date().getFullYear()} NCGSA - IST Islamabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
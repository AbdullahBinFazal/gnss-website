import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="brand">
            <Link to="/" className="logo">
              <span>🛰️</span>
              <span className="gradient-text">GNSS (NCGSA) </span>
            </Link>
            <p>
              National Center of GIS & Space Applications<br />
              Institute of Space Technology, Islamabad
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About GNSS</Link></li>
              <li><Link to="/program">Program Info</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/research">Research</Link></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Student Resources</Link></li>
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

        <div className="bottom">
          © {new Date().getFullYear()} NCGSA - IST Islamabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
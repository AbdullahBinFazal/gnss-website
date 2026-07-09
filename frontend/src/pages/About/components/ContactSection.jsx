import { Link } from "react-router-dom";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className="section-contact" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className={styles.grid}>
          {/* Address */}
          <div className={styles.contactCard}>
            <h3 className={styles.cardTitle}><span>📍</span> Address</h3>
            <p className={styles.cardContent}>
              <strong>Institute of Space Technology</strong><br />
              An ISO 9001:2015 Certified Institute.<br />
              1, Islamabad Expressway, Islamabad<br />
              G59H+P2 Islamabad.
            </p>
          </div>

          {/* Contact Us */}
          <div className={styles.contactCard}>
            <h3 className={styles.cardTitle}><span>📞</span> Contact Us</h3>
            <p className={styles.cardContent}>
              <strong>Phone:</strong> +92-51-9075100<br />
              <strong>Phone:</strong> +92-51-9273310<br />
              <strong>Email:</strong> info@ist.edu.pk
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.contactCard}>
            <h3 className={styles.cardTitle}><span>🔗</span> Quick Links</h3>
            <ul className={styles.quickLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/publications">Publications</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
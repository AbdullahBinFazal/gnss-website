import HeroSection from "./components/HeroSection";
import PhysicalAddressSection from "./components/PhysicalAddressSection";
import EmailContactsSection from "./components/EmailContactsSection";
import VisitUsSection from "./components/VisitUsSection";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <HeroSection />
      <PhysicalAddressSection />
      <EmailContactsSection />
      <VisitUsSection />
    </div>
  );
};

export default ContactUs;
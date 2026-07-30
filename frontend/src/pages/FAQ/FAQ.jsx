import HeroSection from "./components/HeroSection";
import FAQAccordion from "./components/FAQAccordion";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <HeroSection />
      <FAQAccordion />
    </div>
  );
};

export default FAQ;
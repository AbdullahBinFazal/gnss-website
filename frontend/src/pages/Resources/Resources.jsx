import HeroSection from "./components/HeroSection";
import ResourceCentreSection from "./components/ResourceCentreSection"; 
import ResourceHubSection from "./components/ResourceHubSection";
import styles from "./Resources.module.css";

const Resources = () => {
  return (
    <div className={styles.resources}>
      <HeroSection />
           <ResourceCentreSection /> 
                 <ResourceHubSection />
    </div>
  );
};

export default Resources;
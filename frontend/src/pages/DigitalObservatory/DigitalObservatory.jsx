import HeroSection from "./components/HeroSection";
import ObservatoryOverviewSection from "./components/ObservatoryOverviewSection";
import GNSSObservatoryCarousel from "./components/GNSSObservatoryCarousel";
import SpaceWeatherObservatorySection from "./components/SpaceWeatherObservatorySection";
import styles from "./DigitalObservatory.module.css";

const DigitalObservatory = () => {
  return (
    <div className={styles.digitalObservatory}>
      <HeroSection />
      
      <div id="gnss-observatory">
        <ObservatoryOverviewSection />
      </div>

       <div id="gnss-observatory-cards">
        <GNSSObservatoryCarousel />
      </div>
      
      <div id="space-weather">
        <SpaceWeatherObservatorySection />
      </div>
    </div>
  );
};

export default DigitalObservatory;
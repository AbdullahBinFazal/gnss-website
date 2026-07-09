import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../store/authSlice";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ResearchAreasSection from "./components/ResearchAreasSection";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <HeroSection />
      <StatsSection />
      <ResearchAreasSection />
    </div>
  );
};

export default Home;
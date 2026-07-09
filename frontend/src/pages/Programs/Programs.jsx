import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ProgramTabs from "./components/ProgramTabs";
import MSProgram from "./components/MSProgram";
import PhDProgram from "./components/PhDProgram";
import GNSSLabSection from "./components/GNSSLabSection";
import styles from "./Programs.module.css";
import { useState } from "react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("ms");

  return (
    <div className={styles.programs}>
      <HeroSection />
      <StatsSection />
      <ProgramTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "ms" ? <MSProgram /> : <PhDProgram />}
      <GNSSLabSection />
    </div>
  );
};

export default Programs;
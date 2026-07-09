import { useState } from "react";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FilterSection from "./components/FilterSection";
import PublicationsList from "./components/PublicationsList";
import styles from "./Publications.module.css";

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.publications}>
      <HeroSection />
      <StatsSection />
      <FilterSection 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <PublicationsList activeFilter={activeFilter} searchTerm={searchTerm} />
    </div>
  );
};

export default Publications;
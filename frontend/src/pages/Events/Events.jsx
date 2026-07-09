import { useState } from "react";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FilterSection from "./components/FilterSection";
import EventsList from "./components/EventsList";
import styles from "./Events.module.css";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.events}>
      <HeroSection />
      <StatsSection />
      <FilterSection 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <EventsList activeFilter={activeFilter} searchTerm={searchTerm} />
    </div>
  );
};

export default Events;
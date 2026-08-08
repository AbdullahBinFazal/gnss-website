// src/pages/Collaborations/Collaborations.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";

const Collaborations = () => {
  return (
    <div>
      <Comp1 />
      
      {/* Comp2 - NOT in dropdown */}
      <div id="academic-partners" style={{ scrollMarginTop: "130px" }}>
        <Comp2 />
      </div>

      {/* Objectives - Comp3 (IN DROPDOWN) */}
      <div id="objectives-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      {/* Institutions - Comp4 (IN DROPDOWN) */}
      <div id="institutions-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
      
      {/* Engagement - Comp5 (IN DROPDOWN) */}
      <div id="engagement-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>
    </div>
  );
};

export default Collaborations;
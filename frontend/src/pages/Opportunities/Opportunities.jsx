// src/pages/Opportunities/Opportunities.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";

const Opportunities = () => {
  return (
    <div>
      <Comp1 />
      
      {/* Graduate Research - Comp2 (IN DROPDOWN) */}
      <div id="research-opportunities" style={{ scrollMarginTop: "130px" }}>
        <Comp2 />
      </div>

      {/* Internships - Comp3 (IN DROPDOWN) */}
      <div id="internships-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
    </div>
  );
};

export default Opportunities;
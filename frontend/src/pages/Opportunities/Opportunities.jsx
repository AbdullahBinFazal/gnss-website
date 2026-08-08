// src/pages/Opportunities/Opportunities.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";

const Opportunities = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />

      {/* Comp3 - NOT in dropdown (Research Opportunities) */}
      <div id="research-opportunities" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>

  {/* Projects - Comp5 (IN DROPDOWN) */}
      <div id="projects-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>


{/* Internships - Comp6 (IN DROPDOWN) */}
      <div id="internships-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>


  {/* AssistantShips - Comp7 (IN DROPDOWN) */}

<div id="assistantships-section" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>


      <div >
        <Comp7 />
      </div>
      
      <Comp8 />
      
      {/* Collaborations - Comp9 (IN DROPDOWN) */}
      <div id="collaborations-section" style={{ scrollMarginTop: "130px" }}>
        <Comp9 />
      </div>
    </div>
  );
};

export default Opportunities;
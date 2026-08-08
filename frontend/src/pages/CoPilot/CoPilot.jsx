// src/pages/CoPilot/CoPilot.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";

const CoPilot = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      
      {/* Comp3 - NOT in dropdown */}
      <div id="copilot-assistance" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>


  {/* It Explains - Comp5 (IN DROPDOWN) */}
      <div id="explains-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>


      <div >
        <Comp5 />
      </div>
      
      {/* It Guides - Comp6 (IN DROPDOWN) */}
      <div id="guides-section" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
      
      <Comp7 />
      
      {/* It Suggests - Comp8 (IN DROPDOWN) */}
      <div id="suggests-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>

      <Comp9 />
    </div>
  );
};

export default CoPilot;
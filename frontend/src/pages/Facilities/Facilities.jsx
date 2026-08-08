// src/pages/Facilities/Facilities.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const Facilities = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      
      {/* Ecosystem - Comp3 (IN DROPDOWN) */}
      <div id="ecosystem-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      {/* Environment - Comp4 (IN DROPDOWN) */}
      <div id="environment-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
      
      <Comp5 />
      
      {/* Receivers - Comp6 (IN DROPDOWN) */}
      <div id="receivers-section" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
      
      <Comp7 />
      
      {/* Equipments - Comp8 (IN DROPDOWN) */}
      <div id="equipments-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
    </div>
  );
};

export default Facilities;
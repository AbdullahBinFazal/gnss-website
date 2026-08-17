// src/pages/Facilities/Facilities.jsx
import Comp1 from "./components/Comp1";
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
      
      {/* Antennas - Comp3 (IN DROPDOWN) */}
      <div id="ecosystem-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      {/* Softwares - Comp4 (NOT IN DROPDOWN) */}
      <div style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
      
      {/* GNSS Station - Comp5 (IN DROPDOWN) */}
      <div id="gnss-station-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>
      
      {/* Receivers - Comp6 (IN DROPDOWN) */}
      <div id="receivers-section" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
      
      {/* Comp7 (NOT IN DROPDOWN) */}
      <div style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>
      
      {/* Workstations - Comp8 (IN DROPDOWN) */}
      <div id="equipments-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
    </div>
  );
};

export default Facilities;
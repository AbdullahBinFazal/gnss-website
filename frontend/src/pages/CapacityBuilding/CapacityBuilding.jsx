// src/pages/CapacityBuilding/CapacityBuilding.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";

const CapacityBuilding = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      
      {/* GNSS School - Comp3 (IN DROPDOWN) */}
      <div id="gnss-school-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>

      <Comp4 /> 
      <Comp5 />
      <Comp6 />
      
      {/* Conferences - Comp7 (IN DROPDOWN) */}
      <div id="conferences-section" style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>
      
      {/* Workshops - Comp8 (IN DROPDOWN) */}
      <div id="workshops-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
      
      {/* Seminars - Comp9 (IN DROPDOWN) */}
      <div id="seminars-section" style={{ scrollMarginTop: "130px" }}>
        <Comp9 />
      </div>
    </div>
  );
};

export default CapacityBuilding;